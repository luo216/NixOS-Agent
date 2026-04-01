---
module: services.smartd
option_count: 4
source: options.html
---

# services.smartd

## services.smartd.enable

Whether to enable smartd daemon from smartmontools package. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/smartd.nix>

## services.smartd.autodetect

Whenever smartd should monitor all devices connected to the machine at the time it’s being started (the default). Set to false to monitor the devices listed in services.smartd.devices only. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/smartd.nix>

## services.smartd.devices

List of devices to monitor. Type: list of (submodule) Default: [ ] Example: [ { device = "/dev/sda"; } { device = "/dev/sdb"; options = "-d sat"; } ] Declared by: <nixpkgs/nixos/modules/services/monitoring/smartd.nix>

## services.smartd.extraOptions

Extra command-line options passed to the smartd daemon on startup. (See man 8 smartd.) Type: list of string Default: [ ] Example: [ "-A /var/log/smartd/" "--interval=3600" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/smartd.nix>
