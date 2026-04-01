---
module: services.caddy.virtualHosts.<name>
option_count: 6
source: options.html
---

# services.caddy.virtualHosts.<name>

## services.caddy.virtualHosts.<name>.extraConfig

Additional lines of configuration appended to this virtual host in the automatically generated Caddyfile. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-servers/caddy/default.nix>

## services.caddy.virtualHosts.<name>.hostName

Canonical hostname for the server. Type: string Default: "‹name›" Declared by: <nixpkgs/nixos/modules/services/web-servers/caddy/default.nix>

## services.caddy.virtualHosts.<name>.listenAddresses

A list of host interfaces to bind to for this virtual host. Type: list of string Default: [ ] Example: [ "127.0.0.1" "::1" ] Declared by: <nixpkgs/nixos/modules/services/web-servers/caddy/default.nix>

## services.caddy.virtualHosts.<name>.logFormat

Configuration for HTTP request logging (also known as access logs). See https://caddyserver.com/docs/caddyfile/directives/log#log for details. Type: null or strings concatenated with “\n” Default: '' output file ''${config.services.caddy.logDir}/access-''${hostName}.log '' Example: mkForce '' output discard ''; Declared by: <nixpkgs/nixos/modules/services/web-servers/caddy/default.nix>

## services.caddy.virtualHosts.<name>.serverAliases

Additional names of virtual hosts served by this virtual host configuration. Type: list of string Default: [ ] Example: [ "www.example.org" "example.org" ] Declared by: <nixpkgs/nixos/modules/services/web-servers/caddy/default.nix>

## services.caddy.virtualHosts.<name>.useACMEHost

A host of an existing Let’s Encrypt certificate to use. This is mostly useful if you use DNS challenges but Caddy does not currently support your provider. Note that this option does not create any certificates, nor does it add subdomains to existing ones – you will need to create them manually using security.acme.certs. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/caddy/default.nix>
