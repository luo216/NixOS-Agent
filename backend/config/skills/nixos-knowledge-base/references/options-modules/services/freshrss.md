---
module: services.freshrss
option_count: 13
source: options.html
---

# services.freshrss

## services.freshrss.enable

Whether to enable FreshRSS RSS aggregator and reader with php-fpm backend. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>

## services.freshrss.package

The freshrss package to use. Type: package Default: pkgs.freshrss Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>

## services.freshrss.authType

Authentication type for FreshRSS. Type: one of “form”, “http_auth”, “none” Default: "form" Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>

## services.freshrss.baseUrl

Default URL for FreshRSS. Type: string Example: "https://freshrss.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>

## services.freshrss.dataDir

Default data folder for FreshRSS. Type: string Default: "/var/lib/freshrss" Example: "/mnt/freshrss" Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>

## services.freshrss.defaultUser

Default username for FreshRSS. Type: string Default: "admin" Example: "eva" Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>

## services.freshrss.extensions

Additional extensions to be used. Type: list of package Default: [] Example: with freshrss-extensions; [ youtube ] ++ [ (freshrss-extensions.buildFreshRssExtension { FreshRssExtUniqueId = "ReadingTime"; pname = "reading-time"; version = "1.5"; src = pkgs.fetchFromGitLab { domain = "framagit.org"; owner = "Lapineige"; repo = "FreshRSS_Extension-ReadingTime"; rev = "fb6e9e944ef6c5299fa56ffddbe04c41e5a34ebf"; hash = "sha256-C5cRfaphx4Qz2xg2z+v5qRji8WVSIpvzMbethTdSqsk="; }; }) ] Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>

## services.freshrss.language

Default language for FreshRSS. Type: string Default: "en" Example: "de" Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>

## services.freshrss.passwordFile

Password for the defaultUser for FreshRSS. Type: null or absolute path Default: null Example: "/run/secrets/freshrss" Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>

## services.freshrss.pool

Name of the php-fpm pool to use and setup. If not specified, a pool will be created with default values. Type: null or string Default: "freshrss" Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>

## services.freshrss.user

User under which FreshRSS runs. Type: string Default: "freshrss" Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>

## services.freshrss.virtualHost

Name of the caddy/nginx virtualhost to use and setup. Type: string Default: "freshrss" Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>

## services.freshrss.webserver

Whether to use nginx or caddy for virtual host management. Further nginx configuration can be done by adapting services.nginx.virtualHosts.<name>. See services.nginx.virtualHosts for further information. Further caddy configuration can be done by adapting services.caddy.virtualHosts.<name>. See services.caddy.virtualHosts for further information. Type: one of “nginx”, “caddy” Default: "nginx" Declared by: <nixpkgs/nixos/modules/services/web-apps/freshrss.nix>
