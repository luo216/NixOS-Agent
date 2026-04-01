---
module: boot.initrd.systemd.contents.<name>.dlopen
option_count: 2
source: options.html
---

# boot.initrd.systemd.contents.<name>.dlopen

## boot.initrd.systemd.contents.<name>.dlopen.features

Features to enable via dlopen ELF notes. These will be in addition to anything included via ‘usePriority’, regardless of their priority. Type: list of (optionally newline-terminated) single-line string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.contents.<name>.dlopen.usePriority

Priority of dlopen ELF notes to include. “required” is minimal, “recommended” includes “required”, and “suggested” includes “recommended”. See: https://systemd.io/ELF_DLOPEN_METADATA/ Type: one of “required”, “recommended”, “suggested” Default: "recommended" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>
