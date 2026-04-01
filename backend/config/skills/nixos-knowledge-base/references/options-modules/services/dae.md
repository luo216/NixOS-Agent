---
module: services.dae
option_count: 8
source: options.html
---

# services.dae

## services.dae.enable

Whether to enable dae, a Linux high-performance transparent proxy solution based on eBPF. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/dae.nix>

## services.dae.package

The dae package to use. Type: package Default: pkgs.dae Declared by: <nixpkgs/nixos/modules/services/networking/dae.nix>

## services.dae.assets

Assets required to run dae. Type: list of absolute path Default: with pkgs; [ v2ray-geoip v2ray-domain-list-community ] Declared by: <nixpkgs/nixos/modules/services/networking/dae.nix>

## services.dae.assetsPath

The path which contains geolocation database. This option will override assets. Type: string Default: (symlinkJoin { name = "dae-assets"; paths = assets; })/share/v2ray Declared by: <nixpkgs/nixos/modules/services/networking/dae.nix>

## services.dae.config

WARNING: This option will expose store your config unencrypted world-readable in the nix store. Config text for dae. See https://github.com/daeuniverse/dae/blob/main/example.dae. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/dae.nix>

## services.dae.configFile

The path of dae config file, end with .dae. Type: null or absolute path Default: null Example: "/path/to/your/config.dae" Declared by: <nixpkgs/nixos/modules/services/networking/dae.nix>

## services.dae.disableTxChecksumIpGeneric

See https://github.com/daeuniverse/dae/issues/43 Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/dae.nix>

## services.dae.openFirewall

Open the firewall port. Type: submodule Default: { enable = true; port = 12345; } Declared by: <nixpkgs/nixos/modules/services/networking/dae.nix>
