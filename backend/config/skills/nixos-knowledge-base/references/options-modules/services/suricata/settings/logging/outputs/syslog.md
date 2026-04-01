---
module: services.suricata.settings.logging.outputs.syslog
option_count: 4
source: options.html
---

# services.suricata.settings.logging.outputs.syslog

## services.suricata.settings.logging.outputs.syslog.enable

Whether to enable logging to syslog. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.logging.outputs.syslog.facility

Facility to log to. Type: string Default: "local5" Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.logging.outputs.syslog.format

Logformat for logs send to syslog. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.logging.outputs.syslog.type

Type of logs send to syslog. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>
