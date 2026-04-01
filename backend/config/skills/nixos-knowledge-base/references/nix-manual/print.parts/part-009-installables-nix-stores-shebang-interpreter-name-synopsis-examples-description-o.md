---
title: "Nix 2.28.6 Reference Manual"
source: print.html
---
## Installables

Warning Installables are part of the unstable nix-command experimental feature, and subject to change without notice. Many nix subcommands operate on one or more installables. These are command line arguments that represent something that can be realised in the Nix store. The following types of installable are supported by most commands: Flake output attribute (experimental) This is the default Store path This is assumed if the argument is a Nix store path or a symlink to a Nix store path Nix file, optionally qualified by an attribute path Specified with --file/-f Nix expression, optionally qualified by an attribute path Specified with --expr For most commands, if no installable is specified, . is assumed. That is, Nix will operate on the default flake output attribute of the flake in the current directory.

#### Flake output attribute

Warning Flake output attribute installables depend on both the flakes and nix-command experimental features, and subject to change without notice. Example: nixpkgs#hello These have the form flakeref[#attrpath], where flakeref is a flake reference and attrpath is an optional attribute path. For more information on flakes, see the nix flake manual page. Flake references are most commonly a flake identifier in the flake registry (e.g. nixpkgs), or a raw path (e.g. /path/to/my-flake or . or ../foo), or a full URL (e.g. github:nixos/nixpkgs or path:.) When the flake reference is a raw path (a path without any URL scheme), it is interpreted as a path: or git+file: url in the following way: If the path is within a Git repository, then the url will be of the form git+file://[GIT_REPO_ROOT]?dir=[RELATIVE_FLAKE_DIR_PATH] where GIT_REPO_ROOT is the path to the root of the git repository, and RELATIVE_FLAKE_DIR_PATH is the path (relative to the directory root) of the closest parent of the given path that contains a flake.nix within the git repository. If no such directory exists, then Nix will error-out. Note that the search will only include files indexed by git. In particular, files which are matched by .gitignore or have never been git add-ed will not be available in the flake. If this is undesirable, specify path:<directory> explicitly; For example, if /foo/bar is a git repository with the following structure: . └── baz ├── blah │ └── file.txt └── flake.nix Then /foo/bar/baz/blah will resolve to git+file:///foo/bar?dir=baz If the supplied path is not a git repository, then the url will have the form path:FLAKE_DIR_PATH where FLAKE_DIR_PATH is the closest parent of the supplied path that contains a flake.nix file (within the same file-system). If no such directory exists, then Nix will error-out. For example, if /foo/bar/flake.nix exists, then /foo/bar/baz/ will resolve to path:/foo/bar If attrpath is omitted, Nix tries some default values; for most subcommands, the default is packages.system.default (e.g. packages.x86_64-linux.default), but some subcommands have other defaults. If attrpath is specified, attrpath is interpreted as relative to one or more prefixes; for most subcommands, these are packages.system, legacyPackages.*system* and the empty prefix. Thus, on x86_64-linux nix build nixpkgs#hello will try to build the attributes packages.x86_64-linux.hello, legacyPackages.x86_64-linux.hello and hello. If attrpath begins with . then no prefixes or defaults are attempted. This allows the form flakeref[#.attrpath], such as github:NixOS/nixpkgs#.lib.fakeSha256 to avoid a search of packages.*system*.lib.fakeSha256

#### Store path

Example: /nix/store/v5sv61sszx301i0x6xysaqzla09nksnd-hello-2.10 These are paths inside the Nix store, or symlinks that resolve to a path in the Nix store. A store derivation is also addressed by store path. Example: /nix/store/p7gp6lxdg32h4ka1q398wd9r2zkbbz2v-hello-2.10.drv If you want to refer to an output path of that store derivation, add the output name preceded by a caret (^). Example: /nix/store/p7gp6lxdg32h4ka1q398wd9r2zkbbz2v-hello-2.10.drv^out All outputs can be referred to at once with the special syntax ^*. Example: /nix/store/p7gp6lxdg32h4ka1q398wd9r2zkbbz2v-hello-2.10.drv^*

#### Nix file

Example: --file /path/to/nixpkgs hello When the option -f / --file path [attrpath...] is given, installables are interpreted as the value of the expression in the Nix file at path. If attribute paths are provided, commands will operate on the corresponding values accessible at these paths. The Nix expression in that file, or any selected attribute, must evaluate to a derivation.

#### Nix expression

