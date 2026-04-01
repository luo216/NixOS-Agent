---
module: services.exim
option_count: 7
source: options.html
---

# services.exim

## services.exim.enable

Whether to enable the Exim mail transfer agent. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/exim.nix>

## services.exim.package

The exim package to use. This can be used to enable features such as LDAP or PAM support. Type: package Default: pkgs.exim Declared by: <nixpkgs/nixos/modules/services/mail/exim.nix>

## services.exim.config

Verbatim Exim configuration. This should not contain exim_user, exim_group, exim_path, or spool_directory. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/mail/exim.nix>

## services.exim.group

Group to use when no root privileges are required. Type: string Default: "exim" Declared by: <nixpkgs/nixos/modules/services/mail/exim.nix>

## services.exim.queueRunnerInterval

How often to spawn a new queue runner. Type: string Default: "5m" Declared by: <nixpkgs/nixos/modules/services/mail/exim.nix>

## services.exim.spoolDir

Location of the spool directory of exim. Type: absolute path Default: "/var/spool/exim" Declared by: <nixpkgs/nixos/modules/services/mail/exim.nix>

## services.exim.user

User to use when no root privileges are required. In particular, this applies when receiving messages and when doing remote deliveries. (Local deliveries run as various non-root users, typically as the owner of a local mailbox.) Specifying this value as root is not supported. Type: string Default: "exim" Declared by: <nixpkgs/nixos/modules/services/mail/exim.nix>
