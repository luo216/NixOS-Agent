---
module: virtualisation.xen.store
option_count: 2
source: options.html
---

# virtualisation.xen.store

## virtualisation.xen.store.path

Path to the Xen Store Daemon. This option is useful to switch between the legacy C-based Xen Store Daemon, and the newer OCaml-based Xen Store Daemon, oxenstored. Type: absolute path Default: ${config.virtualisation.xen.package}/bin/oxenstored Example: ${config.virtualisation.xen.package}/bin/xenstored Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.store.settings

The OCaml-based Xen Store Daemon configuration. This option does nothing with the C-based xenstored. Type: submodule Default: { } Example: { conflict = { burstLimit = 15.0; maxHistorySeconds = 0.12; }; enableMerge = false; quota = { enable = true; maxWatchEvents = 2048; }; xenstored = { log = { file = "/dev/null"; level = "info"; }; }; } Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>
