---
module: services.umurmur
option_count: 5
source: options.html
---

# services.umurmur

## services.umurmur.enable

Whether to enable uMurmur Mumble server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/umurmur.nix>

## services.umurmur.package

The umurmur package to use. Type: package Default: pkgs.umurmur Declared by: <nixpkgs/nixos/modules/services/networking/umurmur.nix>

## services.umurmur.configFile

Configuration file, default is generated from config.service.umurmur.settings Type: absolute path Default: "Configuration file, default is generated from config.service.umurmur.settings" Declared by: <nixpkgs/nixos/modules/services/networking/umurmur.nix>

## services.umurmur.openFirewall

Open ports in the firewall for the uMurmur Mumble server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/umurmur.nix>

## services.umurmur.settings

Settings of uMurmur. For reference see https://github.com/umurmur/umurmur/blob/master/umurmur.conf.example Type: open submodule of uMurmur config value Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/umurmur.nix>
