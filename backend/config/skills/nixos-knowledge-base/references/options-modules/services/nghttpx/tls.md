---
module: services.nghttpx.tls
option_count: 2
source: options.html
---

# services.nghttpx.tls

## services.nghttpx.tls.crt

Path to the TLS certificate file. Type: string Default: "/etc/ssl/certs/server.crt" Example: "/etc/ssl/certs/mycert.crt" Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>

## services.nghttpx.tls.key

Path to the TLS key file. Type: string Default: "/etc/ssl/keys/server.key" Example: "/etc/ssl/keys/mykeyfile.key" Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>
