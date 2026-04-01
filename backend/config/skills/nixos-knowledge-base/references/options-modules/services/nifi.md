---
module: services.nifi
option_count: 13
source: options.html
---

# services.nifi

## services.nifi.enable

Whether to enable Apache NiFi. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/nifi.nix>

## services.nifi.enableHTTPS

Enable HTTPS protocol. Don`t use in production. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/nifi.nix>

## services.nifi.package

The nifi package to use. Type: package Default: pkgs.nifi Declared by: <nixpkgs/nixos/modules/services/web-apps/nifi.nix>

## services.nifi.group

Group account where Apache NiFi runs. Type: string Default: "nifi" Declared by: <nixpkgs/nixos/modules/services/web-apps/nifi.nix>

## services.nifi.initJavaHeapSize

Set the initial heap size for the JVM in MB. Type: null or signed integer Default: null Example: 1024 Declared by: <nixpkgs/nixos/modules/services/web-apps/nifi.nix>

## services.nifi.initPasswordFile

nitial password for Apache NiFi. Password must be at least 12 characters. Type: null or absolute path Default: null Example: "/run/keys/nifi/password-nifi" Declared by: <nixpkgs/nixos/modules/services/web-apps/nifi.nix>

## services.nifi.initUser

Initial user account for Apache NiFi. Username must be at least 4 characters. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/nifi.nix>

## services.nifi.listenHost

Bind to an ip for Apache NiFi web-ui. Type: string Default: if config.services.nifi.enableHTTPS then "0.0.0.0" else "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/nifi.nix>

## services.nifi.listenPort

Bind to a port for Apache NiFi web-ui. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: if config.services.nifi.enableHTTPS then "8443" else "8000" Declared by: <nixpkgs/nixos/modules/services/web-apps/nifi.nix>

## services.nifi.maxJavaHeapSize

Set the initial heap size for the JVM in MB. Type: null or signed integer Default: null Example: 2048 Declared by: <nixpkgs/nixos/modules/services/web-apps/nifi.nix>

## services.nifi.proxyHost

Allow requests from a specific host. Type: null or string Default: if config.services.nifi.enableHTTPS then "0.0.0.0" else null Declared by: <nixpkgs/nixos/modules/services/web-apps/nifi.nix>

## services.nifi.proxyPort

Allow requests from a specific port. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: if config.services.nifi.enableHTTPS then "8443" else null Declared by: <nixpkgs/nixos/modules/services/web-apps/nifi.nix>

## services.nifi.user

User account where Apache NiFi runs. Type: string Default: "nifi" Declared by: <nixpkgs/nixos/modules/services/web-apps/nifi.nix>
