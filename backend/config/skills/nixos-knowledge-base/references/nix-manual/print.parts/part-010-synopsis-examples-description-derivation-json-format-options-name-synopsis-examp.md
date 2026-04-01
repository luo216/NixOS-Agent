---
title: "Nix 2.28.6 Reference Manual"
source: print.html
---
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

--expr expr Interpret installables as attribute paths relative to the Nix expression expr. --file / -f file Interpret installables as attribute paths relative to the Nix expression stored in file. If file is the character -, then a Nix expression will be read from standard input. Implies --impure. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix develop - run a bash shell that provides the build environment of a derivation

## Synopsis

nix develop [option...] installable

## Examples

Start a shell with the build environment of the default package of the flake in the current directory: # nix develop Typical commands to run inside this shell are: # configurePhase # buildPhase # installPhase Alternatively, you can run whatever build tools your project uses directly, e.g. for a typical Unix project: # ./configure --prefix=$out # make # make install Run a particular build phase directly: # nix develop --unpack # nix develop --configure # nix develop --build # nix develop --check # nix develop --install # nix develop --installcheck Start a shell with the build environment of GNU Hello: # nix develop nixpkgs#hello Record a build environment in a profile: # nix develop --profile /tmp/my-build-env nixpkgs#hello Use a build environment previously recorded in a profile: # nix develop /tmp/my-build-env Replace all occurrences of the store path corresponding to glibc.dev with a writable directory: # nix develop --redirect nixpkgs#glibc.dev ~/my-glibc/outputs/dev Note that this is useful if you're running a nix develop shell for nixpkgs#glibc in ~/my-glibc and want to compile another package against it. Run a series of script commands: # nix develop --command bash -c "mkdir build && cmake .. && make"

## Description

nix develop starts a bash shell that provides an interactive build environment nearly identical to what Nix would use to build installable. Inside this shell, environment variables and shell functions are set up so that you can interactively and incrementally build your package. Nix determines the build environment by building a modified version of the derivation installable that just records the environment initialised by stdenv and exits. This build environment can be recorded into a profile using --profile. The prompt used by the bash shell can be customised by setting the bash-prompt, bash-prompt-prefix, and bash-prompt-suffix settings in nix.conf or in the flake's nixConfig attribute.

## Flake output attributes

If no flake output attribute is given, nix develop tries the following flake output attributes: devShells.<system>.default packages.<system>.default If a flake output name is given, nix develop tries the following flake output attributes: devShells.<system>.<name> packages.<system>.<name> legacyPackages.<system>.<name>

## Options

--build Run the build phase. --check Run the check phase. --command / -c command args Instead of starting an interactive shell, start the specified command and arguments. --configure Run the configure phase. --install Run the install phase. --installcheck Run the installcheck phase. --phase phase-name The stdenv phase to run (e.g. build or configure). --profile path The profile to operate on. --redirect installable outputs-dir Redirect a store path to a mutable location. --unpack Run the unpack phase.

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

--expr expr Interpret installables as attribute paths relative to the Nix expression expr. --file / -f file Interpret installables as attribute paths relative to the Nix expression stored in file. If file is the character -, then a Nix expression will be read from standard input. Implies --impure. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix edit - open the Nix expression of a Nix package in $EDITOR

## Synopsis

nix edit [option...] installable

## Examples

Open the Nix expression of the GNU Hello package: # nix edit nixpkgs#hello Get the filename and line number used by nix edit: # nix eval --raw nixpkgs#hello.meta.position /nix/store/fvafw0gvwayzdan642wrv84pzm5bgpmy-source/pkgs/applications/misc/hello/default.nix:15

## Description

This command opens the Nix expression of a derivation in an editor. The filename and line number of the derivation are taken from its meta.position attribute. Nixpkgs' stdenv.mkDerivation sets this attribute to the location of the definition of the meta.description, version or name derivation attributes. The editor to invoke is specified by the EDITOR environment variable. It defaults to cat. If the editor is emacs, nano, vim or kak, it is passed the line number of the derivation using the argument +<lineno>.

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

