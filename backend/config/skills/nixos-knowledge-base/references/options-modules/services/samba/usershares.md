---
module: services.samba.usershares
option_count: 2
source: options.html
---

# services.samba.usershares

## services.samba.usershares.enable

Whether to enable user-configurable Samba shares. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba.nix>

## services.samba.usershares.group

Name of the group members of which will be allowed to create usershares. The group will be created automatically. Type: string Default: "samba" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba.nix>
