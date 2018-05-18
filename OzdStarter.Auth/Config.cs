using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Test;
using System.Collections.Generic;
using System.Security.Claims;

namespace OzdStarter.Auth
{
    public class Config
    {
        // scopes define the resources in your system
        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResources.Email(),
            };
        }

        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource("OzdStarter.WebApi", "OzdStarter.WebApi")
            };
        }

        // clients want to access resources (aka scopes)
        public static IEnumerable<Client> GetClients()
        {
            // client credentials client
            return new List<Client>
            {

                // OpenID Connect implicit flow client (MVC)
                new Client
                {
                    ClientId = "OzdStarter.Client",
                    ClientName = "OzdStarter.Client",
                    AllowedGrantTypes = GrantTypes.Implicit,

                    RedirectUris = {
                            "http://localhost:4200/signin-callback.html",
                            "http://localhost:4200/",
                            "http://localhost:4200/silent-renew.html",
                            "http://localhost:4200/user-manager-sample.html",
                            "http://localhost:4200/user-manager-sample-silent.html"
                    },
                    PostLogoutRedirectUris = {
                            "http://localhost:4200/"
                    },

                    AllowAccessTokensViaBrowser = true,
                    AccessTokenLifetime = 120,

                    AllowedCorsOrigins = {
                            "http://localhost:4200"
                    },

                    AllowedScopes =
                    {
                            IdentityServerConstants.StandardScopes.OpenId,
                            IdentityServerConstants.StandardScopes.Profile,
                            IdentityServerConstants.StandardScopes.Email,
                            "OzdStarter.WebApi"
                    },
                    RequireConsent = false,
                },


                    // OpenID Connect implicit flow client (MVC)
                new Client
                {
                    ClientId = "mvc",
                    ClientName = "MVC Client",
                    AllowedGrantTypes = GrantTypes.Implicit,

                    RedirectUris = {
                        "http://localhost:4200/signin-callback.html",
                        "http://localhost:4200/",
                        "http://localhost:4200/silent-renew.html",
                        "http://localhost:4200/user-manager-sample.html",
                        "http://localhost:4200/user-manager-sample-silent.html"
                    },
                    PostLogoutRedirectUris = {
                        "http://localhost:4200/"
                    },

                    AllowAccessTokensViaBrowser = true,
                    AccessTokenLifetime = 90,

                    AllowedCorsOrigins = {
                        "http://localhost:4200"
                    },

                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "api1"
                    }
                }
            };
        }

        public static List<TestUser> GetUsers()
        {
            return new List<TestUser>
            {
                new TestUser
                {
                    SubjectId = "1",
                    Username = "ozdalice",
                    Password = "ozdPass1!",

                    Claims = new List<Claim>
                    {
                        new Claim("name", "Alice"),
                        new Claim("website", "https://alice.com"),
                        new Claim("email", "ozdalice@mailinator.com"),
                    }
                },
                new TestUser
                {
                    SubjectId = "2",
                    Username = "ozdbob",
                    Password = "password",

                    Claims = new List<Claim>
                    {
                        new Claim("name", "Bob"),
                        new Claim("website", "https://bob.com"),
                        new Claim("email", "ozdbob@mailinator.com"),

                    }
                }
            };
        }
    }
}

