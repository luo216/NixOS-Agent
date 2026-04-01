---
module: services.dolibarr.h2o.tls
option_count: 6
source: options.html
---

# services.dolibarr.h2o.tls

## services.dolibarr.h2o.tls.extraSettings

Additional TLS/SSL-related configuration options. See https://h2o.examp1e.net/configure/base_directives.html#listen-ssl. Type: attribute set Default: { } Example: { minimum-version = "TLSv1.3"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.h2o.tls.identity

Key / certificate pairs for the virtual host. Type: list of (submodule) Default: [ ] Example: [ { key-file = "/path/to/rsa.key"; certificate-file = "/path/to/rsa.crt"; } { key-file = "/path/to/ecdsa.key"; certificate-file = "/path/to/ecdsa.crt"; } ] Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.h2o.tls.policy

add will additionally listen for TLS connections. only will disable TLS connections. force will redirect non-TLS traffic to the TLS connection. Type: one of “add”, “only”, “force” Example: "force" Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.h2o.tls.port

Override the default TLS port for this virtual host. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: config.services.h2o.defaultTLSListenPort Example: 8443 Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.h2o.tls.quic

Enables HTTP/3 over QUIC on the UDP port for TLS. The attrset provides fine-turning for QUIC behavior, but can be empty. See https://h2o.examp1e.net/configure/http3_directives.html#quic-attributes. Type: null or (attribute set) Default: null Example: { amp-limit = 2; handshake-timeout-rtt-multiplier = 300; retry = "ON"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.h2o.tls.redirectCode

HTTP status used by globalRedirect & forceSSL. Possible usecases include temporary (302, 307) redirects, keeping the request method & body (307, 308), or explicitly resetting the method to GET (303). See https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections. Type: integer between 300 and 399 (both inclusive) Default: 301 Example: 308 Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>
