---
module: programs.dconf
option_count: 3
source: options.html
---

# programs.dconf

## programs.dconf.enable

Whether to enable dconf. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/dconf.nix>

## programs.dconf.packages

A list of packages which provide dconf profiles and databases in /etc/dconf. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/programs/dconf.nix>

## programs.dconf.profiles

Attrset of dconf profiles. By default the user profile is used which ends up in /etc/dconf/profile/user. Type: attribute set of (absolute path or package or (submodule)) Default: { } Example: { # A "user" profile with a database user.databases = [ { settings = { }; } ]; # A "bar" profile from a package bar = pkgs.bar-dconf-profile; # A "foo" profile from a path foo = ${./foo} }; Declared by: <nixpkgs/nixos/modules/programs/dconf.nix>
