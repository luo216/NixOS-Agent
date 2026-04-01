---
module: programs.wireshark
option_count: 2
source: options.html
---

# programs.wireshark

## programs.wireshark.enable

Whether to add Wireshark to the global environment and create a ‘wireshark’ group. To configure what users can capture, set the dumpcap.enable and usbmon.enable options. By default, users in the ‘wireshark’ group are allowed to capture network traffic but not USB traffic. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/wireshark.nix>

## programs.wireshark.package

The wireshark-cli package to use. Type: package Default: pkgs.wireshark-cli Example: wireshark Declared by: <nixpkgs/nixos/modules/programs/wireshark.nix>
