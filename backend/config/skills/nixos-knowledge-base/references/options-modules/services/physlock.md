---
module: services.physlock
option_count: 5
source: options.html
---

# services.physlock

## services.physlock.enable

Whether to enable the physlock screen locking mechanism. Enable this and then run systemctl start physlock to securely lock the screen. This will switch to a new virtual terminal, turn off console switching and disable SysRq mechanism (when services.physlock.disableSysRq is set) until the root or user password is given. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/physlock.nix>

## services.physlock.allowAnyUser

Whether to allow any user to lock the screen. This will install a setuid wrapper to allow any user to start physlock as root, which is a minor security risk. Call the physlock binary to use this instead of using the systemd service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/physlock.nix>

## services.physlock.disableSysRq

Whether to disable SysRq when locked with physlock. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/security/physlock.nix>

## services.physlock.lockMessage

Message to show on physlock login terminal. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/security/physlock.nix>

## services.physlock.muteKernelMessages

Disable kernel messages on console while physlock is running. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/physlock.nix>
