---
module: services.oauth2-proxy.tls
option_count: 4
source: options.html
---

# services.oauth2-proxy.tls

## services.oauth2-proxy.tls.enable

Whether to serve over TLS. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.tls.certificate

Path to certificate file. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.tls.httpsAddress

addr:port to listen on for HTTPS clients. Remember to add port to allowedTCPPorts if you want other machines to be able to connect to it. Type: string Default: ":443" Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.tls.key

Path to private key file. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>
