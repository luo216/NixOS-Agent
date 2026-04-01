---
module: services.varnish.listen.*
option_count: 7
source: options.html
---

# services.varnish.listen.*

## services.varnish.listen.*.address

If given an IP address, it can be a host name (“localhost”), an IPv4 dotted-quad (“127.0.0.1”) or an IPv6 address enclosed in square brackets (“[::1]”). (VCL4.1 and higher) If given an absolute Path (“/path/to/listen.sock”) or “@” followed by the name of an abstract socket (“@myvarnishd”) accept connections on a Unix domain socket. The user, group and mode sub-arguments may be used to specify the permissions of the socket file. These sub-arguments do not apply to abstract sockets. Type: string Declared by: <nixpkgs/nixos/modules/services/web-servers/varnish/default.nix>

## services.varnish.listen.*.group

Group name who owns the socket file. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/varnish/default.nix>

## services.varnish.listen.*.mode

Permission of the socket file (3-digit octal value). Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/varnish/default.nix>

## services.varnish.listen.*.name

Name is referenced in logs. If name is not specified, ‘a0’, ‘a1’, etc. is used. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/varnish/default.nix>

## services.varnish.listen.*.port

The port to use for IP sockets. If port is not specified, port 80 (http) is used. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/varnish/default.nix>

## services.varnish.listen.*.proto

PROTO can be ‘HTTP’ (the default) or ‘PROXY’. Both version 1 and 2 of the proxy protocol can be used. Type: one of “HTTP”, “PROXY” Default: "HTTP" Declared by: <nixpkgs/nixos/modules/services/web-servers/varnish/default.nix>

## services.varnish.listen.*.user

User name who owns the socket file. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/varnish/default.nix>
