---
title: "nix run - Nix 2.28.6 Reference Manual"
source: command-ref/new-cli/nix3-run.html
---

# nix run - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Nix 2.28.6 Reference Manual

Warning This program is experimental and its interface is subject to change.

## Name

nix run - run a Nix application

## Synopsis

nix run [option...] installable args...

## Examples

Run the default app from the blender-bin flake: # nix run blender-bin Run a non-default app from the blender-bin flake: # nix run blender-bin#blender_2_83 Tip: you can find apps provided by this flake by running nix flake show blender-bin. Run vim from the nixpkgs flake: # nix run nixpkgs#vim Note that vim (as of the time of writing of this page) is not an app but a package. Thus, Nix runs the eponymous file from the vim package. Run vim with arguments: # nix run nixpkgs#vim -- --help

## Description

nix run builds and runs installable, which must evaluate to an app or a regular Nix derivation. If installable evaluates to an app (see below), it executes the program specified by the app definition. If installable evaluates to a derivation, it will try to execute the program <out>/bin/<name>, where out is the primary output store path of the derivation, and name is the first of the following that exists: The meta.mainProgram attribute of the derivation. The pname attribute of the derivation. The name part of the value of the name attribute of the derivation. For instance, if name is set to hello-1.10, nix run will run $out/bin/hello.

## Flake output attributes

If no flake output attribute is given, nix run tries the following flake output attributes: apps.<system>.default packages.<system>.default If an attribute name is given, nix run tries the following flake output attributes: apps.<system>.<name> packages.<system>.<name> legacyPackages.<system>.<name>

## Apps

An app is specified by a flake output attribute named apps.<system>.<name>. It looks like this: apps.x86_64-linux.blender_2_79 = { type = "app"; program = "${self.packages.x86_64-linux.blender_2_79}/bin/blender"; meta.description = "Run Blender, a free and open-source 3D creation suite."; }; The only supported attributes are: type (required): Must be set to app. program (required): The full path of the executable to run. It must reside in the Nix store. meta.description (optional): A description of the app.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Common flake-related options

--commit-lock-file Commit changes to the flake's lock file. --inputs-from flake-url Use the inputs of the specified flake as registry entries. --no-registries Don't allow lookups in the flake registries. DEPRECATED Use --no-use-registries instead. --no-update-lock-file Do not allow any updates to the flake's lock file. --no-write-lock-file Do not write the flake's newly generated lock file. --output-lock-file flake-lock-path Write the given lock file instead of flake.lock within the top-level flake. --override-input input-path flake-url Override a specific flake input (e.g. dwarffs/nixpkgs). This implies --no-write-lock-file. --recreate-lock-file Recreate the flake's lock file from scratch. DEPRECATED Use nix flake update instead. --reference-lock-file flake-lock-path Read the given lock file instead of flake.lock within the top-level flake. --update-input input-path Update a specific flake input (ignoring its previous entry in the lock file). DEPRECATED Use nix flake update instead.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information.

### Options that change environment variables

--ignore-env / -i Clear the entire environment, except for those specified with --keep-env-var. --keep-env-var / -k name Keep the environment variable name, when using --ignore-env. --set-env-var / -s name value Sets an environment variable name with value. --unset-env-var / -u name Unset the environment variable name.

### Options that change the interpretation of installables

--expr expr Interpret installables as attribute paths relative to the Nix expression expr. --file / -f file Interpret installables as attribute paths relative to the Nix expression stored in file. If file is the character -, then a Nix expression will be read from standard input. Implies --impure. Note See man nix.conf for overriding configuration settings with command line flags.
