---
module: services.globalprotect
option_count: 3
source: options.html
---

# services.globalprotect

## services.globalprotect.enable

Whether to enable globalprotect. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/globalprotect-vpn.nix>

## services.globalprotect.csdWrapper

A script that will produce a Host Integrity Protection (HIP) report, as described at https://www.infradead.org/openconnect/hip.html Type: null or absolute path Default: null Example: "${pkgs.openconnect}/libexec/openconnect/hipreport.sh" Declared by: <nixpkgs/nixos/modules/services/networking/globalprotect-vpn.nix>

## services.globalprotect.settings

GlobalProtect-openconnect configuration. For more information, visit https://github.com/yuezk/GlobalProtect-openconnect/wiki/Configuration. Type: attribute set Default: { } Example: { "vpn1.company.com" = { openconnect-args = "--script=/path/to/vpnc-script"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/globalprotect-vpn.nix>
