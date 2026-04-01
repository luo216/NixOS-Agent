---
module: services.traefik
option_count: 9
source: options.html
---

# services.traefik

## services.traefik.enable

Whether to enable Traefik web server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/traefik.nix>

## services.traefik.package

The traefik package to use. Type: package Default: pkgs.traefik Declared by: <nixpkgs/nixos/modules/services/web-servers/traefik.nix>

## services.traefik.dataDir

Location for any persistent data traefik creates, ie. acme Type: absolute path Default: "/var/lib/traefik" Declared by: <nixpkgs/nixos/modules/services/web-servers/traefik.nix>

## services.traefik.dynamicConfigFile

Path to traefik’s dynamic configuration to use. (Using that option has precedence over dynamicConfigOptions) Type: null or absolute path Default: null Example: /path/to/dynamic_config.toml Declared by: <nixpkgs/nixos/modules/services/web-servers/traefik.nix>

## services.traefik.dynamicConfigOptions

Dynamic configuration for Traefik. Type: TOML value Default: { } Example: { http = { routers = { router1 = { rule = "Host(`localhost`)"; service = "service1"; }; }; services = { service1 = { loadBalancer = { servers = [ { url = "http://localhost:8080"; } ]; }; }; }; }; } Declared by: <nixpkgs/nixos/modules/services/web-servers/traefik.nix>

## services.traefik.environmentFiles

Files to load as environment file. Environment variables from this file will be substituted into the static configuration file using envsubst. Type: list of absolute path Default: [ ] Example: [ "/run/secrets/traefik.env" ] Declared by: <nixpkgs/nixos/modules/services/web-servers/traefik.nix>

## services.traefik.group

Set the group that traefik runs under. For the docker backend this needs to be set to docker instead. Type: string Default: "traefik" Example: "docker" Declared by: <nixpkgs/nixos/modules/services/web-servers/traefik.nix>

## services.traefik.staticConfigFile

Path to traefik’s static configuration to use. (Using that option has precedence over staticConfigOptions and dynamicConfigOptions) Type: null or absolute path Default: null Example: /path/to/static_config.toml Declared by: <nixpkgs/nixos/modules/services/web-servers/traefik.nix>

## services.traefik.staticConfigOptions

Static configuration for Traefik. Type: TOML value Default: { entryPoints = { http = { address = ":80"; }; }; } Example: { api = { }; entryPoints = { http = { address = ":80"; }; web = { address = ":8080"; }; }; } Declared by: <nixpkgs/nixos/modules/services/web-servers/traefik.nix>
