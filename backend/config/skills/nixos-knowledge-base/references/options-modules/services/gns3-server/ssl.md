---
module: services.gns3-server.ssl
option_count: 3
source: options.html
---

# services.gns3-server.ssl

## services.gns3-server.ssl.enable

Whether to enable SSL encryption. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/gns3-server.nix>

## services.gns3-server.ssl.certFile

Path to the SSL certificate file. This certificate will be offered to, and may be verified by, clients. Type: null or absolute path Default: null Example: "/var/lib/gns3/ssl/server.pem" Declared by: <nixpkgs/nixos/modules/services/networking/gns3-server.nix>

## services.gns3-server.ssl.keyFile

Private key file for the certificate. Type: null or absolute path Default: null Example: "/var/lib/gns3/ssl/server.key" Declared by: <nixpkgs/nixos/modules/services/networking/gns3-server.nix>
