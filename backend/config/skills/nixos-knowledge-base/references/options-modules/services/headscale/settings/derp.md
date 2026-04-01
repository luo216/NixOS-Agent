---
module: services.headscale.settings.derp
option_count: 4
source: options.html
---

# services.headscale.settings.derp

## services.headscale.settings.derp.auto_update_enabled

Whether to automatically update DERP maps on a set frequency. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.derp.paths

List of file paths containing DERP maps. See How Tailscale works for more information on DERP maps. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.derp.update_frequency

Frequency to update DERP maps. Type: string Default: "24h" Example: "5m" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.derp.urls

List of urls containing DERP maps. See How Tailscale works for more information on DERP maps. Type: list of string Default: [ "https://controlplane.tailscale.com/derpmap/default" ] Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>
