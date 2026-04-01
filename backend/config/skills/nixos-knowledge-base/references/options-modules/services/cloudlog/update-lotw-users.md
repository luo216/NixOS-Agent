---
module: services.cloudlog.update-lotw-users
option_count: 2
source: options.html
---

# services.cloudlog.update-lotw-users

## services.cloudlog.update-lotw-users.enable

Whether to periodically update the list of LoTW users. If enabled, a systemd timer will run the update task as specified by the interval option. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>

## services.cloudlog.update-lotw-users.interval

Specification (in the format described by systemd.time(7)) of the time at which the LoTW user update will occur. Type: string Default: "weekly" Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>
