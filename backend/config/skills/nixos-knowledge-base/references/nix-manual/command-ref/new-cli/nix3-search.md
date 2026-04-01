---
title: "nix search - Nix 2.28.6 Reference Manual"
source: command-ref/new-cli/nix3-search.html
---

# nix search - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Nix 2.28.6 Reference Manual

Warning This program is experimental and its interface is subject to change.

## Name

nix search - search for packages

## Synopsis

nix search [option...] installable regex...

## Examples

Show all packages in the nixpkgs flake: # nix search nixpkgs ^ * legacyPackages.x86_64-linux.AMB-plugins (0.8.1) A set of ambisonics ladspa plugins * legacyPackages.x86_64-linux.ArchiSteamFarm (4.3.1.0) Application with primary purpose of idling Steam cards from multiple accounts simultaneously … Show packages in the nixpkgs flake containing blender in its name or description: # nix search nixpkgs blender * legacyPackages.x86_64-linux.blender (2.91.0) 3D Creation/Animation/Publishing System Search for packages underneath the attribute gnome3 in Nixpkgs: # nix search nixpkgs#gnome3 vala * legacyPackages.x86_64-linux.gnome3.vala (0.48.9) Compiler for GObject type system Show all packages in the flake in the current directory: # nix search . ^ Search for Firefox or Chromium: # nix search nixpkgs 'firefox|chromium' Search for packages containing git and either frontend or gui: # nix search nixpkgs git 'frontend|gui' Search for packages containing neovim but hide ones containing either gui or python: # nix search nixpkgs neovim --exclude 'python|gui' or # nix search nixpkgs neovim --exclude 'python' --exclude 'gui'

## Description

nix search searches installable that can be evaluated, that is, a flake or Nix expression, but not a store path or deriving path) for packages whose name or description matches all of the regular expressions regex. For each matching package, It prints the full attribute name (from the root of the installable), the version and the meta.description field, highlighting the substrings that were matched by the regular expressions. To show all packages, use the regular expression ^. In contrast to .*, it avoids highlighting the entire name and description of every package. Note that in this context, ^ is the regex character to match the beginning of a string, not the delimiter for selecting a derivation output.

## Flake output attributes

If no flake output attribute is given, nix search searches for packages: Directly underneath packages.<system>. Underneath legacyPackages.<system>, recursing into attribute sets that contain an attribute recurseForDerivations = true.

## Options

--exclude / -e regex Hide packages whose attribute path, name or description contain regex. --json Produce output in JSON format, suitable for consumption by another program.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Common flake-related options

--commit-lock-file Commit changes to the flake's lock file. --inputs-from flake-url Use the inputs of the specified flake as registry entries. --no-registries Don't allow lookups in the flake registries. DEPRECATED Use --no-use-registries instead. --no-update-lock-file Do not allow any updates to the flake's lock file. --no-write-lock-file Do not write the flake's newly generated lock file. --output-lock-file flake-lock-path Write the given lock file instead of flake.lock within the top-level flake. --override-input input-path flake-url Override a specific flake input (e.g. dwarffs/nixpkgs). This implies --no-write-lock-file. --recreate-lock-file Recreate the flake's lock file from scratch. DEPRECATED Use nix flake update instead. --reference-lock-file flake-lock-path Read the given lock file instead of flake.lock within the top-level flake. --update-input input-path Update a specific flake input (ignoring its previous entry in the lock file). DEPRECATED Use nix flake update instead.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information.

### Options that change the interpretation of installables

--expr expr Interpret installables as attribute paths relative to the Nix expression expr. --file / -f file Interpret installables as attribute paths relative to the Nix expression stored in file. If file is the character -, then a Nix expression will be read from standard input. Implies --impure. Note See man nix.conf for overriding configuration settings with command line flags.