nix env - manipulate the process environment

## Synopsis

nix env [option...] subcommand where subcommand is one of the following: nix env shell - run a shell in which the specified packages are available

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix env shell - run a shell in which the specified packages are available

## Synopsis

nix env shell [option...] installables...

## Examples

Start a shell providing youtube-dl from the nixpkgs flake: # nix shell nixpkgs#youtube-dl # youtube-dl --version 2020.11.01.1 Start a shell providing GNU Hello from NixOS 20.03: # nix shell nixpkgs/nixos-20.03#hello Run GNU Hello: # nix shell nixpkgs#hello --command hello --greeting 'Hi everybody!' Hi everybody! Run multiple commands in a shell environment: # nix shell nixpkgs#gnumake --command sh -c "cd src && make" Run GNU Hello in a chroot store: # nix shell --store ~/my-nix nixpkgs#hello --command hello Start a shell providing GNU Hello in a chroot store: # nix shell --store ~/my-nix nixpkgs#hello nixpkgs#bashInteractive --command bash Note that it's necessary to specify bash explicitly because your default shell (e.g. /bin/bash) generally will not exist in the chroot.

## Description

nix shell runs a command in an environment in which the $PATH variable provides the specified installables. If no command is specified, it starts the default shell of your user account specified by $SHELL.

## Use as a #!-interpreter

You can use nix as a script interpreter to allow scripts written in arbitrary languages to obtain their own dependencies via Nix. This is done by starting the script with the following lines: #! /usr/bin/env nix #! nix shell installables --command real-interpreter where real-interpreter is the “real” script interpreter that will be invoked by nix shell after it has obtained the dependencies and initialised the environment, and installables are the attribute names of the dependencies in Nixpkgs. The lines starting with #! nix specify options (see above). Note that you cannot write #! /usr/bin/env nix shell -i ... because many operating systems only allow one argument in #! lines. For example, here is a Python script that depends on Python and the prettytable package: #! /usr/bin/env nix #! nix shell github:tomberek/-#python3With.prettytable --command python import prettytable # Print a simple table. t = prettytable.PrettyTable(["N", "N^2"]) for n in range(1, 10): t.add_row([n, n * n]) print t Similarly, the following is a Perl script that specifies that it requires Perl and the HTML::TokeParser::Simple and LWP packages: #! /usr/bin/env nix #! nix shell github:tomberek/-#perlWith.HTMLTokeParserSimple.LWP --command perl -x use HTML::TokeParser::Simple; # Fetch nixos.org and print all hrefs. my $p = HTML::TokeParser::Simple->new(url => 'http://nixos.org/'); while (my $token = $p->get_tag("a")) { my $href = $token->get_attr("href"); print "$href\n" if $href; } Sometimes you need to pass a simple Nix expression to customize a package like Terraform: #! /usr/bin/env nix #! nix shell --impure --expr `` #! nix with (import (builtins.getFlake ''nixpkgs'') {}); #! nix terraform.withPlugins (plugins: [ plugins.openstack ]) #! nix `` #! nix --command bash terraform "$@" Note You must use double backticks (``) when passing a simple Nix expression in a nix shell shebang. Finally, using the merging of multiple nix shell shebangs the following Haskell script uses a specific branch of Nixpkgs/NixOS (the 21.11 stable branch): #!/usr/bin/env nix #!nix shell --override-input nixpkgs github:NixOS/nixpkgs/nixos-21.11 #!nix github:tomberek/-#haskellWith.download-curl.tagsoup --command runghc import Network.Curl.Download import Text.HTML.TagSoup import Data.Either import Data.ByteString.Char8 (unpack) -- Fetch nixos.org and print all hrefs. main = do resp <- openURI "https://nixos.org/" let tags = filter (isTagOpenName "a") $ parseTags $ unpack $ fromRight undefined resp let tags' = map (fromAttrib "href") tags mapM_ putStrLn $ filter (/= "") tags' If you want to be even more precise, you can specify a specific revision of Nixpkgs: #!nix shell --override-input nixpkgs github:NixOS/nixpkgs/eabc38219184cc3e04a974fe31857d8e0eac098d You can also use a Nix expression to build your own dependencies. For example, the Python example could have been written as: #! /usr/bin/env nix #! nix shell --impure --file deps.nix -i python where the file deps.nix in the same directory as the #!-script contains: with import <nixpkgs> {}; python3.withPackages (ps: with ps; [ prettytable ])

