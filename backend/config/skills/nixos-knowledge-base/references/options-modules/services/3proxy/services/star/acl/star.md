---
module: services._3proxy.services.*.acl.*
option_count: 5
source: options.html
---

# services._3proxy.services.*.acl.*

## services._3proxy.services.*.acl.*.rule

ACL rule. The following values are valid: "allow": connections allowed. "deny": connections not allowed. Type: one of “allow”, “deny” Example: "allow" Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.services.*.acl.*.sources

List of source IP range, use empty list for any. Type: list of string Default: [ ] Example: [ "127.0.0.1" "192.168.1.0/24" ] Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.services.*.acl.*.targetPorts

List of target ports, use empty list for any. Type: list of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: [ ] Example: [ 80 443 ] Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.services.*.acl.*.targets

List of target IP ranges, use empty list for any. May also contain host names instead of addresses. It’s possible to use wildmask in the beginning and in the the end of hostname, e.g. *badsite.com or *badcontent*. Hostname is only checked if hostname presents in request. Type: list of string Default: [ ] Example: [ "127.0.0.1" "192.168.1.0/24" ] Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.services.*.acl.*.users

List of users, use empty list for any. Type: list of string Default: [ ] Example: [ "user1" "user2" "user3" ] Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>
