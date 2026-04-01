---
module: hardware.i2c
option_count: 2
source: options.html
---

# hardware.i2c

## hardware.i2c.enable

Whether to enable i2c devices support. By default access is granted to users in the “i2c” group (will be created if non-existent) and any user with a seat, meaning logged on the computer locally . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/i2c.nix>

## hardware.i2c.group

Grant access to i2c devices (/dev/i2c-*) to users in this group. Type: string Default: "i2c" Declared by: <nixpkgs/nixos/modules/hardware/i2c.nix>