Example: --expr 'import <nixpkgs> {}' hello When the option --expr expression [attrpath...] is given, installables are interpreted as the value of the of the Nix expression. If attribute paths are provided, commands will operate on the corresponding values accessible at these paths. The Nix expression, or any selected attribute, must evaluate to a derivation. You may need to specify --impure if the expression references impure inputs (such as <nixpkgs>).

### Derivation output selection

Derivations can have multiple outputs, each corresponding to a different store path. For instance, a package can have a bin output that contains programs, and a dev output that provides development artifacts like C/C++ header files. The outputs on which nix commands operate are determined as follows: You can explicitly specify the desired outputs using the syntax installable^output1,...,outputN — that is, a caret followed immediately by a comma-separated list of derivation outputs to select. For installables specified as Flake output attributes or Store paths, the output is specified in the same argument: For example, you can obtain the dev and static outputs of the glibc package: # nix build 'nixpkgs#glibc^dev,static' # ls ./result-dev/include/ ./result-static/lib/ … and likewise, using a store path to a "drv" file to specify the derivation: # nix build '/nix/store/gzaflydcr6sb3567hap9q6srzx8ggdgg-glibc-2.33-78.drv^dev,static' … For --expr and -f/--file, the derivation output is specified as part of the attribute path: $ nix build -f '<nixpkgs>' 'glibc^dev,static' $ nix build --impure --expr 'import <nixpkgs> { }' 'glibc^dev,static' This syntax is the same even if the actual attribute path is empty: $ nix build --impure --expr 'let pkgs = import <nixpkgs> { }; in pkgs.glibc' '^dev,static' You can also specify that all outputs should be used using the syntax installable^*. For example, the following shows the size of all outputs of the glibc package in the binary cache: # nix path-info --closure-size --eval-store auto --store https://cache.nixos.org 'nixpkgs#glibc^*' /nix/store/g02b1lpbddhymmcjb923kf0l7s9nww58-glibc-2.33-123 33208200 /nix/store/851dp95qqiisjifi639r0zzg5l465ny4-glibc-2.33-123-bin 36142896 /nix/store/kdgs3q6r7xdff1p7a9hnjr43xw2404z7-glibc-2.33-123-debug 155787312 /nix/store/n4xa8h6pbmqmwnq0mmsz08l38abb06zc-glibc-2.33-123-static 42488328 /nix/store/q6580lr01jpcsqs4r5arlh4ki2c1m9rv-glibc-2.33-123-dev 44200560 and likewise, using a store path to a "drv" file to specify the derivation: # nix path-info --closure-size '/nix/store/gzaflydcr6sb3567hap9q6srzx8ggdgg-glibc-2.33-78.drv^*' … If you didn't specify the desired outputs, but the derivation has an attribute meta.outputsToInstall, Nix will use those outputs. For example, since the package nixpkgs#libxml2 has this attribute: # nix eval 'nixpkgs#libxml2.meta.outputsToInstall' [ "bin" "man" ] a command like nix shell nixpkgs#libxml2 will provide only those two outputs by default. Note that a store derivation (given by its .drv file store path) doesn't have any attributes like meta, and thus this case doesn't apply to it. Otherwise, Nix will use all outputs of the derivation.

## Nix stores

Most nix subcommands operate on a Nix store. The various store types are documented in the Store Types section of the manual. The same information is also available from the nix help-stores command.

## Shebang interpreter

The nix command can be used as a #! interpreter. Arguments to Nix can be passed on subsequent lines in the script. Verbatim strings may be passed in double backtick (``) quotes. Sequences of n backticks of 3 or longer are parsed as n-1 literal backticks. A single space before the closing `` is ignored if present. --file and --expr resolve relative paths based on the script location. Examples: #!/usr/bin/env nix #! nix shell --file ``<nixpkgs>`` hello cowsay --command bash hello | cowsay or with flakes: #!/usr/bin/env nix #! nix shell nixpkgs#bash nixpkgs#hello nixpkgs#cowsay --command bash hello | cowsay or with an expression: #! /usr/bin/env nix #! nix shell --impure --expr `` #! nix with (import (builtins.getFlake "nixpkgs") {}); #! nix terraform.withPlugins (plugins: [ plugins.openstack ]) #! nix `` #! nix --command bash terraform "$@" or with cascading interpreters. Note that the #! nix lines don't need to follow after the first line, to accommodate other interpreters. #!/usr/bin/env nix //! ```cargo //! [dependencies] //! time = "0.1.25" //! ``` /* #!nix shell nixpkgs#rustc nixpkgs#rust-script nixpkgs#cargo --command rust-script */ fn main() { for argument in std::env::args().skip(1) { println!("{}", argument); }; println!("{}", std::env::var("HOME").expect("")); println!("{}", time::now().rfc822z()); } // vim: ft=rust

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix build - build a derivation or fetch a store path

