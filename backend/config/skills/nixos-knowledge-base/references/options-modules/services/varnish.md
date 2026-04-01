---
module: services.varnish
option_count: 8
source: options.html
---

# services.varnish

## services.varnish.enable

Whether to enable Varnish Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/varnish/default.nix>

## services.varnish.enableConfigCheck

Whether to enable checking the config during build time. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/varnish/default.nix>

## services.varnish.package

The varnish package to use. Type: package Default: pkgs.varnish Declared by: <nixpkgs/nixos/modules/services/web-servers/varnish/default.nix>

## services.varnish.config

Verbatim default.vcl configuration. Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/web-servers/varnish/default.nix>

## services.varnish.extraCommandLine

Command line switches for varnishd (run ‘varnishd -?’ to get list of options) Type: string Default: "" Example: "-s malloc,256M" Declared by: <nixpkgs/nixos/modules/services/web-servers/varnish/default.nix>

## services.varnish.extraModules

Varnish modules (except ‘std’). Type: list of package Default: [ ] Example: [ pkgs.varnishPackages.geoip ] Declared by: <nixpkgs/nixos/modules/services/web-servers/varnish/default.nix>

## services.varnish.http_address

HTTP listen address and port. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/varnish/default.nix>

## services.varnish.listen

Accept for client requests on the specified listen addresses. Type: list of (submodule) Default: [ { address="*"; port=6081; } ] Declared by: <nixpkgs/nixos/modules/services/web-servers/varnish/default.nix>
