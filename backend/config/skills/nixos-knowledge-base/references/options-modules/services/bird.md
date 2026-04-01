---
module: services.bird
option_count: 6
source: options.html
---

# services.bird

## services.bird.enable

Whether to enable BIRD Internet Routing Daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/bird.nix>

## services.bird.package

The bird3 package to use. Type: package Default: pkgs.bird3 Declared by: <nixpkgs/nixos/modules/services/networking/bird.nix>

## services.bird.autoReload

Whether bird should be automatically reloaded when the configuration changes. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/bird.nix>

## services.bird.checkConfig

Whether the config should be checked at build time. When the config can’t be checked during build time, for example when it includes other files, either disable this option or use preCheckConfig to create the included files before checking. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/bird.nix>

## services.bird.config

BIRD Internet Routing Daemon configuration file. http://bird.network.cz/ Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/networking/bird.nix>

## services.bird.preCheckConfig

Commands to execute before the config file check. The file to be checked will be available as bird.conf in the current directory. Files created with this option will not be available at service runtime, only during build time checking. Type: strings concatenated with “\n” Default: "" Example: '' echo "cost 100;" > include.conf '' Declared by: <nixpkgs/nixos/modules/services/networking/bird.nix>
