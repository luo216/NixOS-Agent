---
module: services.h2o
option_count: 8
source: options.html
---

# services.h2o

## services.h2o.enable

Whether to enable H2O web server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/h2o/default.nix>

## services.h2o.package

The h2o package to use. Type: package Default: pkgs.h2o Example: pkgs.h2o.override { withMruby = false; openssl = pkgs.openssl_legacy; } Declared by: <nixpkgs/nixos/modules/services/web-servers/h2o/default.nix>

## services.h2o.defaultHTTPListenPort

If hosts do not specify listen.port, use these ports for HTTP by default. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 80 Example: 8080 Declared by: <nixpkgs/nixos/modules/services/web-servers/h2o/default.nix>

## services.h2o.defaultTLSListenPort

If hosts do not specify listen.port, use these ports for SSL by default. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 443 Example: 8443 Declared by: <nixpkgs/nixos/modules/services/web-servers/h2o/default.nix>

## services.h2o.group

Group running H2O services Type: non-empty string Default: "h2o" Declared by: <nixpkgs/nixos/modules/services/web-servers/h2o/default.nix>

## services.h2o.hosts

The hosts config to be merged with the settings. Note that unlike YAML used for H2O, Nix will not support duplicate keys to, for instance, have multiple listens in a host block; use the virtual host options in like http & tls or use $HOST:$PORT keys if manually specifying config. Type: attribute set of (submodule) Default: { } Example: { "hydra.example.com" = { tls = { policy = "force"; identity = [ { key-file = "/path/to/key"; certificate-file = "/path/to/cert"; }; ]; extraSettings = { minimum-version = "TLSv1.3"; }; }; settings = { paths."/" = { "file:dir" = "/var/www/default"; }; }; }; } Declared by: <nixpkgs/nixos/modules/services/web-servers/h2o/default.nix>

## services.h2o.settings

Configuration for H2O (see https://h2o.examp1e.net/configure.html) Type: YAML 1.1 value Default: { } Example: { compress = "ON"; ssl-offload = "kernel"; http2-reprioritize-blocking-assets = "ON"; "file.mime.addtypes" = { "text/x-rst" = { extensions = [ ".rst" ]; is_compressible = "YES"; }; }; } Declared by: <nixpkgs/nixos/modules/services/web-servers/h2o/default.nix>

## services.h2o.user

User running H2O service Type: non-empty string Default: "h2o" Declared by: <nixpkgs/nixos/modules/services/web-servers/h2o/default.nix>