## Options

--command / -c command args Command and arguments to be executed, defaulting to $SHELL --stdin Read installables from the standard input. No default installable applied.

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

--expr expr Interpret installables as attribute paths relative to the Nix expression expr. --file / -f file Interpret installables as attribute paths relative to the Nix expression stored in file. If file is the character -, then a Nix expression will be read from standard input. Implies --impure. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

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

--expr expr Interpret installables as attribute paths relative to the Nix expression expr. --file / -f file Interpret installables as attribute paths relative to the Nix expression stored in file. If file is the character -, then a Nix expression will be read from standard input. Implies --impure. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix flake - manage Nix flakes

## Synopsis

nix flake [option...] subcommand where subcommand is one of the following: nix flake archive - copy a flake and all its inputs to a store nix flake check - check whether the flake evaluates and run its tests nix flake clone - clone flake repository nix flake info - show flake metadata nix flake init - create a flake in the current directory from a template nix flake lock - create missing lock file entries nix flake metadata - show flake metadata nix flake new - create a flake in the specified directory from a template nix flake prefetch - download the source tree denoted by a flake reference into the Nix store nix flake show - show the outputs provided by a flake nix flake update - update flake lock file

## Description

nix flake provides subcommands for creating, modifying and querying Nix flakes. Flakes are the unit for packaging Nix code in a reproducible and discoverable way. They can have dependencies on other flakes, making it possible to have multi-repository Nix projects. A flake is a filesystem tree (typically fetched from a Git repository or a tarball) that contains a file named flake.nix in the root directory. flake.nix specifies some metadata about the flake such as dependencies (called inputs), as well as its outputs (the Nix values such as packages or NixOS modules provided by the flake).

## Flake references

Flake references (flakerefs) are a way to specify the location of a flake. These have two different forms:

### Attribute set representation

Example: { type = "github"; owner = "NixOS"; repo = "nixpkgs"; } The only required attribute is type. The supported types are listed below.

### URL-like syntax

Example: github:NixOS/nixpkgs These are used on the command line as a more convenient alternative to the attribute set representation. For instance, in the command # nix build github:NixOS/nixpkgs#hello github:NixOS/nixpkgs is a flake reference (while hello is an output attribute). They are also allowed in the inputs attribute of a flake, e.g. inputs.nixpkgs.url = "github:NixOS/nixpkgs"; is equivalent to inputs.nixpkgs = { type = "github"; owner = "NixOS"; repo = "nixpkgs"; }; Following RFC 3986, characters outside of the allowed range (i.e. neither reserved characters nor unreserved characters) must be percent-encoded.

#### Examples

Here are some examples of flake references in their URL-like representation: nixpkgs: The nixpkgs entry in the flake registry. nixpkgs/a3a3dda3bacf61e8a39258a0ed9c924eeca8e293: The nixpkgs entry in the flake registry, with its Git revision overridden to a specific value. github:NixOS/nixpkgs: The master branch of the NixOS/nixpkgs repository on GitHub. github:NixOS/nixpkgs/nixos-20.09: The nixos-20.09 branch of the nixpkgs repository. github:NixOS/nixpkgs/pull/357207/head: The 357207 pull request of the nixpkgs repository. github:NixOS/nixpkgs/a3a3dda3bacf61e8a39258a0ed9c924eeca8e293: A specific revision of the nixpkgs repository. github:edolstra/nix-warez?dir=blender: A flake in a subdirectory of a GitHub repository. git+https://github.com/NixOS/patchelf: A Git repository. git+https://github.com/NixOS/patchelf?ref=master: A specific branch of a Git repository. git+https://github.com/NixOS/patchelf?ref=master&rev=f34751b88bd07d7f44f5cd3200fb4122bf916c7e: A specific branch and revision of a Git repository. https://github.com/NixOS/patchelf/archive/master.tar.gz: A tarball flake.

