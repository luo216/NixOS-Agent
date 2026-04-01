---
module: services.kapacitor.alerta
option_count: 5
source: options.html
---

# services.kapacitor.alerta

## services.kapacitor.alerta.enable

Whether to enable kapacitor alerta integration. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/kapacitor.nix>

## services.kapacitor.alerta.environment

Default Alerta environment Type: string Default: "Production" Declared by: <nixpkgs/nixos/modules/services/monitoring/kapacitor.nix>

## services.kapacitor.alerta.origin

Default origin of alert Type: string Default: "kapacitor" Declared by: <nixpkgs/nixos/modules/services/monitoring/kapacitor.nix>

## services.kapacitor.alerta.token

Default Alerta authentication token Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/kapacitor.nix>

## services.kapacitor.alerta.url

The URL to the Alerta REST API Type: string Default: "http://localhost:5000" Declared by: <nixpkgs/nixos/modules/services/monitoring/kapacitor.nix>