## Synopsis

nix build [option...] installables...

## Examples

Build the default package from the flake in the current directory: # nix build Build and run GNU Hello from the nixpkgs flake: # nix build nixpkgs#hello # ./result/bin/hello Hello, world! Build GNU Hello and Cowsay, leaving two result symlinks: # nix build nixpkgs#hello nixpkgs#cowsay # ls -l result* lrwxrwxrwx 1 … result -> /nix/store/v5sv61sszx301i0x6xysaqzla09nksnd-hello-2.10 lrwxrwxrwx 1 … result-1 -> /nix/store/rkfrm0z6x6jmi7d3gsmma4j53h15mg33-cowsay-3.03+dfsg2 Build GNU Hello and print the resulting store path. # nix build nixpkgs#hello --print-out-paths /nix/store/v5sv61sszx301i0x6xysaqzla09nksnd-hello-2.10 Build a specific output: # nix build nixpkgs#glibc.dev # ls -ld ./result-dev lrwxrwxrwx 1 … ./result-dev -> /nix/store/dkm3gwl0xrx0wrw6zi5x3px3lpgjhlw4-glibc-2.32-dev Build all outputs: # nix build "nixpkgs#openssl^*" --print-out-paths /nix/store/gvad6v0cmq1qccmc4wphsazqbj0xzjsl-openssl-3.0.13-bin /nix/store/a07jqdrc8afnk8r6f3lnhh4gvab7chk4-openssl-3.0.13-debug /nix/store/yg75achq89wgqn2fi3gglgsd77kjpi03-openssl-3.0.13-dev /nix/store/bvdcihi8c88fw31cg6gzzmpnwglpn1jv-openssl-3.0.13-doc /nix/store/gjqcvq47cmxazxga0cirspm3jywkmvfv-openssl-3.0.13-man /nix/store/7nmrrad8skxr47f9hfl3xc0pfqmwq51b-openssl-3.0.13 Build attribute build.x86_64-linux from (non-flake) Nix expression release.nix: # nix build --file release.nix build.x86_64-linux Build a NixOS system configuration from a flake, and make a profile point to the result: # nix build --profile /nix/var/nix/profiles/system \ ~/my-configurations#nixosConfigurations.machine.config.system.build.toplevel (This is essentially what nixos-rebuild does.) Build an expression specified on the command line: # nix build --impure --expr \ 'with import <nixpkgs> {}; runCommand "foo" { buildInputs = [ hello ]; } "hello > $out"' # cat ./result Hello, world! Note that --impure is needed because we're using <nixpkgs>, which relies on the $NIX_PATH environment variable. Fetch a store path from the configured substituters, if it doesn't already exist: # nix build /nix/store/rkfrm0z6x6jmi7d3gsmma4j53h15mg33-cowsay-3.03+dfsg2

## Description

nix build builds the specified installables. Installables that resolve to derivations are built (or substituted if possible). Store path installables are substituted. Unless --no-link is specified, after a successful build, it creates symlinks to the store paths of the installables. These symlinks have the prefix ./result by default; this can be overridden using the --out-link option. Each symlink has a suffix -<N>-<outname>, where N is the index of the installable (with the left-most installable having index 0), and outname is the symbolic derivation output name (e.g. bin, dev or lib). -<N> is omitted if N = 0, and -<outname> is omitted if outname = out (denoting the default output).

## Options

--dry-run Show what this command would do without doing it. --json Produce output in JSON format, suitable for consumption by another program. --no-link Do not create symlinks to the build results. --out-link / -o path Use path as prefix for the symlinks to the build results. It defaults to result. --print-out-paths Print the resulting output paths --profile path The profile to operate on. --rebuild Rebuild an already built package and compare the result to the existing store paths. --stdin Read installables from the standard input. No default installable applied.

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

nix bundle - bundle an application so that it works outside of the Nix store

## Synopsis

nix bundle [option...] installable

## Examples

Bundle Hello: # nix bundle nixpkgs#hello # ./hello Hello, world! Bundle a specific version of Nix: # nix bundle github:NixOS/nix/e3ddffb27e5fc37a209cfd843c6f7f6a9460a8ec # ./nix --version nix (Nix) 2.4pre20201215_e3ddffb Bundle a Hello using a specific bundler: # nix bundle --bundler github:NixOS/bundlers#toDockerImage nixpkgs#hello # docker load < hello-2.10.tar.gz # docker run hello-2.10:latest hello Hello, world!

