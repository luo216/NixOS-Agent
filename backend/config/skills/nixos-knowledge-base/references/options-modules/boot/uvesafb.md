---
module: boot.uvesafb
option_count: 2
source: options.html
---

# boot.uvesafb

## boot.uvesafb.enable

Whether to enable uvesafb. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/uvesafb.nix>

## boot.uvesafb.gfx-mode

Screen resolution in modedb format. See uvesafb and modedb documentation for more details. The default value is a sensible default but may be not ideal for all setups. Type: string Default: "1024x768-32" Declared by: <nixpkgs/nixos/modules/system/boot/uvesafb.nix>
