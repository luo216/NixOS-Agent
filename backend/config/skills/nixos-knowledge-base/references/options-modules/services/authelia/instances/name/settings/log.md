---
module: services.authelia.instances.<name>.settings.log
option_count: 4
source: options.html
---

# services.authelia.instances.<name>.settings.log

## services.authelia.instances.<name>.settings.log.file_path

File path where the logs will be written. If not set logs are written to stdout. Type: null or absolute path Default: null Example: "/var/log/authelia/authelia.log" Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>

## services.authelia.instances.<name>.settings.log.format

Format the logs are written as. Type: one of “json”, “text” Default: "json" Example: "text" Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>

## services.authelia.instances.<name>.settings.log.keep_stdout

Whether to also log to stdout when a file_path is defined. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>

## services.authelia.instances.<name>.settings.log.level

Level of verbosity for logs. Type: one of “trace”, “debug”, “info”, “warn”, “error” Default: "debug" Example: "info" Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>
