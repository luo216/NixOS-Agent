---
module: services.rshim
option_count: 7
source: options.html
---

# services.rshim

## services.rshim.enable

Whether to enable user-space rshim driver for the BlueField SoC. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/rshim.nix>

## services.rshim.package

The rshim-user-space package to use. Type: package Default: pkgs.rshim-user-space Declared by: <nixpkgs/nixos/modules/services/misc/rshim.nix>

## services.rshim.backend

Specify the backend to attach. If not specified, the driver will scan all rshim backends unless the device option is given with a device name specified. Type: null or one of “usb”, “pcie”, “pcie_lf” Default: null Example: "pcie" Declared by: <nixpkgs/nixos/modules/services/misc/rshim.nix>

## services.rshim.config

Structural setting for the rshim configuration file (/etc/rshim.conf). It can be used to specify the static mapping between rshim devices and rshim names. It can also be used to ignore some rshim devices. Type: attribute set of (signed integer or string) Default: { } Example: { DISPLAY_LEVEL = 0; none = "usb-1-1.4"; rshim0 = "usb-2-1.7"; } Declared by: <nixpkgs/nixos/modules/services/misc/rshim.nix>

## services.rshim.device

Specify the device name to attach. The backend driver can be deduced from the device name, thus the backend option is not needed. Type: null or string Default: null Example: "pcie-04:00.2" Declared by: <nixpkgs/nixos/modules/services/misc/rshim.nix>

## services.rshim.index

Specify the index to create device path /dev/rshim<index>. It’s also used to create network interface name tmfifo_net<index>. This option is needed when multiple rshim instances are running. Type: null or signed integer Default: null Example: 1 Declared by: <nixpkgs/nixos/modules/services/misc/rshim.nix>

## services.rshim.log-level

Specify the log level (0:none, 1:error, 2:warning, 3:notice, 4:debug). Type: integer between 0 and 4 (both inclusive) Default: 2 Example: 4 Declared by: <nixpkgs/nixos/modules/services/misc/rshim.nix>
