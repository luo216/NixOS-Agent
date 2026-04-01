---
module: programs.zsh
option_count: 14
source: options.html
---

# programs.zsh

## programs.zsh.enable

Whether to configure zsh as an interactive shell. To enable zsh for a particular user, use the users.users.<name?>.shell option for that user. To enable zsh system-wide use the users.defaultUserShell option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh.nix>

## programs.zsh.enableBashCompletion

Enable compatibility with bash’s programmable completion system. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh.nix>

## programs.zsh.enableCompletion

Enable zsh completion for all interactive zsh shells. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh.nix>

## programs.zsh.enableGlobalCompInit

Enable execution of compinit call for all interactive zsh shells. This option can be disabled if the user wants to extend its fpath and a custom compinit call in the local config is required. Type: boolean Default: config.programs.zsh.enableCompletion Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh.nix>

## programs.zsh.enableLsColors

Enable extra colors in directory listings (used by ls and tree). Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh.nix>

## programs.zsh.histFile

Change history file. Type: string Default: "$HOME/.zsh_history" Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh.nix>

## programs.zsh.histSize

Change history size. Type: signed integer Default: 2000 Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh.nix>

## programs.zsh.interactiveShellInit

Shell script code called during interactive zsh shell initialisation. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh.nix>

## programs.zsh.loginShellInit

Shell script code called during zsh login shell initialisation. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh.nix>

## programs.zsh.promptInit

Shell script code used to initialise the zsh prompt. Type: strings concatenated with “\n” Default: '' # Note that to manually override this in ~/.zshrc you should run `prompt off` # before setting your PS1 and etc. Otherwise this will likely to interact with # your ~/.zshrc configuration in unexpected ways as the default prompt sets # a lot of different prompt variables. autoload -U promptinit && promptinit && prompt suse && setopt prompt_sp '' Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh.nix>

## programs.zsh.setOptions

Configure zsh options. See zshoptions(1). Type: list of string Default: [ "HIST_IGNORE_DUPS" "SHARE_HISTORY" "HIST_FCNTL_LOCK" ] Example: [ "EXTENDED_HISTORY" "RM_STAR_WAIT" ] Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh.nix>

## programs.zsh.shellAliases

Set of aliases for zsh shell, which overrides environment.shellAliases. See environment.shellAliases for an option format description. Type: attribute set of (null or string or absolute path) Default: { } Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh.nix>

## programs.zsh.shellInit

Shell script code called during zsh shell initialisation. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh.nix>

## programs.zsh.vteIntegration

Whether to enable Zsh integration for VTE terminals. This allows it to preserve the current directory of the shell across terminals. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/vte.nix>
