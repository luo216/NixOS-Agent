---
module: programs.xonsh
option_count: 4
source: options.html
---

# programs.xonsh

## programs.xonsh.enable

Whether to configure xonsh as an interactive shell. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/xonsh.nix>

## programs.xonsh.package

The xonsh package to use. The argument extraPackages of this package will be overridden by the option programs.xonsh.extraPackages. Type: package Default: pkgs.xonsh Declared by: <nixpkgs/nixos/modules/programs/xonsh.nix>

## programs.xonsh.config

Extra text added to the end of /etc/xonsh/xonshrc, the system-wide control file for xonsh. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/programs/xonsh.nix>

## programs.xonsh.extraPackages

Xontribs and extra Python packages to be available in xonsh. Type: (function that evaluates to a(n) list of package) or (list of package) convertible to it Default: ps: [ ] Example: ps: with ps; [ numpy xonsh.xontribs.xontrib-vox ] Declared by: <nixpkgs/nixos/modules/programs/xonsh.nix>
