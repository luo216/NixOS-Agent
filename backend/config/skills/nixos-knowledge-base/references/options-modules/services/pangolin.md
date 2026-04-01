---
module: services.pangolin
option_count: 10
source: options.html
---

# services.pangolin

## services.pangolin.enable

Whether to enable Pangolin reverse proxy server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/pangolin.nix>

## services.pangolin.package

The fosrl-pangolin package to use. Type: package Default: pkgs.fosrl-pangolin Declared by: <nixpkgs/nixos/modules/services/networking/pangolin.nix>

## services.pangolin.baseDomain

Your base fully qualified domain name (without any subdomains). Type: null or string Default: null Example: "example.com" Declared by: <nixpkgs/nixos/modules/services/networking/pangolin.nix>

## services.pangolin.dashboardDomain

The domain where the application will be hosted. This is used for many things, including generating links. You can run Pangolin on a subdomain or root domain. Do not prefix with http or https. Type: string Default: "pangolin.\${config.services.pangolin.baseDomain}" Example: "auth.example.com" Declared by: <nixpkgs/nixos/modules/services/networking/pangolin.nix>

## services.pangolin.dataDir

Path to variable state data directory for Pangolin. Type: string Default: "/var/lib/pangolin" Example: "/srv/pangolin" Declared by: <nixpkgs/nixos/modules/services/networking/pangolin.nix>

## services.pangolin.dnsProvider

The DNS provider Traefik will request wildcard certificates from. See the Traefik Documentation for more information. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/pangolin.nix>

## services.pangolin.environmentFile

Path to a file containing sensitive environment variables for Pangolin. See the Pangolin Documentation for more information. These will overwrite anything defined in the config. The file should contain environment-variable assignments like: SERVER_SECRET=1234567890abc Type: null or absolute path Default: null Example: "/etc/nixos/secrets/pangolin.env" Declared by: <nixpkgs/nixos/modules/services/networking/pangolin.nix>

## services.pangolin.letsEncryptEmail

An email address for SSL certificate registration with Let’s Encrypt. This should be an email you have access to. Type: null or string Default: config.security.acme.defaults.email Declared by: <nixpkgs/nixos/modules/services/networking/pangolin.nix>

## services.pangolin.openFirewall

Whether to enable opening TCP ports 80 and 443, and UDP port 51820 in the firewall for the Pangolin service(s). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/pangolin.nix>

## services.pangolin.settings

Additional attributes to be merged with the configuration options and written to Pangolin’s config.yml file. Type: YAML 1.1 value Default: { } Example: { app = { save_logs = true; }; domains = { domain1 = { prefer_wildcard_cert = true; }; }; server = { external_port = 3007; internal_port = 3008; }; } Declared by: <nixpkgs/nixos/modules/services/networking/pangolin.nix>
