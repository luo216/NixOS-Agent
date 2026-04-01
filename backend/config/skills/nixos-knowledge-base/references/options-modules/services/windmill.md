---
module: services.windmill
option_count: 6
source: options.html
---

# services.windmill

## services.windmill.enable

Whether to enable windmill service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/windmill.nix>

## services.windmill.package

The windmill package to use. Type: package Default: pkgs.windmill Declared by: <nixpkgs/nixos/modules/services/web-apps/windmill.nix>

## services.windmill.baseUrl

The base url that windmill will be served on. Type: string Default: "https://localhost:\$\{toString config.services.windmill.serverPort}"; Example: "https://windmill.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/windmill.nix>

## services.windmill.logLevel

Log level Type: one of “error”, “warn”, “info”, “debug”, “trace” Default: "info" Declared by: <nixpkgs/nixos/modules/services/web-apps/windmill.nix>

## services.windmill.lspPort

Port the windmill lsp listens on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3001 Declared by: <nixpkgs/nixos/modules/services/web-apps/windmill.nix>

## services.windmill.serverPort

Port the windmill server listens on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8001 Declared by: <nixpkgs/nixos/modules/services/web-apps/windmill.nix>
