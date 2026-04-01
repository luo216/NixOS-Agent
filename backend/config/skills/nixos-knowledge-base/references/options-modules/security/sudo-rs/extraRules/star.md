---
module: security.sudo-rs.extraRules.*
option_count: 5
source: options.html
---

# security.sudo-rs.extraRules.*

## security.sudo-rs.extraRules.*.commands

The commands for which the rule should apply. Type: list of (string or (submodule)) Declared by: <nixpkgs/nixos/modules/security/sudo-rs.nix>

## security.sudo-rs.extraRules.*.groups

The groups / GIDs this rule should apply for. Type: list of (string or signed integer) Default: [ ] Declared by: <nixpkgs/nixos/modules/security/sudo-rs.nix>

## security.sudo-rs.extraRules.*.host

For what host this rule should apply. Type: string Default: "ALL" Declared by: <nixpkgs/nixos/modules/security/sudo-rs.nix>

## security.sudo-rs.extraRules.*.runAs

Under which user/group the specified command is allowed to run. A user can be specified using just the username: "foo". It is also possible to specify a user/group combination using "foo:bar" or to only allow running as a specific group with ":bar". Type: string Default: "ALL:ALL" Declared by: <nixpkgs/nixos/modules/security/sudo-rs.nix>

## security.sudo-rs.extraRules.*.users

The usernames / UIDs this rule should apply for. Type: list of (string or signed integer) Default: [ ] Declared by: <nixpkgs/nixos/modules/security/sudo-rs.nix>
