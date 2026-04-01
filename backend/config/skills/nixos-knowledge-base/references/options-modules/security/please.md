---
module: security.please
option_count: 4
source: options.html
---

# security.please

## security.please.enable

Whether to enable please, a Sudo clone which allows a users to execute a command or edit a file as another user . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/please.nix>

## security.please.package

The please package to use. Type: package Default: pkgs.please Declared by: <nixpkgs/nixos/modules/security/please.nix>

## security.please.settings

Please configuration. Refer to https://github.com/edneville/please/blob/master/please.ini.md for details. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { jim_edit_etc_hosts_as_root = { editmode = 644; name = "jim"; require_pass = true; rule = "/etc/hosts"; target = "root"; type = "edit"; }; jim_run_any_as_root = { name = "jim"; require_pass = false; rule = ".*"; target = "root"; type = "run"; }; } Declared by: <nixpkgs/nixos/modules/security/please.nix>

## security.please.wheelNeedsPassword

Whether users of the wheel group must provide a password to run commands or edit files with please and pleaseedit respectively. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/security/please.nix>
