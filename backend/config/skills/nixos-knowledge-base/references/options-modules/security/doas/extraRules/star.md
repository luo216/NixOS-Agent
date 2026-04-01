---
module: security.doas.extraRules.*
option_count: 10
source: options.html
---

# security.doas.extraRules.*

## security.doas.extraRules.*.args

Arguments that must be provided to the command. When set to [], the command must be run without any arguments. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/security/doas.nix>

## security.doas.extraRules.*.cmd

The command the user is allowed to run. When set to null (the default), all commands are allowed. NOTE: It is best practice to specify absolute paths. If a relative path is specified, only a restricted PATH will be searched. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/security/doas.nix>

## security.doas.extraRules.*.groups

The groups / GIDs this rule should apply for. Type: list of (string or signed integer) Default: [ ] Declared by: <nixpkgs/nixos/modules/security/doas.nix>

## security.doas.extraRules.*.keepEnv

If true, environment variables other than those listed in doas(1) are kept when creating the environment for the new process. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/doas.nix>

## security.doas.extraRules.*.noLog

If true, successful executions will not be logged to syslogd(8). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/doas.nix>

## security.doas.extraRules.*.noPass

If true, the user is not required to enter a password. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/doas.nix>

## security.doas.extraRules.*.persist

If true, do not ask for a password again for some time after the user successfully authenticates. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/doas.nix>

## security.doas.extraRules.*.runAs

Which user or group the specified command is allowed to run as. When set to null (the default), all users are allowed. A user can be specified using just the username: "foo". It is also possible to only allow running as a specific group with ":bar". Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/security/doas.nix>

## security.doas.extraRules.*.setEnv

Keep or set the specified variables. Variables may also be removed with a leading ‘-’ or set using variable=value. If the first character of value is a ‘$’, the value to be set is taken from the existing environment variable of the indicated name. This option is processed after the default environment has been created. NOTE: All rules have setenv { SSH_AUTH_SOCK } by default. To prevent SSH_AUTH_SOCK from being inherited, add "-SSH_AUTH_SOCK" anywhere in this list. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/security/doas.nix>

## security.doas.extraRules.*.users

The usernames / UIDs this rule should apply for. Type: list of (string or signed integer) Default: [ ] Declared by: <nixpkgs/nixos/modules/security/doas.nix>
