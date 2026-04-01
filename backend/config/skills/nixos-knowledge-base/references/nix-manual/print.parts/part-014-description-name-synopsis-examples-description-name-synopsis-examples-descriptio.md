---
title: "Nix 2.28.6 Reference Manual"
source: print.html
---
## Description

This command prints on standard output the contents of the regular file path inside the NAR file nar.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix nar dump-path - serialise a path to stdout in NAR format

## Synopsis

nix nar dump-path [option...] path

## Examples

To serialise directory foo as a Nix Archive (NAR): # nix nar pack ./foo > foo.nar

## Description

This command generates a Nix Archive (NAR) file containing the serialisation of path, which must contain only regular files, directories and symbolic links. The NAR is written to standard output.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix nar ls - show information about a path inside a NAR file

## Synopsis

nix nar ls [option...] nar path

## Examples

To list a specific file in a NAR: # nix nar ls --long ./hello.nar /bin/hello -r-xr-xr-x 38184 hello To recursively list the contents of a directory inside a NAR, in JSON format: # nix nar ls --json --recursive ./hello.nar /bin {"type":"directory","entries":{"hello":{"type":"regular","size":38184,"executable":true,"narOffset":400}}}

## Description

This command shows information about a path inside Nix Archive (NAR) file nar.

## Options

--directory / -d Show directories rather than their contents. --json Produce output in JSON format, suitable for consumption by another program. --long / -l Show detailed file information. --recursive / -R List subdirectories recursively.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix nar pack - serialise a path to stdout in NAR format

## Synopsis

nix nar pack [option...] path

## Examples

To serialise directory foo as a Nix Archive (NAR): # nix nar pack ./foo > foo.nar

## Description

This command generates a Nix Archive (NAR) file containing the serialisation of path, which must contain only regular files, directories and symbolic links. The NAR is written to standard output.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix path-info - query information about store paths

## Synopsis

nix path-info [option...] installables...

## Examples

Print the store path produced by nixpkgs#hello: # nix path-info nixpkgs#hello /nix/store/v5sv61sszx301i0x6xysaqzla09nksnd-hello-2.10 Show the closure sizes of every path in the current NixOS system closure, sorted by size: # nix path-info --recursive --closure-size /run/current-system | sort -nk2 /nix/store/hl5xwp9kdrd1zkm0idm3kkby9q66z404-empty 96 /nix/store/27324qvqhnxj3rncazmxc4mwy79kz8ha-nameservers 112 … /nix/store/539jkw9a8dyry7clcv60gk6na816j7y8-etc 5783255504 /nix/store/zqamz3cz4dbzfihki2mk7a63mbkxz9xq-nixos-system-machine-20.09.20201112.3090c65 5887562256 Show a package's closure size and all its dependencies with human readable sizes: # nix path-info --recursive --size --closure-size --human-readable nixpkgs#rustc /nix/store/01rrgsg5zk3cds0xgdsq40zpk6g51dz9-ncurses-6.2-dev 386.7 KiB 69.1 MiB /nix/store/0q783wnvixpqz6dxjp16nw296avgczam-libpfm-4.11.0 5.9 MiB 37.4 MiB … Check the existence of a path in a binary cache: # nix path-info --recursive /nix/store/blzxgyvrk32ki6xga10phr4sby2xf25q-geeqie-1.5.1 --store https://cache.nixos.org/ path '/nix/store/blzxgyvrk32ki6xga10phr4sby2xf25q-geeqie-1.5.1' is not valid Print the 10 most recently added paths (using --json and the jq(1) command): # nix path-info --json --all | jq -r 'to_entries | sort_by(.value.registrationTime) | .[-11:-1][] | .key' Show the size of the entire Nix store: # nix path-info --json --all | jq 'map(.narSize) | add' 49812020936 Show every path whose closure is bigger than 1 GB, sorted by closure size: # nix path-info --json --all --closure-size \ | jq 'map_values(.closureSize | select(. < 1e9)) | to_entries | sort_by(.value)' [ …, { .key = "/nix/store/zqamz3cz4dbzfihki2mk7a63mbkxz9xq-nixos-system-machine-20.09.20201112.3090c65", .value = 5887562256, } ] Print the path of the store derivation produced by nixpkgs#hello: # nix path-info --derivation nixpkgs#hello /nix/store/s6rn4jz1sin56rf4qj5b5v8jxjm32hlk-hello-2.10.drv

## Description

This command shows information about the store paths produced by installables, or about all paths in the store if you pass --all. By default, this command only prints the store paths. You can get additional information by passing flags such as --closure-size, --size, --sigs or --json. Warning Note that nix path-info does not build or substitute the installables you specify. Thus, if the corresponding store paths don't already exist, this command will fail. You can use nix build to ensure that they exist.

