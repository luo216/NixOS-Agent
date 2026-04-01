---
module: services.nntp-proxy
option_count: 13
source: options.html
---

# services.nntp-proxy

## services.nntp-proxy.enable

Whether to enable NNTP-Proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nntp-proxy.nix>

## services.nntp-proxy.listenAddress

Proxy listen address (IPv6 literal addresses need to be enclosed in “[” and “]” characters) Type: string Default: "127.0.0.1" Example: "[::]" Declared by: <nixpkgs/nixos/modules/services/networking/nntp-proxy.nix>

## services.nntp-proxy.port

Proxy listen port Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5555 Declared by: <nixpkgs/nixos/modules/services/networking/nntp-proxy.nix>

## services.nntp-proxy.prohibitPosting

Whether to prohibit posting to the upstream server Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/nntp-proxy.nix>

## services.nntp-proxy.sslCert

Proxy ssl certificate path Type: string Default: "cert.pem" Example: "/path/to/your/cert.file" Declared by: <nixpkgs/nixos/modules/services/networking/nntp-proxy.nix>

## services.nntp-proxy.sslKey

Proxy ssl key path Type: string Default: "key.pem" Example: "/path/to/your/key.file" Declared by: <nixpkgs/nixos/modules/services/networking/nntp-proxy.nix>

## services.nntp-proxy.upstreamMaxConnections

Upstream server maximum allowed concurrent connections Type: signed integer Default: 20 Declared by: <nixpkgs/nixos/modules/services/networking/nntp-proxy.nix>

## services.nntp-proxy.upstreamPassword

Upstream server password Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/nntp-proxy.nix>

## services.nntp-proxy.upstreamPort

Upstream server port Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 563 Declared by: <nixpkgs/nixos/modules/services/networking/nntp-proxy.nix>

## services.nntp-proxy.upstreamServer

Upstream server address Type: string Default: "" Example: "ssl-eu.astraweb.com" Declared by: <nixpkgs/nixos/modules/services/networking/nntp-proxy.nix>

## services.nntp-proxy.upstreamUser

Upstream server username Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/nntp-proxy.nix>

## services.nntp-proxy.users

NNTP-Proxy user configuration Type: attribute set of (submodule) Default: { } Example: { "user1" = { passwordHash = "$6$1l0t5Kn2Dk$appzivc./9l/kjq57eg5UCsBKlcfyCr0zNWYNerKoPsI1d7eAwiT0SVsOVx/CTgaBNT/u4fi2vN.iGlPfv1ek0"; maxConnections = 5; }; "anotheruser" = { passwordHash = "$6$6lwEsWB.TmsS$W7m1riUx4QrA8pKJz8hvff0dnF1NwtZXgdjmGqA1Dx2MDPj07tI9GNcb0SWlMglE.2/hBgynDdAd/XqqtRqVQ0"; maxConnections = 7; }; } Declared by: <nixpkgs/nixos/modules/services/networking/nntp-proxy.nix>

## services.nntp-proxy.verbosity

Verbosity level Type: one of “error”, “warning”, “notice”, “info”, “debug” Default: "info" Example: "error" Declared by: <nixpkgs/nixos/modules/services/networking/nntp-proxy.nix>
