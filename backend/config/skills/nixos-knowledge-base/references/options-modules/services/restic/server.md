---
module: services.restic.server
option_count: 9
source: options.html
---

# services.restic.server

## services.restic.server.enable

Whether to enable Restic REST Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/restic-rest-server.nix>

## services.restic.server.package

The restic-rest-server package to use. Type: package Default: pkgs.restic-rest-server Declared by: <nixpkgs/nixos/modules/services/backup/restic-rest-server.nix>

## services.restic.server.appendOnly

Enable append only mode. This mode allows creation of new backups but prevents deletion and modification of existing backups. This can be useful when backing up systems that have a potential of being hacked. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/restic-rest-server.nix>

## services.restic.server.dataDir

The directory for storing the restic repository. Type: absolute path Default: "/var/lib/restic" Declared by: <nixpkgs/nixos/modules/services/backup/restic-rest-server.nix>

## services.restic.server.extraFlags

Extra commandline options to pass to Restic REST server. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/backup/restic-rest-server.nix>

## services.restic.server.htpasswd-file

The path to the servers .htpasswd file. Defaults to ${dataDir}/.htpasswd. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/backup/restic-rest-server.nix>

## services.restic.server.listenAddress

Listen on a specific IP address and port or unix socket. Type: string Default: "8000" Example: "127.0.0.1:8080" Declared by: <nixpkgs/nixos/modules/services/backup/restic-rest-server.nix>

## services.restic.server.privateRepos

Enable private repos. Grants access only when a subdirectory with the same name as the user is specified in the repository URL. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/restic-rest-server.nix>

## services.restic.server.prometheus

Enable Prometheus metrics at /metrics. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/restic-rest-server.nix>
