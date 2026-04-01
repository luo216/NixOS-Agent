---
title: "Nix 2.28.6 Reference Manual"
source: print.html
---
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

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix flake check - check whether the flake evaluates and run its tests

## Synopsis

nix flake check [option...] flake-url

## Examples

Evaluate the flake in the current directory, and build its checks: # nix flake check Verify that the patchelf flake evaluates, but don't build its checks: # nix flake check --no-build github:NixOS/patchelf

## Description

This command verifies that the flake specified by flake reference flake-url can be evaluated successfully (as detailed below), and that the derivations specified by the flake's checks output can be built successfully. If the keep-going option is set to true, Nix will keep evaluating as much as it can and report the errors as it encounters them. Otherwise it will stop at the first error.

## Evaluation checks

The following flake output attributes must be derivations: checks.system.name defaultPackage.system devShell.system devShells.system.name nixosConfigurations.name.config.system.build.toplevel packages.system.name The following flake output attributes must be app definitions: apps.system.name defaultApp.system The following flake output attributes must be template definitions: defaultTemplate templates.name The following flake output attributes must be Nixpkgs overlays: overlay overlays.name The following flake output attributes must be NixOS modules: nixosModule nixosModules.name The following flake output attributes must be bundlers: bundlers.name defaultBundler In addition, the hydraJobs output is evaluated in the same way as Hydra's hydra-eval-jobs (i.e. as a arbitrarily deeply nested attribute set of derivations). Similarly, the legacyPackages.system output is evaluated like nix-env --query --available .

## Options

--all-systems Check the outputs for all systems. --no-build Do not build checks.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Common flake-related options

--commit-lock-file Commit changes to the flake's lock file. --inputs-from flake-url Use the inputs of the specified flake as registry entries. --no-registries Don't allow lookups in the flake registries. DEPRECATED Use --no-use-registries instead. --no-update-lock-file Do not allow any updates to the flake's lock file. --no-write-lock-file Do not write the flake's newly generated lock file. --output-lock-file flake-lock-path Write the given lock file instead of flake.lock within the top-level flake. --override-input input-path flake-url Override a specific flake input (e.g. dwarffs/nixpkgs). This implies --no-write-lock-file. --recreate-lock-file Recreate the flake's lock file from scratch. DEPRECATED Use nix flake update instead. --reference-lock-file flake-lock-path Read the given lock file instead of flake.lock within the top-level flake. --update-input input-path Update a specific flake input (ignoring its previous entry in the lock file). DEPRECATED Use nix flake update instead.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix flake clone - clone flake repository

## Synopsis

nix flake clone [option...] flake-url

## Examples

Check out the source code of the dwarffs flake and build it: # nix flake clone dwarffs --dest dwarffs # cd dwarffs # nix build

## Description

This command performs a Git or Mercurial clone of the repository containing the source code of the flake flake-url.

## Options

--dest / -f path Clone the flake to path dest.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Common flake-related options

--commit-lock-file Commit changes to the flake's lock file. --inputs-from flake-url Use the inputs of the specified flake as registry entries. --no-registries Don't allow lookups in the flake registries. DEPRECATED Use --no-use-registries instead. --no-update-lock-file Do not allow any updates to the flake's lock file. --no-write-lock-file Do not write the flake's newly generated lock file. --output-lock-file flake-lock-path Write the given lock file instead of flake.lock within the top-level flake. --override-input input-path flake-url Override a specific flake input (e.g. dwarffs/nixpkgs). This implies --no-write-lock-file. --recreate-lock-file Recreate the flake's lock file from scratch. DEPRECATED Use nix flake update instead. --reference-lock-file flake-lock-path Read the given lock file instead of flake.lock within the top-level flake. --update-input input-path Update a specific flake input (ignoring its previous entry in the lock file). DEPRECATED Use nix flake update instead.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix flake info - show flake metadata

## Synopsis

nix flake info [option...] flake-url

## Examples

