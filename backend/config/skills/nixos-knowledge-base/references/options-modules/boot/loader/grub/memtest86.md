---
module: boot.loader.grub.memtest86
option_count: 2
source: options.html
---

# boot.loader.grub.memtest86

## boot.loader.grub.memtest86.enable

Make Memtest86+, a memory testing program, available from the GRUB boot menu. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/memtest.nix>

## boot.loader.grub.memtest86.params

Parameters added to the Memtest86+ command line. As of memtest86+ 5.01 the following list of (apparently undocumented) parameters are accepted: console=..., set up a serial console. Examples: console=ttyS0, console=ttyS0,9600 or console=ttyS0,115200n8. btrace, enable boot trace. maxcpus=N, limit number of CPUs. onepass, run one pass and exit if there are no errors. tstlist=..., list of tests to run. Example: 0,1,2. cpumask=..., set a CPU mask, to select CPUs to use for testing. This list of command line options was obtained by reading the Memtest86+ source code. Type: list of string Default: [ ] Example: [ "console=ttyS0,115200" ] Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/memtest.nix>
