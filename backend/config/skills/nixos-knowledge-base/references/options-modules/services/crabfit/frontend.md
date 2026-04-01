---
module: services.crabfit.frontend
option_count: 5
source: options.html
---

# services.crabfit.frontend

## services.crabfit.frontend.package

The crabfit-frontend package to use. Type: package Default: pkgs.crabfit-frontend Declared by: <nixpkgs/nixos/modules/services/web-apps/crabfit.nix>

## services.crabfit.frontend.environment

Environment variables for the crabfit frontend. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/crabfit.nix>

## services.crabfit.frontend.finalDrv

The patched frontend, using the correct urls for the API and frontend. Type: package (read only) Default: cfg.package.override { api_url = "https://${cfg.api.host}"; frontend_url = cfg.frontend.host; }; Declared by: <nixpkgs/nixos/modules/services/web-apps/crabfit.nix>

## services.crabfit.frontend.host

The hostname of the frontend. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/crabfit.nix>

## services.crabfit.frontend.port

The internal listening port of the frontend. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3001 Declared by: <nixpkgs/nixos/modules/services/web-apps/crabfit.nix>
