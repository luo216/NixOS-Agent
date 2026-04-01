---
module: services.fcgiwrap.instances.<name>.socket
option_count: 5
source: options.html
---

# services.fcgiwrap.instances.<name>.socket

## services.fcgiwrap.instances.<name>.socket.address

Socket address. In case of a UNIX socket, this should be its filesystem path. Type: string Default: "/run/fcgiwrap-‹name›.sock" Example: "1.2.3.4:5678" Declared by: <nixpkgs/nixos/modules/services/web-servers/fcgiwrap.nix>

## services.fcgiwrap.instances.<name>.socket.group

Group to be set as owner of the UNIX socket. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/fcgiwrap.nix>

## services.fcgiwrap.instances.<name>.socket.mode

Mode to be set on the UNIX socket. Defaults to private to the socket’s owner. Type: null or string Default: if config.socket.type == "unix" then "0600" else null Declared by: <nixpkgs/nixos/modules/services/web-servers/fcgiwrap.nix>

## services.fcgiwrap.instances.<name>.socket.type

Socket type: ‘unix’, ‘tcp’ or ‘tcp6’. Type: one of “unix”, “tcp”, “tcp6” Default: "unix" Declared by: <nixpkgs/nixos/modules/services/web-servers/fcgiwrap.nix>

## services.fcgiwrap.instances.<name>.socket.user

User to be set as owner of the UNIX socket. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/fcgiwrap.nix>
