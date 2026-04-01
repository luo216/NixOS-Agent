---
title: "Nix 2.28.6 Reference Manual"
source: print.html
---
## Options

--priority priority The priority of the package to install. --profile path The profile to operate on. --stdin Read installables from the standard input. No default installable applied.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Common flake-related options

--commit-lock-file Commit changes to the flake's lock file. --inputs-from flake-url Use the inputs of the specified flake as registry entries. --no-registries Don't allow lookups in the flake registries. DEPRECATED Use --no-use-registries instead. --no-update-lock-file Do not allow any updates to the flake's lock file. --no-write-lock-file Do not write the flake's newly generated lock file. --output-lock-file flake-lock-path Write the given lock file instead of flake.lock within the top-level flake. --override-input input-path flake-url Override a specific flake input (e.g. dwarffs/nixpkgs). This implies --no-write-lock-file. --recreate-lock-file Recreate the flake's lock file from scratch. DEPRECATED Use nix flake update instead. --reference-lock-file flake-lock-path Read the given lock file instead of flake.lock within the top-level flake. --update-input input-path Update a specific flake input (ignoring its previous entry in the lock file). DEPRECATED Use nix flake update instead.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information.

### Options that change the interpretation of installables

--expr expr Interpret installables as attribute paths relative to the Nix expression expr. --file / -f file Interpret installables as attribute paths relative to the Nix expression stored in file. If file is the character -, then a Nix expression will be read from standard input. Implies --impure. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix profile list - list installed packages

## Synopsis

nix profile list [option...]

## Examples

Show what packages are installed in the default profile: # nix profile list Name: gdb Flake attribute: legacyPackages.x86_64-linux.gdb Original flake URL: flake:nixpkgs Locked flake URL: github:NixOS/nixpkgs/7b38b03d76ab71bdc8dc325e3f6338d984cc35ca Store paths: /nix/store/indzcw5wvlhx6vwk7k4iq29q15chvr3d-gdb-11.1 Name: blender-bin Flake attribute: packages.x86_64-linux.default Original flake URL: flake:blender-bin Locked flake URL: github:edolstra/nix-warez/91f2ffee657bf834e4475865ae336e2379282d34?dir=blender Store paths: /nix/store/i798sxl3j40wpdi1rgf391id1b5klw7g-blender-bin-3.1.2 Note that you can unambiguously rebuild a package from a profile through its locked flake URL and flake attribute, e.g. # nix build github:edolstra/nix-warez/91f2ffee657bf834e4475865ae336e2379282d34?dir=blender#packages.x86_64-linux.default will build the package blender-bin shown above.

## Description

This command shows what packages are currently installed in a profile. For each installed package, it shows the following information: Name: A unique name used to unambiguously identify the package in invocations of nix profile remove and nix profile upgrade. Index: An integer that can be used to unambiguously identify the package in invocations of nix profile remove and nix profile upgrade. (Deprecated, will be removed in a future version in favor of Name.) Flake attribute: The flake output attribute path that provides the package (e.g. packages.x86_64-linux.hello). Original flake URL: The original ("unlocked") flake reference specified by the user when the package was first installed via nix profile install. Locked flake URL: The locked flake reference to which the original flake reference was resolved. Store paths: The store path(s) of the package.

## Options

--json Produce output in JSON format, suitable for consumption by another program. --profile path The profile to operate on.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix profile remove - remove packages from a profile

## Synopsis

nix profile remove [option...] elements...

## Examples

Remove a package by name: # nix profile remove hello Remove all packages: # nix profile remove --all Remove packages by regular expression: # nix profile remove --regex '.*vim.*' Remove a package by store path: # nix profile remove /nix/store/rr3y0c6zyk7kjjl8y19s4lsrhn4aiq1z-hello-2.10

## Description

This command removes a package from a profile.

## Options

--all Match all packages in the profile. --profile path The profile to operate on. --regex pattern A regular expression to match one or more packages in the profile.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix profile rollback - roll back to the previous version or a specified version of a profile

## Synopsis

nix profile rollback [option...]

## Examples

Roll back your default profile to the previous version: # nix profile rollback switching profile from version 519 to 518 Switch your default profile to version 510: # nix profile rollback --to 510 switching profile from version 518 to 510

## Description

This command switches a profile to the most recent version older than the currently active version, or if --to N is given, to version N of the profile. To see the available versions of a profile, use nix profile history.

## Options

