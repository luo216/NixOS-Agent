---
module: services.moosefs.cgiserver
option_count: 3
source: options.html
---

# services.moosefs.cgiserver

## services.moosefs.cgiserver.enable

Whether to enable MooseFS GUI server (mfsgui) for web interface. Warning: The GUI server interface should be properly secured from unauthorized access, as it provides full control over your MooseFS installation. . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/moosefs.nix>

## services.moosefs.cgiserver.openFirewall

Whether to automatically open the web interface port. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/moosefs.nix>

## services.moosefs.cgiserver.settings

GUI server configuration options. Type: open submodule of attribute set of (Flat key-value file) Default: { } Declared by: <nixpkgs/nixos/modules/services/network-filesystems/moosefs.nix>
