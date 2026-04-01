---
module: services.photoprism
option_count: 10
source: options.html
---

# services.photoprism

## services.photoprism.enable

Whether to enable Photoprism web server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/photoprism.nix>

## services.photoprism.package

The photoprism package to use. Type: package Default: pkgs.photoprism Declared by: <nixpkgs/nixos/modules/services/web-apps/photoprism.nix>

## services.photoprism.address

Web interface address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/photoprism.nix>

## services.photoprism.databasePasswordFile

Database password file. Type: null or absolute path not in the Nix store Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/photoprism.nix>

## services.photoprism.importPath

Relative or absolute to the originalsPath from where the files should be imported. Type: string Default: "import" Declared by: <nixpkgs/nixos/modules/services/web-apps/photoprism.nix>

## services.photoprism.originalsPath

Storage path of your original media files (photos and videos). Type: absolute path Default: null Example: "/data/photos" Declared by: <nixpkgs/nixos/modules/services/web-apps/photoprism.nix>

## services.photoprism.passwordFile

Admin password file. Type: null or absolute path not in the Nix store Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/photoprism.nix>

## services.photoprism.port

Web interface port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 2342 Declared by: <nixpkgs/nixos/modules/services/web-apps/photoprism.nix>

## services.photoprism.settings

See the getting-started guide for available options. Type: attribute set of string Default: { } Example: { PHOTOPRISM_ADMIN_USER = "root"; PHOTOPRISM_DEFAULT_LOCALE = "de"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/photoprism.nix>

## services.photoprism.storagePath

Location for sidecar, cache, and database files. Type: absolute path Default: "/var/lib/photoprism" Declared by: <nixpkgs/nixos/modules/services/web-apps/photoprism.nix>
