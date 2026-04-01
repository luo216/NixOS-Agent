---
module: services.heapster
option_count: 5
source: options.html
---

# services.heapster

## services.heapster.enable

Whether to enable Heapster monitoring. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/heapster.nix>

## services.heapster.package

The heapster package to use. Type: package Default: pkgs.heapster Declared by: <nixpkgs/nixos/modules/services/monitoring/heapster.nix>

## services.heapster.extraOpts

Heapster extra options Type: strings concatenated with " " Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/heapster.nix>

## services.heapster.sink

Heapster metic sink Type: string Example: "influxdb:http://localhost:8086" Declared by: <nixpkgs/nixos/modules/services/monitoring/heapster.nix>

## services.heapster.source

Heapster metric source Type: string Example: "kubernetes:https://kubernetes.default" Declared by: <nixpkgs/nixos/modules/services/monitoring/heapster.nix>
