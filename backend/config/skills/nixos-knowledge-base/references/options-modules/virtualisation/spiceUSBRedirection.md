---
module: virtualisation.spiceUSBRedirection
option_count: 1
source: options.html
---

# virtualisation.spiceUSBRedirection

## virtualisation.spiceUSBRedirection.enable

Install the SPICE USB redirection helper with setuid privileges. This allows unprivileged users to pass USB devices connected to this machine to libvirt VMs, both local and remote. Note that this allows users arbitrary access to USB devices. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/spice-usb-redirection.nix>
