---
module: services.echoip
option_count: 8
source: options.html
---

# services.echoip

## services.echoip.enable

Whether to enable echoip. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/echoip.nix>

## services.echoip.enablePortLookup

Whether to enable port lookup. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/echoip.nix>

## services.echoip.enableReverseHostnameLookups

Whether to enable reverse hostname lookups. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/echoip.nix>

## services.echoip.package

The echoip package to use. Type: package Default: pkgs.echoip Declared by: <nixpkgs/nixos/modules/services/web-apps/echoip.nix>

## services.echoip.extraArgs

Extra command line arguments to pass to echoip. See https://github.com/mpolden/echoip for details. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/echoip.nix>

## services.echoip.listenAddress

The address echoip should listen on Type: string Default: ":8080" Example: "127.0.0.1:8000" Declared by: <nixpkgs/nixos/modules/services/web-apps/echoip.nix>

## services.echoip.remoteIpHeader

Header to trust for remote IP, if present Type: null or string Default: null Example: "X-Real-IP" Declared by: <nixpkgs/nixos/modules/services/web-apps/echoip.nix>

## services.echoip.virtualHost

Name of the nginx virtual host to use and setup. If null, do not setup anything. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/echoip.nix>
