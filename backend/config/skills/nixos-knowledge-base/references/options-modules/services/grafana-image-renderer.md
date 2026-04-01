---
module: services.grafana-image-renderer
option_count: 3
source: options.html
---

# services.grafana-image-renderer

## services.grafana-image-renderer.enable

Whether to enable grafana-image-renderer. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana-image-renderer.nix>

## services.grafana-image-renderer.provisionGrafana

Whether to enable Grafana configuration for grafana-image-renderer. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana-image-renderer.nix>

## services.grafana-image-renderer.settings

Configuration attributes for grafana-image-renderer. Type: open submodule of attribute set of attribute set of (string or signed integer or boolean or list of (string or signed integer)) Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana-image-renderer.nix>
