---
module: programs.git
option_count: 3
source: options.html
---

# programs.git

## programs.git.enable

Whether to enable git, a distributed version control system. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/git.nix>

## programs.git.package

The git package to use. Type: package Default: pkgs.git Example: gitFull Declared by: <nixpkgs/nixos/modules/programs/git.nix>

## programs.git.config

Configuration to write to /etc/gitconfig. A list can also be specified to keep the configuration in order. For example, setting config to [ { foo.x = 42; } { bar.y = 42; }] will put the foo section before the bar section unlike the default alphabetical order, which can be helpful for sections such as include and includeIf. See the CONFIGURATION FILE section of git-config(1) for more information. Type: (attribute set of attribute set of anything) or list of attribute set of attribute set of anything Default: [ ] Example: { init = { defaultBranch = "main"; }; url = { "https://github.com/" = { insteadOf = [ "gh:" "github:" ]; }; }; } Declared by: <nixpkgs/nixos/modules/programs/git.nix>
