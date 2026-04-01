---
module: services.portunus
option_count: 9
source: options.html
---

# services.portunus

## services.portunus.enable

Whether to enable Portunus, a self-contained user/group management and authentication service for LDAP. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/portunus.nix>

## services.portunus.package

The portunus package to use. Type: package Default: pkgs.portunus Declared by: <nixpkgs/nixos/modules/services/misc/portunus.nix>

## services.portunus.domain

Subdomain which gets reverse proxied to Portunus webserver. Type: string Example: "sso.example.com" Declared by: <nixpkgs/nixos/modules/services/misc/portunus.nix>

## services.portunus.group

Group account under which Portunus runs its webserver. Type: string Default: "portunus" Declared by: <nixpkgs/nixos/modules/services/misc/portunus.nix>

## services.portunus.port

Port where the Portunus webserver should listen on. This must be put behind a TLS-capable reverse proxy because Portunus only listens on localhost. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/misc/portunus.nix>

## services.portunus.seedPath

Path to a portunus seed file in json format. See https://github.com/majewsky/portunus#seeding-users-and-groups-from-static-configuration for available options. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/portunus.nix>

## services.portunus.seedSettings

Seed settings for users and groups. See upstream for format https://github.com/majewsky/portunus#seeding-users-and-groups-from-static-configuration Type: null or (attribute set of list of attribute set of anything) Default: null Declared by: <nixpkgs/nixos/modules/services/misc/portunus.nix>

## services.portunus.stateDir

Path where Portunus stores its state. Type: absolute path Default: "/var/lib/portunus" Declared by: <nixpkgs/nixos/modules/services/misc/portunus.nix>

## services.portunus.user

User account under which Portunus runs its webserver. Type: string Default: "portunus" Declared by: <nixpkgs/nixos/modules/services/misc/portunus.nix>
