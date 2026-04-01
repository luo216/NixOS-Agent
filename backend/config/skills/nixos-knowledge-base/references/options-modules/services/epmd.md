---
module: services.epmd
option_count: 3
source: options.html
---

# services.epmd

## services.epmd.enable

Whether to enable socket activation for Erlang Port Mapper Daemon (epmd), which acts as a name server on all hosts involved in distributed Erlang computations. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/epmd.nix>

## services.epmd.package

The erlang package to use. Type: package Default: pkgs.erlang Declared by: <nixpkgs/nixos/modules/services/networking/epmd.nix>

## services.epmd.listenStream

the listenStream used by the systemd socket. see https://www.freedesktop.org/software/systemd/man/systemd.socket.html#ListenStream= for more information. use this to change the port epmd will run on. if not defined, epmd will use “[::]:4369” Type: string Default: "[::]:4369" Declared by: <nixpkgs/nixos/modules/services/networking/epmd.nix>
