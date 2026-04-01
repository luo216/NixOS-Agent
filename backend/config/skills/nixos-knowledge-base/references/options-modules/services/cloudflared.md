---
module: services.cloudflared
option_count: 4
source: options.html
---

# services.cloudflared

## services.cloudflared.enable

Whether to enable Cloudflare Tunnel client daemon (formerly Argo Tunnel). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.package

The cloudflared package to use. Type: package Default: pkgs.cloudflared Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.certificateFile

Account certificate file, necessary to create, delete and manage tunnels. It can be obtained by running cloudflared login. Note that this is necessary for a fully declarative set up, as routes can not otherwise be created outside of the Cloudflare interface. See Cert.pem for information about the file, and Tunnel permissions for a comparison between the account certificate and the tunnel credentials file. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.tunnels

Cloudflare tunnels. Type: attribute set of (submodule) Default: { } Example: { "00000000-0000-0000-0000-000000000000" = { credentialsFile = "/tmp/test"; default = "http_status:404"; ingress = { "*.domain1.com" = { service = "http://localhost:80"; }; }; }; } Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>