Show what dwarffs resolves to: # nix flake metadata dwarffs Resolved URL: github:edolstra/dwarffs Locked URL: github:edolstra/dwarffs/f691e2c991e75edb22836f1dbe632c40324215c5 Description: A filesystem that fetches DWARF debug info from the Internet on demand Path: /nix/store/769s05vjydmc2lcf6b02az28wsa9ixh1-source Revision: f691e2c991e75edb22836f1dbe632c40324215c5 Last modified: 2021-01-21 15:41:26 Inputs: ├───nix: github:NixOS/nix/6254b1f5d298ff73127d7b0f0da48f142bdc753c │ ├───lowdown-src: github:kristapsdz/lowdown/1705b4a26fbf065d9574dce47a94e8c7c79e052f │ └───nixpkgs: github:NixOS/nixpkgs/ad0d20345219790533ebe06571f82ed6b034db31 └───nixpkgs follows input 'nix/nixpkgs' Show information about dwarffs in JSON format: # nix flake metadata dwarffs --json | jq . { "description": "A filesystem that fetches DWARF debug info from the Internet on demand", "lastModified": 1597153508, "locked": { "lastModified": 1597153508, "narHash": "sha256-VHg3MYVgQ12LeRSU2PSoDeKlSPD8PYYEFxxwkVVDRd0=", "owner": "edolstra", "repo": "dwarffs", "rev": "d181d714fd36eb06f4992a1997cd5601e26db8f5", "type": "github" }, "locks": { ... }, "original": { "id": "dwarffs", "type": "indirect" }, "originalUrl": "flake:dwarffs", "path": "/nix/store/hang3792qwdmm2n0d9nsrs5n6bsws6kv-source", "resolved": { "owner": "edolstra", "repo": "dwarffs", "type": "github" }, "resolvedUrl": "github:edolstra/dwarffs", "revision": "d181d714fd36eb06f4992a1997cd5601e26db8f5", "url": "github:edolstra/dwarffs/d181d714fd36eb06f4992a1997cd5601e26db8f5" }

## Description

This command shows information about the flake specified by the flake reference flake-url. It resolves the flake reference using the flake registry, fetches it, and prints some meta data. This includes: Resolved URL: If flake-url is a flake identifier, then this is the flake reference that specifies its actual location, looked up in the flake registry. Locked URL: A flake reference that contains a commit or content hash and thus uniquely identifies a specific flake version. Description: A one-line description of the flake, taken from the description field in flake.nix. Path: The store path containing the source code of the flake. Revision: The Git or Mercurial commit hash of the locked flake. Revisions: The number of ancestors of the Git or Mercurial commit of the locked flake. Note that this is not available for github flakes. Last modified: For Git or Mercurial flakes, this is the commit time of the commit of the locked flake; for tarball flakes, it's the most recent timestamp of any file inside the tarball. Inputs: The flake inputs with their corresponding lock file entries. With --json, the output is a JSON object with the following fields: original and originalUrl: The flake reference specified by the user (flake-url) in attribute set and URL representation. resolved and resolvedUrl: The resolved flake reference (see above) in attribute set and URL representation. locked and lockedUrl: The locked flake reference (see above) in attribute set and URL representation. description: See Description above. path: See Path above. revision: See Revision above. revCount: See Revisions above. lastModified: See Last modified above. locks: The contents of flake.lock.

## Options

--json Produce output in JSON format, suitable for consumption by another program.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Common flake-related options

--commit-lock-file Commit changes to the flake's lock file. --inputs-from flake-url Use the inputs of the specified flake as registry entries. --no-registries Don't allow lookups in the flake registries. DEPRECATED Use --no-use-registries instead. --no-update-lock-file Do not allow any updates to the flake's lock file. --no-write-lock-file Do not write the flake's newly generated lock file. --output-lock-file flake-lock-path Write the given lock file instead of flake.lock within the top-level flake. --override-input input-path flake-url Override a specific flake input (e.g. dwarffs/nixpkgs). This implies --no-write-lock-file. --recreate-lock-file Recreate the flake's lock file from scratch. DEPRECATED Use nix flake update instead. --reference-lock-file flake-lock-path Read the given lock file instead of flake.lock within the top-level flake. --update-input input-path Update a specific flake input (ignoring its previous entry in the lock file). DEPRECATED Use nix flake update instead.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix flake init - create a flake in the current directory from a template

## Synopsis

nix flake init [option...]

## Examples

Create a flake using the default template: # nix flake init List available templates: # nix flake show templates Create a flake from a specific template: # nix flake init -t templates#simpleContainer

## Description

This command creates a flake in the current directory by copying the files of a template. It will not overwrite existing files. The default template is templates#templates.default, but this can be overridden using -t.

## Template definitions

