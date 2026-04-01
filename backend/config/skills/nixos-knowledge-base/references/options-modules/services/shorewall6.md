---
module: services.shorewall6
option_count: 3
source: options.html
---

# services.shorewall6

## services.shorewall6.enable

Whether to enable Shorewall IPv6 Firewall. Warning Enabling this service WILL disable the existing NixOS firewall! Default firewall rules provided by packages are not considered at the moment. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/shorewall6.nix>

## services.shorewall6.package

The shorewall package to use. Type: package Default: pkgs.shorewall Declared by: <nixpkgs/nixos/modules/services/networking/shorewall6.nix>

## services.shorewall6.configs

This option defines the Shorewall configs. The attribute name defines the name of the config, and the attribute value defines the content of the config. Type: attribute set of strings concatenated with “\n” Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/shorewall6.nix>
