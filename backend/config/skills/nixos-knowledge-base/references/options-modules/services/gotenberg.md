---
module: services.gotenberg
option_count: 12
source: options.html
---

# services.gotenberg

## services.gotenberg.enable

Whether to enable Gotenberg, a stateless API for PDF files. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.enableBasicAuth

HTTP Basic Authentication. If you set this, be sure to set GOTENBERG_API_BASIC_AUTH_USERNAMEand GOTENBERG_API_BASIC_AUTH_PASSWORD in your services.gotenberg.environmentFile file. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.package

The gotenberg package to use. Type: package Default: pkgs.gotenberg Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.bindIP

Port the API listener should bind to. Set to 0.0.0.0 to listen on all available IPs. Type: null or string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.bodyLimit

Sets the max limit for multipart/form-data requests. Accepts values like ‘5M’, ‘20G’, etc. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.environmentFile

Environment file to load extra environment variables from. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.extraArgs

Any extra command-line flags to pass to the Gotenberg service. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.extraFontPackages

Extra fonts to make available. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.logLevel

The logging level for Gotenberg. Type: one of “error”, “warn”, “info”, “debug” Default: "info" Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.port

Port on which the API should listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.rootPath

Root path for the Gotenberg API. Type: string Default: "/" Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.timeout

Timeout for API requests. Type: null or string Default: "30s" Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>
