---
module: networking.ipips.<name>.encapsulation
option_count: 2
source: options.html
---

# networking.ipips.<name>.encapsulation

## networking.ipips.<name>.encapsulation.limit

For an IPv6-based tunnel, the maximum number of nested encapsulation to allow. 0 means no nesting, “none” unlimited. Type: value “none” (singular enum) or (unsigned integer, meaning >=0) Default: 4 Example: "none" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.ipips.<name>.encapsulation.type

Select the encapsulation type: ipip to create an IPv4 within IPv4 tunnel (RFC 2003). 4in6 to create a 4in6 tunnel (RFC 2473); ip6ip6 to create an IPv6 within IPv6 tunnel (RFC 2473); Note For encapsulating IPv6 within IPv4 packets, see the ad-hoc networking.sits option. Type: one of “ipip”, “4in6”, “ip6ip6” Default: "ipip" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
