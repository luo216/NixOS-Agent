---
module: services.nghttpx.frontends.*.params
option_count: 5
source: options.html
---

# services.nghttpx.frontends.*.params

## services.nghttpx.frontends.*.params.api

Enable API access for this frontend. This enables you to dynamically modify nghttpx at run-time therefore this feature is disabled by default and should be turned on with care. Please see https://nghttp2.org/documentation/nghttpx.1.html#cmdoption-nghttpx-f for more detail. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>

## services.nghttpx.frontends.*.params.healthmon

Make this frontend a health monitor endpoint. Any request received on this frontend is responded to with a 200 OK. Please see https://nghttp2.org/documentation/nghttpx.1.html#cmdoption-nghttpx-f for more detail. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>

## services.nghttpx.frontends.*.params.proxyproto

Accept PROXY protocol version 1 on frontend connection. Please see https://nghttp2.org/documentation/nghttpx.1.html#cmdoption-nghttpx-f for more detail. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>

## services.nghttpx.frontends.*.params.sni-fwd

When performing a match to select a backend server, SNI host name received from the client is used instead of the request host. See --backend option about the pattern match. Please see https://nghttp2.org/documentation/nghttpx.1.html#cmdoption-nghttpx-f for more detail. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>

## services.nghttpx.frontends.*.params.tls

Enable or disable TLS. If true (enabled) the key and certificate must be configured for nghttpx. Please see https://nghttp2.org/documentation/nghttpx.1.html#cmdoption-nghttpx-f for more detail. Type: one of “tls”, “no-tls” Default: "tls" Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>
