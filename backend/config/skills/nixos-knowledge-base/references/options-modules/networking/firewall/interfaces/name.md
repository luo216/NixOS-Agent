---
module: networking.firewall.interfaces.<name>
option_count: 4
source: options.html
---

# networking.firewall.interfaces.<name>

## networking.firewall.interfaces.<name>.allowedTCPPortRanges

A range of TCP ports on which incoming connections are accepted. Type: list of attribute set of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: [ ] Example: [ { from = 8999; to = 9003; } ] Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.interfaces.<name>.allowedTCPPorts

List of TCP ports on which incoming connections are accepted. Type: list of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: [ ] Example: [ 22 80 ] Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.interfaces.<name>.allowedUDPPortRanges

Range of open UDP ports. Type: list of attribute set of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: [ ] Example: [ { from = 60000; to = 61000; } ] Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>

## networking.firewall.interfaces.<name>.allowedUDPPorts

List of open UDP ports. Type: list of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: [ ] Example: [ 53 ] Declared by: <nixpkgs/nixos/modules/services/networking/firewall.nix>
