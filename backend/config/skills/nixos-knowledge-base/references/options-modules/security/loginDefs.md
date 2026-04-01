---
module: security.loginDefs
option_count: 3
source: options.html
---

# security.loginDefs

## security.loginDefs.package

The shadow package to use. Type: package Default: pkgs.shadow Declared by: <nixpkgs/nixos/modules/programs/shadow.nix>

## security.loginDefs.chfnRestrict

Use chfn SUID to allow non-root users to change their account GECOS information. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/programs/shadow.nix>

## security.loginDefs.settings

Config options for the /etc/login.defs file, that defines the site-specific configuration for the shadow password suite. See login.defs(5) man page for available options. Type: open submodule of attribute set of (atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/programs/shadow.nix>
