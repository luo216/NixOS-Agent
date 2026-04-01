---
module: services.headscale.settings
option_count: 7
source: options.html
---

# services.headscale.settings

## services.headscale.settings.ephemeral_node_inactivity_timeout

Time before an inactive ephemeral node is deleted. Type: string Default: "30m" Example: "5m" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.server_url

The url clients will connect to. Type: string Default: "http://127.0.0.1:8080" Example: "https://myheadscale.example.com:443" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.tls_cert_path

Path to already created certificate. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.tls_key_path

Path to key for already created certificate. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.tls_letsencrypt_challenge_type

Type of ACME challenge to use, currently supported types: HTTP-01 or TLS-ALPN-01. Type: one of “TLS-ALPN-01”, “HTTP-01” Default: "HTTP-01" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.tls_letsencrypt_hostname

Domain name to request a TLS certificate for. Type: null or string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.tls_letsencrypt_listen

When HTTP-01 challenge is chosen, letsencrypt must set up a verification endpoint, and it will be listening on: :http = port 80. Type: null or string Default: ":http" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>
