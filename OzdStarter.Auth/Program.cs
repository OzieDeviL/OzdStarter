using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace OzdStarter.Auth
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost
                .CreateDefaultBuilder(args)
                .ConfigureAppConfiguration((WebHostBuilderContext context, IConfigurationBuilder builder) =>
                {
                    if (context.HostingEnvironment.EnvironmentName == "Development")
                    {
                        //shared
                        if (File.Exists("./OzdStarterDevSecrets.json"))
                        {
                            builder.AddJsonFile("./OzdStarterDevSecrets.json");
                        }
                        //local
                        else
                        {
                            builder.AddUserSecrets<Startup>();
                        }
                    }
                    if (context.HostingEnvironment.EnvironmentName == "Production")
                    {
                        //Environment.SetEnvironmentVariable("secretsPath", @"C:\LocalAppDeployments\Artifex\ArtifexProdSite\artifexReleaseSecrets.json");
                        //string secretsPath = Environment.GetEnvironmentVariable("secretsPath");
                        builder.AddJsonFile("./OzdStarterProductionSecrets.json");
                    }
                })
                .UseStartup<Startup>()
                .Build();
    }
}
