---
module: services.kasmweb
option_count: 13
source: options.html
---

# services.kasmweb

## services.kasmweb.enable

Whether to enable kasmweb. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/kasmweb/default.nix>

## services.kasmweb.datastorePath

The directory used to store all data for kasmweb. Type: string Default: "/var/lib/kasmweb" Declared by: <nixpkgs/nixos/modules/services/web-apps/kasmweb/default.nix>

## services.kasmweb.defaultAdminPassword

default admin password to use. Type: string Default: "kasmweb" Declared by: <nixpkgs/nixos/modules/services/web-apps/kasmweb/default.nix>

## services.kasmweb.defaultGuacToken

default guac token to use. Type: string Default: "kasmweb" Declared by: <nixpkgs/nixos/modules/services/web-apps/kasmweb/default.nix>

## services.kasmweb.defaultManagerToken

default manager token to use. Type: string Default: "kasmweb" Declared by: <nixpkgs/nixos/modules/services/web-apps/kasmweb/default.nix>

## services.kasmweb.defaultRegistrationToken

default registration token to use. Type: string Default: "kasmweb" Declared by: <nixpkgs/nixos/modules/services/web-apps/kasmweb/default.nix>

## services.kasmweb.defaultUserPassword

default user password to use. Type: string Default: "kasmweb" Declared by: <nixpkgs/nixos/modules/services/web-apps/kasmweb/default.nix>

## services.kasmweb.listenAddress

The address on which kasmweb should listen. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/web-apps/kasmweb/default.nix>

## services.kasmweb.listenPort

The port on which kasmweb should listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 443 Declared by: <nixpkgs/nixos/modules/services/web-apps/kasmweb/default.nix>

## services.kasmweb.networkSubnet

The network subnet to use for the containers. Type: string Default: "172.20.0.0/16" Declared by: <nixpkgs/nixos/modules/services/web-apps/kasmweb/default.nix>

## services.kasmweb.redisPassword

password to use for the redis cache. Type: string Default: "kasmweb" Declared by: <nixpkgs/nixos/modules/services/web-apps/kasmweb/default.nix>

## services.kasmweb.sslCertificate

The SSL certificate to be used for kasmweb. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/kasmweb/default.nix>

## services.kasmweb.sslCertificateKey

The SSL certificate’s key to be used for kasmweb. Make sure to specify this as a string and not a literal path, so that it is not accidentally included in your nixstore. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/kasmweb/default.nix>
