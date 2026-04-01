---
module: services.opengfw.settings.io
option_count: 5
source: options.html
---

# services.opengfw.settings.io

## services.opengfw.settings.io.local

Set to false if you want to run OpenGFW on FORWARD chain. (e.g. on a router) Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.settings.io.queueSize

IO queue size. Type: signed integer Default: 1024 Example: 2048 Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.settings.io.rcvBuf

Netlink receive buffer size. Type: signed integer Default: 4194304 Example: 2097152 Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.settings.io.rst

Set to true if you want to send RST for blocked TCP connections, needs local = false. Type: boolean Default: "`!config.services.opengfw.settings.io.local`" Example: false Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.settings.io.sndBuf

Netlink send buffer size. Type: signed integer Default: 4194304 Example: 2097152 Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>
