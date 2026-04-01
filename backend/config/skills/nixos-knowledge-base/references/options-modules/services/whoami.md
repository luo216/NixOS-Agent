---
module: services.whoami
option_count: 4
source: options.html
---

# services.whoami

## services.whoami.enable

Whether to enable whoami. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/whoami.nix>

## services.whoami.package

The whoami package to use. Type: package Default: pkgs.whoami Declared by: <nixpkgs/nixos/modules/services/web-apps/whoami.nix>

## services.whoami.extraArgs

Extra command line arguments to pass to whoami. See https://github.com/traefik/whoami#flags for details. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/whoami.nix>

## services.whoami.port

The port whoami should listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8000 Declared by: <nixpkgs/nixos/modules/services/web-apps/whoami.nix>
