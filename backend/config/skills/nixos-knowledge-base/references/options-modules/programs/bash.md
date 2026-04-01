---
module: programs.bash
option_count: 10
source: options.html
---

# programs.bash

## programs.bash.enable

Whenever to configure Bash as an interactive shell. Note that this tries to make Bash the default users.defaultUserShell, which in turn means that you might need to explicitly set this variable if you have another shell configured with NixOS. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/programs/bash/bash.nix>

## programs.bash.enableLsColors

Whether to enable extra colors in directory listings. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/programs/bash/ls-colors.nix>

## programs.bash.interactiveShellInit

Shell script code called during interactive bash shell initialisation. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/programs/bash/bash.nix>

## programs.bash.loginShellInit

Shell script code called during login bash shell initialisation. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/programs/bash/bash.nix>

## programs.bash.logout

Shell script code called during login bash shell logout. Type: strings concatenated with “\n” Default: '' printf '\e]0;\a' '' Declared by: <nixpkgs/nixos/modules/programs/bash/bash.nix>

## programs.bash.lsColorsFile

Alternative colorscheme for ls colors Type: null or absolute path Default: null Example: ${pkgs.dircolors-solarized}/ansi-dark Declared by: <nixpkgs/nixos/modules/programs/bash/ls-colors.nix>

## programs.bash.promptInit

Shell script code used to initialise the bash prompt. Type: strings concatenated with “\n” Default: '' # Provide a nice prompt if the terminal supports it. if [ "$TERM" != "dumb" ] || [ -n "$INSIDE_EMACS" ]; then PROMPT_COLOR="1;31m" ((UID)) && PROMPT_COLOR="1;32m" if [ -n "$INSIDE_EMACS" ]; then # Emacs term mode doesn't support xterm title escape sequence (\e]0;) PS1="\n\[\033[$PROMPT_COLOR\][\u@\h:\w]\\$\[\033[0m\] " else PS1="\n\[\033[$PROMPT_COLOR\][\[\e]0;\u@\h: \w\a\]\u@\h:\w]\\$\[\033[0m\] " fi if test "$TERM" = "xterm"; then PS1="\[\033]2;\h:\u:\w\007\]$PS1" fi fi '' Declared by: <nixpkgs/nixos/modules/programs/bash/bash.nix>

## programs.bash.shellAliases

Set of aliases for bash shell, which overrides environment.shellAliases. See environment.shellAliases for an option format description. Type: attribute set of (null or string or absolute path) Default: { } Declared by: <nixpkgs/nixos/modules/programs/bash/bash.nix>

## programs.bash.shellInit

Shell script code called during bash shell initialisation. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/programs/bash/bash.nix>

## programs.bash.vteIntegration

Whether to enable Bash integration for VTE terminals. This allows it to preserve the current directory of the shell across terminals. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/vte.nix>
