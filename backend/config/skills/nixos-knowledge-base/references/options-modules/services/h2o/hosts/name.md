---
module: services.h2o.hosts.<name>
option_count: 7
source: options.html
---

# services.h2o.hosts.<name>

## services.h2o.hosts.<name>.acme

ACME options for virtual host. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/h2o/default.nix>

## services.h2o.hosts.<name>.host

Set the host address for this virtual host. If unset, the default is to listen on all network interfaces. Type: null or non-empty string Default: null Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-servers/h2o/default.nix>

## services.h2o.hosts.<name>.http

HTTP options for virtual host Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/h2o/default.nix>

## services.h2o.hosts.<name>.serverAliases

Additional names of virtual hosts served by this virtual host configuration. Type: list of non-empty string Default: [ ] Example: [ "www.example.org" "example.org" ] Declared by: <nixpkgs/nixos/modules/services/web-servers/h2o/default.nix>

## services.h2o.hosts.<name>.serverName

Server name to be used for this virtual host. Defaults to attribute name in hosts. Type: null or non-empty string Default: null Example: "example.org" Declared by: <nixpkgs/nixos/modules/services/web-servers/h2o/default.nix>

## services.h2o.hosts.<name>.settings

Attrset to be transformed into YAML for host config. Note that the HTTP / TLS configurations will override these config values. See https://h2o.examp1e.net/configure/base_directives.html#hosts. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/web-servers/h2o/default.nix>

## services.h2o.hosts.<name>.tls

TLS options for virtual host Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/h2o/default.nix>
