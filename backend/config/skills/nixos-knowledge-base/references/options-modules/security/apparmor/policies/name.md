---
module: security.apparmor.policies.<name>
option_count: 3
source: options.html
---

# security.apparmor.policies.<name>

## security.apparmor.policies.<name>.path

A path of a profile file to include. Incompatible with profile. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/security/apparmor.nix>

## security.apparmor.policies.<name>.profile

The profile file contents. Incompatible with path. Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/security/apparmor.nix>

## security.apparmor.policies.<name>.state

How strictly this policy should be enforced Type: one of “disable”, “complain”, “enforce” Default: "enforce" Declared by: <nixpkgs/nixos/modules/security/apparmor.nix>