### Path-like syntax

Flakes corresponding to a local path can also be referred to by a direct path reference, either /absolute/path/to/the/flake or./relative/path/to/the/flake. Note that the leading ./ is mandatory for relative paths. If it is omitted, the path will be interpreted as URL-like syntax, which will cause error messages like this: error: cannot find flake 'flake:relative/path/to/the/flake' in the flake registries The semantic of such a path is as follows: If the directory is part of a Git repository, then the input will be treated as a git+file: URL, otherwise it will be treated as a path: url; If the directory doesn't contain a flake.nix file, then Nix will search for such a file upwards in the file system hierarchy until it finds any of: The Git repository root, or The filesystem root (/), or A folder on a different mount point. Contrary to URL-like references, path-like flake references can contain arbitrary unicode characters (except # and ?).

#### Examples

.: The flake to which the current directory belongs. /home/alice/src/patchelf: A flake in some other directory. ./../sub directory/with Ûñî©ôδ€: A flake in another relative directory that has Unicode characters in its name.

### Flake reference attributes

The following generic flake reference attributes are supported: dir: The subdirectory of the flake in which flake.nix is located. This parameter enables having multiple flakes in a repository or tarball. The default is the root directory of the flake. narHash: The hash of the Nix Archive (NAR) serialisation (in SRI format) of the contents of the flake. This is useful for flake types such as tarballs that lack a unique content identifier such as a Git commit hash. In addition, the following attributes are common to several flake reference types: rev: A Git or Mercurial commit hash. ref: A Git or Mercurial branch or tag name. Finally, some attributes are typically not specified by the user, but can occur in locked flake references and are available to Nix code: revCount: The number of ancestors of the commit rev. lastModified: The timestamp (in seconds since the Unix epoch) of the last modification of this version of the flake. For Git/Mercurial flakes, this is the commit time of commit rev, while for tarball flakes, it's the most recent timestamp of any file inside the tarball.

### Types

