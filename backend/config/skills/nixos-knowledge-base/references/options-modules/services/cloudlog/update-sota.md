---
module: services.cloudlog.update-sota
option_count: 2
source: options.html
---

# services.cloudlog.update-sota

## services.cloudlog.update-sota.enable

Whether to periodically update the SOTA database. If enabled, a systemd timer will run the update task as specified by the interval option. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>

## services.cloudlog.update-sota.interval

Specification (in the format described by systemd.time(7)) of the time at which the SOTA update will occur. Type: string Default: "monthly" Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>
