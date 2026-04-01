---
module: users
option_count: 12
source: options.html
---

# users

## users.allowNoPasswordLogin

Disable checking that at least the root user or a user in the wheel group can log in using a password or an SSH key. WARNING: enabling this can lock you out of your system. Enable this only if you know what are you doing. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.defaultUserHome

The default home directory for normal users. Type: string Default: "/home" Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.defaultUserShell

This option defines the default shell assigned to user accounts. This can be either a full system path or a shell package. This must not be a store path, since the path is used outside the store (in particular in /etc/passwd). Type: absolute path or package Default: "/bin/sh" Example: pkgs.zsh Declared by: <nixpkgs/nixos/modules/programs/shadow.nix>

## users.enforceIdUniqueness

Whether to require that no two users/groups share the same uid/gid. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.extraGroups

Alias of users.groups. Type: attribute set of (submodule) Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.extraUsers

Alias of users.users. Type: attribute set of (submodule) Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.groups

Additional groups to be created automatically by the system. Type: attribute set of (submodule) Default: { } Example: { hackers = { }; students = { gid = 1001; }; } Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.manageLingering

Whether to manage whether users linger or not. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.motd

Message of the day shown to users when they log in. Type: strings concatenated with “\n” Default: "" Example: "Today is Sweetmorn, the 4th day of The Aftermath in the YOLD 3178." Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## users.motdFile

A file containing the message of the day shown to users when they log in. Type: null or absolute path Default: null Example: "/etc/motd" Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## users.mutableUsers

If set to true, you are free to add new users and groups to the system with the ordinary useradd and groupadd commands. On system activation, the existing contents of the /etc/passwd and /etc/group files will be merged with the contents generated from the users.users and users.groups options. The initial password for a user will be set according to users.users, but existing passwords will not be changed. Warning If set to false, the contents of the user and group files will simply be replaced on system activation. This also holds for the user passwords; all changed passwords will be reset according to the users.users configuration on activation. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users

Additional user accounts to be created automatically by the system. This can also be used to set options for root. Type: attribute set of (submodule) Default: { } Example: { alice = { createHome = true; description = "Alice Q. User"; extraGroups = [ "wheel" ]; group = "users"; home = "/home/alice"; shell = "/bin/sh"; uid = 1234; }; } Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix> <nixpkgs/nixos/modules/config/users-groups.nix>
