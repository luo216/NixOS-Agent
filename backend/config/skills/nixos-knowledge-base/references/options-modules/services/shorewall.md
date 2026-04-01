---
module: services.shorewall
option_count: 3
source: options.html
---

# services.shorewall

## services.shorewall.enable

Whether to enable Shorewall IPv4 Firewall. Warning Enabling this service WILL disable the existing NixOS firewall! Default firewall rules provided by packages are not considered at the moment. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/shorewall.nix>

## services.shorewall.package

The shorewall package to use. Type: package Default: pkgs.shorewall Declared by: <nixpkgs/nixos/modules/services/networking/shorewall.nix>

## services.shorewall.configs

This option defines the Shorewall configs. The attribute name defines the name of the config, and the attribute value defines the content of the config. Type: attribute set of strings concatenated with “\n” Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/shorewall.nix>
