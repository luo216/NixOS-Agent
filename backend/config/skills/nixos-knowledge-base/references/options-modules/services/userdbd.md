---
module: services.userdbd
option_count: 2
source: options.html
---

# services.userdbd

## services.userdbd.enable

Whether to enable the systemd JSON user/group record lookup service . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/userdbd.nix>

## services.userdbd.enableSSHSupport

Whether to enable exposing OpenSSH public keys defined in userdb. Be aware that this enables modifying public keys at runtime, either by users managed by services.homed, or globally via drop-in files . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/userdbd.nix>
