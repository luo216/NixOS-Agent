---
title: "nix eval - Nix 2.28.6 Reference Manual"
source: command-ref/new-cli/nix3-eval.html
---

# nix eval - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Nix 2.28.6 Reference Manual

Warning This program is experimental and its interface is subject to change.

## Name

nix eval - evaluate a Nix expression

## Synopsis

nix eval [option...] installable

## Examples

Evaluate a Nix expression given on the command line: # nix eval --expr '1 + 2' Evaluate a Nix expression to JSON: # nix eval --json --expr '{ x = 1; }' {"x":1} Evaluate a Nix expression from a file: # nix eval --file ./my-nixpkgs hello.name Get the current version of the nixpkgs flake: # nix eval --raw nixpkgs#lib.version Print the store path of the Hello package: # nix eval --raw nixpkgs#hello Get a list of checks in the nix flake: # nix eval nix#checks.x86_64-linux --apply builtins.attrNames Generate a directory with the specified contents: # nix eval --write-to ./out --expr '{ foo = "bar"; subdir.bla = "123"; }' # cat ./out/foo bar # cat ./out/subdir/bla 123

## Description

This command evaluates the given Nix expression, and prints the result on standard output. It also evaluates any nested attribute values and list items.

## Output format

nix eval can produce output in several formats: By default, the evaluation result is printed as a Nix expression. With --json, the evaluation result is printed in JSON format. Note that this fails if the result contains values that are not representable as JSON, such as functions. With --raw, the evaluation result must be a string, which is printed verbatim, without any quoting. With --write-to path, the evaluation result must be a string or a nested attribute set whose leaf values are strings. These strings are written to files named path/attrpath. path must not already exist.

## Options

--apply expr Apply the function expr to each argument. --json Produce output in JSON format, suitable for consumption by another program. --raw Print strings without quotes or escaping. --read-only Do not instantiate each evaluated derivation. This improves performance, but can cause errors when accessing store paths of derivations during evaluation. --write-to path Write a string or attrset of strings to path.

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
