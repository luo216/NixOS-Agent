---
title: "nix flake archive - Nix 2.28.6 Reference Manual"
source: command-ref/new-cli/nix3-flake-archive.html
---

# nix flake archive - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Nix 2.28.6 Reference Manual

Warning This program is experimental and its interface is subject to change.

## Name

nix flake archive - copy a flake and all its inputs to a store

## Synopsis

nix flake archive [option...] flake-url

## Examples

Copy the dwarffs flake and its dependencies to a binary cache: # nix flake archive --to file:///tmp/my-cache dwarffs Fetch the dwarffs flake and its dependencies to the local Nix store: # nix flake archive dwarffs Print the store paths of the flake sources of NixOps without fetching them: # nix flake archive --json --dry-run nixops Upload all flake inputs to a different machine for remote evaluation # nix flake archive --to ssh://some-machine On the remote machine the flake can then be accessed via its store path. That's computed like this: # nix flake metadata --json | jq -r '.path'

## Description

Copy a flake and all its inputs to a store. This is useful i.e. to evaluate flakes on a different host.

## Options

--dry-run Show what this command would do without doing it. --json Produce output in JSON format, suitable for consumption by another program. --no-check-sigs Do not require that paths are signed by trusted keys. --to store-uri URI of the destination Nix store

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Common flake-related options

--commit-lock-file Commit changes to the flake's lock file. --inputs-from flake-url Use the inputs of the specified flake as registry entries. --no-registries Don't allow lookups in the flake registries. DEPRECATED Use --no-use-registries instead. --no-update-lock-file Do not allow any updates to the flake's lock file. --no-write-lock-file Do not write the flake's newly generated lock file. --output-lock-file flake-lock-path Write the given lock file instead of flake.lock within the top-level flake. --override-input input-path flake-url Override a specific flake input (e.g. dwarffs/nixpkgs). This implies --no-write-lock-file. --recreate-lock-file Recreate the flake's lock file from scratch. DEPRECATED Use nix flake update instead. --reference-lock-file flake-lock-path Read the given lock file instead of flake.lock within the top-level flake. --update-input input-path Update a specific flake input (ignoring its previous entry in the lock file). DEPRECATED Use nix flake update instead.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags.
