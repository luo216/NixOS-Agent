---
module: services.dolibarr.h2o
option_count: 7
source: options.html
---

# services.dolibarr.h2o

## services.dolibarr.h2o.acme

ACME options for virtual host. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.h2o.host

Set the host address for this virtual host. If unset, the default is to listen on all network interfaces. Type: null or non-empty string Default: null Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.h2o.http

HTTP options for virtual host Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.h2o.serverAliases

Additional names of virtual hosts served by this virtual host configuration. Type: list of non-empty string Default: [ ] Example: [ "www.example.org" "example.org" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.h2o.serverName

Server name to be used for this virtual host. Defaults to attribute name in hosts. Type: null or non-empty string Default: null Example: "example.org" Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.h2o.settings

Attrset to be transformed into YAML for host config. Note that the HTTP / TLS configurations will override these config values. See https://h2o.examp1e.net/configure/base_directives.html#hosts. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.h2o.tls

TLS options for virtual host Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>
