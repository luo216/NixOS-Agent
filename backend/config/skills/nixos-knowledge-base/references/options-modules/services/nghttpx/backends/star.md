---
module: services.nghttpx.backends.*
option_count: 3
source: options.html
---

# services.nghttpx.backends.*

## services.nghttpx.backends.*.params

Parameters to configure a backend. Type: null or (submodule) Default: null Example: { proto = "h2"; tls = true; } Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>

## services.nghttpx.backends.*.patterns

List of nghttpx backend patterns. Please see https://nghttp2.org/documentation/nghttpx.1.html#cmdoption-nghttpx-b for more information on the pattern syntax and nghttpxs behavior. Type: list of string Default: [ ] Example: [ "*.host.net/v1/" "host.org/v2/mypath" "/somepath" ] Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>

## services.nghttpx.backends.*.server

Backend server location specified as either a host:port pair or a unix domain docket. Type: (submodule) or absolute path Default: { host = "127.0.0.1"; port = 80; } Example: { host = "127.0.0.1"; port = 8888; } Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>
