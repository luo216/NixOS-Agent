---
module: virtualisation.xen.store.settings
option_count: 4
source: options.html
---

# virtualisation.xen.store.settings

## virtualisation.xen.store.settings.enableMerge

Whether to enable transaction merge support. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.store.settings.persistent

Whether to activate the filed base backend. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.store.settings.pidFile

Path to the Xen Store Daemon PID file. Type: absolute path Default: "/run/xen/xenstored.pid" Example: "/var/run/xen/xenstored.pid" Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.store.settings.ringScanInterval

Perodic scanning for all the rings as a safenet for lazy clients. Define the interval in seconds; set to a negative integer to disable. Type: nonzero signed integer, meaning !=0 Default: 20 Example: 30 Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>
