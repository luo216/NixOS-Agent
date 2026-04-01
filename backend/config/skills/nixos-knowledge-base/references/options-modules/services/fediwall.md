---
module: services.fediwall
option_count: 5
source: options.html
---

# services.fediwall

## services.fediwall.enable

Whether to enable fediwall, a social media wall for the fediverse. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/fediwall.nix>

## services.fediwall.package

The fediwall package to use. Type: package Default: pkgs.fediwall Declared by: <nixpkgs/nixos/modules/services/web-apps/fediwall.nix>

## services.fediwall.hostName

The hostname to serve fediwall on. Type: string Default: config.networking.fqdnOrHostName Example: "fediwall.example.org" Declared by: <nixpkgs/nixos/modules/services/web-apps/fediwall.nix>

## services.fediwall.nginx

Allows customizing the nginx virtualHost settings Type: submodule Default: { } Example: { serverAliases = [ "fedi.${config.networking.domain}" ]; # Enable TLS and use let's encrypt for ACME forceSSL = true; enableACME = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/fediwall.nix>

## services.fediwall.settings

Fediwall configuration. See https://github.com/defnull/fediwall/blob/main/public/wall-config.json.example for information on supported values. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/fediwall.nix>
