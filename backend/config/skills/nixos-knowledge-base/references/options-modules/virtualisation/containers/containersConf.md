---
module: virtualisation.containers.containersConf
option_count: 2
source: options.html
---

# virtualisation.containers.containersConf

## virtualisation.containers.containersConf.cniPlugins

CNI plugins to install on the system. Type: list of package Default: [ pkgs.cni-plugins ] Example: [ pkgs.cniPlugins.dnsname ] Declared by: <nixpkgs/nixos/modules/virtualisation/containers.nix>

## virtualisation.containers.containersConf.settings

containers.conf configuration Type: TOML value Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/containers.nix>
