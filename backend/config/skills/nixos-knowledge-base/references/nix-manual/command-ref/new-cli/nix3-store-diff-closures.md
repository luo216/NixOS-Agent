---
title: "nix store diff-closures - Nix 2.28.6 Reference Manual"
source: command-ref/new-cli/nix3-store-diff-closures.html
---

# nix store diff-closures - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Nix 2.28.6 Reference Manual

Warning This program is experimental and its interface is subject to change.

## Name

nix store diff-closures - show what packages and versions were added and removed between two closures

## Synopsis

nix store diff-closures [option...] before after

## Examples

Show what got added and removed between two versions of the NixOS system profile: # nix store diff-closures /nix/var/nix/profiles/system-655-link /nix/var/nix/profiles/system-658-link acpi-call: 2020-04-07-5.8.16 → 2020-04-07-5.8.18 baloo-widgets: 20.08.1 → 20.08.2 bluez-qt: +12.6 KiB dolphin: 20.08.1 → 20.08.2, +13.9 KiB kdeconnect: 20.08.2 → ∅, -6597.8 KiB kdeconnect-kde: ∅ → 20.08.2, +6599.7 KiB …

## Description

This command shows the differences between the two closures before and after with respect to the addition, removal, or version change of packages, as well as changes in store path sizes. For each package name in the two closures (where a package name is defined as the name component of a store path excluding the version), if there is a change in the set of versions of the package, or a change in the size of the store paths of more than 8 KiB, it prints a line like this: dolphin: 20.08.1 → 20.08.2, +13.9 KiB No size change is shown if it's below the threshold. If the package does not exist in either the before or after closures, it is represented using ∅ (empty set) on the appropriate side of the arrow. If a package has an empty version string, the version is rendered as ε (epsilon). There may be multiple versions of a package in each closure. In that case, only the changed versions are shown. Thus, libfoo: 1.2, 1.3 → 1.4 leaves open the possibility that there are other versions (e.g. 1.1) that exist in both closures.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Common flake-related options

--commit-lock-file Commit changes to the flake's lock file. --inputs-from flake-url Use the inputs of the specified flake as registry entries. --no-registries Don't allow lookups in the flake registries. DEPRECATED Use --no-use-registries instead. --no-update-lock-file Do not allow any updates to the flake's lock file. --no-write-lock-file Do not write the flake's newly generated lock file. --output-lock-file flake-lock-path Write the given lock file instead of flake.lock within the top-level flake. --override-input input-path flake-url Override a specific flake input (e.g. dwarffs/nixpkgs). This implies --no-write-lock-file. --recreate-lock-file Recreate the flake's lock file from scratch. DEPRECATED Use nix flake update instead. --reference-lock-file flake-lock-path Read the given lock file instead of flake.lock within the top-level flake. --update-input input-path Update a specific flake input (ignoring its previous entry in the lock file). DEPRECATED Use nix flake update instead.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information.

### Options that change the interpretation of installables

--derivation Operate on the store derivation rather than its outputs. --expr expr Interpret installables as attribute paths relative to the Nix expression expr. --file / -f file Interpret installables as attribute paths relative to the Nix expression stored in file. If file is the character -, then a Nix expression will be read from standard input. Implies --impure. Note See man nix.conf for overriding configuration settings with command line flags.
