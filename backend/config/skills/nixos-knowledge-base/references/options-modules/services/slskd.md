---
module: services.slskd
option_count: 9
source: options.html
---

# services.slskd

## services.slskd.enable

Whether to enable slskd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/slskd.nix>

## services.slskd.package

The slskd package to use. Type: package Default: pkgs.slskd Declared by: <nixpkgs/nixos/modules/services/web-apps/slskd.nix>

## services.slskd.domain

If non-null, enables an nginx reverse proxy virtual host at this FQDN, at the path configurated with services.slskd.web.url_base. Type: null or string Example: "slskd.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/slskd.nix>

## services.slskd.environmentFile

Path to the environment file sourced on startup. It must at least contain the variables SLSKD_SLSK_USERNAME and SLSKD_SLSK_PASSWORD. Web interface credentials should also be set here in SLSKD_USERNAME and SLSKD_PASSWORD. Other, optional credentials like SOCKS5 with SLSKD_SLSK_PROXY_USERNAME and SLSKD_SLSK_PROXY_PASSWORD should all reside here instead of in the world-readable nix store. Variables are documented at https://github.com/slskd/slskd/blob/master/docs/config.md Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-apps/slskd.nix>

## services.slskd.group

Group under which slskd runs. Type: string Default: "slskd" Declared by: <nixpkgs/nixos/modules/services/web-apps/slskd.nix>

## services.slskd.nginx

This option customizes the nginx virtual host set up for slskd. Type: submodule Default: { } Example: { enableACME = true; forceHttps = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/slskd.nix>

## services.slskd.openFirewall

Whether to open the firewall for the soulseek network listen port (not the web interface port). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/slskd.nix>

## services.slskd.settings

Application configuration for slskd. See documentation. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/slskd.nix>

## services.slskd.user

User account under which slskd runs. Type: string Default: "slskd" Declared by: <nixpkgs/nixos/modules/services/web-apps/slskd.nix>