## Description

nix bundle, by default, packs the closure of the installable into a single self-extracting executable. See the bundlers homepage for more details. Note This command only works on Linux.

## Flake output attributes

If no flake output attribute is given, nix bundle tries the following flake output attributes: bundlers.<system>.default If an attribute name is given, nix bundle tries the following flake output attributes: bundlers.<system>.<name>

## Bundlers

A bundler is specified by a flake output attribute named bundlers.<system>.<name>. It looks like this: bundlers.x86_64-linux = rec { identity = drv: drv; blender_2_79 = drv: self.packages.x86_64-linux.blender_2_79; default = identity; }; A bundler must be a function that accepts an arbitrary value (typically a derivation or app definition) and returns a derivation.

## Options

--bundler flake-url Use a custom bundler instead of the default (github:NixOS/bundlers). --out-link / -o path Override the name of the symlink to the build result. It defaults to the base name of the app.

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

nix config - manipulate the Nix configuration

## Synopsis

nix config [option...] subcommand where subcommand is one of the following: : nix config show - show the Nix configuration or the value of a specific setting : nix config check - check your system for potential problems and print a PASS or FAIL for each check

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix config check - check your system for potential problems and print a PASS or FAIL for each check

## Synopsis

nix config check [option...]

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix config show - show the Nix configuration or the value of a specific setting

## Synopsis

nix config show [option...] name

## Options

--json Produce output in JSON format, suitable for consumption by another program.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix copy - copy paths between Nix stores

## Synopsis

nix copy [option...] installables...

## Examples

Copy Firefox from the local store to a binary cache in /tmp/cache: # nix copy --to file:///tmp/cache $(type -p firefox) Note the file:// - without this, the destination is a chroot store, not a binary cache. Copy all store paths from a local binary cache in /tmp/cache to the local store: # nix copy --all --from file:///tmp/cache Copy the entire current NixOS system closure to another machine via SSH: # nix copy --substitute-on-destination --to ssh://server /run/current-system The -s flag causes the remote machine to try to substitute missing store paths, which may be faster if the link between the local and remote machines is slower than the link between the remote machine and its substituters (e.g. https://cache.nixos.org). Copy a closure from another machine via SSH: # nix copy --from ssh://server /nix/store/a6cnl93nk1wxnq84brbbwr6hxw9gp2w9-blender-2.79-rc2 Copy Hello to a binary cache in an Amazon S3 bucket: # nix copy --to s3://my-bucket?region=eu-west-1 nixpkgs#hello or to an S3-compatible storage system: # nix copy --to s3://my-bucket?region=eu-west-1&endpoint=example.com nixpkgs#hello Note that this only works if Nix is built with AWS support. Copy a closure from /nix/store to the chroot store /tmp/nix/nix/store: # nix copy --to /tmp/nix nixpkgs#hello --no-check-sigs Update the NixOS system profile to point to a closure copied from a remote machine: # nix copy --from ssh://server \ --profile /nix/var/nix/profiles/system \ /nix/store/r14v3km89zm3prwsa521fab5kgzvfbw4-nixos-system-foobar-24.05.20240925.759537f

## Description

nix copy copies store path closures between two Nix stores. The source store is specified using --from and the destination using --to. If one of these is omitted, it defaults to the local store.

## Options

--from store-uri URL of the source Nix store. --no-check-sigs Do not require that paths are signed by trusted keys. --out-link / -o path Create symlinks prefixed with path to the top-level store paths fetched from the source store. --profile path The profile to operate on. --stdin Read installables from the standard input. No default installable applied. --substitute-on-destination / -s Whether to try substitutes on the destination store (only supported by SSH stores). --to store-uri URL of the destination Nix store.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Common flake-related options

--commit-lock-file Commit changes to the flake's lock file. --inputs-from flake-url Use the inputs of the specified flake as registry entries. --no-registries Don't allow lookups in the flake registries. DEPRECATED Use --no-use-registries instead. --no-update-lock-file Do not allow any updates to the flake's lock file. --no-write-lock-file Do not write the flake's newly generated lock file. --output-lock-file flake-lock-path Write the given lock file instead of flake.lock within the top-level flake. --override-input input-path flake-url Override a specific flake input (e.g. dwarffs/nixpkgs). This implies --no-write-lock-file. --recreate-lock-file Recreate the flake's lock file from scratch. DEPRECATED Use nix flake update instead. --reference-lock-file flake-lock-path Read the given lock file instead of flake.lock within the top-level flake. --update-input input-path Update a specific flake input (ignoring its previous entry in the lock file). DEPRECATED Use nix flake update instead.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information.

