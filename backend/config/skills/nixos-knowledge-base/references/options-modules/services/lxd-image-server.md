---
module: services.lxd-image-server
option_count: 3
source: options.html
---

# services.lxd-image-server

## services.lxd-image-server.enable

Whether to enable lxd-image-server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/lxd-image-server.nix>

## services.lxd-image-server.group

Group assigned to the user and the webroot directory. Type: string Default: "nginx" Example: "www-data" Declared by: <nixpkgs/nixos/modules/services/networking/lxd-image-server.nix>

## services.lxd-image-server.settings

Configuration for lxd-image-server. Example see https://github.com/Avature/lxd-image-server/blob/master/config.toml. Type: TOML value Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/lxd-image-server.nix>
