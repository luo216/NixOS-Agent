---
module: services.openssh.listenAddresses.*
option_count: 2
source: options.html
---

# services.openssh.listenAddresses.*

## services.openssh.listenAddresses.*.addr

Host, IPv4 or IPv6 address to listen to. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.listenAddresses.*.port

Port to listen to. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>