--dry-run Show what this command would do without doing it. --profile path The profile to operate on. --to version The profile version to roll back to.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix profile upgrade - upgrade packages using their most recent flake

## Synopsis

nix profile upgrade [option...] elements...

## Examples

Upgrade all packages that were installed using an unlocked flake reference: # nix profile upgrade --all Upgrade a specific package by name: # nix profile upgrade hello Upgrade all packages that include 'vim' in their name: # nix profile upgrade --regex '.*vim.*'

## Description

This command upgrades a previously installed package in a Nix profile, by fetching and evaluating the latest version of the flake from which the package was installed. Warning This only works if you used an unlocked flake reference at installation time, e.g. nixpkgs#hello. It does not work if you used a locked flake reference (e.g. github:NixOS/nixpkgs/13d0c311e3ae923a00f734b43fd1d35b47d8943a#hello), since in that case the "latest version" is always the same.

## Options

--all Match all packages in the profile. --profile path The profile to operate on. --regex pattern A regular expression to match one or more packages in the profile.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Common flake-related options

--commit-lock-file Commit changes to the flake's lock file. --inputs-from flake-url Use the inputs of the specified flake as registry entries. --no-registries Don't allow lookups in the flake registries. DEPRECATED Use --no-use-registries instead. --no-update-lock-file Do not allow any updates to the flake's lock file. --no-write-lock-file Do not write the flake's newly generated lock file. --output-lock-file flake-lock-path Write the given lock file instead of flake.lock within the top-level flake. --override-input input-path flake-url Override a specific flake input (e.g. dwarffs/nixpkgs). This implies --no-write-lock-file. --recreate-lock-file Recreate the flake's lock file from scratch. DEPRECATED Use nix flake update instead. --reference-lock-file flake-lock-path Read the given lock file instead of flake.lock within the top-level flake. --update-input input-path Update a specific flake input (ignoring its previous entry in the lock file). DEPRECATED Use nix flake update instead.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information.

### Options that change the interpretation of installables

--expr expr Interpret installables as attribute paths relative to the Nix expression expr. --file / -f file Interpret installables as attribute paths relative to the Nix expression stored in file. If file is the character -, then a Nix expression will be read from standard input. Implies --impure. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix profile wipe-history - delete non-current versions of a profile

## Synopsis

nix profile wipe-history [option...]

## Examples

Delete all versions of the default profile older than 100 days: # nix profile wipe-history --profile /tmp/profile --older-than 100d removing profile version 515 removing profile version 514

## Description

This command deletes non-current versions of a profile, making it impossible to roll back to these versions. By default, all non-current versions are deleted. With --older-than Nd, all non-current versions older than N days are deleted.

## Options

--dry-run Show what this command would do without doing it. --older-than age Delete versions older than the specified age. age must be in the format Nd, where N denotes a number of days. --profile path The profile to operate on.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix realisation - manipulate a Nix realisation

## Synopsis

nix realisation [option...] subcommand where subcommand is one of the following: nix realisation info - query information about one or several realisations

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix realisation info - query information about one or several realisations

## Synopsis

nix realisation info [option...] installables...

## Description

Display some information about the given realisation

## Examples

Show some information about the realisation of the hello package: $ nix realisation info nixpkgs#hello --json [{"id":"sha256:3d382378a00588e064ee30be96dd0fa7e7df7cf3fbcace85a0e7b7dada1eef25!out","outPath":"fd3m7xawvrqcg98kgz5hc2vk3x9q0lh7-hello"}]

## Options

--json Produce output in JSON format, suitable for consumption by another program. --stdin Read installables from the standard input. No default installable applied.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Common flake-related options

--commit-lock-file Commit changes to the flake's lock file. --inputs-from flake-url Use the inputs of the specified flake as registry entries. --no-registries Don't allow lookups in the flake registries. DEPRECATED Use --no-use-registries instead. --no-update-lock-file Do not allow any updates to the flake's lock file. --no-write-lock-file Do not write the flake's newly generated lock file. --output-lock-file flake-lock-path Write the given lock file instead of flake.lock within the top-level flake. --override-input input-path flake-url Override a specific flake input (e.g. dwarffs/nixpkgs). This implies --no-write-lock-file. --recreate-lock-file Recreate the flake's lock file from scratch. DEPRECATED Use nix flake update instead. --reference-lock-file flake-lock-path Read the given lock file instead of flake.lock within the top-level flake. --update-input input-path Update a specific flake input (ignoring its previous entry in the lock file). DEPRECATED Use nix flake update instead.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information.

