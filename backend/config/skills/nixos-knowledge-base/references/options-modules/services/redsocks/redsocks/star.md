---
module: services.redsocks.redsocks.*
option_count: 10
source: options.html
---

# services.redsocks.redsocks.*

## services.redsocks.redsocks.*.disclose_src

Way to disclose client IP to the proxy. “false”: do not disclose http-connect supports the following ways: “X-Forwarded-For”: add header “X-Forwarded-For: IP” “Forwarded_ip”: add header “Forwarded: for=IP” (see RFC7239) “Forwarded_ipport”: add header ‘Forwarded: for=“IP:port”’ Type: one of “false”, “X-Forwarded-For”, “Forwarded_ip”, “Forwarded_ipport” Default: "false" Declared by: <nixpkgs/nixos/modules/services/networking/redsocks.nix>

## services.redsocks.redsocks.*.doNotRedirect

Iptables filters that if matched will get the packet off of redsocks. Type: list of string Default: [ ] Example: [ "-d 1.2.3.4" ] Declared by: <nixpkgs/nixos/modules/services/networking/redsocks.nix>

## services.redsocks.redsocks.*.ip

IP on which redsocks should listen. Defaults to 127.0.0.1 for security reasons. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/redsocks.nix>

## services.redsocks.redsocks.*.login

Login to send to proxy. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/redsocks.nix>

## services.redsocks.redsocks.*.password

Password to send to proxy. WARNING, this will end up world-readable in the store! Awaiting https://github.com/NixOS/nix/issues/8 to be able to fix. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/redsocks.nix>

## services.redsocks.redsocks.*.port

Port on which redsocks should listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 12345 Declared by: <nixpkgs/nixos/modules/services/networking/redsocks.nix>

## services.redsocks.redsocks.*.proxy

Proxy through which redsocks should forward incoming traffic. Example: “example.org:8080” Type: string Declared by: <nixpkgs/nixos/modules/services/networking/redsocks.nix>

## services.redsocks.redsocks.*.redirectCondition

Conditions to make outbound packets go through this redsocks instance. If set to false, no packet will be forwarded. If set to true, all packets will be forwarded (except packets excluded by redirectInternetOnly). If set to a string, this is an iptables filter that will be matched against packets before getting them into redsocks. For example, setting it to “–dport 80” will only send packets to port 80 to redsocks. Note “-p tcp” is always implicitly added, as udp can only be proxied through redudp or the like. Type: boolean or string Default: false Declared by: <nixpkgs/nixos/modules/services/networking/redsocks.nix>

## services.redsocks.redsocks.*.redirectInternetOnly

Exclude all non-globally-routable IPs from redsocks Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/redsocks.nix>

## services.redsocks.redsocks.*.type

Type of proxy. Type: one of “socks4”, “socks5”, “http-connect”, “http-relay” Declared by: <nixpkgs/nixos/modules/services/networking/redsocks.nix>
