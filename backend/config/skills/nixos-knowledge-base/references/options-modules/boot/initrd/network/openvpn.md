---
module: boot.initrd.network.openvpn
option_count: 2
source: options.html
---

# boot.initrd.network.openvpn

## boot.initrd.network.openvpn.enable

Starts an OpenVPN client during initrd boot. It can be used to e.g. remotely accessing the SSH service controlled by boot.initrd.network.ssh or other network services included. Service is killed when stage-1 boot is finished. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/initrd-openvpn.nix>

## boot.initrd.network.openvpn.configuration

The configuration file for OpenVPN. Warning Unless your bootloader supports initrd secrets, this configuration is stored insecurely in the global Nix store. Type: absolute path Example: ./configuration.ovpn Declared by: <nixpkgs/nixos/modules/system/boot/initrd-openvpn.nix>
