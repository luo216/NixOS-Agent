---
module: services.cloudflared.tunnels.<name>
option_count: 5
source: options.html
---

# services.cloudflared.tunnels.<name>

## services.cloudflared.tunnels.<name>.certificateFile

Account certificate file, necessary to create, delete and manage tunnels. It can be obtained by running cloudflared login. Note that this is necessary for a fully declarative set up, as routes can not otherwise be created outside of the Cloudflare interface. See Cert.pem for information about the file, and Tunnel permissions for a comparison between the account certificate and the tunnel credentials file. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.tunnels.<name>.credentialsFile

Credential file. See Credentials file. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.tunnels.<name>.default

Catch-all service if no ingress matches. See service. Type: string Example: "http_status:404" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.tunnels.<name>.edgeIPVersion

Specifies the IP address version (IPv4 or IPv6) used to establish a connection between cloudflared and the Cloudflare global network. The value auto relies on the host operating system to determine which IP version to select. The first IP version returned from the DNS resolution of the region lookup will be used as the primary set. In dual IPv6 and IPv4 network setups, cloudflared will separate the IP versions into two address sets that will be used to fallback in connectivity failure scenarios. See Tunnel run parameters. Type: one of “auto”, “4”, “6” Default: "4" Example: "auto" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.tunnels.<name>.ingress

Ingress rules. See Ingress rules. Type: attribute set of (string or (submodule)) Default: { } Example: { "*.anotherone.com" = "http://localhost:80"; "*.domain.com" = "http://localhost:80"; } Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>
