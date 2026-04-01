---
module: boot.initrd.services.bcache
option_count: 1
source: options.html
---

# boot.initrd.services.bcache

## boot.initrd.services.bcache.enable

This will only be used when systemd is used in stage 1. Whether to enable bcache support in the initrd. Type: boolean Default: config.boot.initrd.systemd.enable && config.boot.bcache.enable Example: true Declared by: <nixpkgs/nixos/modules/tasks/bcache.nix>
