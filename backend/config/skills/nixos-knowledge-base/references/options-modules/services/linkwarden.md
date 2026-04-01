---
module: services.linkwarden
option_count: 13
source: options.html
---

# services.linkwarden

## services.linkwarden.enable

Whether to enable Linkwarden. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/linkwarden.nix>

## services.linkwarden.enableRegistration

Whether to enable registration for new users. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/linkwarden.nix>

## services.linkwarden.package

The linkwarden package to use. Type: package Default: pkgs.linkwarden Declared by: <nixpkgs/nixos/modules/services/web-apps/linkwarden.nix>

## services.linkwarden.cacheLocation

Directory used as cache. If it is not the default, the directory has to be created manually such that the linkwarden user is able to read and write to it. Type: absolute path Default: "/var/cache/linkwarden" Declared by: <nixpkgs/nixos/modules/services/web-apps/linkwarden.nix>

## services.linkwarden.environment

Extra configuration environment variables. Refer to the documentation for options. Type: attribute set of string Default: { } Example: { PAGINATION_TAKE_COUNT = "50"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/linkwarden.nix>

## services.linkwarden.environmentFile

Path of a file with extra environment variables to be loaded from disk. This file is not added to the nix store, so it can be used to pass secrets to linkwarden. Refer to the documentation for options. Linkwarden needs at least a nextauth secret. To set a database password use POSTGRES_PASSWORD: NEXTAUTH_SECRET=<secret> POSTGRES_PASSWORD=<pass> Type: null or string Default: null Example: "/run/secrets/linkwarden" Declared by: <nixpkgs/nixos/modules/services/web-apps/linkwarden.nix>

## services.linkwarden.group

The group Linkwarden should run as. Type: string Default: "linkwarden" Declared by: <nixpkgs/nixos/modules/services/web-apps/linkwarden.nix>

## services.linkwarden.host

The host that Linkwarden will listen on. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/linkwarden.nix>

## services.linkwarden.openFirewall

Whether to open the Linkwarden port in the firewall Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/linkwarden.nix>

## services.linkwarden.port

The port that Linkwarden will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/web-apps/linkwarden.nix>

## services.linkwarden.secretFiles

Attribute set containing paths to files to add to the environment of linkwarden. The files are not added to the nix store, so they can be used to pass secrets to linkwarden. Refer to the documentation for options. Linkwarden needs at least a nextauth secret. To set a database password use POSTGRES_PASSWORD: NEXTAUTH_SECRET=<secret> POSTGRES_PASSWORD=<pass> Type: attribute set of (null or string) Default: { } Example: { NEXTAUTH_SECRET = "/run/secrets/linkwarden_secret"; POSTGRES_PASSWORD = "/run/secrets/linkwarden_postgres_passwd"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/linkwarden.nix>

## services.linkwarden.storageLocation

Directory used to store media files. If it is not the default, the directory has to be created manually such that the linkwarden user is able to read and write to it. Type: absolute path Default: "/var/lib/linkwarden" Declared by: <nixpkgs/nixos/modules/services/web-apps/linkwarden.nix>

## services.linkwarden.user

The user Linkwarden should run as. Type: string Default: "linkwarden" Declared by: <nixpkgs/nixos/modules/services/web-apps/linkwarden.nix>
