---
module: boot.kernel
option_count: 4
source: options.html
---

# boot.kernel

## boot.kernel.enable

Whether to enable the Linux kernel. This is useful for systemd-like containers which do not require a kernel. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/system/boot/kernel.nix>

## boot.kernel.randstructSeed

Provides a custom seed for the RANDSTRUCT security option of the Linux kernel. Note that RANDSTRUCT is only enabled in NixOS hardened kernels. Using a custom seed requires building the kernel and dependent packages locally, since this customization happens at build time. Type: string Default: "" Example: "my secret seed" Declared by: <nixpkgs/nixos/modules/system/boot/kernel.nix>

## boot.kernel.sysctl

Runtime parameters of the Linux kernel, as set by sysctl(8). Note that sysctl parameters names must be enclosed in quotes (e.g. "vm.swappiness" instead of vm.swappiness). The value of each parameter may be a string, integer, boolean, or null (signifying the option will not appear at all). Type: open submodule of attribute set of (sysctl option value) Default: { } Example: { "net.ipv4.tcp_syncookies" = false; "vm.swappiness" = 60; } Declared by: <nixpkgs/nixos/modules/config/sysctl.nix>

## boot.kernel.sysfs

sysfs attributes to be set as soon as they become available. Attribute names represent path components in the sysfs filesystem and cannot be . or .. nor contain any slash character (/). Names may contain shell‐style glob patterns (*, ? and […]) matching a single path component, these should however be used with caution, as they may produce unexpected results if attribute paths overlap. Values will be converted to strings, with list elements concatenated with commata and booleans converted to numeric values (0 or 1). null values are ignored, allowing removal of values defined in other modules, as are empty attribute sets. List values defined in different modules will not be concatenated. This option may only be used for attributes which can be set idempotently, as the configured values might be written more than once. Type: open submodule of nested attribute set of null or sysfs attribute values Default: { } Example: { # enable transparent hugepages with deferred defragmentaion kernel.mm.transparent_hugepage = { enabled = "always"; defrag = "defer"; shmem_enabled = "within_size"; }; devices.system.cpu = { # configure powesave frequency governor for all CPUs # the [0-9]* glob pattern ensures that other paths # like cpufreq or cpuidle are not matched "cpu[0-9]*" = { scaling_governor = "powersave"; energy_performance_preference = 8; }; # disable frequency boost intel_pstate.no_turbo = true; }; } Declared by: <nixpkgs/nixos/modules/config/sysfs.nix>
