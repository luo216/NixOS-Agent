---
module: services.spoolman
option_count: 5
source: options.html
---

# services.spoolman

## services.spoolman.enable

Whether to enable Spoolman, a filament spool inventory management system… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/spoolman.nix>

## services.spoolman.environment

Environment variables to be passed to the spoolman service. Refer to https://github.com/Donkie/Spoolman/blob/master/.env.example for details on supported variables. Type: attribute set Default: { } Example: { SPOOLMAN_AUTOMATIC_BACKUP = "TRUE"; SPOOLMAN_BASE_PATH = "/spoolman"; SPOOLMAN_CORS_ORIGIN = "source1.domain.com:p1, source2.domain.com:p2"; SPOOLMAN_DB_TYPE = "sqlite"; SPOOLMAN_LOGGING_LEVEL = "DEBUG"; SPOOLMAN_METRICS_ENABLED = "TRUE"; } Declared by: <nixpkgs/nixos/modules/services/misc/spoolman.nix>

## services.spoolman.listen

The IP address to bind the spoolman server to. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/misc/spoolman.nix>

## services.spoolman.openFirewall

Open the appropriate ports in the firewall for spoolman. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/spoolman.nix>

## services.spoolman.port

TCP port where spoolman web-gui listens. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 7912 Declared by: <nixpkgs/nixos/modules/services/misc/spoolman.nix>
