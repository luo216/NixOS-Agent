---
module: services.pingvin-share
option_count: 7
source: options.html
---

# services.pingvin-share

## services.pingvin-share.enable

Whether to enable Pingvin Share, a self-hosted file sharing platform. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/pingvin-share.nix>

## services.pingvin-share.dataDir

The path to the data directory in which Pingvin Share will store its data. Type: absolute path Default: "/var/lib/pingvin-share" Example: "/var/lib/pingvin" Declared by: <nixpkgs/nixos/modules/services/web-apps/pingvin-share.nix>

## services.pingvin-share.group

Group under which Pingvin Share runs. Type: string Default: "pingvin" Declared by: <nixpkgs/nixos/modules/services/web-apps/pingvin-share.nix>

## services.pingvin-share.hostname

The domain name of your instance. If null, the redirections will be made to localhost. Type: string Default: localhost:${options.services.pingvin-share.backend.port} Example: "pingvin-share.domain.tdl" Declared by: <nixpkgs/nixos/modules/services/web-apps/pingvin-share.nix>

## services.pingvin-share.https

Whether to enable HTTPS for the domain. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/pingvin-share.nix>

## services.pingvin-share.openFirewall

Whether to open the firewall for the port in services.pingvin-share.frontend.port. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/pingvin-share.nix>

## services.pingvin-share.user

User account under which Pingvin Share runs. Type: string Default: "pingvin" Declared by: <nixpkgs/nixos/modules/services/web-apps/pingvin-share.nix>
