---
module: services.cook-cli
option_count: 6
source: options.html
---

# services.cook-cli

## services.cook-cli.enable

Whether to enable cook-cli. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/cook-cli.nix>

## services.cook-cli.package

The cook-cli package to use. Type: package Default: pkgs.cook-cli Declared by: <nixpkgs/nixos/modules/services/web-apps/cook-cli.nix>

## services.cook-cli.autoStart

Whether to start cook-cli server automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/cook-cli.nix>

## services.cook-cli.basePath

Path to the directory cook-cli will look for recipes. Type: string Default: "/var/lib/cook-cli" Declared by: <nixpkgs/nixos/modules/services/web-apps/cook-cli.nix>

## services.cook-cli.openFirewall

Whether to open the cook-cli server port in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/cook-cli.nix>

## services.cook-cli.port

Which port cook-cli server will use. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9080 Declared by: <nixpkgs/nixos/modules/services/web-apps/cook-cli.nix>
