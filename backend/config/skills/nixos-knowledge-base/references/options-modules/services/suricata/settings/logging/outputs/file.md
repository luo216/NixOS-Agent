---
module: services.suricata.settings.logging.outputs.file
option_count: 5
source: options.html
---

# services.suricata.settings.logging.outputs.file

## services.suricata.settings.logging.outputs.file.enable

Whether to enable logging to file. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.logging.outputs.file.filename

Filename of the logfile. Type: string Default: "suricata.log" Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.logging.outputs.file.format

Logformat for logs written to the logfile. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.logging.outputs.file.level

Loglevel for logs written to the logfile. Type: one of “error”, “warning”, “notice”, “info”, “perf”, “config”, “debug” Default: "info" Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.logging.outputs.file.type

Type of logfile. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>
