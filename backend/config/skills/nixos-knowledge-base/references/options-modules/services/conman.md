---
module: services.conman
option_count: 4
source: options.html
---

# services.conman

## services.conman.enable

Whether to enable Enable the conman Console manager. Either configFile or config must be specified. . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/conman.nix>

## services.conman.package

The conman package to use. Type: package Default: pkgs.conman Declared by: <nixpkgs/nixos/modules/services/misc/conman.nix>

## services.conman.config

The configuration object. Either configFile or config must be specified. See https://github.com/dun/conman/wiki/Man-5-conman.conf#files. Type: null or strings concatenated with “\n” Default: null Example: '' server coredump=off server keepalive=on server loopback=off server timestamp=1h # global config global log="/var/log/conman/%N.log" global seropts="9600,8n1" global ipmiopts="U:<user>,P:<password>" '' Declared by: <nixpkgs/nixos/modules/services/misc/conman.nix>

## services.conman.configFile

The absolute path to the configuration file. Either configFile or config must be specified. See https://github.com/dun/conman/wiki/Man-5-conman.conf#files. Type: null or absolute path Default: null Example: "/run/secrets/conman.conf" Declared by: <nixpkgs/nixos/modules/services/misc/conman.nix>
