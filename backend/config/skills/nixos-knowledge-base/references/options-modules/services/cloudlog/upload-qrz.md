---
module: services.cloudlog.upload-qrz
option_count: 2
source: options.html
---

# services.cloudlog.upload-qrz

## services.cloudlog.upload-qrz.enable

Whether to periodically upload logs to QRZ. If enabled, a systemd timer will run the update task as specified by the interval option. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>

## services.cloudlog.upload-qrz.interval

Specification (in the format described by systemd.time(7)) of the time at which the QRZ upload will occur. Type: string Default: "daily" Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>
