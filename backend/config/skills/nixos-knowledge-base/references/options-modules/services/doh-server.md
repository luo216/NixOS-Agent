---
module: services.doh-server
option_count: 5
source: options.html
---

# services.doh-server

## services.doh-server.enable

Whether to enable DNS-over-HTTPS server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/doh-server.nix>

## services.doh-server.package

The dns-over-https package to use. Type: package Default: pkgs.dns-over-https Declared by: <nixpkgs/nixos/modules/services/networking/doh-server.nix>

## services.doh-server.configFile

The config file for the doh-server. Setting this option will override any configuration applied by the settings option. Type: absolute path Example: "/path/to/doh-server.conf" Declared by: <nixpkgs/nixos/modules/services/networking/doh-server.nix>

## services.doh-server.settings

Configuration of doh-server in toml. See example in https://github.com/m13253/dns-over-https/blob/master/doh-server/doh-server.conf Type: open submodule of (TOML value) Default: { } Example: { listen = [ ":8153" ]; upstream = [ "udp:127.0.0.1:53" ]; } Declared by: <nixpkgs/nixos/modules/services/networking/doh-server.nix>

## services.doh-server.useACMEHost

A host of an existing Let’s Encrypt certificate to use. Note that this option does not create any certificates, nor it does add subdomains to existing ones – you will need to create them manually using security.acme.certs. Type: null or string Default: null Example: "doh.example.com" Declared by: <nixpkgs/nixos/modules/services/networking/doh-server.nix>
