---
module: services.gancio.settings
option_count: 4
source: options.html
---

# services.gancio.settings

## services.gancio.settings.baseurl

The full URL under which the server is reachable. Type: string Default: "https://${config.services.gancio.settings.hostname}" Example: "https://demo.gancio.org/gancio" Declared by: <nixpkgs/nixos/modules/services/web-apps/gancio.nix>

## services.gancio.settings.hostname

The domain name under which the server is reachable. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/gancio.nix>

## services.gancio.settings.log_level

Gancio log level. Type: one of “debug”, “info”, “warning”, “error” Default: "info" Declared by: <nixpkgs/nixos/modules/services/web-apps/gancio.nix>

## services.gancio.settings.log_path

Directory Gancio logs into Type: string (read only) Default: "/var/log/gancio" Declared by: <nixpkgs/nixos/modules/services/web-apps/gancio.nix>
