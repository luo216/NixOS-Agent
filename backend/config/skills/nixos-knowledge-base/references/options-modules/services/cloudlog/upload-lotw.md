---
module: services.cloudlog.upload-lotw
option_count: 2
source: options.html
---

# services.cloudlog.upload-lotw

## services.cloudlog.upload-lotw.enable

Whether to periodically upload logs to LoTW. If enabled, a systemd timer will run the log upload task as specified by the interval option. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>

## services.cloudlog.upload-lotw.interval

Specification (in the format described by systemd.time(7)) of the time at which the LoTW upload will occur. Type: string Default: "daily" Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>
