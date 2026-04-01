---
module: hardware.ksm
option_count: 2
source: options.html
---

# hardware.ksm

## hardware.ksm.enable

Whether to enable Linux kernel Same-Page Merging. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/ksm.nix>

## hardware.ksm.sleep

How many milliseconds ksmd should sleep between scans. Setting it to null uses the kernel’s default time. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/hardware/ksm.nix>
