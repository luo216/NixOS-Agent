---
module: security.doas
option_count: 5
source: options.html
---

# security.doas

## security.doas.enable

Whether to enable the doas command, which allows non-root users to execute commands as root. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/doas.nix>

## security.doas.package

The doas package to use. Type: package Default: pkgs.doas Declared by: <nixpkgs/nixos/modules/security/doas.nix>

## security.doas.extraConfig

Extra configuration text appended to doas.conf. Be aware that this option cannot be used to override the behaviour allowing passwordless operation for root. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/security/doas.nix>

## security.doas.extraRules

Define specific rules to be set in the /etc/doas.conf file. More specific rules should come after more general ones in order to yield the expected behavior. You can use mkBefore and/or mkAfter to ensure this is the case when configuration options are merged. Be aware that this option cannot be used to override the behaviour allowing passwordless operation for root. Type: list of (submodule) Default: [ ] Example: [ # Allow execution of any command by any user in group doas, requiring # a password and keeping any previously-defined environment variables. { groups = [ "doas" ]; noPass = false; keepEnv = true; } # Allow execution of "/home/root/secret.sh" by user `backup` OR user # `database` OR any member of the group with GID `1006`, without a # password. { users = [ "backup" "database" ]; groups = [ 1006 ]; cmd = "/home/root/secret.sh"; noPass = true; } # Allow any member of group `bar` to run `/home/baz/cmd1.sh` as user # `foo` with argument `hello-doas`. { groups = [ "bar" ]; runAs = "foo"; cmd = "/home/baz/cmd1.sh"; args = [ "hello-doas" ]; } # Allow any member of group `bar` to run `/home/baz/cmd2.sh` as user # `foo` with no arguments. { groups = [ "bar" ]; runAs = "foo"; cmd = "/home/baz/cmd2.sh"; args = [ ]; } # Allow user `abusers` to execute "nano" and unset the value of # SSH_AUTH_SOCK, override the value of ALPHA to 1, and inherit the # value of BETA from the current environment. { users = [ "abusers" ]; cmd = "nano"; setEnv = [ "-SSH_AUTH_SOCK" "ALPHA=1" "BETA" ]; } ] Declared by: <nixpkgs/nixos/modules/security/doas.nix>

## security.doas.wheelNeedsPassword

Whether users of the wheel group must provide a password to run commands as super user via doas. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/security/doas.nix>
