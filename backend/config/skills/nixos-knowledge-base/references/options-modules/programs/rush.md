---
module: programs.rush
option_count: 6
source: options.html
---

# programs.rush

## programs.rush.enable

Whether to enable Restricted User Shell… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/rush.nix>

## programs.rush.package

The rush package to use. Type: package Default: pkgs.rush Declared by: <nixpkgs/nixos/modules/programs/rush.nix>

## programs.rush.global

The global statement defines global settings. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/programs/rush.nix>

## programs.rush.rules

The rule statement configures a GNU Rush rule. This is a block statement, which means that all statements located between it and the next rule statement (or end of file, whichever occurs first) modify the definition of that rule. Type: attribute set of strings concatenated with “\n” Default: { } Declared by: <nixpkgs/nixos/modules/programs/rush.nix>

## programs.rush.shell

The resolved shell path that users can inherit to set rush as their login shell. This is a convenience option for use in user definitions. Example: users.users.alice = { inherit (config.programs.rush) shell; ... }; Type: package or absolute path (read only) Declared by: <nixpkgs/nixos/modules/programs/rush.nix>

## programs.rush.wrap

Whether to wrap the rush binary with a SUID-enabled wrapper. This is required if security.enableWrappers is enabled in your configuration. Type: boolean Default: config.security.enableWrappers Declared by: <nixpkgs/nixos/modules/programs/rush.nix>
