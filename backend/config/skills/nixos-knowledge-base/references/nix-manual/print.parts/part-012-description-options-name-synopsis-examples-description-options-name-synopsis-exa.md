---
title: "Nix 2.28.6 Reference Manual"
source: print.html
---
## Description

This command downloads the source tree denoted by flake reference flake-url. Note that this does not need to be a flake (i.e. it does not have to contain a flake.nix file).

## Options

--json Produce output in JSON format, suitable for consumption by another program. --out-link / -o path Create symlink named path to the resulting store path.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Common flake-related options

--commit-lock-file Commit changes to the flake's lock file. --inputs-from flake-url Use the inputs of the specified flake as registry entries. --no-registries Don't allow lookups in the flake registries. DEPRECATED Use --no-use-registries instead. --no-update-lock-file Do not allow any updates to the flake's lock file. --no-write-lock-file Do not write the flake's newly generated lock file. --output-lock-file flake-lock-path Write the given lock file instead of flake.lock within the top-level flake. --override-input input-path flake-url Override a specific flake input (e.g. dwarffs/nixpkgs). This implies --no-write-lock-file. --recreate-lock-file Recreate the flake's lock file from scratch. DEPRECATED Use nix flake update instead. --reference-lock-file flake-lock-path Read the given lock file instead of flake.lock within the top-level flake. --update-input input-path Update a specific flake input (ignoring its previous entry in the lock file). DEPRECATED Use nix flake update instead.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix flake show - show the outputs provided by a flake

## Synopsis

nix flake show [option...] flake-url

## Examples

Show the output attributes provided by the patchelf flake: github:NixOS/patchelf/f34751b88bd07d7f44f5cd3200fb4122bf916c7e ├───checks │ ├───aarch64-linux │ │ └───build: derivation 'patchelf-0.12.20201207.f34751b' │ ├───i686-linux │ │ └───build: derivation 'patchelf-0.12.20201207.f34751b' │ └───x86_64-linux │ └───build: derivation 'patchelf-0.12.20201207.f34751b' ├───packages │ ├───aarch64-linux │ │ └───default: package 'patchelf-0.12.20201207.f34751b' │ ├───i686-linux │ │ └───default: package 'patchelf-0.12.20201207.f34751b' │ └───x86_64-linux │ └───default: package 'patchelf-0.12.20201207.f34751b' ├───hydraJobs │ ├───build │ │ ├───aarch64-linux: derivation 'patchelf-0.12.20201207.f34751b' │ │ ├───i686-linux: derivation 'patchelf-0.12.20201207.f34751b' │ │ └───x86_64-linux: derivation 'patchelf-0.12.20201207.f34751b' │ ├───coverage: derivation 'patchelf-coverage-0.12.20201207.f34751b' │ ├───release: derivation 'patchelf-0.12.20201207.f34751b' │ └───tarball: derivation 'patchelf-tarball-0.12.20201207.f34751b' └───overlay: Nixpkgs overlay

## Description

This command shows the output attributes provided by the flake specified by flake reference flake-url. These are the top-level attributes in the outputs of the flake, as well as lower-level attributes for some standard outputs (e.g. packages or checks). With --json, the output is in a JSON representation suitable for automatic processing by other tools.

## Options

--all-systems Show the contents of outputs for all systems. --json Produce output in JSON format, suitable for consumption by another program. --legacy Show the contents of the legacyPackages output.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Common flake-related options

--commit-lock-file Commit changes to the flake's lock file. --inputs-from flake-url Use the inputs of the specified flake as registry entries. --no-registries Don't allow lookups in the flake registries. DEPRECATED Use --no-use-registries instead. --no-update-lock-file Do not allow any updates to the flake's lock file. --no-write-lock-file Do not write the flake's newly generated lock file. --output-lock-file flake-lock-path Write the given lock file instead of flake.lock within the top-level flake. --override-input input-path flake-url Override a specific flake input (e.g. dwarffs/nixpkgs). This implies --no-write-lock-file. --recreate-lock-file Recreate the flake's lock file from scratch. DEPRECATED Use nix flake update instead. --reference-lock-file flake-lock-path Read the given lock file instead of flake.lock within the top-level flake. --update-input input-path Update a specific flake input (ignoring its previous entry in the lock file). DEPRECATED Use nix flake update instead.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix flake update - update flake lock file

## Synopsis

nix flake update [option...] inputs...

## Examples

