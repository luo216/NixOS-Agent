---
module: security.virtualisation
option_count: 1
source: options.html
---

# security.virtualisation

## security.virtualisation.flushL1DataCache

Whether the hypervisor should flush the L1 data cache before entering guests. See also security.allowSimultaneousMultithreading. null: uses the kernel default "never": disables L1 data cache flushing entirely. May be appropriate if all guests are trusted. "cond": flushes L1 data cache only for pre-determined code paths. May leak information about the host address space layout. "always": flushes L1 data cache every time the hypervisor enters the guest. May incur significant performance cost. Type: null or one of “never”, “cond”, “always” Default: null Declared by: <nixpkgs/nixos/modules/security/misc.nix>
