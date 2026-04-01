---
module: virtualisation.libvirtd.nss
option_count: 2
source: options.html
---

# virtualisation.libvirtd.nss

## virtualisation.libvirtd.nss.enable

This option enables the older libvirt NSS module. This method uses DHCP server records, therefore is dependent on the hostname provided by the guest. Please see https://libvirt.org/nss.html for more information. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.nss.enableGuest

This option enables the newer libvirt_guest NSS module. This module uses the libvirt guest name instead of the hostname of the guest. Please see https://libvirt.org/nss.html for more information. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>
