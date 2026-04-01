---
module: services.bacula-dir
option_count: 8
source: options.html
---

# services.bacula-dir

## services.bacula-dir.enable

Whether to enable Bacula Director Daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-dir.extraConfig

Extra configuration for Bacula Director Daemon. Type: strings concatenated with “\n” Default: "" Example: '' TODO '' Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-dir.extraDirectorConfig

Extra configuration to be passed in Director directive. Type: strings concatenated with “\n” Default: "" Example: '' Maximum Concurrent Jobs = 20; Heartbeat Interval = 30; '' Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-dir.extraMessagesConfig

Extra configuration to be passed in Messages directive. Type: strings concatenated with “\n” Default: "" Example: '' console = all '' Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-dir.name

The director name used by the system administrator. This directive is required. Type: string Default: "${config.networking.hostName}-dir" Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-dir.password

Specifies the password that must be supplied for a Director. Type: string Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-dir.port

Specify the port (a positive integer) on which the Director daemon will listen for Bacula Console connections. This same port number must be specified in the Director resource of the Console configuration file. The default is 9101, so normally this directive need not be specified. This directive should not be used if you specify DirAddresses (N.B plural) directive. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9101 Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-dir.tls

TLS Options for the Director. Important notice: The backup won’t be encrypted. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>
