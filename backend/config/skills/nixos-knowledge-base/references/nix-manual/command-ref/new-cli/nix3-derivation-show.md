---
title: "nix derivation show - Nix 2.28.6 Reference Manual"
source: command-ref/new-cli/nix3-derivation-show.html
---

# nix derivation show - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Nix 2.28.6 Reference Manual

Warning This program is experimental and its interface is subject to change.

## Name

nix derivation show - show the contents of a store derivation

## Synopsis

nix derivation show [option...] installables...

## Examples

Show the store derivation that results from evaluating the Hello package: # nix derivation show nixpkgs#hello { "/nix/store/s6rn4jz1sin56rf4qj5b5v8jxjm32hlk-hello-2.10.drv": { … } } Show the full derivation graph (if available) that produced your NixOS system: # nix derivation show -r /run/current-system Print all files fetched using fetchurl by Firefox's dependency graph: # nix derivation show -r nixpkgs#firefox \ | jq -r '.[] | select(.outputs.out.hash and .env.urls) | .env.urls' \ | uniq | sort Note that .outputs.out.hash selects fixed-output derivations (derivations that produce output with a specified content hash), while .env.urls selects derivations with a urls attribute.

## Description

This command prints on standard output a JSON representation of the store derivations to which installables evaluate. Store derivations are used internally by Nix. They are store paths with extension .drv that represent the build-time dependency graph to which a Nix expression evaluates. By default, this command only shows top-level derivations, but with --recursive, it also shows their dependencies. nix derivation show outputs a JSON map of store paths to derivations in the following format:

## Derivation JSON Format

Warning This JSON format is currently experimental and subject to change. The JSON serialization of a derivations is a JSON object with the following fields: name: The name of the derivation. This is used when calculating the store paths of the derivation's outputs. outputs: Information about the output paths of the derivation. This is a JSON object with one member per output, where the key is the output name and the value is a JSON object with these fields: path: The output path, if it is known in advanced. Otherwise, null. method: For an output which will be [content addressed], a string representing the method of content addressing that is chosen. Valid method strings are: flat nar text git Otherwise, null. hashAlgo: For an output which will be [content addressed], the name of the hash algorithm used. Valid algorithm strings are: blake3 md5 sha1 sha256 sha512 hash: For fixed-output derivations, the expected content hash in base-16. Example "outputs": { "out": { "path": "/nix/store/2543j7c6jn75blc3drf4g5vhb1rhdq29-source", "method": "nar", "hashAlgo": "sha256", "hash": "6fc80dcc62179dbc12fc0b5881275898f93444833d21b89dfe5f7fbcbb1d0d62" } } inputSrcs: A list of store paths on which this derivation depends. inputDrvs: A JSON object specifying the derivations on which this derivation depends, and what outputs of those derivations. Example "inputDrvs": { "/nix/store/6lkh5yi7nlb7l6dr8fljlli5zfd9hq58-curl-7.73.0.drv": ["dev"], "/nix/store/fn3kgnfzl5dzym26j8g907gq3kbm8bfh-unzip-6.0.drv": ["out"] } specifies that this derivation depends on the dev output of curl, and the out output of unzip. system: The system type on which this derivation is to be built (e.g. x86_64-linux). builder: The absolute path of the program to be executed to run the build. Typically this is the bash shell (e.g. /nix/store/r3j288vpmczbl500w6zz89gyfa4nr0b1-bash-4.4-p23/bin/bash). args: The command-line arguments passed to the builder. env: The environment passed to the builder.

## Options

--recursive / -r Include the dependencies of the specified derivations. --stdin Read installables from the standard input. No default installable applied.

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
