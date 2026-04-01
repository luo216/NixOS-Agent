---
module: programs.fish
option_count: 11
source: options.html
---

# programs.fish

## programs.fish.enable

Whether to configure fish as an interactive shell. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/fish.nix>

## programs.fish.package

The fish package to use. Type: package Default: pkgs.fish Declared by: <nixpkgs/nixos/modules/programs/fish.nix>

## programs.fish.extraCompletionPackages

Additional packages to generate completions from, if programs.fish.generateCompletions is enabled. Type: list of package Default: [ ] Example: config.users.users.alice.packages Declared by: <nixpkgs/nixos/modules/programs/fish.nix>

## programs.fish.generateCompletions

Whether to enable generating completion files from man pages. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/programs/fish.nix>

## programs.fish.interactiveShellInit

Shell script code called during interactive fish shell initialisation. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/programs/fish.nix>

## programs.fish.loginShellInit

Shell script code called during fish login shell initialisation. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/programs/fish.nix>

## programs.fish.promptInit

Shell script code used to initialise fish prompt. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/programs/fish.nix>

## programs.fish.shellAbbrs

Set of fish abbreviations. Type: attribute set of string Default: { } Example: { gco = "git checkout"; npu = "nix-prefetch-url"; } Declared by: <nixpkgs/nixos/modules/programs/fish.nix>

## programs.fish.shellAliases

Set of aliases for fish shell, which overrides environment.shellAliases. See environment.shellAliases for an option format description. Type: attribute set of (null or string or absolute path) Default: { } Declared by: <nixpkgs/nixos/modules/programs/fish.nix>

## programs.fish.shellInit

Shell script code called during fish shell initialisation. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/programs/fish.nix>

## programs.fish.useBabelfish

If enabled, the configured environment will be translated to native fish using babelfish. Otherwise, foreign-env will be used. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/fish.nix>
