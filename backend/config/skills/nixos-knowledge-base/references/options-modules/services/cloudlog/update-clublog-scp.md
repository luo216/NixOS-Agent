---
module: services.cloudlog.update-clublog-scp
option_count: 2
source: options.html
---

# services.cloudlog.update-clublog-scp

## services.cloudlog.update-clublog-scp.enable

Whether to periodically update the Clublog SCP database. If enabled, a systemd timer will run the update task as specified by the interval option. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>

## services.cloudlog.update-clublog-scp.interval

Specification (in the format described by systemd.time(7)) of the time at which the Clublog SCP update will occur. Type: string Default: "monthly" Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>