## Options

--closure-size / -S Print the sum of the sizes of the NAR serialisations of the closure of each path. --human-readable / -h With -s and -S, print sizes in a human-friendly format such as 5.67G. --json Produce output in JSON format, suitable for consumption by another program. --sigs Show signatures. --size / -s Print the size of the NAR serialisation of each path. --stdin Read installables from the standard input. No default installable applied.

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

nix print-dev-env - print shell code that can be sourced by bash to reproduce the build environment of a derivation

## Synopsis

nix print-dev-env [option...] installable

## Examples

Apply the build environment of GNU hello to the current shell: # . <(nix print-dev-env nixpkgs#hello) Get the build environment in JSON format: # nix print-dev-env nixpkgs#hello --json The output will look like this: { "bashFunctions": { "buildPhase": " \n runHook preBuild;\n...", ... }, "variables": { "src": { "type": "exported", "value": "/nix/store/3x7dwzq014bblazs7kq20p9hyzz0qh8g-hello-2.10.tar.gz" }, "postUnpackHooks": { "type": "array", "value": ["_updateSourceDateEpochFromSourceRoot"] }, ... } }

## Description

This command prints a shell script that can be sourced by bash and that sets the variables and shell functions defined by the build process of installable. This allows you to get a similar build environment in your current shell rather than in a subshell (as with nix develop). With --json, the output is a JSON serialisation of the variables and functions defined by the build process.

## Options

--json Produce output in JSON format, suitable for consumption by another program. --profile path The profile to operate on. --redirect installable outputs-dir Redirect a store path to a mutable location.

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

nix profile - manage Nix profiles

## Synopsis

nix profile [option...] subcommand where subcommand is one of the following: nix profile diff-closures - show the closure difference between each version of a profile nix profile history - show all versions of a profile nix profile install - install a package into a profile nix profile list - list installed packages nix profile remove - remove packages from a profile nix profile rollback - roll back to the previous version or a specified version of a profile nix profile upgrade - upgrade packages using their most recent flake nix profile wipe-history - delete non-current versions of a profile

## Description

nix profile allows you to create and manage Nix profiles. A Nix profile is a set of packages that can be installed and upgraded independently from each other. Nix profiles are versioned, allowing them to be rolled back easily.

### Profiles

A directory that contains links to profiles managed by nix-env and nix profile: $XDG_STATE_HOME/nix/profiles for regular users $NIX_STATE_DIR/profiles/per-user/root if the user is root A profile is a directory of symlinks to files in the Nix store.

#### Filesystem layout

Profiles are versioned as follows. When using a profile named path, path is a symlink to path-N-link, where N is the version of the profile. In turn, path-N-link is a symlink to a path in the Nix store. For example: $ ls -l ~alice/.local/state/nix/profiles/profile* lrwxrwxrwx 1 alice users 14 Nov 25 14:35 /home/alice/.local/state/nix/profiles/profile -> profile-7-link lrwxrwxrwx 1 alice users 51 Oct 28 16:18 /home/alice/.local/state/nix/profiles/profile-5-link -> /nix/store/q69xad13ghpf7ir87h0b2gd28lafjj1j-profile lrwxrwxrwx 1 alice users 51 Oct 29 13:20 /home/alice/.local/state/nix/profiles/profile-6-link -> /nix/store/6bvhpysd7vwz7k3b0pndn7ifi5xr32dg-profile lrwxrwxrwx 1 alice users 51 Nov 25 14:35 /home/alice/.local/state/nix/profiles/profile-7-link -> /nix/store/mp0x6xnsg0b8qhswy6riqvimai4gm677-profile Each of these symlinks is a root for the Nix garbage collector. The contents of the store path corresponding to each version of the profile is a tree of symlinks to the files of the installed packages, e.g. $ ll -R ~eelco/.local/state/nix/profiles/profile-7-link/ /home/eelco/.local/state/nix/profiles/profile-7-link/: total 20 dr-xr-xr-x 2 root root 4096 Jan 1 1970 bin -r--r--r-- 2 root root 1402 Jan 1 1970 manifest.nix dr-xr-xr-x 4 root root 4096 Jan 1 1970 share /home/eelco/.local/state/nix/profiles/profile-7-link/bin: total 20 lrwxrwxrwx 5 root root 79 Jan 1 1970 chromium -> /nix/store/ijm5k0zqisvkdwjkc77mb9qzb35xfi4m-chromium-86.0.4240.111/bin/chromium lrwxrwxrwx 7 root root 87 Jan 1 1970 spotify -> /nix/store/w9182874m1bl56smps3m5zjj36jhp3rn-spotify-1.1.26.501.gbe11e53b-15/bin/spotify lrwxrwxrwx 3 root root 79 Jan 1 1970 zoom-us -> /nix/store/wbhg2ga8f3h87s9h5k0slxk0m81m4cxl-zoom-us-5.3.469451.0927/bin/zoom-us /home/eelco/.local/state/nix/profiles/profile-7-link/share/applications: total 12 lrwxrwxrwx 4 root root 120 Jan 1 1970 chromium-browser.desktop -> /nix/store/4cf803y4vzfm3gyk3vzhzb2327v0kl8a-chromium-unwrapped-86.0.4240.111/share/applications/chromium-browser.desktop lrwxrwxrwx 7 root root 110 Jan 1 1970 spotify.desktop -> /nix/store/w9182874m1bl56smps3m5zjj36jhp3rn-spotify-1.1.26.501.gbe11e53b-15/share/applications/spotify.desktop lrwxrwxrwx 3 root root 107 Jan 1 1970 us.zoom.Zoom.desktop -> /nix/store/wbhg2ga8f3h87s9h5k0slxk0m81m4cxl-zoom-us-5.3.469451.0927/share/applications/us.zoom.Zoom.desktop … Each profile version contains a manifest file: manifest.nix used by nix-env. manifest.json used by nix profile (experimental).

