---
module: services.vwifi.client
option_count: 5
source: options.html
---

# services.vwifi.client

## services.vwifi.client.enable

Whether to enable vwifi client. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/vwifi.nix>

## services.vwifi.client.extraArgs

Extra arguments to pass to vwifi-client. You can use this if you want to bring the radios up using vwifi-client instead of at boot. Type: list of string Default: [ ] Example: [ "--number" "3" ] Declared by: <nixpkgs/nixos/modules/services/networking/vwifi.nix>

## services.vwifi.client.serverAddress

The address of the server. If set to null, will try to use the vsock protocol. Note that this assumes that the server is spawned on the host and passed through to QEMU, with something like: -device vhost-vsock-pci,id=vwifi0,guest-cid=42 Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/vwifi.nix>

## services.vwifi.client.serverPort

The server port port. Set to null if we should leave it unset. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/vwifi.nix>

## services.vwifi.client.spy

Whether to enable spy mode, useful for wireless monitors. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/vwifi.nix>
