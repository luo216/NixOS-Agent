---
module: services.tmate-ssh-server
option_count: 7
source: options.html
---

# services.tmate-ssh-server

## services.tmate-ssh-server.enable

Whether to enable tmate ssh server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/tmate-ssh-server.nix>

## services.tmate-ssh-server.package

The tmate-ssh-server package to use. Type: package Default: pkgs.tmate-ssh-server Declared by: <nixpkgs/nixos/modules/services/networking/tmate-ssh-server.nix>

## services.tmate-ssh-server.advertisedPort

External port advertised to clients Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Declared by: <nixpkgs/nixos/modules/services/networking/tmate-ssh-server.nix>

## services.tmate-ssh-server.host

External host name Type: string Default: config.networking.domain or config.networking.hostName Declared by: <nixpkgs/nixos/modules/services/networking/tmate-ssh-server.nix>

## services.tmate-ssh-server.keysDir

Directory containing ssh keys, defaulting to auto-generation Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/tmate-ssh-server.nix>

## services.tmate-ssh-server.openFirewall

Whether to automatically open the specified ports in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/tmate-ssh-server.nix>

## services.tmate-ssh-server.port

Listen port for the ssh server Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 2222 Declared by: <nixpkgs/nixos/modules/services/networking/tmate-ssh-server.nix>
