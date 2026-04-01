---
title: "Nix 2.28.6 Reference Manual"
source: print.html
---
## Options

--registry registry The registry to operate on.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix registry list - list available Nix flakes

## Synopsis

nix registry list [option...]

## Examples

Show the contents of all registries: # nix registry list user flake:dwarffs github:edolstra/dwarffs/d181d714fd36eb06f4992a1997cd5601e26db8f5 system flake:nixpkgs path:/nix/store/fxl9mrm5xvzam0lxi9ygdmksskx4qq8s-source?lastModified=1605220118&narHash=sha256-Und10ixH1WuW0XHYMxxuHRohKYb45R%2fT8CwZuLd2D2Q=&rev=3090c65041104931adda7625d37fa874b2b5c124 global flake:blender-bin github:edolstra/nix-warez?dir=blender global flake:dwarffs github:edolstra/dwarffs …

## Description

This command displays the contents of all registries on standard output. Each line represents one registry entry in the format type from to, where type denotes the registry containing the entry: flags: entries specified on the command line using --override-flake. user: the user registry. system: the system registry. global: the global registry. See the nix registry manual page for more details.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix registry pin - pin a flake to its current version or to the current version of a flake URL

## Synopsis

nix registry pin [option...] url locked

## Examples

Pin nixpkgs to its most recent Git revision: # nix registry pin nixpkgs Afterwards the user registry will have an entry like this: nix registry list | grep '^user ' user flake:nixpkgs github:NixOS/nixpkgs/925b70cd964ceaedee26fde9b19cc4c4f081196a and nix flake metadata will say: # nix flake metadata nixpkgs Resolved URL: github:NixOS/nixpkgs/925b70cd964ceaedee26fde9b19cc4c4f081196a Locked URL: github:NixOS/nixpkgs/925b70cd964ceaedee26fde9b19cc4c4f081196a … Pin nixpkgs in a custom registry to its most recent Git revision: # nix registry pin --registry ./custom-flake-registry.json nixpkgs

## Description

This command adds an entry to the user registry that maps flake reference url to the corresponding locked flake reference, that is, a flake reference that specifies an exact revision or content hash. This ensures that until this registry entry is removed, all uses of url will resolve to exactly the same flake. Entries can be removed using nix registry remove.

## Options

--registry registry The registry to operate on.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix registry remove - remove flake from user flake registry

## Synopsis

nix registry remove [option...] url

## Examples

Remove the entry nixpkgs from the user registry: # nix registry remove nixpkgs Remove the entry nixpkgs from a custom registry: # nix registry remove --registry ./custom-flake-registry.json nixpkgs

## Description

This command removes from the user registry any entry for flake reference url.

## Options

--registry registry The registry to operate on.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix repl - start an interactive environment for evaluating Nix expressions

## Synopsis

nix repl [option...] installables...

## Examples

Display all special commands within the REPL: # nix repl nix-repl> :? Evaluate some simple Nix expressions: # nix repl nix-repl> 1 + 2 3 nix-repl> map (x: x * 2) [1 2 3] [ 2 4 6 ] Interact with Nixpkgs in the REPL: # nix repl --file example.nix Loading Installable ''... Added 3 variables. # nix repl --expr '{a={b=3;c=4;};}' Loading Installable ''... Added 1 variables. # nix repl --expr '{a={b=3;c=4;};}' a Loading Installable ''... Added 1 variables. # nix repl --extra-experimental-features 'flakes' nixpkgs Loading Installable 'flake:nixpkgs#'... Added 5 variables. nix-repl> legacyPackages.x86_64-linux.emacs.name "emacs-27.1" nix-repl> :q # nix repl --expr 'import <nixpkgs>{}' Loading Installable ''... Added 12439 variables. nix-repl> emacs.name "emacs-27.1" nix-repl> emacs.drvPath "/nix/store/lp0sjrhgg03y2n0l10n70rg0k7hhyz0l-emacs-27.1.drv" nix-repl> drv = runCommand "hello" { buildInputs = [ hello ]; } "hello; hello > $out" nix-repl> :b drv this derivation produced the following outputs: out -> /nix/store/0njwbgwmkwls0w5dv9mpc1pq5fj39q0l-hello nix-repl> builtins.readFile drv "Hello, world!\n" nix-repl> :log drv Hello, world!

## Description

This command provides an interactive environment for evaluating Nix expressions. (REPL stands for 'read–eval–print loop'.) On startup, it loads the Nix expressions named files and adds them into the lexical scope. You can load addition files using the :l <filename> command, or reload all files using :r.

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

--expr expr Interpret installables as attribute paths relative to the Nix expression expr. --file / -f file Interpret installables as attribute paths relative to the Nix expression stored in file. If file is the character -, then a Nix expression will be read from standard input. Implies --impure. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

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

--expr expr Interpret installables as attribute paths relative to the Nix expression expr. --file / -f file Interpret installables as attribute paths relative to the Nix expression stored in file. If file is the character -, then a Nix expression will be read from standard input. Implies --impure. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix search - search for packages

