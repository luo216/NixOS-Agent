---
module: services.matrix-tuwunel.settings.global
option_count: 10
source: options.html
---

# services.matrix-tuwunel.settings.global

## services.matrix-tuwunel.settings.global.address

Addresses (IPv4 or IPv6) to listen on for connections by the reverse proxy/tls terminator. If set to null, tuwunel will listen on IPv4 and IPv6 localhost. Must be null if unix_socket_path is set. Type: null or (list of non-empty string) Default: null Example: [ "127.0.0.1" "::1" ] Declared by: <nixpkgs/nixos/modules/services/matrix/tuwunel.nix>

## services.matrix-tuwunel.settings.global.allow_encryption

Whether new encrypted rooms can be created. Note: existing rooms will continue to work. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/matrix/tuwunel.nix>

## services.matrix-tuwunel.settings.global.allow_federation

Whether this server federates with other servers. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/matrix/tuwunel.nix>

## services.matrix-tuwunel.settings.global.allow_registration

Whether new users can register on this server. Registration with token requires registration_token or registration_token_file to be set. If set to true without a token configured, and yes_i_am_very_very_sure_i_want_an_open_registration_server_prone_to_abuse is set to true, users can freely register. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/matrix/tuwunel.nix>

## services.matrix-tuwunel.settings.global.max_request_size

Max request size in bytes. Don’t forget to also change it in the proxy. Type: positive integer, meaning >0 Default: 20000000 Declared by: <nixpkgs/nixos/modules/services/matrix/tuwunel.nix>

## services.matrix-tuwunel.settings.global.port

The port(s) tuwunel will be running on. You need to set up a reverse proxy in your web server (e.g. apache or nginx), so all requests to /_matrix on port 443 and 8448 will be forwarded to the tuwunel instance running on this port. Type: list of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: [ 6167 ] Declared by: <nixpkgs/nixos/modules/services/matrix/tuwunel.nix>

## services.matrix-tuwunel.settings.global.server_name

The server_name is the name of this server. It is used as a suffix for user and room ids. Type: non-empty string Example: "example.com" Declared by: <nixpkgs/nixos/modules/services/matrix/tuwunel.nix>

## services.matrix-tuwunel.settings.global.trusted_servers

Servers listed here will be used to gather public keys of other servers (notary trusted key servers). Currently, tuwunel doesn’t support inbound batched key requests, so this list should only contain other Synapse servers. Example: [ "matrix.org" "constellatory.net" "tchncs.de" ] Type: list of non-empty string Default: [ "matrix.org" ] Declared by: <nixpkgs/nixos/modules/services/matrix/tuwunel.nix>

## services.matrix-tuwunel.settings.global.unix_socket_path

Listen on a UNIX socket at the specified path. If listening on a UNIX socket, listening on an address will be disabled. The address option must be set to null (the default value). The option services.tuwunel.group must be set to a group your reverse proxy is part of. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/matrix/tuwunel.nix>

## services.matrix-tuwunel.settings.global.unix_socket_perms

The default permissions (in octal) to create the UNIX socket with. Type: positive integer, meaning >0 Default: 660 Declared by: <nixpkgs/nixos/modules/services/matrix/tuwunel.nix>
