---
module: services.cgit.<name>
option_count: 8
source: options.html
---

# services.cgit.<name>

## services.cgit.<name>.enable

Whether to enable cgit. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/cgit.nix>

## services.cgit.<name>.package

The cgit package to use. Type: package Default: pkgs.cgit Declared by: <nixpkgs/nixos/modules/services/networking/cgit.nix>

## services.cgit.<name>.extraConfig

These lines go to the end of cgitrc verbatim. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/cgit.nix>

## services.cgit.<name>.group

Group to run the cgit service as. Type: string Default: "cgit" Declared by: <nixpkgs/nixos/modules/services/networking/cgit.nix>

## services.cgit.<name>.repos

cgit repository settings, see cgitrc(5) Type: attribute set of attribute set of (boolean or signed integer or string) Default: { } Example: { blah = { desc = "An example repository"; path = "/var/lib/git/example"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/cgit.nix>

## services.cgit.<name>.scanPath

A path which will be scanned for repositories. Type: null or absolute path Default: null Example: "/var/lib/git" Declared by: <nixpkgs/nixos/modules/services/networking/cgit.nix>

## services.cgit.<name>.settings

cgit configuration, see cgitrc(5) Type: attribute set of (boolean or signed integer or string or list of (boolean or signed integer or string)) Default: { } Example: { enable-follow-links = true; source-filter = "${pkgs.cgit}/lib/cgit/filters/syntax-highlighting.py"; } Declared by: <nixpkgs/nixos/modules/services/networking/cgit.nix>

## services.cgit.<name>.user

User to run the cgit service as. Type: string Default: "cgit" Declared by: <nixpkgs/nixos/modules/services/networking/cgit.nix>
