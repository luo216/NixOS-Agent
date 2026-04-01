---
module: services.logrotate.settings.<name>
option_count: 5
source: options.html
---

# services.logrotate.settings.<name>

## services.logrotate.settings.<name>.enable

Whether to enable setting individual kill switch. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/logging/logrotate.nix>

## services.logrotate.settings.<name>.files

Single or list of files for which rules are defined. The files are quoted with double-quotes in logrotate configuration, so globs and spaces are supported. Note this setting is ignored if globals is true. Type: string or list of string Default: '' The attrset name if not specified '' Declared by: <nixpkgs/nixos/modules/services/logging/logrotate.nix>

## services.logrotate.settings.<name>.frequency

How often to rotate the logs. Defaults to previously set global setting, which itself defaults to weekly. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/logging/logrotate.nix>

## services.logrotate.settings.<name>.global

Whether this setting is a global option or not: set to have these settings apply to all files settings with a higher priority. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/logging/logrotate.nix>

## services.logrotate.settings.<name>.priority

Order of this logrotate block in relation to the others. The semantics are the same as with lib.mkOrder. Smaller values are inserted first. Type: signed integer Default: 1000 Declared by: <nixpkgs/nixos/modules/services/logging/logrotate.nix>
