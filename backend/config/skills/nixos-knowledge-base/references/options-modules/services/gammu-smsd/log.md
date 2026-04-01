---
module: services.gammu-smsd.log
option_count: 2
source: options.html
---

# services.gammu-smsd.log

## services.gammu-smsd.log.file

Path to file where information about communication will be stored Type: string Default: "syslog" Declared by: <nixpkgs/nixos/modules/services/misc/gammu-smsd.nix>

## services.gammu-smsd.log.format

Determines what will be logged to the LogFile Type: one of “nothing”, “text”, “textall”, “textalldate”, “errors”, “errorsdate”, “binary” Default: "errors" Declared by: <nixpkgs/nixos/modules/services/misc/gammu-smsd.nix>
