---
module: services.cloudlog.update-wwff
option_count: 2
source: options.html
---

# services.cloudlog.update-wwff

## services.cloudlog.update-wwff.enable

Whether to periodically update the WWFF database. If enabled, a systemd timer will run the update task as specified by the interval option. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>

## services.cloudlog.update-wwff.interval

Specification (in the format described by systemd.time(7)) of the time at which the WWFF update will occur. Type: string Default: "monthly" Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>