Update all inputs (i.e. recreate the lock file from scratch): # nix flake update warning: updating lock file '/home/myself/repos/testflake/flake.lock': • Updated input 'nix': 'github:NixOS/nix/9fab14adbc3810d5cc1f88672fde1eee4358405c' (2023-06-28) → 'github:NixOS/nix/8927cba62f5afb33b01016d5c4f7f8b7d0adde3c' (2023-07-11) • Updated input 'nixpkgs': 'github:NixOS/nixpkgs/3d2d8f281a27d466fa54b469b5993f7dde198375' (2023-06-30) → 'github:NixOS/nixpkgs/a3a3dda3bacf61e8a39258a0ed9c924eeca8e293' (2023-07-05) Update only a single input: # nix flake update nixpkgs warning: updating lock file '/home/myself/repos/testflake/flake.lock': • Updated input 'nixpkgs': 'github:NixOS/nixpkgs/3d2d8f281a27d466fa54b469b5993f7dde198375' (2023-06-30) → 'github:NixOS/nixpkgs/a3a3dda3bacf61e8a39258a0ed9c924eeca8e293' (2023-07-05) Update multiple inputs: # nix flake update nixpkgs nixpkgs-unstable warning: updating lock file '/home/myself/repos/testflake/flake.lock': • Updated input 'nixpkgs': 'github:nixos/nixpkgs/8f7492cce28977fbf8bd12c72af08b1f6c7c3e49' (2024-09-14) → 'github:nixos/nixpkgs/086b448a5d54fd117f4dc2dee55c9f0ff461bdc1' (2024-09-16) • Updated input 'nixpkgs-unstable': 'github:nixos/nixpkgs/345c263f2f53a3710abe117f28a5cb86d0ba4059' (2024-09-13) → 'github:nixos/nixpkgs/99dc8785f6a0adac95f5e2ab05cc2e1bf666d172' (2024-09-16) Update only a single input of a flake in a different directory: # nix flake update nixpkgs --flake ~/repos/another warning: updating lock file '/home/myself/repos/another/flake.lock': • Updated input 'nixpkgs': 'github:NixOS/nixpkgs/3d2d8f281a27d466fa54b469b5993f7dde198375' (2023-06-30) → 'github:NixOS/nixpkgs/a3a3dda3bacf61e8a39258a0ed9c924eeca8e293' (2023-07-05) Note When trying to refer to a flake in a subdirectory, write ./another instead of another. Otherwise Nix will try to look up the flake in the registry.

## Description

This command updates the inputs in a lock file (flake.lock). By default, all inputs are updated. If the lock file doesn't exist yet, it will be created. If inputs are not in the lock file yet, they will be added. Unlike other nix flake commands, nix flake update takes a list of names of inputs to update as its positional arguments and operates on the flake in the current directory. You can pass a different flake-url with --flake to override that default. The related command nix flake lock also creates lock files and adds missing inputs, but is safer as it will never update inputs already in the lock file.

## Options

--flake flake-url The flake to operate on. Default is the current directory.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Common flake-related options

--commit-lock-file Commit changes to the flake's lock file. --inputs-from flake-url Use the inputs of the specified flake as registry entries. --no-registries Don't allow lookups in the flake registries. DEPRECATED Use --no-use-registries instead. --output-lock-file flake-lock-path Write the given lock file instead of flake.lock within the top-level flake. --override-input input-path flake-url Override a specific flake input (e.g. dwarffs/nixpkgs). This implies --no-write-lock-file. --recreate-lock-file Recreate the flake's lock file from scratch. DEPRECATED Use nix flake update instead. --reference-lock-file flake-lock-path Read the given lock file instead of flake.lock within the top-level flake. --update-input input-path Update a specific flake input (ignoring its previous entry in the lock file). DEPRECATED Use nix flake update instead.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix fmt - reformat your code in the standard style

## Synopsis

nix fmt [option...] args...

## Description

nix fmt calls the formatter specified in the flake. Flags can be forwarded to the formatter by using -- followed by the flags. Any arguments will be forwarded to the formatter. Typically these are the files to format.

## Example

To use the official Nix formatter: # flake.nix { outputs = { nixpkgs, self }: { formatter.x86_64-linux = nixpkgs.legacyPackages.${system}.nixfmt-tree; }; }

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

nix hash - compute and convert cryptographic hashes

## Synopsis

