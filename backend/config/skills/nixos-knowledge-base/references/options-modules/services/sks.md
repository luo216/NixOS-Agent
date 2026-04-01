---
module: services.sks
option_count: 7
source: options.html
---

# services.sks

## services.sks.enable

Whether to enable SKS (synchronizing key server for OpenPGP) and start the database server. You need to create “${dataDir}/dump/*.gpg” for the initial import. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/sks.nix>

## services.sks.package

The sks package to use. Type: package Default: pkgs.sks Declared by: <nixpkgs/nixos/modules/services/security/sks.nix>

## services.sks.dataDir

Data directory (-basedir) for SKS, where the database and all configuration files are located (e.g. KDB, PTree, membership and sksconf). Type: absolute path Default: "/var/db/sks" Example: "/var/lib/sks" Declared by: <nixpkgs/nixos/modules/services/security/sks.nix>

## services.sks.extraDbConfig

Set contents of the files “KDB/DB_CONFIG” and “PTree/DB_CONFIG” within the ${dataDir} directory. This is used to configure options for the database for the sks key server. Documentation of available options are available in the file named “sampleConfig/DB_CONFIG” in the following repository: https://bitbucket.org/skskeyserver/sks-keyserver/src Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/security/sks.nix>

## services.sks.hkpAddress

Domain names, IPv4 and/or IPv6 addresses to listen on for HKP requests. Type: list of string Default: [ "127.0.0.1" "::1" ] Declared by: <nixpkgs/nixos/modules/services/security/sks.nix>

## services.sks.hkpPort

HKP port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 11371 Declared by: <nixpkgs/nixos/modules/services/security/sks.nix>

## services.sks.webroot

Source directory (will be symlinked, if not null) for the files the built-in webserver should serve. SKS (${pkgs.sks.webSamples}) provides the following examples: “HTML5”, “OpenPKG”, and “XHTML+ES”. The index file can be named index.html, index.htm, index.xhtm, or index.xhtml. Files with the extensions .css, .es, .js, .jpg, .jpeg, .png, or .gif are supported. Subdirectories and filenames with anything other than alphanumeric characters and the ‘.’ character will be ignored. Type: null or absolute path Default: "${package.webSamples}/OpenPKG" Declared by: <nixpkgs/nixos/modules/services/security/sks.nix>
