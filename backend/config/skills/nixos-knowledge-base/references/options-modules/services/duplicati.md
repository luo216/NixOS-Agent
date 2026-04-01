---
module: services.duplicati
option_count: 8
source: options.html
---

# services.duplicati

## services.duplicati.enable

Whether to enable Duplicati. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/duplicati.nix>

## services.duplicati.package

The duplicati package to use. Type: package Default: pkgs.duplicati Declared by: <nixpkgs/nixos/modules/services/backup/duplicati.nix>

## services.duplicati.dataDir

The directory where Duplicati stores its data files. Note If left as the default value this directory will automatically be created before the Duplicati server starts, otherwise you are responsible for ensuring the directory exists with appropriate ownership and permissions. Type: string Default: "/var/lib/duplicati" Declared by: <nixpkgs/nixos/modules/services/backup/duplicati.nix>

## services.duplicati.interface

Listening interface for the web UI Set it to “any” to listen on all available interfaces Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/backup/duplicati.nix>

## services.duplicati.parameters

This option can be used to store some or all of the options given to the commandline client. Each line in this option should be of the format --option=value. The options in this file take precedence over the options provided through command line arguments. <link xlink:href=“https://duplicati.readthedocs.io/en/latest/06-advanced-options/#parameters-file”>Duplicati docs: parameters-file</link> Type: strings concatenated with “\n” Default: "" Example: '' --webservice-allowedhostnames=* '' Declared by: <nixpkgs/nixos/modules/services/backup/duplicati.nix>

## services.duplicati.parametersFile

This file can be used to store some or all of the options given to the commandline client. Each line in the file option should be of the format --option=value. The options in this file take precedence over the options provided through command line arguments. <link xlink:href=“https://duplicati.readthedocs.io/en/latest/06-advanced-options/#parameters-file”>Duplicati docs: parameters-file</link> Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/backup/duplicati.nix>

## services.duplicati.port

Port serving the web interface Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8200 Declared by: <nixpkgs/nixos/modules/services/backup/duplicati.nix>

## services.duplicati.user

Duplicati runs as it’s own user. It will only be able to backup world-readable files. Run as root with special care. Type: string Default: "duplicati" Declared by: <nixpkgs/nixos/modules/services/backup/duplicati.nix>
