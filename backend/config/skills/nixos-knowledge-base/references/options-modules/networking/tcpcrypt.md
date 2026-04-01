---
module: networking.tcpcrypt
option_count: 1
source: options.html
---

# networking.tcpcrypt

## networking.tcpcrypt.enable

Whether to enable opportunistic TCP encryption. If the other end speaks Tcpcrypt, then your traffic will be encrypted; otherwise it will be sent in clear text. Thus, Tcpcrypt alone provides no guarantees – it is best effort. If, however, a Tcpcrypt connection is successful and any attackers that exist are passive, then Tcpcrypt guarantees privacy. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/tcpcrypt.nix>
