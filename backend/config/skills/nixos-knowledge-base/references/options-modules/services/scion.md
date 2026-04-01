---
module: services.scion
option_count: 4
source: options.html
---

# services.scion

## services.scion.enable

Whether to enable all of the scion components and services. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/scion/scion.nix>

## services.scion.package

The scion package to use. Type: package Default: pkgs.scion Declared by: <nixpkgs/nixos/modules/services/networking/scion/scion.nix>

## services.scion.bypassBootstrapWarning

bypass Nix warning about SCION PKI bootstrapping Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/scion/scion.nix>

## services.scion.stateless

Setting this value to false (stateful) can lead to improved caching and performance. This option decides whether to persist the SCION path sqlite databases on disk or not. Persisting this data can lead to database corruption in extreme cases such as power outage, meaning SCION fails to work on the next boot. This is being investigated. If true, /run/scion-* is used for data If false, use /var/lib/scion-* is used for data Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/scion/scion.nix>
