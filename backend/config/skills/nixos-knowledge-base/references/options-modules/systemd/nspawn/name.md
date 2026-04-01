---
module: systemd.nspawn.<name>
option_count: 4
source: options.html
---

# systemd.nspawn.<name>

## systemd.nspawn.<name>.enable

If set to false, this unit will be a symlink to /dev/null. This is primarily useful to prevent specific template instances (e.g. serial-getty@ttyS0) from being started. Note that enable=true does not make a unit start by default at boot; if you want that, see wantedBy. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/nspawn.nix>

## systemd.nspawn.<name>.execConfig

Each attribute in this set specifies an option in the [Exec] section of this unit. See systemd.nspawn(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Parameters = "/bin/sh"; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/nspawn.nix>

## systemd.nspawn.<name>.filesConfig

Each attribute in this set specifies an option in the [Files] section of this unit. See systemd.nspawn(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Bind = [ "/home/alice" ]; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/nspawn.nix>

## systemd.nspawn.<name>.networkConfig

Each attribute in this set specifies an option in the [Network] section of this unit. See systemd.nspawn(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Private = false; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/nspawn.nix>
