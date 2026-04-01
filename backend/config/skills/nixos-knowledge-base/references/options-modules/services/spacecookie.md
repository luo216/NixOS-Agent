---
module: services.spacecookie
option_count: 6
source: options.html
---

# services.spacecookie

## services.spacecookie.enable

Whether to enable spacecookie. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/spacecookie.nix>

## services.spacecookie.package

The spacecookie package to use. Type: package Default: pkgs.spacecookie Example: haskellPackages.spacecookie Declared by: <nixpkgs/nixos/modules/services/networking/spacecookie.nix>

## services.spacecookie.address

Address to listen on. Must be in the ListenStream= syntax of systemd.socket(5). Type: string Default: "[::]" Declared by: <nixpkgs/nixos/modules/services/networking/spacecookie.nix>

## services.spacecookie.openFirewall

Whether to open the necessary port in the firewall for spacecookie. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/spacecookie.nix>

## services.spacecookie.port

Port the gopher service should be exposed on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 70 Declared by: <nixpkgs/nixos/modules/services/networking/spacecookie.nix>

## services.spacecookie.settings

Settings for spacecookie. The settings set here are directly translated to the spacecookie JSON config file. See spacecookie.json(5) for explanations of all options. Type: open submodule of (JSON value) Declared by: <nixpkgs/nixos/modules/services/networking/spacecookie.nix>