## Synopsis

nix search [option...] installable regex...

## Examples

Show all packages in the nixpkgs flake: # nix search nixpkgs ^ * legacyPackages.x86_64-linux.AMB-plugins (0.8.1) A set of ambisonics ladspa plugins * legacyPackages.x86_64-linux.ArchiSteamFarm (4.3.1.0) Application with primary purpose of idling Steam cards from multiple accounts simultaneously … Show packages in the nixpkgs flake containing blender in its name or description: # nix search nixpkgs blender * legacyPackages.x86_64-linux.blender (2.91.0) 3D Creation/Animation/Publishing System Search for packages underneath the attribute gnome3 in Nixpkgs: # nix search nixpkgs#gnome3 vala * legacyPackages.x86_64-linux.gnome3.vala (0.48.9) Compiler for GObject type system Show all packages in the flake in the current directory: # nix search . ^ Search for Firefox or Chromium: # nix search nixpkgs 'firefox|chromium' Search for packages containing git and either frontend or gui: # nix search nixpkgs git 'frontend|gui' Search for packages containing neovim but hide ones containing either gui or python: # nix search nixpkgs neovim --exclude 'python|gui' or # nix search nixpkgs neovim --exclude 'python' --exclude 'gui'

## Description

nix search searches installable that can be evaluated, that is, a flake or Nix expression, but not a store path or deriving path) for packages whose name or description matches all of the regular expressions regex. For each matching package, It prints the full attribute name (from the root of the installable), the version and the meta.description field, highlighting the substrings that were matched by the regular expressions. To show all packages, use the regular expression ^. In contrast to .*, it avoids highlighting the entire name and description of every package. Note that in this context, ^ is the regex character to match the beginning of a string, not the delimiter for selecting a derivation output.

## Flake output attributes

If no flake output attribute is given, nix search searches for packages: Directly underneath packages.<system>. Underneath legacyPackages.<system>, recursing into attribute sets that contain an attribute recurseForDerivations = true.

## Options

--exclude / -e regex Hide packages whose attribute path, name or description contain regex. --json Produce output in JSON format, suitable for consumption by another program.

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

nix store - manipulate a Nix store

## Synopsis

nix store [option...] subcommand where subcommand is one of the following: nix store add - Add a file or directory to the Nix store nix store add-file - Deprecated. Use nix store add --mode flat instead. nix store add-path - Deprecated alias to nix store add. nix store cat - print the contents of a file in the Nix store on stdout nix store copy-log - copy build logs between Nix stores nix store copy-sigs - copy store path signatures from substituters nix store delete - delete paths from the Nix store nix store diff-closures - show what packages and versions were added and removed between two closures nix store dump-path - serialise a store path to stdout in NAR format nix store gc - perform garbage collection on a Nix store nix store info - test whether a store can be accessed nix store ls - show information about a path in the Nix store nix store make-content-addressed - rewrite a path or closure to content-addressed form nix store optimise - replace identical files in the store by hard links nix store path-from-hash-part - get a store path from its hash part nix store ping - test whether a store can be accessed nix store prefetch-file - download a file into the Nix store nix store repair - repair store paths nix store sign - sign store paths with a local key nix store verify - verify the integrity of store paths

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix store add - Add a file or directory to the Nix store

## Synopsis

nix store add [option...] path

## Description

Copy path to the Nix store, and print the resulting store path on standard output. Warning The resulting store path is not registered as a garbage collector root, so it could be deleted before you have a chance to register it.

## Examples

Add a directory to the store: # mkdir dir # echo foo > dir/bar # nix store add ./dir /nix/store/6pmjx56pm94n66n4qw1nff0y1crm8nqg-dir # cat /nix/store/6pmjx56pm94n66n4qw1nff0y1crm8nqg-dir/bar foo

## Options

--dry-run Show what this command would do without doing it. --hash-algo hash-algo Hash algorithm (blake3, md5, sha1, sha256, or sha512). --mode content-address-method How to compute the content-address of the store object. One of: nar (the default): Serialises the input as a Nix Archive and passes that to the hash function. flat: Assumes that the input is a single file and directly passes it to the hash function. text: Like flat, but used for derivations serialized in store object and builtins.toFile. For advanced use-cases only; for regular usage prefer nar and flat. --name / -n name Override the name component of the store path. It defaults to the base name of path.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix store add-file - Deprecated. Use nix store add --mode flat instead.

## Synopsis

nix store add-file [option...] path

## Options

--dry-run Show what this command would do without doing it. --hash-algo hash-algo Hash algorithm (blake3, md5, sha1, sha256, or sha512). --mode content-address-method How to compute the content-address of the store object. One of: nar (the default): Serialises the input as a Nix Archive and passes that to the hash function. flat: Assumes that the input is a single file and directly passes it to the hash function. text: Like flat, but used for derivations serialized in store object and builtins.toFile. For advanced use-cases only; for regular usage prefer nar and flat. --name / -n name Override the name component of the store path. It defaults to the base name of path.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.
