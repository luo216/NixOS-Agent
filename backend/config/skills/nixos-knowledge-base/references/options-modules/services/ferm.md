---
module: services.ferm
option_count: 3
source: options.html
---

# services.ferm

## services.ferm.enable

Whether to enable Ferm Firewall. Warning: Enabling this service WILL disable the existing NixOS firewall! Default firewall rules provided by packages are not considered at the moment. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ferm.nix>

## services.ferm.package

The ferm package to use. Type: package Default: pkgs.ferm Declared by: <nixpkgs/nixos/modules/services/networking/ferm.nix>

## services.ferm.config

Verbatim ferm.conf configuration. Type: strings concatenated with “\n” Default: empty firewall, allows any traffic Declared by: <nixpkgs/nixos/modules/services/networking/ferm.nix>
