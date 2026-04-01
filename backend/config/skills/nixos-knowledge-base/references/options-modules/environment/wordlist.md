---
module: environment.wordlist
option_count: 2
source: options.html
---

# environment.wordlist

## environment.wordlist.enable

Whether to enable environment variables for lists of words. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/misc/wordlist.nix>

## environment.wordlist.lists

A set with the key names being the environment variable you’d like to set and the values being a list of paths to text documents containing lists of words. The various files will be merged, sorted, duplicates removed, and extraneous spacing removed. If you have a handful of words that you want to add to an already existing wordlist, you may find builtins.toFile useful for this task. Type: attribute set of non-empty (list of absolute path) Default: { WORDLIST = [ "${pkgs.scowl}/share/dict/words.txt" ]; } Example: { WORDLIST = [ "${pkgs.scowl}/share/dict/words.txt" ]; AUGMENTED_WORDLIST = [ "${pkgs.scowl}/share/dict/words.txt" "${pkgs.scowl}/share/dict/words.variants.txt" (builtins.toFile "extra-words" '' desynchonization oobleck'') ]; } Declared by: <nixpkgs/nixos/modules/misc/wordlist.nix>
