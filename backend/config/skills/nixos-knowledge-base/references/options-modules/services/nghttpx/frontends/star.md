---
module: services.nghttpx.frontends.*
option_count: 2
source: options.html
---

# services.nghttpx.frontends.*

## services.nghttpx.frontends.*.params

Parameters to configure a backend. Type: null or (submodule) Default: null Example: { tls = "tls"; } Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>

## services.nghttpx.frontends.*.server

Frontend server interface binding specification as either a host:port pair or a unix domain docket. NB: a host of “*” listens on all interfaces and includes IPv6 addresses. Type: (submodule) or absolute path Default: { host = "127.0.0.1"; port = 80; } Example: { host = "127.0.0.1"; port = 8888; } Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>
