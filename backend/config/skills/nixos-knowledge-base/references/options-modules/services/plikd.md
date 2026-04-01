---
module: services.plikd
option_count: 3
source: options.html
---

# services.plikd

## services.plikd.enable

Whether to enable plikd, a temporary file upload system. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/plikd.nix>

## services.plikd.openFirewall

Open ports in the firewall for the plikd. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/plikd.nix>

## services.plikd.settings

Configuration for plikd, see https://github.com/root-gg/plik/blob/master/server/plikd.cfg for supported values. Type: TOML value Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/plikd.nix>
