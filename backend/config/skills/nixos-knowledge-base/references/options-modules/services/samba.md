---
module: services.samba
option_count: 5
source: options.html
---

# services.samba

## services.samba.enable

Whether to enable Samba, the SMB/CIFS protocol. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba.nix>

## services.samba.package

The samba package to use. Type: package Default: pkgs.samba Example: samba4Full Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba.nix>

## services.samba.nsswins

Whether to enable WINS NSS (Name Service Switch) plug-in. Enabling it allows applications to resolve WINS/NetBIOS names (a.k.a. Windows machine names) by transparently querying the winbindd daemon . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba.nix>

## services.samba.openFirewall

Whether to enable opening the default ports in the firewall for Samba. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba.nix>

## services.samba.settings

Configuration file for the Samba suite in ini format. This file is located in /etc/samba/smb.conf Refer to https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html for all available options. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string) or a non-empty list of them) Default: { global = { "invalid users" = [ "root" ]; "passwd program" = "/run/wrappers/bin/passwd %u"; security = "user"; }; } Example: { global = { "invalid users" = [ "root" ]; "passwd program" = "/run/wrappers/bin/passwd %u"; security = "user"; }; public = { browseable = "yes"; comment = "Public samba share."; "guest ok" = "yes"; path = "/srv/public"; "read only" = "yes"; }; } Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba.nix>
