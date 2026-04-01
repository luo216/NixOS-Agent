---
module: services.ostinato.portList
option_count: 2
source: options.html
---

# services.ostinato.portList

## services.ostinato.portList.exclude

A list of ports does not appear on the port list managed by drone. Type: list of string Default: [ ] Example: [ "usbmon*" "eth0" ] Declared by: <nixpkgs/nixos/modules/services/networking/ostinato.nix>

## services.ostinato.portList.include

For a port to pass the filter and appear on the port list managed by drone, it be allowed by this include list. Type: list of string Default: [ ] Example: [ "eth*" "lo*" ] Declared by: <nixpkgs/nixos/modules/services/networking/ostinato.nix>
