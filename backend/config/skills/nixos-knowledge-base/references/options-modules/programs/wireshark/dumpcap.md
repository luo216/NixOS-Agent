---
module: programs.wireshark.dumpcap
option_count: 1
source: options.html
---

# programs.wireshark.dumpcap

## programs.wireshark.dumpcap.enable

Whether to allow users in the ‘wireshark’ group to capture network traffic. This configures a setcap wrapper for ‘dumpcap’ for users in the ‘wireshark’ group. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/programs/wireshark.nix>
