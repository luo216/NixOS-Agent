---
module: services.sftpgo
option_count: 9
source: options.html
---

# services.sftpgo

## services.sftpgo.enable

sftpgo Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>

## services.sftpgo.package

The sftpgo package to use. Type: package Default: pkgs.sftpgo Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>

## services.sftpgo.dataDir

The directory where SFTPGo stores its data files. Type: absolute path Default: "/var/lib/sftpgo" Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>

## services.sftpgo.extraArgs

Additional command line arguments to pass to the sftpgo daemon. Type: list of string Default: [ ] Example: [ "--log-level" "info" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>

## services.sftpgo.extraReadWriteDirs

Extra directories where SFTPGo is allowed to write to. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>

## services.sftpgo.group

Group name under which SFTPGo runs. Type: string Default: "sftpgo" Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>

## services.sftpgo.loadDataFile

Path to a json file containing users and folders to load (or update) on startup. Check the documentation for the --loaddata-from command line argument for more info. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>

## services.sftpgo.settings

The primary sftpgo configuration. See the configuration reference for possible values. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>

## services.sftpgo.user

User account name under which SFTPGo runs. Type: string Default: "sftpgo" Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>
