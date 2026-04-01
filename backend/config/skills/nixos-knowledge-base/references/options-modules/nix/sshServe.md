---
module: nix.sshServe
option_count: 5
source: options.html
---

# nix.sshServe

## nix.sshServe.enable

Whether to enable serving the Nix store as a remote store via SSH. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/nix-ssh-serve.nix>

## nix.sshServe.keys

A list of SSH public keys allowed to access the binary cache via SSH. Type: list of string Default: [ ] Example: [ "ssh-dss AAAAB3NzaC1k... alice@example.org" ] Declared by: <nixpkgs/nixos/modules/services/misc/nix-ssh-serve.nix>

## nix.sshServe.protocol

The specific Nix-over-SSH protocol to use. Type: one of “ssh”, “ssh-ng” Default: "ssh" Declared by: <nixpkgs/nixos/modules/services/misc/nix-ssh-serve.nix>

## nix.sshServe.trusted

Whether to add nix-ssh to the nix.settings.trusted-users Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/nix-ssh-serve.nix>

## nix.sshServe.write

Whether to enable writing to the Nix store as a remote store via SSH. Note: by default, the sshServe user is named nix-ssh and is not a trusted-user. nix-ssh should be added to the nix.sshServe.trusted option in most use cases, such as allowing remote building of derivations to anonymous people based on ssh key Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/nix-ssh-serve.nix>