### Options that change the interpretation of installables

--all Apply the operation to every store path. --derivation Operate on the store derivation rather than its outputs. --expr expr Interpret installables as attribute paths relative to the Nix expression expr. --file / -f file Interpret installables as attribute paths relative to the Nix expression stored in file. If file is the character -, then a Nix expression will be read from standard input. Implies --impure. --recursive / -r Apply operation to closure of the specified paths. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix registry - manage the flake registry

## Synopsis

nix registry [option...] subcommand where subcommand is one of the following: nix registry add - add/replace flake in user flake registry nix registry list - list available Nix flakes nix registry pin - pin a flake to its current version or to the current version of a flake URL nix registry remove - remove flake from user flake registry

## Description

nix registry provides subcommands for managing flake registries. Flake registries are a convenience feature that allows you to refer to flakes using symbolic identifiers such as nixpkgs, rather than full URLs such as git://github.com/NixOS/nixpkgs. You can use these identifiers on the command line (e.g. when you do nix run nixpkgs#hello) or in flake input specifications in flake.nix files. The latter are automatically resolved to full URLs and recorded in the flake's flake.lock file. In addition, the flake registry allows you to redirect arbitrary flake references (e.g. github:NixOS/patchelf) to another location, such as a local fork. There are multiple registries. These are, in order from lowest to highest precedence: The global registry, which is a file downloaded from the URL specified by the setting flake-registry. It is cached locally and updated automatically when it's older than tarball-ttl seconds. The default global registry is kept in a GitHub repository. The system registry, which is shared by all users. The default location is /etc/nix/registry.json. On NixOS, the system registry can be specified using the NixOS option nix.registry. The user registry ~/.config/nix/registry.json. This registry can be modified by commands such as nix registry pin. Overrides specified on the command line using the option --override-flake. Note that the system and user registries are not used to resolve flake references in flake.nix. They are only used to resolve flake references on the command line.

## Registry format

A registry is a JSON file with the following format: { "version": 2, "flakes": [ { "from": { "type": "indirect", "id": "nixpkgs" }, "to": { "type": "github", "owner": "NixOS", "repo": "nixpkgs" } }, ... ] } That is, it contains a list of objects with attributes from and to, both of which contain a flake reference in attribute representation. (For example, {"type": "indirect", "id": "nixpkgs"} is the attribute representation of nixpkgs, while {"type": "github", "owner": "NixOS", "repo": "nixpkgs"} is the attribute representation of github:NixOS/nixpkgs.) Given some flake reference R, a registry entry is used if its from flake reference matches R. R is then replaced by the unification of the to flake reference with R.

## Matching

The from flake reference in a registry entry matches some flake reference R if the attributes in from are the same as the attributes in R. For example: nixpkgs matches with nixpkgs. nixpkgs matches with nixpkgs/nixos-20.09. nixpkgs/nixos-20.09 does not match with nixpkgs. nixpkgs does not match with git://github.com/NixOS/patchelf.

## Unification

The to flake reference in a registry entry is unified with some flake reference R by taking to and applying the rev and ref attributes from R, if specified. For example: github:NixOS/nixpkgs unified with nixpkgs produces github:NixOS/nixpkgs. github:NixOS/nixpkgs unified with nixpkgs/nixos-20.09 produces github:NixOS/nixpkgs/nixos-20.09. github:NixOS/nixpkgs/master unified with nixpkgs/nixos-20.09 produces github:NixOS/nixpkgs/nixos-20.09.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix registry add - add/replace flake in user flake registry

## Synopsis

nix registry add [option...] from-url to-url

## Examples

Set the nixpkgs flake identifier to a specific branch of Nixpkgs: # nix registry add nixpkgs github:NixOS/nixpkgs/nixos-20.03 Pin nixpkgs to a specific revision: # nix registry add nixpkgs github:NixOS/nixpkgs/925b70cd964ceaedee26fde9b19cc4c4f081196a Add an entry that redirects a specific branch of nixpkgs to another fork: # nix registry add nixpkgs/nixos-20.03 ~/Dev/nixpkgs Add nixpkgs pointing to github:nixos/nixpkgs to your custom flake registry: nix registry add --registry ./custom-flake-registry.json nixpkgs github:nixos/nixpkgs

## Description

This command adds an entry to the user registry that maps flake reference from-url to flake reference to-url. If an entry for from-url already exists, it is overwritten. Entries can be removed using nix registry remove.
