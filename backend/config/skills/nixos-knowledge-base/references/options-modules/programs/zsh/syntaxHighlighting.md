---
module: programs.zsh.syntaxHighlighting
option_count: 4
source: options.html
---

# programs.zsh.syntaxHighlighting

## programs.zsh.syntaxHighlighting.enable

Whether to enable zsh-syntax-highlighting. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh-syntax-highlighting.nix>

## programs.zsh.syntaxHighlighting.highlighters

Specifies the highlighters to be used by zsh-syntax-highlighting. The following defined options can be found here: https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/docs/highlighters.md Type: list of (one of “main”, “brackets”, “pattern”, “cursor”, “regexp”, “root”, “line”) Default: [ "main" ] Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh-syntax-highlighting.nix>

## programs.zsh.syntaxHighlighting.patterns

Specifies custom patterns to be highlighted by zsh-syntax-highlighting. Please refer to the docs for more information about the usage: https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/docs/highlighters/pattern.md Type: attribute set of string Default: { } Example: { "rm -rf *" = "fg=white,bold,bg=red"; } Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh-syntax-highlighting.nix>

## programs.zsh.syntaxHighlighting.styles

Specifies custom styles to be highlighted by zsh-syntax-highlighting. Please refer to the docs for more information about the usage: https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/docs/highlighters/main.md Type: attribute set of string Default: { } Example: { "alias" = "fg=magenta,bold"; } Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh-syntax-highlighting.nix>
