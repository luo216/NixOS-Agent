---
module: services.keter.globalKeterConfig
option_count: 3
source: options.html
---

# services.keter.globalKeterConfig

## services.keter.globalKeterConfig.ip-from-header

You want that ip-from-header in the nginx setup case. It allows nginx setting the original ip address rather then it being localhost (due to reverse proxying) Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-servers/keter>

## services.keter.globalKeterConfig.listeners

You want that ip-from-header in the nginx setup case. It allows nginx setting the original ip address rather then it being localhost (due to reverse proxying). However if you configure keter to accept connections directly you may want to set this to false. Type: list of (submodule) Default: [ { host = "*"; port = 6981; } ] Declared by: <nixpkgs/nixos/modules/services/web-servers/keter>

## services.keter.globalKeterConfig.rotate-logs

emits keter logs and it’s applications to stderr. which allows journald to capture them. Set to true to let keter put the logs in files (useful on non systemd systems, this is the old approach where keter handled log management) Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/keter>