nix hash [option...] subcommand where subcommand is one of the following: Available commands: nix hash file - print cryptographic hash of a regular file nix hash path - print cryptographic hash of the NAR serialisation of a path nix hash to-base16 - convert a hash to base-16 representation (deprecated, use nix hash convert instead) nix hash to-base32 - convert a hash to base-32 representation (deprecated, use nix hash convert instead) nix hash to-base64 - convert a hash to base-64 representation (deprecated, use nix hash convert instead) nix hash to-sri - convert a hash to SRI representation (deprecated, use nix hash convert instead) : nix hash convert - convert between hash formats

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix hash convert - convert between hash formats

## Synopsis

nix hash convert [option...] hashes...

## Examples

Convert a hash to nix32 (a base-32 encoding with a Nix-specific character set). $ nix hash convert --hash-algo sha1 --to nix32 800d59cfcd3c05e900cb4e214be48f6b886a08df vw46m23bizj4n8afrc0fj19wrp7mj3c0 Convert a hash to the sri format that includes an algorithm specification: # nix hash convert --hash-algo sha1 800d59cfcd3c05e900cb4e214be48f6b886a08df sha1-gA1Zz808BekAy04hS+SPa4hqCN8= or with an explicit --to format: # nix hash convert --hash-algo sha1 --to sri 800d59cfcd3c05e900cb4e214be48f6b886a08df sha1-gA1Zz808BekAy04hS+SPa4hqCN8= Assert the input format of the hash: # nix hash convert --hash-algo sha256 --from nix32 ungWv48Bz+pBQUDeXa4iI7ADYaOWF3qctBD/YfIAFa0= error: input hash 'ungWv48Bz+pBQUDeXa4iI7ADYaOWF3qctBD/YfIAFa0=' does not have the expected format '--from nix32' # nix hash convert --hash-algo sha256 --from nix32 1b8m03r63zqhnjf7l5wnldhh7c134ap5vpj0850ymkq1iyzicy5s sha256-ungWv48Bz+pBQUDeXa4iI7ADYaOWF3qctBD/YfIAFa0=

## Description

nix hash convert converts hashes from one encoding to another.

## Options

--from hash-format Hash format (base16, nix32, base64, sri). --hash-algo hash-algo Hash algorithm (blake3, md5, sha1, sha256, or sha512). Can be omitted for SRI hashes. --to hash-format Hash format (base16, nix32, base64, sri). Default: sri.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix hash file - print cryptographic hash of a regular file

## Synopsis

nix hash file [option...] paths...

## Options

--base16 Print the hash in base-16 format. --base32 Print the hash in base-32 (Nix-specific) format. --base64 Print the hash in base-64 format. --sri Print the hash in SRI format. --type hash-algo Hash algorithm (blake3, md5, sha1, sha256, or sha512).

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix hash path - print cryptographic hash of the NAR serialisation of a path

## Synopsis

nix hash path [option...] paths...

## Options

--algo hash-algo Hash algorithm (blake3, md5, sha1, sha256, or sha512). --base16 Print the hash in base-16 format. --base32 Print the hash in base-32 (Nix-specific) format. --base64 Print the hash in base-64 format. --format hash-format Hash format (base16, nix32, base64, sri). Default: sri. --mode file-ingestion-method How to compute the hash of the input. One of: nar (the default): Serialises the input as a Nix Archive and passes that to the hash function. flat: Assumes that the input is a single file and directly passes it to the hash function. --sri Print the hash in SRI format. --type hash-algo Hash algorithm (blake3, md5, sha1, sha256, or sha512).

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix hash to-base16 - convert a hash to base-16 representation (deprecated, use nix hash convert instead)

## Synopsis

nix hash to-base16 [option...] strings...

## Options

--type hash-algo Hash algorithm (blake3, md5, sha1, sha256, or sha512). Can be omitted for SRI hashes.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix hash to-base32 - convert a hash to base-32 representation (deprecated, use nix hash convert instead)

## Synopsis

nix hash to-base32 [option...] strings...

## Options

--type hash-algo Hash algorithm (blake3, md5, sha1, sha256, or sha512). Can be omitted for SRI hashes.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix hash to-base64 - convert a hash to base-64 representation (deprecated, use nix hash convert instead)

## Synopsis

nix hash to-base64 [option...] strings...

## Options

--type hash-algo Hash algorithm (blake3, md5, sha1, sha256, or sha512). Can be omitted for SRI hashes.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix hash to-sri - convert a hash to SRI representation (deprecated, use nix hash convert instead)

## Synopsis

nix hash to-sri [option...] strings...

## Options

--type hash-algo Hash algorithm (blake3, md5, sha1, sha256, or sha512). Can be omitted for SRI hashes.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.
