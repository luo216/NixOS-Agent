---
module: services.smartd.defaults
option_count: 2
source: options.html
---

# services.smartd.defaults

## services.smartd.defaults.autodetected

Like services.smartd.defaults.monitored, but for the autodetected devices. Type: strings concatenated with " " Default: config.services.smartd.defaults.monitored Declared by: <nixpkgs/nixos/modules/services/monitoring/smartd.nix>

## services.smartd.defaults.monitored

Common default options for explicitly monitored (listed in services.smartd.devices) devices. The default value turns on monitoring of all the things (see man 5 smartd.conf). The example also turns on SMART Automatic Offline Testing on startup, and schedules short self-tests daily, and long self-tests weekly. Type: strings concatenated with " " Default: "-a" Example: "-a -o on -s (S/../.././02|L/../../7/04)" Declared by: <nixpkgs/nixos/modules/services/monitoring/smartd.nix>
