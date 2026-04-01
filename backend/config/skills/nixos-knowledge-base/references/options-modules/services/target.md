---
module: services.target
option_count: 2
source: options.html
---

# services.target

## services.target.enable

Whether to enable the kernel’s LIO iscsi target. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/iscsi/target.nix>

## services.target.config

Content of /etc/target/saveconfig.json This file is normally read and written by targetcli Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/iscsi/target.nix>
