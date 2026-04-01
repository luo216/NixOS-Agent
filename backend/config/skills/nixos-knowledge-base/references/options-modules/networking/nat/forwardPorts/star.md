---
module: networking.nat.forwardPorts.*
option_count: 4
source: options.html
---

# networking.nat.forwardPorts.*

## networking.nat.forwardPorts.*.destination

Forward connection to destination ip:port (or [ipv6]:port); to specify a port range, use ip:start-end Type: string Example: "10.0.0.1:80" Declared by: <nixpkgs/nixos/modules/services/networking/nat.nix>

## networking.nat.forwardPorts.*.loopbackIPs

Public IPs for NAT reflection; for connections to loopbackip:sourcePort from the host itself and from other hosts behind NAT Type: list of string Default: [ ] Example: [ "55.1.2.3" ] Declared by: <nixpkgs/nixos/modules/services/networking/nat.nix>

## networking.nat.forwardPorts.*.proto

Protocol of forwarded connection Type: string Default: "tcp" Example: "udp" Declared by: <nixpkgs/nixos/modules/services/networking/nat.nix>

## networking.nat.forwardPorts.*.sourcePort

Source port of the external interface; to specify a port range, use a string with a colon (e.g. “60000:61000”) Type: signed integer or string matching the pattern [[:digit:]]+:[[:digit:]]+ Example: 8080 Declared by: <nixpkgs/nixos/modules/services/networking/nat.nix>
