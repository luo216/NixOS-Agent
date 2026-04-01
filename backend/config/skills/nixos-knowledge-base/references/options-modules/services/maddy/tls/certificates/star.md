---
module: services.maddy.tls.certificates.*
option_count: 2
source: options.html
---

# services.maddy.tls.certificates.*

## services.maddy.tls.certificates.*.certPath

Path to the certificate used for TLS. Type: absolute path Example: "/etc/ssl/mx1.example.org.crt" Declared by: <nixpkgs/nixos/modules/services/mail/maddy.nix>

## services.maddy.tls.certificates.*.keyPath

Path to the private key used for TLS. Type: absolute path Example: "/etc/ssl/mx1.example.org.key" Declared by: <nixpkgs/nixos/modules/services/mail/maddy.nix>
