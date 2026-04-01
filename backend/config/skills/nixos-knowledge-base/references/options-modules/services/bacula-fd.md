---
module: services.bacula-fd
option_count: 7
source: options.html
---

# services.bacula-fd

## services.bacula-fd.enable

Whether to enable the Bacula File Daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-fd.director

This option defines director resources in Bacula File Daemon. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-fd.extraClientConfig

Extra configuration to be passed in Client directive. Type: strings concatenated with “\n” Default: "" Example: '' Maximum Concurrent Jobs = 20; Heartbeat Interval = 30; '' Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-fd.extraMessagesConfig

Extra configuration to be passed in Messages directive. Type: strings concatenated with “\n” Default: "" Example: '' console = all '' Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-fd.name

The client name that must be used by the Director when connecting. Generally, it is a good idea to use a name related to the machine so that error messages can be easily identified if you have multiple Clients. This directive is required. Type: string Default: "${config.networking.hostName}-fd" Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-fd.port

This specifies the port number on which the Client listens for Director connections. It must agree with the FDPort specified in the Client resource of the Director’s configuration file. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9102 Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-fd.tls

TLS Options for the File Daemon. Important notice: The backup won’t be encrypted. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>
