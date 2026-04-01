---
module: services.openssh.knownHosts.<name>
option_count: 5
source: options.html
---

# services.openssh.knownHosts.<name>

## services.openssh.knownHosts.<name>.certAuthority

This public key is an SSH certificate authority, rather than an individual host’s key. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/ssh.nix>

## services.openssh.knownHosts.<name>.extraHostNames

A list of additional host names and/or IP numbers used for accessing the host’s ssh service. This list is ignored if hostNames is set explicitly. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/programs/ssh.nix>

## services.openssh.knownHosts.<name>.hostNames

A list of host names and/or IP numbers used for accessing the host’s ssh service. This list includes the name of the containing knownHosts attribute by default for convenience. If you wish to configure multiple host keys for the same host use multiple knownHosts entries with different attribute names and the same hostNames list. Type: list of string Default: [ ‹name› ] ++ config.services.openssh.knownHosts.<name>.extraHostNames Declared by: <nixpkgs/nixos/modules/programs/ssh.nix>

## services.openssh.knownHosts.<name>.publicKey

The public key data for the host. You can fetch a public key from a running SSH server with the ssh-keyscan command. The public key should not include any host names, only the key type and the key itself. Type: null or string Default: null Example: "ecdsa-sha2-nistp521 AAAAE2VjZHN...UEPg==" Declared by: <nixpkgs/nixos/modules/programs/ssh.nix>

## services.openssh.knownHosts.<name>.publicKeyFile

The path to the public key file for the host. The public key file is read at build time and saved in the Nix store. You can fetch a public key file from a running SSH server with the ssh-keyscan command. The content of the file should follow the same format as described for the publicKey option. Only a single key is supported. If a host has multiple keys, use programs.ssh.knownHostsFiles instead. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/programs/ssh.nix>
