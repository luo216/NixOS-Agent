---
module: services.immich-public-proxy
option_count: 6
source: options.html
---

# services.immich-public-proxy

## services.immich-public-proxy.enable

Whether to enable Immich Public Proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/immich-public-proxy.nix>

## services.immich-public-proxy.package

The immich-public-proxy package to use. Type: package Default: pkgs.immich-public-proxy Declared by: <nixpkgs/nixos/modules/services/web-apps/immich-public-proxy.nix>

## services.immich-public-proxy.immichUrl

URL of the Immich instance Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/immich-public-proxy.nix>

## services.immich-public-proxy.openFirewall

Whether to open the IPP port in the firewall Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/immich-public-proxy.nix>

## services.immich-public-proxy.port

The port that IPP will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/web-apps/immich-public-proxy.nix>

## services.immich-public-proxy.settings

Configuration for IPP. See https://github.com/alangrainger/immich-public-proxy/blob/main/README.md#additional-configuration for options and defaults. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/immich-public-proxy.nix>