### User profile link

A symbolic link to the user's current profile: ~/.nix-profile $XDG_STATE_HOME/nix/profile if use-xdg-base-directories is set to true. By default, this symlink points to: $XDG_STATE_HOME/nix/profiles/profile for regular users $NIX_STATE_DIR/profiles/per-user/root/profile for root The PATH environment variable should include /bin subdirectory of the profile link (e.g. ~/.nix-profile/bin) for the user environment to be visible to the user. The installer sets this up by default, unless you enable use-xdg-base-directories.

#### Profile compatibility

Warning Once you have used nix profile you can no longer use nix-env without first deleting $XDG_STATE_HOME/nix/profiles/profile Once you installed a package with nix profile, you get the following error message when using nix-env: $ nix-env -f '<nixpkgs>' -iA 'hello' error: nix-env profile '/home/alice/.local/state/nix/profiles/profile' is incompatible with 'nix-env'; please use 'nix profile' instead To migrate back to nix-env you can delete your current profile: Warning This will delete packages that have been installed before, so you may want to back up this information before running the command. $ rm -rf "${XDG_STATE_HOME-$HOME/.local/state}/nix/profiles/profile"

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix profile diff-closures - show the closure difference between each version of a profile

## Synopsis

nix profile diff-closures [option...]

## Examples

Show what changed between each version of the NixOS system profile: # nix profile diff-closures --profile /nix/var/nix/profiles/system Version 13 -> 14: acpi-call: 2020-04-07-5.8.13 → 2020-04-07-5.8.14 aws-sdk-cpp: -6723.1 KiB … Version 14 -> 15: acpi-call: 2020-04-07-5.8.14 → 2020-04-07-5.8.16 attica: -996.2 KiB breeze-icons: -78713.5 KiB brotli: 1.0.7 → 1.0.9, +44.2 KiB

## Description

This command shows the difference between the closures of subsequent versions of a profile. See nix store diff-closures for details.

## Options

--profile path The profile to operate on.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix profile history - show all versions of a profile

## Synopsis

nix profile history [option...]

## Examples

Show the changes between each version of your default profile: # nix profile history Version 508 (2020-04-10): flake:nixpkgs#legacyPackages.x86_64-linux.awscli: ∅ -> 1.17.13 Version 509 (2020-05-16) <- 508: flake:nixpkgs#legacyPackages.x86_64-linux.awscli: 1.17.13 -> 1.18.211

## Description

This command shows what packages were added, removed or upgraded between subsequent versions of a profile. It only shows top-level packages, not dependencies; for that, use nix profile diff-closures. The addition of a package to a profile is denoted by the string ∅ -> version, whereas the removal is denoted by version -> ∅.

## Options

--profile path The profile to operate on.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix profile install - install a package into a profile

## Synopsis

nix profile install [option...] installables...

## Examples

Install a package from Nixpkgs: # nix profile install nixpkgs#hello Install a package from a specific branch of Nixpkgs: # nix profile install nixpkgs/release-20.09#hello Install a package from a specific revision of Nixpkgs: # nix profile install nixpkgs/d73407e8e6002646acfdef0e39ace088bacc83da#hello Install a specific output of a package: # nix profile install nixpkgs#bash^man

## Description

This command adds installables to a Nix profile.
