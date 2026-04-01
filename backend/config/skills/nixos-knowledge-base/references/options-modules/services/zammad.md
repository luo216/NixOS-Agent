---
module: services.zammad
option_count: 9
source: options.html
---

# services.zammad

## services.zammad.enable

Whether to enable Zammad, a web-based, open source user support/ticketing solution. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>

## services.zammad.package

The zammad package to use. Type: package Default: pkgs.zammad Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>

## services.zammad.dataDir

Path to a folder that will contain Zammad working directory. Type: absolute path Default: "/var/lib/zammad" Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>

## services.zammad.group

Name of the Zammad group. Type: string Default: "zammad" Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>

## services.zammad.host

Host address. Type: string Default: "127.0.0.1" Example: "192.168.23.42" Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>

## services.zammad.port

Web service port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>

## services.zammad.secretKeyBaseFile

The path to a file containing the secret_key_base secret. Zammad uses secret_key_base to encrypt the cookie store, which contains session data, and to digest user auth tokens. Needs to be a 64 byte long string of hexadecimal characters. You can generate one by running openssl rand -hex 64 >/path/to/secret_key_base_file This should be a string, not a nix path, since nix paths are copied into the world-readable nix store. Type: null or absolute path Default: null Example: "/run/keys/secret_key_base" Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>

## services.zammad.user

Name of the Zammad user. Type: string Default: "zammad" Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>

## services.zammad.websocketPort

Websocket service port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 6042 Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>
