---
module: virtualisation.xen.boot
option_count: 2
source: options.html
---

# virtualisation.xen.boot

## virtualisation.xen.boot.builderVerbosity

The boot entry builder script should be called with exactly one of the following arguments in order to specify its verbosity: quiet supresses all messages. default adds a simple “Installing Xen Project Hypervisor boot entries…done.” message to the script. info is the same as default, but it also prints a diff with information on which generations were altered. This option adds two extra dependencies to the script: diffutils and bat. debug prints information messages for every single step of the script. This option does not alter the actual functionality of the script, just the number of messages printed when rebuilding the system. Type: one of “default”, “info”, “debug”, “quiet” Default: "default" Example: "info" Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.boot.params

Xen Command Line parameters passed to Domain 0 at boot time. Note: these are different from boot.kernelParams. See the Xen documentation for more information. Type: list of string Default: [ ] Example: '' [ "iommu=force:true,qinval:true,debug:true" "noreboot=true" "vga=ask" ] '' Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>
