---
module: services.livekit.ingress
option_count: 4
source: options.html
---

# services.livekit.ingress

## services.livekit.ingress.enable

Whether to enable the livekit ingress service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/livekit-ingress.nix>

## services.livekit.ingress.package

The livekit-ingress package to use. Type: package Default: pkgs.livekit-ingress Declared by: <nixpkgs/nixos/modules/services/networking/livekit-ingress.nix>

## services.livekit.ingress.environmentFile

Environment file as defined in systemd.exec(5) passed to the service. Use this to specify LIVEKIT_API_KEY and LIVEKIT_API_SECRET. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/livekit-ingress.nix>

## services.livekit.ingress.settings

LiveKit Ingress configuration. See https://github.com/livekit/ingress?tab=readme-ov-file#config for possible options. Type: open submodule of (YAML 1.1 value) Default: { } Example: { cpu_cost = { rtmp_cpu_cost = 3.0; whip_cpu_cost = 1.0; }; prometheus_port = 9039; } Declared by: <nixpkgs/nixos/modules/services/networking/livekit-ingress.nix>
