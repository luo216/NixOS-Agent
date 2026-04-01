---
module: programs.benchexec
option_count: 3
source: options.html
---

# programs.benchexec

## programs.benchexec.enable

Whether to enable BenchExec. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/benchexec.nix>

## programs.benchexec.package

The benchexec package to use. Type: package Default: pkgs.benchexec Declared by: <nixpkgs/nixos/modules/programs/benchexec.nix>

## programs.benchexec.users

Users that intend to use BenchExec. Provide usernames of users that are configured via users.users as string, and UIDs of “mutable users” as integers. Control group delegation will be configured via systemd. For more information, see https://github.com/sosy-lab/benchexec/blob/3.18/doc/INSTALL.md#setting-up-cgroups. Type: list of (string or signed integer) Default: [ ] Example: [ "alice" # username of a user configured via users.users 1007 # UID of a mutable user ] Declared by: <nixpkgs/nixos/modules/programs/benchexec.nix>
