---
title: "Nix 2.28.6 Reference Manual"
source: print.html
---
## Examples

To list the contents of a store path in a binary cache: # nix store ls --store https://cache.nixos.org/ --long --recursive /nix/store/0i2jd68mp5g6h2sa5k9c85rb80sn8hi9-hello-2.10 dr-xr-xr-x 0 ./bin -r-xr-xr-x 38184 ./bin/hello dr-xr-xr-x 0 ./share … To show information about a specific file in a binary cache: # nix store ls --store https://cache.nixos.org/ --long /nix/store/0i2jd68mp5g6h2sa5k9c85rb80sn8hi9-hello-2.10/bin/hello -r-xr-xr-x 38184 hello

## Description

This command shows information about path in a Nix store. path can be a top-level store path or any file inside a store path.

## Options

--directory / -d Show directories rather than their contents. --json Produce output in JSON format, suitable for consumption by another program. --long / -l Show detailed file information. --recursive / -R List subdirectories recursively.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix store make-content-addressed - rewrite a path or closure to content-addressed form

## Synopsis

nix store make-content-addressed [option...] installables...

## Examples

Create a content-addressed representation of the closure of GNU Hello: # nix store make-content-addressed nixpkgs#hello … rewrote '/nix/store/v5sv61sszx301i0x6xysaqzla09nksnd-hello-2.10' to '/nix/store/5skmmcb9svys5lj3kbsrjg7vf2irid63-hello-2.10' Since the resulting paths are content-addressed, they are always trusted and don't need signatures to copied to another store: # nix copy --to /tmp/nix --trusted-public-keys '' /nix/store/5skmmcb9svys5lj3kbsrjg7vf2irid63-hello-2.10 By contrast, the original closure is input-addressed, so it does need signatures to be trusted: # nix copy --to /tmp/nix --trusted-public-keys '' nixpkgs#hello cannot add path '/nix/store/zy9wbxwcygrwnh8n2w9qbbcr6zk87m26-libunistring-0.9.10' because it lacks a signature by a trusted key Create a content-addressed representation of the current NixOS system closure: # nix store make-content-addressed /run/current-system

## Description

This command converts the closure of the store paths specified by installables to content-addressed form. Nix store paths are usually input-addressed, meaning that the hash part of the store path is computed from the contents of the derivation (i.e., the build-time dependency graph). Input-addressed paths need to be signed by a trusted key if you want to import them into a store, because we need to trust that the contents of the path were actually built by the derivation. By contrast, in a content-addressed path, the hash part is computed from the contents of the path. This allows the contents of the path to be verified without any additional information such as signatures. This means that a command like # nix store build /nix/store/5skmmcb9svys5lj3kbsrjg7vf2irid63-hello-2.10 \ --substituters https://my-cache.example.org will succeed even if the binary cache https://my-cache.example.org doesn't present any signatures.

## Options

--from store-uri URL of the source Nix store. --json Produce output in JSON format, suitable for consumption by another program. --stdin Read installables from the standard input. No default installable applied. --to store-uri URL of the destination Nix store.

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

nix store optimise - replace identical files in the store by hard links

## Synopsis

nix store optimise [option...]

## Examples

Optimise the Nix store: nix store optimise

## Description

This command deduplicates the Nix store: it scans the store for regular files with identical contents, and replaces them with hard links to a single instance. Note that you can also set auto-optimise-store to true in nix.conf to perform this optimisation incrementally whenever a new path is added to the Nix store. To make this efficient, Nix maintains a content-addressed index of all the files in the Nix store in the directory /nix/store/.links/.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix store path-from-hash-part - get a store path from its hash part

## Synopsis

nix store path-from-hash-part [option...] hash-part

## Examples

Return the full store path with the given hash part: # nix store path-from-hash-part --store https://cache.nixos.org/ 0i2jd68mp5g6h2sa5k9c85rb80sn8hi9 /nix/store/0i2jd68mp5g6h2sa5k9c85rb80sn8hi9-hello-2.10

## Description

