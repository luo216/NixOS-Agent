---
module: services.samba-wsdd
option_count: 10
source: options.html
---

# services.samba-wsdd

## services.samba-wsdd.enable

Whether to enable Web Services Dynamic Discovery host daemon. This enables (Samba) hosts, like your local NAS device, to be found by Web Service Discovery Clients like Windows . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba-wsdd.nix>

## services.samba-wsdd.discovery

Enable discovery operation mode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba-wsdd.nix>

## services.samba-wsdd.domain

Set domain name (disables workgroup). Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba-wsdd.nix>

## services.samba-wsdd.extraOptions

Additional wsdd options. Type: list of string Default: [ "--shortlog" ] Example: [ "--verbose" "--no-http" "--ipv4only" "--no-host" ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba-wsdd.nix>

## services.samba-wsdd.hoplimit

Hop limit for multicast packets (default = 1). Type: null or signed integer Default: null Example: 2 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba-wsdd.nix>

## services.samba-wsdd.hostname

Override (NetBIOS) hostname to be used (default hostname). Type: null or string Default: null Example: "FILESERVER" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba-wsdd.nix>

## services.samba-wsdd.interface

Interface or address to use. Type: null or string Default: null Example: "eth0" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba-wsdd.nix>

## services.samba-wsdd.listen

Listen on path or localhost port in discovery mode. Type: string Default: "/run/wsdd/wsdd.sock" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba-wsdd.nix>

## services.samba-wsdd.openFirewall

Whether to open the required firewall ports in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba-wsdd.nix>

## services.samba-wsdd.workgroup

Set workgroup name (default WORKGROUP). Type: null or string Default: null Example: "HOME" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba-wsdd.nix>
