---
module: boot.crashDump
option_count: 3
source: options.html
---

# boot.crashDump

## boot.crashDump.enable

If enabled, NixOS will set up a kernel that will boot on crash, and leave the user in systemd rescue to be able to save the crashed kernel dump at /proc/vmcore. It also activates the NMI watchdog. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/misc/crashdump.nix>

## boot.crashDump.kernelParams

Parameters that will be passed to the kernel kexec-ed on crash. Type: list of string Default: [ "1" "boot.shell_on_fail" ] Declared by: <nixpkgs/nixos/modules/misc/crashdump.nix>

## boot.crashDump.reservedMemory

The amount of memory reserved for the crashdump kernel. If you choose a too high value, dmesg will mention “crashkernel reservation failed”. Type: string Default: "128M" Declared by: <nixpkgs/nixos/modules/misc/crashdump.nix>