### Options that change the interpretation of installables

--all Apply the operation to every store path. --derivation Operate on the store derivation rather than its outputs. --expr expr Interpret installables as attribute paths relative to the Nix expression expr. --file / -f file Interpret installables as attribute paths relative to the Nix expression stored in file. If file is the character -, then a Nix expression will be read from standard input. Implies --impure. --no-recursive Apply operation to specified paths only. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix daemon - daemon to perform store operations on behalf of non-root clients

## Synopsis

nix daemon [option...]

## Examples

Run the daemon: # nix daemon Run the daemon and listen on standard I/O instead of binding to a UNIX socket: # nix daemon --stdio Run the daemon and force all connections to be trusted: # nix daemon --force-trusted Run the daemon and force all connections to be untrusted: # nix daemon --force-untrusted Run the daemon, listen on standard I/O, and force all connections to use Nix's default trust: # nix daemon --stdio --default-trust

## Description

This command runs the Nix daemon, which is a required component in multi-user Nix installations. It runs build tasks and other operations on the Nix store on behalf of non-root users. Usually you don't run the daemon directly; instead it's managed by a service management framework such as systemd on Linux, or launchctl on Darwin. Note that this daemon does not fork into the background.

## Options

--default-trust Use Nix's default trust. --force-trusted Force the daemon to trust connecting clients. --force-untrusted Force the daemon to not trust connecting clients. The connection will be processed by the receiving daemon before forwarding commands. --process-ops Forces the daemon to process received commands itself rather than forwarding the commands straight to the remote store. This is useful for the `mounted-ssh://` store where some actions need to be performed on the remote end but as connected user, and not as the user of the underlying daemon on the remote end. --stdio Attach to standard I/O, instead of trying to bind to a UNIX socket.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix derivation - Work with derivations, Nix's notion of a build plan.

## Synopsis

nix derivation [option...] subcommand where subcommand is one of the following: nix derivation add - Add a store derivation nix derivation show - show the contents of a store derivation

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix derivation add - Add a store derivation

## Synopsis

nix derivation add [option...]

## Description

This command reads from standard input a JSON representation of a store derivation. Store derivations are used internally by Nix. They are store paths with extension .drv that represent the build-time dependency graph to which a Nix expression evaluates. nix derivation add takes a single derivation in the following format:

## Derivation JSON Format

Warning This JSON format is currently experimental and subject to change. The JSON serialization of a derivations is a JSON object with the following fields: name: The name of the derivation. This is used when calculating the store paths of the derivation's outputs. outputs: Information about the output paths of the derivation. This is a JSON object with one member per output, where the key is the output name and the value is a JSON object with these fields: path: The output path, if it is known in advanced. Otherwise, null. method: For an output which will be [content addressed], a string representing the method of content addressing that is chosen. Valid method strings are: flat nar text git Otherwise, null. hashAlgo: For an output which will be [content addressed], the name of the hash algorithm used. Valid algorithm strings are: blake3 md5 sha1 sha256 sha512 hash: For fixed-output derivations, the expected content hash in base-16. Example "outputs": { "out": { "path": "/nix/store/2543j7c6jn75blc3drf4g5vhb1rhdq29-source", "method": "nar", "hashAlgo": "sha256", "hash": "6fc80dcc62179dbc12fc0b5881275898f93444833d21b89dfe5f7fbcbb1d0d62" } } inputSrcs: A list of store paths on which this derivation depends. inputDrvs: A JSON object specifying the derivations on which this derivation depends, and what outputs of those derivations. Example "inputDrvs": { "/nix/store/6lkh5yi7nlb7l6dr8fljlli5zfd9hq58-curl-7.73.0.drv": ["dev"], "/nix/store/fn3kgnfzl5dzym26j8g907gq3kbm8bfh-unzip-6.0.drv": ["out"] } specifies that this derivation depends on the dev output of curl, and the out output of unzip. system: The system type on which this derivation is to be built (e.g. x86_64-linux). builder: The absolute path of the program to be executed to run the build. Typically this is the bash shell (e.g. /nix/store/r3j288vpmczbl500w6zz89gyfa4nr0b1-bash-4.4-p23/bin/bash). args: The command-line arguments passed to the builder. env: The environment passed to the builder.

## Options

--dry-run Show what this command would do without doing it.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix derivation show - show the contents of a store derivation