A flake can declare templates through its templates output attribute. A template has the following attributes: description: A one-line description of the template, in CommonMark syntax. path: The path of the directory to be copied. welcomeText: A block of markdown text to display when a user initializes a new flake based on this template. Here is an example: outputs = { self }: { templates.rust = { path = ./rust; description = "A simple Rust/Cargo project"; welcomeText = '' # Simple Rust/Cargo Template ## Intended usage The intended usage of this flake is... ## More info - [Rust language](https://www.rust-lang.org/) - [Rust on the NixOS Wiki](https://wiki.nixos.org/wiki/Rust) - ... ''; }; templates.default = self.templates.rust; }

## Options

--template / -t template The template to use.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix flake lock - create missing lock file entries

## Synopsis

nix flake lock [option...] flake-url

## Examples

Create the lock file for the flake in the current directory: # nix flake lock warning: creating lock file '/home/myself/repos/testflake/flake.lock': • Added input 'nix': 'github:NixOS/nix/9fab14adbc3810d5cc1f88672fde1eee4358405c' (2023-06-28) • Added input 'nixpkgs': 'github:NixOS/nixpkgs/3d2d8f281a27d466fa54b469b5993f7dde198375' (2023-06-30) Add missing inputs to the lock file for a flake in a different directory: # nix flake lock ~/repos/another warning: updating lock file '/home/myself/repos/another/flake.lock': • Added input 'nixpkgs': 'github:NixOS/nixpkgs/3d2d8f281a27d466fa54b469b5993f7dde198375' (2023-06-30) Note When trying to refer to a flake in a subdirectory, write ./another instead of another. Otherwise Nix will try to look up the flake in the registry.

## Description

This command updates the lock file of a flake (flake.lock) so that it contains an up-to-date lock for every flake input specified in flake.nix. Lock file entries are already up-to-date are not modified. If you want to update existing lock entries, use nix flake update

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Common flake-related options

--commit-lock-file Commit changes to the flake's lock file. --inputs-from flake-url Use the inputs of the specified flake as registry entries. --no-registries Don't allow lookups in the flake registries. DEPRECATED Use --no-use-registries instead. --no-update-lock-file Do not allow any updates to the flake's lock file. --output-lock-file flake-lock-path Write the given lock file instead of flake.lock within the top-level flake. --override-input input-path flake-url Override a specific flake input (e.g. dwarffs/nixpkgs). This implies --no-write-lock-file. --recreate-lock-file Recreate the flake's lock file from scratch. DEPRECATED Use nix flake update instead. --reference-lock-file flake-lock-path Read the given lock file instead of flake.lock within the top-level flake. --update-input input-path Update a specific flake input (ignoring its previous entry in the lock file). DEPRECATED Use nix flake update instead.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix flake metadata - show flake metadata

## Synopsis

nix flake metadata [option...] flake-url

## Examples

Show what dwarffs resolves to: # nix flake metadata dwarffs Resolved URL: github:edolstra/dwarffs Locked URL: github:edolstra/dwarffs/f691e2c991e75edb22836f1dbe632c40324215c5 Description: A filesystem that fetches DWARF debug info from the Internet on demand Path: /nix/store/769s05vjydmc2lcf6b02az28wsa9ixh1-source Revision: f691e2c991e75edb22836f1dbe632c40324215c5 Last modified: 2021-01-21 15:41:26 Inputs: ├───nix: github:NixOS/nix/6254b1f5d298ff73127d7b0f0da48f142bdc753c │ ├───lowdown-src: github:kristapsdz/lowdown/1705b4a26fbf065d9574dce47a94e8c7c79e052f │ └───nixpkgs: github:NixOS/nixpkgs/ad0d20345219790533ebe06571f82ed6b034db31 └───nixpkgs follows input 'nix/nixpkgs' Show information about dwarffs in JSON format: # nix flake metadata dwarffs --json | jq . { "description": "A filesystem that fetches DWARF debug info from the Internet on demand", "lastModified": 1597153508, "locked": { "lastModified": 1597153508, "narHash": "sha256-VHg3MYVgQ12LeRSU2PSoDeKlSPD8PYYEFxxwkVVDRd0=", "owner": "edolstra", "repo": "dwarffs", "rev": "d181d714fd36eb06f4992a1997cd5601e26db8f5", "type": "github" }, "locks": { ... }, "original": { "id": "dwarffs", "type": "indirect" }, "originalUrl": "flake:dwarffs", "path": "/nix/store/hang3792qwdmm2n0d9nsrs5n6bsws6kv-source", "resolved": { "owner": "edolstra", "repo": "dwarffs", "type": "github" }, "resolvedUrl": "github:edolstra/dwarffs", "revision": "d181d714fd36eb06f4992a1997cd5601e26db8f5", "url": "github:edolstra/dwarffs/d181d714fd36eb06f4992a1997cd5601e26db8f5" }

## Description

This command shows information about the flake specified by the flake reference flake-url. It resolves the flake reference using the flake registry, fetches it, and prints some meta data. This includes: Resolved URL: If flake-url is a flake identifier, then this is the flake reference that specifies its actual location, looked up in the flake registry. Locked URL: A flake reference that contains a commit or content hash and thus uniquely identifies a specific flake version. Description: A one-line description of the flake, taken from the description field in flake.nix. Path: The store path containing the source code of the flake. Revision: The Git or Mercurial commit hash of the locked flake. Revisions: The number of ancestors of the Git or Mercurial commit of the locked flake. Note that this is not available for github flakes. Last modified: For Git or Mercurial flakes, this is the commit time of the commit of the locked flake; for tarball flakes, it's the most recent timestamp of any file inside the tarball. Inputs: The flake inputs with their corresponding lock file entries. With --json, the output is a JSON object with the following fields: original and originalUrl: The flake reference specified by the user (flake-url) in attribute set and URL representation. resolved and resolvedUrl: The resolved flake reference (see above) in attribute set and URL representation. locked and lockedUrl: The locked flake reference (see above) in attribute set and URL representation. description: See Description above. path: See Path above. revision: See Revision above. revCount: See Revisions above. lastModified: See Last modified above. locks: The contents of flake.lock.

## Options

--json Produce output in JSON format, suitable for consumption by another program.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Common flake-related options

--commit-lock-file Commit changes to the flake's lock file. --inputs-from flake-url Use the inputs of the specified flake as registry entries. --no-registries Don't allow lookups in the flake registries. DEPRECATED Use --no-use-registries instead. --no-update-lock-file Do not allow any updates to the flake's lock file. --no-write-lock-file Do not write the flake's newly generated lock file. --output-lock-file flake-lock-path Write the given lock file instead of flake.lock within the top-level flake. --override-input input-path flake-url Override a specific flake input (e.g. dwarffs/nixpkgs). This implies --no-write-lock-file. --recreate-lock-file Recreate the flake's lock file from scratch. DEPRECATED Use nix flake update instead. --reference-lock-file flake-lock-path Read the given lock file instead of flake.lock within the top-level flake. --update-input input-path Update a specific flake input (ignoring its previous entry in the lock file). DEPRECATED Use nix flake update instead.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix flake new - create a flake in the specified directory from a template

## Synopsis

nix flake new [option...] dest-dir

## Examples

Create a flake using the default template in the directory hello: # nix flake new hello List available templates: # nix flake show templates Create a flake from a specific template in the directory hello: # nix flake new hello -t templates#trivial

## Description

This command creates a flake in the directory dest-dir, which must not already exist. It's equivalent to: # mkdir dest-dir # cd dest-dir # nix flake init

## Options

--template / -t template The template to use.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix flake prefetch - download the source tree denoted by a flake reference into the Nix store

## Synopsis

nix flake prefetch [option...] flake-url

## Examples

Download a tarball and unpack it: # nix flake prefetch https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.10.5.tar.xz --out-link ./result Downloaded 'https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.10.5.tar.xz?narHash=sha256-3XYHZANT6AFBV0BqegkAZHbba6oeDkIUCDwbATLMhAY=' to '/nix/store/sl5vvk8mb4ma1sjyy03kwpvkz50hd22d-source' (hash 'sha256-3XYHZANT6AFBV0BqegkAZHbba6oeDkIUCDwbATLMhAY='). # cat ./result/README Linux kernel … Download the dwarffs flake (looked up in the flake registry): # nix flake prefetch dwarffs --json {"hash":"sha256-VHg3MYVgQ12LeRSU2PSoDeKlSPD8PYYEFxxwkVVDRd0=" ,"storePath":"/nix/store/hang3792qwdmm2n0d9nsrs5n6bsws6kv-source"}
