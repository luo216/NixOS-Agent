---
module: services.physlock.lockOn
option_count: 3
source: options.html
---

# services.physlock.lockOn

## services.physlock.lockOn.extraTargets

Other targets to lock the screen just before. Useful if you want to e.g. both autologin to X11 so that your ~/.xsession gets executed and still to have the screen locked so that the system can be booted relatively unattended. Type: list of string Default: [ ] Example: [ "display-manager.service" ] Declared by: <nixpkgs/nixos/modules/services/security/physlock.nix>

## services.physlock.lockOn.hibernate

Whether to lock screen with physlock just before hibernate. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/security/physlock.nix>

## services.physlock.lockOn.suspend

Whether to lock screen with physlock just before suspend. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/security/physlock.nix>
