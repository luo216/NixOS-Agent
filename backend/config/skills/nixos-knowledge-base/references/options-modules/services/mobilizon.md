---
module: services.mobilizon
option_count: 3
source: options.html
---

# services.mobilizon

## services.mobilizon.enable

Whether to enable Mobilizon federated organization and mobilization platform. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/mobilizon.nix>

## services.mobilizon.package

The mobilizon package to use. Type: package Default: pkgs.mobilizon Declared by: <nixpkgs/nixos/modules/services/web-apps/mobilizon.nix>

## services.mobilizon.settings

Mobilizon Elixir documentation, see https://docs.joinmobilizon.org/administration/configure/reference/ for supported values. Type: open submodule of attribute set of attribute set of (Elixir value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/mobilizon.nix>