Currently the type attribute can be one of the following: indirect: The default. These are symbolic references to flakes that are looked up in the flake registries. These have the form [flake:]<flake-id>(/<rev-or-ref>(/rev)?)? These perform a lookup of <flake-id> in the flake registry. For example, nixpkgs and nixpkgs/release-20.09 are indirect flake references. The specified rev and/or ref are merged with the entry in the registry; see nix registry for details. For example, these are valid indirect flake references: nixpkgs nixpkgs/nixos-unstable nixpkgs/a3a3dda3bacf61e8a39258a0ed9c924eeca8e293 nixpkgs/nixos-unstable/a3a3dda3bacf61e8a39258a0ed9c924eeca8e293 sub/dir (if a flake named sub is in the registry) path: arbitrary local directories. The required attribute path specifies the path of the flake. The URL form is path:<path>(\?<params>)? where path is an absolute path to a directory in the file system containing a file named flake.nix. If the flake at path is not inside a git repository, the path: prefix is implied and can be omitted. If path is a relative path (i.e. if it does not start with /), it is interpreted as follows: If path is a command line argument, it is interpreted relative to the current directory. If path is used in a flake.nix, it is interpreted relative to the directory containing that flake.nix. However, the resolved path must be in the same tree. For instance, a flake.nix in the root of a tree can use path:./foo to access the flake in subdirectory foo, but path:../bar is illegal. On the other hand, a flake in the /foo directory of a tree can use path:../bar to refer to the flake in /bar. Path inputs can be specified with path values in flake.nix. Path values are a syntax for path inputs, and they are converted by resolving them into relative paths, relative to the base directory of flake.nix escaping URL characters (refer to IETF RFC?) prepending path: Note that the allowed syntax for path values in flake inputs may be more restrictive than general Nix, so you may need to use path: if your path contains certain special characters. See Path literals Note that if you omit path:, relative paths must start with . to avoid ambiguity with registry lookups (e.g. nixpkgs is a registry lookup; ./nixpkgs is a relative path). For example, these are valid path flake references: path:/home/user/sub/dir /home/user/sub/dir (if dir/flake.nix is not in a git repository) path:sub/dir ./sub/dir path:../parent git: Git repositories. The location of the repository is specified by the attribute url. They have the URL form git(+http|+https|+ssh|+git|+file):(//<server>)?<path>(\?<params>)? If path starts with / (or ./ when used as an argument on the command line) and is a local path to a git repository, the leading git: or +file prefixes are implied and can be omitted. The ref attribute defaults to resolving the HEAD reference. The rev attribute must denote a commit that exists in the branch or tag specified by the ref attribute, since Nix doesn't do a full clone of the remote repository by default (and the Git protocol doesn't allow fetching a rev without a known ref). The default is the commit currently pointed to by ref. When git+file is used without specifying ref or rev, files are fetched directly from the local path as long as they have been added to the Git repository. If there are uncommitted changes, the reference is treated as dirty and a warning is printed. For example, the following are valid Git flake references: git:/home/user/sub/dir /home/user/sub/dir (if dir/flake.nix is in a git repository) ./sub/dir (when used on the command line and dir/flake.nix is in a git repository) git+https://example.org/my/repo git+https://example.org/my/repo?dir=flake1 git+https://example.org/my/repo?shallow=1 A shallow clone of the repository. For large repositories, the shallow clone option can significantly speed up fresh clones compared to non-shallow clones, while still providing faster updates than other fetch methods such as tarball: or github:. git+ssh://git@github.com/NixOS/nix?ref=v1.2.3 git://github.com/edolstra/dwarffs?ref=unstable&rev=e486d8d40e626a20e06d792db8cc5ac5aba9a5b4 git+file:///home/my-user/some-repo/some-repo mercurial: Mercurial repositories. The URL form is similar to the git type, except that the URL schema must be one of hg+http, hg+https, hg+ssh or hg+file. tarball: Tarballs. The location of the tarball is specified by the attribute url. In URL form, the schema must be tarball+http://, tarball+https:// or tarball+file://. If the extension corresponds to a known archive format (.zip, .tar, .tgz, .tar.gz, .tar.xz, .tar.bz2 or .tar.zst), then the tarball+ can be dropped. This can also be used to set the location of gitea/forgejo branches. See here file: Plain files or directory tarballs, either over http(s) or from the local disk. In URL form, the schema must be file+http://, file+https:// or file+file://. If the extension doesn’t correspond to a known archive format (as defined by the tarball fetcher), then the file+ prefix can be dropped. github: A more efficient way to fetch repositories from GitHub. The following attributes are required: owner: The owner of the repository. repo: The name of the repository. These are downloaded as tarball archives, rather than through Git. This is often much faster and uses less disk space since it doesn't require fetching the entire history of the repository. On the other hand, it doesn't allow incremental fetching (but full downloads are often faster than incremental fetches!). The URL syntax for github flakes is: github:<owner>/<repo>(/<rev-or-ref>)?(\?<params>)? <rev-or-ref> specifies the name of a branch or tag (ref), or a commit hash (rev). Note that unlike Git, GitHub allows fetching by commit hash without specifying a branch or tag. You can also specify host as a parameter, to point to a custom GitHub Enterprise server. Some examples: github:edolstra/dwarffs github:edolstra/dwarffs/unstable github:edolstra/dwarffs/d3f2baba8f425779026c6ec04021b2e927f61e31 github:internal/project?host=company-github.example.org gitlab: Similar to github, is a more efficient way to fetch GitLab repositories. The following attributes are required: owner: The owner of the repository. repo: The name of the repository. Like github, these are downloaded as tarball archives. The URL syntax for gitlab flakes is: gitlab:<owner>/<repo>(/<rev-or-ref>)?(\?<params>)? <rev-or-ref> works the same as github. Either a branch or tag name (ref), or a commit hash (rev) can be specified. Since GitLab allows for self-hosting, you can specify host as a parameter, to point to any instances other than gitlab.com. Some examples: gitlab:veloren/veloren gitlab:veloren/veloren/master gitlab:veloren/veloren/80a4d7f13492d916e47d6195be23acae8001985a gitlab:openldap/openldap?host=git.openldap.org When accessing a project in a (nested) subgroup, make sure to URL-encode any slashes, i.e. replace / with %2F: gitlab:veloren%2Fdev/rfcs sourcehut: Similar to github, is a more efficient way to fetch SourceHut repositories. The following attributes are required: owner: The owner of the repository (including leading ~). repo: The name of the repository. Like github, these are downloaded as tarball archives. The URL syntax for sourcehut flakes is: sourcehut:<owner>/<repo>(/<rev-or-ref>)?(\?<params>)? <rev-or-ref> works the same as github. Either a branch or tag name (ref), or a commit hash (rev) can be specified. Since SourceHut allows for self-hosting, you can specify host as a parameter, to point to any instances other than git.sr.ht. Currently, ref name resolution only works for Git repositories. You can refer to Mercurial repositories by simply changing host to hg.sr.ht (or any other Mercurial instance). With the caveat that you must explicitly specify a commit hash (rev). Some examples: sourcehut:~misterio/nix-colors sourcehut:~misterio/nix-colors/main sourcehut:~misterio/nix-colors?host=git.example.org sourcehut:~misterio/nix-colors/182b4b8709b8ffe4e9774a4c5d6877bf6bb9a21c sourcehut:~misterio/nix-colors/21c1a380a6915d890d408e9f22203436a35bb2de?host=hg.sr.ht

## Flake format

As an example, here is a simple flake.nix that depends on the Nixpkgs flake and provides a single package (i.e. an installable derivation): { description = "A flake for building Hello World"; inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-20.03"; outputs = { self, nixpkgs }: { packages.x86_64-linux.default = # Notice the reference to nixpkgs here. with import nixpkgs { system = "x86_64-linux"; }; stdenv.mkDerivation { name = "hello"; src = self; buildPhase = "gcc -o hello ./hello.c"; installPhase = "mkdir -p $out/bin; install -t $out/bin hello"; }; }; } The following attributes are supported in flake.nix: description: A short, one-line description of the flake. inputs: An attrset specifying the dependencies of the flake (described below). outputs: A function that, given an attribute set containing the outputs of each of the input flakes keyed by their identifier, yields the Nix values provided by this flake. Thus, in the example above, inputs.nixpkgs contains the result of the call to the outputs function of the nixpkgs flake. In addition to the outputs of each input, each input in inputs also contains some metadata about the inputs. These are: outPath: The path in the Nix store of the flake's source tree. This way, the attribute set can be passed to import as if it was a path, as in the example above (import nixpkgs). rev: The commit hash of the flake's repository, if applicable. revCount: The number of ancestors of the revision rev. This is not available for github repositories, since they're fetched as tarballs rather than as Git repositories. lastModifiedDate: The commit time of the revision rev, in the format %Y%m%d%H%M%S (e.g. 20181231100934). Unlike revCount, this is available for both Git and GitHub repositories, so it's useful for generating (hopefully) monotonically increasing version strings. lastModified: The commit time of the revision rev as an integer denoting the number of seconds since 1970. narHash: The SHA-256 (in SRI format) of the Nix Archive (NAR) serialisation NAR serialization of the flake's source tree. The value returned by the outputs function must be an attribute set. The attributes can have arbitrary values; however, various nix subcommands require specific attributes to have a specific value (e.g. packages.x86_64-linux must be an attribute set of derivations built for the x86_64-linux platform). nixConfig: a set of nix.conf options to be set when evaluating any part of a flake. In the interests of security, only a small set of set of options is allowed to be set without confirmation so long as accept-flake-config is not enabled in the global configuration: bash-prompt bash-prompt-prefix bash-prompt-suffix flake-registry commit-lock-file-summary

### Flake inputs

The attribute inputs specifies the dependencies of a flake, as an attrset mapping input names to flake references. For example, the following specifies a dependency on the nixpkgs and import-cargo repositories: # A GitHub repository. inputs.import-cargo = { type = "github"; owner = "edolstra"; repo = "import-cargo"; }; # An indirection through the flake registry. inputs.nixpkgs = { type = "indirect"; id = "nixpkgs"; }; Alternatively, you can use the URL-like syntax: inputs.import-cargo.url = "github:edolstra/import-cargo"; inputs.nixpkgs.url = "nixpkgs"; Each input is fetched, evaluated and passed to the outputs function as a set of attributes with the same name as the corresponding input. The special input named self refers to the outputs and source tree of this flake. Thus, a typical outputs function looks like this: outputs = { self, nixpkgs, import-cargo }: { ... outputs ... }; It is also possible to omit an input entirely and only list it as expected function argument to outputs. Thus, outputs = { self, nixpkgs }: ...; without an inputs.nixpkgs attribute is equivalent to inputs.nixpkgs = { type = "indirect"; id = "nixpkgs"; }; Repositories that don't contain a flake.nix can also be used as inputs, by setting the input's flake attribute to false: inputs.grcov = { type = "github"; owner = "mozilla"; repo = "grcov"; flake = false; }; outputs = { self, nixpkgs, grcov }: { packages.x86_64-linux.grcov = stdenv.mkDerivation { src = grcov; ... }; }; Transitive inputs can be overridden from a flake.nix file. For example, the following overrides the nixpkgs input of the nixops input: inputs.nixops.inputs.nixpkgs = { type = "github"; owner = "my-org"; repo = "nixpkgs"; }; It is also possible to "inherit" an input from another input. This is useful to minimize flake dependencies. For example, the following sets the nixpkgs input of the top-level flake to be equal to the nixpkgs input of the dwarffs input of the top-level flake: inputs.nixpkgs.follows = "dwarffs/nixpkgs"; The value of the follows attribute is a /-separated sequence of input names denoting the path of inputs to be followed from the root flake. Overrides and follows can be combined, e.g. inputs.nixops.inputs.nixpkgs.follows = "dwarffs/nixpkgs"; sets the nixpkgs input of nixops to be the same as the nixpkgs input of dwarffs. It is worth noting, however, that it is generally not useful to eliminate transitive nixpkgs flake inputs in this way. Most flakes provide their functionality through Nixpkgs overlays or NixOS modules, which are composed into the top-level flake's nixpkgs input; so their own nixpkgs input is usually irrelevant.

## Lock files

Inputs specified in flake.nix are typically "unlocked" in the sense that they don't specify an exact revision. To ensure reproducibility, Nix will automatically generate and use a lock file called flake.lock in the flake's directory. The lock file is a UTF-8 JSON file. It contains a graph structure isomorphic to the graph of dependencies of the root flake. Each node in the graph (except the root node) maps the (usually) unlocked input specifications in flake.nix to locked input specifications. Each node also contains some metadata, such as the dependencies (outgoing edges) of the node. For example, if flake.nix has the inputs in the example above, then the resulting lock file might be: { "version": 7, "root": "n1", "nodes": { "n1": { "inputs": { "nixpkgs": "n2", "import-cargo": "n3", "grcov": "n4" } }, "n2": { "inputs": {}, "locked": { "owner": "edolstra", "repo": "nixpkgs", "rev": "7f8d4b088e2df7fdb6b513bc2d6941f1d422a013", "type": "github", "lastModified": 1580555482, "narHash": "sha256-OnpEWzNxF/AU4KlqBXM2s5PWvfI5/BS6xQrPvkF5tO8=" }, "original": { "id": "nixpkgs", "type": "indirect" } }, "n3": { "inputs": {}, "locked": { "owner": "edolstra", "repo": "import-cargo", "rev": "8abf7b3a8cbe1c8a885391f826357a74d382a422", "type": "github", "lastModified": 1567183309, "narHash": "sha256-wIXWOpX9rRjK5NDsL6WzuuBJl2R0kUCnlpZUrASykSc=" }, "original": { "owner": "edolstra", "repo": "import-cargo", "type": "github" } }, "n4": { "inputs": {}, "locked": { "owner": "mozilla", "repo": "grcov", "rev": "989a84bb29e95e392589c4e73c29189fd69a1d4e", "type": "github", "lastModified": 1580729070, "narHash": "sha256-235uMxYlHxJ5y92EXZWAYEsEb6mm+b069GAd+BOIOxI=" }, "original": { "owner": "mozilla", "repo": "grcov", "type": "github" }, "flake": false } } } This graph has 4 nodes: the root flake, and its 3 dependencies. The nodes have arbitrary labels (e.g. n1). The label of the root node of the graph is specified by the root attribute. Nodes contain the following fields: inputs: The dependencies of this node, as a mapping from input names (e.g. nixpkgs) to node labels (e.g. n2). original: The original input specification from flake.nix, as a set of builtins.fetchTree arguments. locked: The locked input specification, as a set of builtins.fetchTree arguments. Thus, in the example above, when we build this flake, the input nixpkgs is mapped to revision 7f8d4b088e2df7fdb6b513bc2d6941f1d422a013 of the edolstra/nixpkgs repository on GitHub. It also includes the attribute narHash, specifying the expected contents of the tree in the Nix store (as computed by nix hash-path), and may include input-type-specific attributes such as the lastModified or revCount. The main reason for these attributes is to allow flake inputs to be substituted from a binary cache: narHash allows the store path to be computed, while the other attributes are necessary because they provide information not stored in the store path. The attributes in locked are considered "final", meaning that they are the only ones that are passed via the arguments of the outputs function of a flake. For instance, if locked contains a lastModified attribute while the fetcher does not return a lastModified attribute, then the lastModified attribute will be passed to the outputs function. Conversely, if locked does not contain a lastModified attribute while the fetcher does return a lastModified attribute, then no lastModified attribute will be passed. If locked contains a lastModified attribute and the fetcher returns a lastModified attribute, then they must have the same value. flake: A Boolean denoting whether this is a flake or non-flake dependency. Corresponds to the flake attribute in the inputs attribute in flake.nix. The original and locked attributes are omitted for the root node. This is because we cannot record the commit hash or content hash of the root flake, since modifying flake.lock will invalidate these. The graph representation of lock files allows circular dependencies between flakes. For example, here are two flakes that reference each other: { inputs.b = ... location of flake B ...; # Tell the 'b' flake not to fetch 'a' again, to ensure its 'a' is # *this* 'a'. inputs.b.inputs.a.follows = ""; outputs = { self, b }: { foo = 123 + b.bar; xyzzy = 1000; }; } and { inputs.a = ... location of flake A ...; inputs.a.inputs.b.follows = ""; outputs = { self, a }: { bar = 456 + a.xyzzy; }; } Lock files transitively lock direct as well as indirect dependencies. That is, if a lock file exists and is up to date, Nix will not look at the lock files of dependencies. However, lock file generation itself does use the lock files of dependencies by default.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.
