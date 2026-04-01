---
module: virtualisation.xen.store.settings.xenstored.log
option_count: 2
source: options.html
---

# virtualisation.xen.store.settings.xenstored.log

## virtualisation.xen.store.settings.xenstored.log.file

Path to the Xen Store log file. Type: absolute path Default: "/var/log/xen/xenstored.log" Example: "/dev/null" Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.store.settings.xenstored.log.level

Logging level for the Xen Store. Type: null or one of “debug”, “info”, “warn”, “error” Default: if (config.virtualisation.xen.trace == true) then "debug" else null Example: "error" Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>
