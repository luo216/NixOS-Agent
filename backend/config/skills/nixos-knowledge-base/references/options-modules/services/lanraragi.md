---
module: services.lanraragi
option_count: 5
source: options.html
---

# services.lanraragi

## services.lanraragi.enable

Whether to enable LANraragi. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/lanraragi.nix>

## services.lanraragi.package

The lanraragi package to use. Type: package Default: pkgs.lanraragi Declared by: <nixpkgs/nixos/modules/services/web-apps/lanraragi.nix>

## services.lanraragi.openFirewall

Open ports in the firewall for LANraragi’s web interface. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/lanraragi.nix>

## services.lanraragi.passwordFile

A file containing the password for LANraragi’s admin interface. Type: null or absolute path Default: null Example: "/run/keys/lanraragi-password" Declared by: <nixpkgs/nixos/modules/services/web-apps/lanraragi.nix>

## services.lanraragi.port

Port for LANraragi’s web interface. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/web-apps/lanraragi.nix>
