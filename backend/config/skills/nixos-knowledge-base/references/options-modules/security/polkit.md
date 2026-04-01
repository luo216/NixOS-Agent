---
module: security.polkit
option_count: 5
source: options.html
---

# security.polkit

## security.polkit.enable

Whether to enable polkit. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/polkit.nix>

## security.polkit.package

The polkit package to use. Type: package Default: pkgs.polkit Declared by: <nixpkgs/nixos/modules/security/polkit.nix>

## security.polkit.adminIdentities

Specifies which users are considered “administrators”, for those actions that require the user to authenticate as an administrator (i.e. have an auth_admin value). By default, this is all users in the wheel group. Type: list of string Default: [ "unix-group:wheel" ] Example: [ "unix-user:alice" "unix-group:admin" ] Declared by: <nixpkgs/nixos/modules/security/polkit.nix>

## security.polkit.debug

Whether to enable debug logs from polkit. This is required in order to see log messages from rule definitions. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/polkit.nix>

## security.polkit.extraConfig

Any polkit rules to be added to config (in JavaScript ;-). See: https://www.freedesktop.org/software/polkit/docs/latest/polkit.8.html#polkit-rules Type: strings concatenated with “\n” Default: "" Example: '' /* Log authorization checks. */ polkit.addRule(function(action, subject) { // Make sure to set { security.polkit.debug = true; } in configuration.nix polkit.log("user " + subject.user + " is attempting action " + action.id + " from PID " + subject.pid); }); /* Allow any local user to do anything (dangerous!). */ polkit.addRule(function(action, subject) { if (subject.local) return "yes"; }); '' Declared by: <nixpkgs/nixos/modules/security/polkit.nix>
