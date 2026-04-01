---
module: services.galene
option_count: 15
source: options.html
---

# services.galene

## services.galene.enable

Whether to enable Galene Service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/galene.nix>

## services.galene.package

The galene package to use. Type: package Default: pkgs.galene Declared by: <nixpkgs/nixos/modules/services/web-apps/galene.nix>

## services.galene.certFile

Path to the server’s certificate. The file is copied at runtime to Galene’s data directory where it needs to reside. Type: null or absolute path Default: null Example: "/path/to/your/cert.pem" Declared by: <nixpkgs/nixos/modules/services/web-apps/galene.nix>

## services.galene.dataDir

Data directory. Type: absolute path Default: "${config.services.galene.stateDir}/data" Example: "/var/lib/galene/data" Declared by: <nixpkgs/nixos/modules/services/web-apps/galene.nix>

## services.galene.group

Group under which galene runs. Type: string Default: "galene" Declared by: <nixpkgs/nixos/modules/services/web-apps/galene.nix>

## services.galene.groupsDir

Web server directory. Type: absolute path Default: "${config.services.galene.stateDir}/groups" Example: "/var/lib/galene/groups" Declared by: <nixpkgs/nixos/modules/services/web-apps/galene.nix>

## services.galene.httpAddress

HTTP listen address for galene. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/galene.nix>

## services.galene.httpPort

HTTP listen port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8443 Declared by: <nixpkgs/nixos/modules/services/web-apps/galene.nix>

## services.galene.insecure

Whether Galene should listen in http or in https. If left as the default value (false), Galene needs to be fed a private key and a certificate. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/galene.nix>

## services.galene.keyFile

Path to the server’s private key. The file is copied at runtime to Galene’s data directory where it needs to reside. Type: null or absolute path Default: null Example: "/path/to/your/key.pem" Declared by: <nixpkgs/nixos/modules/services/web-apps/galene.nix>

## services.galene.recordingsDir

Recordings directory. Type: absolute path Default: "${config.services.galene.stateDir}/recordings" Example: "/var/lib/galene/recordings" Declared by: <nixpkgs/nixos/modules/services/web-apps/galene.nix>

## services.galene.stateDir

The directory where Galene stores its internal state. If left as the default value this directory will automatically be created before the Galene server starts, otherwise the sysadmin is responsible for ensuring the directory exists with appropriate ownership and permissions. Type: absolute path Default: "/var/lib/galene" Declared by: <nixpkgs/nixos/modules/services/web-apps/galene.nix>

## services.galene.staticDir

Web server directory. Type: absolute path Default: "${package.static}/static" Example: "/var/lib/galene/static" Declared by: <nixpkgs/nixos/modules/services/web-apps/galene.nix>

## services.galene.turnAddress

Built-in TURN server listen address and port. Set to “” to disable. Type: string Default: "auto" Example: "127.0.0.1:1194" Declared by: <nixpkgs/nixos/modules/services/web-apps/galene.nix>

## services.galene.user

User account under which galene runs. Type: string Default: "galene" Declared by: <nixpkgs/nixos/modules/services/web-apps/galene.nix>
