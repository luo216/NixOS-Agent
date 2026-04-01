---
module: services.hitch
option_count: 8
source: options.html
---

# services.hitch

## services.hitch.enable

Whether to enable Hitch Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/hitch/default.nix>

## services.hitch.backend

The host and port Hitch connects to when receiving a connection in the form [HOST]:PORT Type: string Declared by: <nixpkgs/nixos/modules/services/web-servers/hitch/default.nix>

## services.hitch.ciphers

The list of ciphers to use Type: string Default: "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH" Declared by: <nixpkgs/nixos/modules/services/web-servers/hitch/default.nix>

## services.hitch.extraConfig

Additional configuration lines Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-servers/hitch/default.nix>

## services.hitch.frontend

The port and interface of the listen endpoint in the form [HOST]:PORT[+CERT]. Type: string or list of string Default: "[127.0.0.1]:443" Declared by: <nixpkgs/nixos/modules/services/web-servers/hitch/default.nix>

## services.hitch.group

The group to run as Type: string Default: "hitch" Declared by: <nixpkgs/nixos/modules/services/web-servers/hitch/default.nix>

## services.hitch.pem-files

PEM files to use Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-servers/hitch/default.nix>

## services.hitch.user

The user to run as Type: string Default: "hitch" Declared by: <nixpkgs/nixos/modules/services/web-servers/hitch/default.nix>
