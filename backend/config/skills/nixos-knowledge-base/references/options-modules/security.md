---
module: security
option_count: 10
source: options.html
---

# security

## security.enableWrappers

Whether to enable SUID/SGID wrappers. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/security/wrappers/default.nix>

## security.allowSimultaneousMultithreading

Whether to allow SMT/hyperthreading. Disabling SMT means that only physical CPU cores will be usable at runtime, potentially at significant performance cost. The primary motivation for disabling SMT is to mitigate the risk of leaking data between threads running on the same CPU core (due to e.g., shared caches). This attack vector is unproven. Disabling SMT is a supplement to the L1 data cache flushing mitigation (see security.virtualisation.flushL1DataCache) versus malicious VM guests (SMT could “bring back” previously flushed data). Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/security/misc.nix>

## security.allowUserNamespaces

Whether to allow creation of user namespaces. The motivation for disabling user namespaces is the potential presence of code paths where the kernel’s permission checking logic fails to account for namespacing, instead permitting a namespaced process to act outside the namespace with the same privileges as it would have inside it. This is particularly damaging in the common case of running as root within the namespace. When user namespace creation is disallowed, attempting to create a user namespace fails with “no space left on device” (ENOSPC). root may re-enable user namespace creation at runtime. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/security/misc.nix>

## security.forcePageTableIsolation

Whether to force-enable the Page Table Isolation (PTI) Linux kernel feature even on CPU models that claim to be safe from Meltdown. This hardening feature is most beneficial to systems that run untrusted workloads that rely on address space isolation for security. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/misc.nix>

## security.lockKernelModules

Disable kernel module loading once the system is fully initialised. Module loading is disabled until the next reboot. Problems caused by delayed module loading can be fixed by adding the module(s) in question to boot.kernelModules. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/lock-kernel-modules.nix>

## security.lsm

A list of the LSMs to initialize in order. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/security/default.nix>

## security.protectKernelImage

Whether to prevent replacing the running kernel image. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/misc.nix>

## security.unprivilegedUsernsClone

When disabled, unprivileged users will not be able to create new namespaces. By default unprivileged user namespaces are disabled. This option only works in a hardened profile. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/misc.nix>

## security.wrapperDirSize

Size limit for the /run/wrappers tmpfs. Look at mount(8), tmpfs size option, for the accepted syntax. WARNING: don’t set to less than 64MB. Type: string Default: "50%" Example: "10G" Declared by: <nixpkgs/nixos/modules/security/wrappers/default.nix>

## security.wrappers

This option effectively allows adding setuid/setgid bits, capabilities, changing file ownership and permissions of a program without directly modifying it. This works by creating a wrapper program in a directory (not configurable), which is then added to the shell PATH. Type: attribute set of (submodule) Default: { } Example: { # a setuid root program doas = { setuid = true; owner = "root"; group = "root"; source = "${pkgs.doas}/bin/doas"; }; # a setgid program locate = { setgid = true; owner = "root"; group = "mlocate"; source = "${pkgs.locate}/bin/locate"; }; # a program with the CAP_NET_RAW capability ping = { owner = "root"; group = "root"; capabilities = "cap_net_raw+ep"; source = "${pkgs.iputils.out}/bin/ping"; }; } Declared by: <nixpkgs/nixos/modules/security/wrappers/default.nix>
