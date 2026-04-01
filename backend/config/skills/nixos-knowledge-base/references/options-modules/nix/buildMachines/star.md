---
module: nix.buildMachines.*
option_count: 11
source: options.html
---

# nix.buildMachines.*

## nix.buildMachines.*.hostName

The hostname of the build machine. Type: string Example: "nixbuilder.example.org" Declared by: <nixpkgs/nixos/modules/config/nix-remote-build.nix>

## nix.buildMachines.*.mandatoryFeatures

A list of features mandatory for this builder. The builder will be ignored for derivations that don’t require all features in this list. All mandatory features are automatically included in supportedFeatures. Type: list of string Default: [ ] Example: [ "big-parallel" ] Declared by: <nixpkgs/nixos/modules/config/nix-remote-build.nix>

## nix.buildMachines.*.maxJobs

The number of concurrent jobs the build machine supports. The build machine will enforce its own limits, but this allows hydra to schedule better since there is no work-stealing between build machines. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/config/nix-remote-build.nix>

## nix.buildMachines.*.protocol

The protocol used for communicating with the build machine. Use ssh-ng if your remote builder and your local Nix version support that improved protocol. Use null when trying to change the special localhost builder without a protocol which is for example used by hydra. Type: one of <null>, “ssh”, “ssh-ng” Default: "ssh" Example: "ssh-ng" Declared by: <nixpkgs/nixos/modules/config/nix-remote-build.nix>

## nix.buildMachines.*.publicHostKey

The (base64-encoded) public host key of this builder. The field is calculated via base64 -w0 /etc/ssh/ssh_host_type_key.pub. If null, SSH will use its regular known-hosts file when connecting. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/config/nix-remote-build.nix>

## nix.buildMachines.*.speedFactor

The relative speed of this builder. This is an arbitrary integer that indicates the speed of this builder, relative to other builders. Higher is faster. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/config/nix-remote-build.nix>

## nix.buildMachines.*.sshKey

The path to the SSH private key with which to authenticate on the build machine. The private key must not have a passphrase. If null, the building user (root on NixOS machines) must have an appropriate ssh configuration to log in non-interactively. Note that for security reasons, this path must point to a file in the local filesystem, not to the nix store. Type: null or string Default: null Example: "/root/.ssh/id_buildhost_builduser" Declared by: <nixpkgs/nixos/modules/config/nix-remote-build.nix>

## nix.buildMachines.*.sshUser

The username to log in as on the remote host. This user must be able to log in and run nix commands non-interactively. It must also be privileged to build derivations, so must be included in nix.settings.trusted-users. Type: null or string Default: null Example: "builder" Declared by: <nixpkgs/nixos/modules/config/nix-remote-build.nix>

## nix.buildMachines.*.supportedFeatures

A list of features supported by this builder. The builder will be ignored for derivations that require features not in this list. Type: list of string Default: [ ] Example: [ "kvm" "big-parallel" ] Declared by: <nixpkgs/nixos/modules/config/nix-remote-build.nix>

## nix.buildMachines.*.system

The system type the build machine can execute derivations on. Either this attribute or systems must be present, where system takes precedence if both are set. Type: null or string Default: null Example: "x86_64-linux" Declared by: <nixpkgs/nixos/modules/config/nix-remote-build.nix>

## nix.buildMachines.*.systems

The system types the build machine can execute derivations on. Either this attribute or system must be present, where system takes precedence if both are set. Type: list of string Default: [ ] Example: [ "x86_64-linux" "aarch64-linux" ] Declared by: <nixpkgs/nixos/modules/config/nix-remote-build.nix>
