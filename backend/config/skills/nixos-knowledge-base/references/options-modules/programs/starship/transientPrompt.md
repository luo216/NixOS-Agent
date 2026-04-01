---
module: programs.starship.transientPrompt
option_count: 3
source: options.html
---

# programs.starship.transientPrompt

## programs.starship.transientPrompt.enable

Whether to enable Starship’s transient prompt feature in fish shells. After a command has been entered, Starship replaces the usual prompt with the terminal output of the commands defined in the programs.starship.transientPrompt.left and programs.starship.transientPrompt.right options. This option only works with fish, as bash requires a custom configuration involving Ble.sh, which can be enabled with programs.bash.blesh.enable, but not configured using NixOS . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/starship.nix>

## programs.starship.transientPrompt.left

Fish code composing the body of the starship_transient_prompt_func function. The output of this code will become the left side of the transient prompt. Not setting this option (or setting it to null) will prevent the starship_transient_prompt_func function from being generated. By default, the left prompt is a bold-green ‘❯’ character. Type: null or Fish shell code concatenated with “\n” Default: null Example: "starship module character" Declared by: <nixpkgs/nixos/modules/programs/starship.nix>

## programs.starship.transientPrompt.right

Fish code composing the body of the starship_transient_rprompt_func function. The output of this code will become the right side of the transient prompt. Not setting this option (or setting it to null) will prevent the starship_transient_rprompt_func function from being generated. By default, the right prompt is empty. Type: null or Fish shell code concatenated with “\n” Default: null Example: "starship module time" Declared by: <nixpkgs/nixos/modules/programs/starship.nix>
