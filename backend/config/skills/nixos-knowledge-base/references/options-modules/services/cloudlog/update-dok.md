---
module: services.cloudlog.update-dok
option_count: 2
source: options.html
---

# services.cloudlog.update-dok

## services.cloudlog.update-dok.enable

Whether to periodically update the DOK resource file. If enabled, a systemd timer will run the update task as specified by the interval option. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>

## services.cloudlog.update-dok.interval

Specification (in the format described by systemd.time(7)) of the time at which the DOK update will occur. Type: string Default: "monthly" Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>
