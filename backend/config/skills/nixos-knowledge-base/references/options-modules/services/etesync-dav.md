---
module: services.etesync-dav
option_count: 7
source: options.html
---

# services.etesync-dav

## services.etesync-dav.enable

Whether to enable etesync-dav, end-to-end encrypted sync for contacts, calendars and tasks. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/etesync-dav.nix>

## services.etesync-dav.apiUrl

The url to the etesync API. Type: string Default: "https://api.etebase.com/partner/etesync/" Declared by: <nixpkgs/nixos/modules/services/misc/etesync-dav.nix>

## services.etesync-dav.host

The server host address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/misc/etesync-dav.nix>

## services.etesync-dav.openFirewall

Whether to open the firewall for the specified port. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/etesync-dav.nix>

## services.etesync-dav.port

The server host port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 37358 Declared by: <nixpkgs/nixos/modules/services/misc/etesync-dav.nix>

## services.etesync-dav.sslCertificate

Path to server SSL certificate. It will be copied into etesync-dav’s data directory. Type: null or absolute path Default: null Example: "/var/etesync.crt" Declared by: <nixpkgs/nixos/modules/services/misc/etesync-dav.nix>

## services.etesync-dav.sslCertificateKey

Path to server SSL certificate key. It will be copied into etesync-dav’s data directory. Type: null or absolute path Default: null Example: "/var/etesync.key" Declared by: <nixpkgs/nixos/modules/services/misc/etesync-dav.nix>