Given the hash part of a store path (that is, the 32 characters following /nix/store/), return the full store path. This is primarily useful in the implementation of binary caches, where a request for a .narinfo file only supplies the hash part (e.g. https://cache.nixos.org/0i2jd68mp5g6h2sa5k9c85rb80sn8hi9.narinfo).

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix store ping - test whether a store can be accessed

## Synopsis

nix store ping [option...]

## Examples

Test whether connecting to a remote Nix store via SSH works: # nix store info --store ssh://mac1 Test whether a URL is a valid binary cache: # nix store info --store https://cache.nixos.org Test whether the Nix daemon is up and running: # nix store info --store daemon

## Description

This command tests whether a particular Nix store (specified by the argument --store url) can be accessed. What this means is dependent on the type of the store. For instance, for an SSH store it means that Nix can connect to the specified machine. If the command succeeds, Nix returns a exit code of 0 and does not print any output.

## Options

--json Produce output in JSON format, suitable for consumption by another program.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix store prefetch-file - download a file into the Nix store

## Synopsis

nix store prefetch-file [option...] url

## Examples

Download a file to the Nix store: # nix store prefetch-file https://releases.nixos.org/nix/nix-2.3.10/nix-2.3.10.tar.xz Downloaded 'https://releases.nixos.org/nix/nix-2.3.10/nix-2.3.10.tar.xz' to '/nix/store/vbdbi42hgnc4h7pyqzp6h2yf77kw93aw-source' (hash 'sha256-qKheVd5D0BervxMDbt+1hnTKE2aRWC8XCAwc0SeHt6s='). Download a file and get the SHA-512 hash: # nix store prefetch-file --json --hash-type sha512 \ https://releases.nixos.org/nix/nix-2.3.10/nix-2.3.10.tar.xz \ | jq -r .hash sha512-6XJxfym0TNH9knxeH4ZOvns6wElFy3uahunl2hJgovACCMEMXSy42s69zWVyGJALXTI+86tpDJGlIcAySEKBbA==

## Description

This command downloads the file url to the Nix store. It prints out the resulting store path and the cryptographic hash of the contents of the file. The name component of the store path defaults to the last component of url, but this can be overridden using --name.

## Options

--executable Make the resulting file executable. Note that this causes the resulting hash to be a NAR hash rather than a flat file hash. --expected-hash hash The expected hash of the file. --hash-type hash-algo Hash algorithm (blake3, md5, sha1, sha256, or sha512). --json Produce output in JSON format, suitable for consumption by another program. --name name Override the name component of the resulting store path. It defaults to the base name of url. --unpack Unpack the archive (which must be a tarball or zip file) and add the result to the Nix store.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix store repair - repair store paths

## Synopsis

nix store repair [option...] installables...

## Examples

Repair a store path, after determining that it is corrupt: # nix store verify /nix/store/yb5q57zxv6hgqql42d5r8b5k5mcq6kay-hello-2.10 path '/nix/store/yb5q57zxv6hgqql42d5r8b5k5mcq6kay-hello-2.10' was modified! expected hash 'sha256:1hd5vnh6xjk388gdk841vflicy8qv7qzj2hb7xlyh8lpb43j921l', got 'sha256:1a25lf78x5wi6pfkrxalf0n13kdaca0bqmjqnp7wfjza2qz5ssgl' # nix store repair /nix/store/yb5q57zxv6hgqql42d5r8b5k5mcq6kay-hello-2.10

## Description

This command attempts to "repair" the store paths specified by installables by redownloading them using the available substituters. If no substitutes are available, then repair is not possible. Warning During repair, there is a very small time window during which the old path (if it exists) is moved out of the way and replaced with the new path. If repair is interrupted in between, then the system may be left in a broken state (e.g., if the path contains a critical system component like the GNU C Library).

## Options

--stdin Read installables from the standard input. No default installable applied.

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

nix store sign - sign store paths with a local key

## Synopsis

nix store sign [option...] installables...

## Options

--key-file / -k file File containing the secret signing key. --stdin Read installables from the standard input. No default installable applied.

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

nix store verify - verify the integrity of store paths

## Synopsis

nix store verify [option...] installables...

## Examples

Verify the entire Nix store: # nix store verify --all Check whether each path in the closure of Firefox has at least 2 signatures: # nix store verify --recursive --sigs-needed 2 --no-contents $(type -p firefox) Verify a store path in the binary cache https://cache.nixos.org/: # nix store verify --store https://cache.nixos.org/ \ /nix/store/v5sv61sszx301i0x6xysaqzla09nksnd-hello-2.10

## Description

This command verifies the integrity of the store paths installables, or, if --all is given, the entire Nix store. For each path, it checks that its contents match the NAR hash recorded in the Nix database; and it is trusted, that is, it is signed by at least one trusted signing key, is content-addressed, or is built locally ("ultimately trusted").

## Exit status

The exit status of this command is the sum of the following values: 1 if any path is corrupted (i.e. its contents don't match the recorded NAR hash). 2 if any path is untrusted. 4 if any path couldn't be verified for any other reason (such as an I/O error).

## Options

--no-contents Do not verify the contents of each store path. --no-trust Do not verify whether each store path is trusted. --sigs-needed / -n n Require that each path is signed by at least n different keys. --stdin Read installables from the standard input. No default installable applied. --substituter / -s store-uri Use signatures from the specified store.

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

nix upgrade-nix - upgrade Nix to the latest stable version

## Synopsis

nix upgrade-nix [option...]

## Examples

Upgrade Nix to the stable version declared in Nixpkgs: # nix upgrade-nix Upgrade Nix in a specific profile: # nix upgrade-nix --profile ~alice/.local/state/nix/profiles/profile

## Description

This command upgrades Nix to the stable version. By default, the latest stable version is defined by Nixpkgs, in nix-fallback-paths.nix and updated manually. It may not always be the latest tagged release. By default, it locates the directory containing the nix binary in the $PATH environment variable. If that directory is a Nix profile, it will upgrade the nix package in that profile to the latest stable binary release. You cannot use this command to upgrade Nix in the system profile of a NixOS system (that is, if nix is found in /run/current-system).
