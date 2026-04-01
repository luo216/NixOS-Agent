---
module: programs.zsh.autosuggestions
option_count: 5
source: options.html
---

# programs.zsh.autosuggestions

## programs.zsh.autosuggestions.enable

Whether to enable zsh-autosuggestions. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh-autosuggestions.nix>

## programs.zsh.autosuggestions.async

Whether to fetch suggestions asynchronously Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh-autosuggestions.nix>

## programs.zsh.autosuggestions.extraConfig

Attribute set with additional configuration values Type: attribute set of string Default: { } Example: { "ZSH_AUTOSUGGEST_BUFFER_MAX_SIZE" = "20"; } Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh-autosuggestions.nix>

## programs.zsh.autosuggestions.highlightStyle

Highlight style for suggestions ({fore,back}ground color) Type: string Default: "fg=8" Example: "fg=cyan" Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh-autosuggestions.nix>

## programs.zsh.autosuggestions.strategy

ZSH_AUTOSUGGEST_STRATEGY is an array that specifies how suggestions should be generated. The strategies in the array are tried successively until a suggestion is found. There are currently three built-in strategies to choose from: history: Chooses the most recent match from history. completion: Chooses a suggestion based on what tab-completion would suggest. (requires zpty module) match_prev_cmd: Like history, but chooses the most recent match whose preceding history item matches the most recently executed command. Note that this strategy won’t work as expected with ZSH options that don’t preserve the history order such as HIST_IGNORE_ALL_DUPS or HIST_EXPIRE_DUPS_FIRST. Type: list of (one of “history”, “completion”, “match_prev_cmd”) Default: [ "history" ] Declared by: <nixpkgs/nixos/modules/programs/zsh/zsh-autosuggestions.nix>
