using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using OzdStarter.Auth.Data;
using OzdStarter.Auth.Models;
using OzdStarter.Auth.Services;
using System.Reflection;
using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Mappers;

namespace OzdStarter.Auth
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.Configure<VendorServicesKeys>(options => Configuration.GetSection("VendorServicesKeys").Bind(options));
            services.Configure<SQLConnectionStrings>(options => Configuration.GetSection("ConnectionStrings").Bind(options));
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("AWSSQLDevConnection")));

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            // Add application services.
            services.AddTransient<IEmailSender, EmailSender>();

            services.AddMvc();

            //configure Identity Server
            var migrationsAssembly = typeof(Startup).GetTypeInfo().Assembly.GetName().Name;
            // this adds the config data from DB (clients, resources)
            services.AddIdentityServer()
                .AddDeveloperSigningCredential()
                .AddTestUsers(Config.GetUsers())
                .AddInMemoryClients(Config.GetClients())
                .AddConfigurationStore(options =>
                {
                    options.ConfigureDbContext = builder =>
                        builder.UseSqlServer(
                            Configuration.GetConnectionString("AWSSQLDevConnection"),
                            sql => sql.MigrationsAssembly(migrationsAssembly)
                        );
                })
                // this adds the operational data from DB (codes, tokens, consents)
                .AddOperationalStore(options =>
                {
                    options.ConfigureDbContext = builder =>
                        builder.UseSqlServer(
                            Configuration.GetConnectionString("AWSSQLDevConnection"),
                            sql => sql.MigrationsAssembly(migrationsAssembly)
                        );
                    options.EnableTokenCleanup = true;
                    options.TokenCleanupInterval = 300;
                })
                .AddAspNetIdentity<ApplicationUser>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
#warning remove this after initializing sql db
            InitializeDatabase(app);
            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }
#warning switch to controller-level CORS before production
            app.UseCors(builder => builder.WithOrigins("http://localhost:5002", "http://localhost:5001", "http://localhost:4200"));

            app.UseStaticFiles();

            //app.UseAuthentication(); redundant to UseIdentity Server
            app.UseIdentityServer();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }

        private void InitializeDatabase(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                serviceScope.ServiceProvider.GetRequiredService<PersistedGrantDbContext>().Database.Migrate();
                var context = serviceScope.ServiceProvider.GetRequiredService<ConfigurationDbContext>();
                context.Database.Migrate();
                if (!context.Clients.Any())
                {
                    foreach (var client in Config.GetClients())
                    {
                        context.Clients.Add(client.ToEntity());
                    }
                    context.SaveChanges();
                }
                if (!context.ApiResources.Any())
                {
                    foreach (var resource in Config.GetApiResources())
                    {
                        context.ApiResources.Add(resource.ToEntity());
                    }
                    context.SaveChanges();
                }
            }
        }
    }
}
