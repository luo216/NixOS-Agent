---
module: security.sudo-rs
option_count: 8
source: options.html
---

# security.sudo-rs

## security.sudo-rs.enable

Whether to enable a memory-safe implementation of the sudo command, which allows non-root users to execute commands as root . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/sudo-rs.nix>

## security.sudo-rs.package

The sudo-rs package to use. Type: package Default: pkgs.sudo-rs Declared by: <nixpkgs/nixos/modules/security/sudo-rs.nix>

## security.sudo-rs.configFile

This string contains the contents of the sudoers file. Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/security/sudo-rs.nix>

## security.sudo-rs.defaultOptions

Options used for the default rules, granting root and the wheel group permission to run any command as any user. Type: list of string Default: [ "SETENV" ] Declared by: <nixpkgs/nixos/modules/security/sudo-rs.nix>

## security.sudo-rs.execWheelOnly

Only allow members of the wheel group to execute sudo by setting the executable’s permissions accordingly. This prevents users that are not members of wheel from exploiting vulnerabilities in sudo such as CVE-2021-3156. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/sudo-rs.nix>

## security.sudo-rs.extraConfig

Extra configuration text appended to sudoers. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/security/sudo-rs.nix>

## security.sudo-rs.extraRules

Define specific rules to be in the sudoers file. More specific rules should come after more general ones in order to yield the expected behavior. You can use lib.mkBefore/lib.mkAfter to ensure this is the case when configuration options are merged. Type: list of (submodule) Default: [ ] Example: [ # Allow execution of any command by all users in group sudo, # requiring a password. { groups = [ "sudo" ]; commands = [ "ALL" ]; } # Allow execution of "/home/root/secret.sh" by user `backup`, `database` # and the group with GID `1006` without a password. { users = [ "backup" "database" ]; groups = [ 1006 ]; commands = [ { command = "/home/root/secret.sh"; options = [ "SETENV" "NOPASSWD" ]; } ]; } # Allow all users of group `bar` to run two executables as user `foo` # with arguments being pre-set. { groups = [ "bar" ]; runAs = "foo"; commands = [ "/home/baz/cmd1.sh hello-sudo" { command = ''/home/baz/cmd2.sh ""''; options = [ "SETENV" ]; } ]; } ] Declared by: <nixpkgs/nixos/modules/security/sudo-rs.nix>

## security.sudo-rs.wheelNeedsPassword

Whether users of the wheel group must provide a password to run commands as super user via sudo. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/security/sudo-rs.nix>
