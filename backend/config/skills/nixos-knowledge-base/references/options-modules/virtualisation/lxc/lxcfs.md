---
module: virtualisation.lxc.lxcfs
option_count: 1
source: options.html
---

# virtualisation.lxc.lxcfs

## virtualisation.lxc.lxcfs.enable

This enables LXCFS, a FUSE filesystem for LXC. To use lxcfs in include the following configuration in your container configuration: virtualisation.lxc.defaultConfig = "lxc.include = ${pkgs.lxcfs}/share/lxc/config/common.conf.d/00-lxcfs.conf"; Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/lxcfs.nix>
