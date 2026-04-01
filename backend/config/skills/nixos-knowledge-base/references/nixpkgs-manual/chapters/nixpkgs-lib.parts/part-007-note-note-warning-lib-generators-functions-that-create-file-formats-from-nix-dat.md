---
title: "Nixpkgs lib"
source: index.html
---
#### Note

This function is strict in the entire file set. This is in contrast with combinators lib.fileset.union, lib.fileset.intersection and lib.fileset.difference. Thus it is recommended to call toList on file sets created using the combinators, instead of doing list processing on the result of toList. The resulting list of files can be turned back into a file set using lib.fileset.unions. Inputs fileset The file set whose file paths to return. This argument can also be a path, which gets implicitly coerced to a file set. Type toList :: FileSet -> [ Path ] Examples Example 240. lib.fileset.toList usage example toList ./. [ ./README.md ./Makefile ./src/main.c ./src/main.h ] toList (difference ./. ./src) [ ./README.md ./Makefile ] Located at lib/fileset/default.nix:514 in <nixpkgs>.

##### lib.fileset.union

The file set containing all files that are in either of two given file sets. This is the same as unions, but takes just two file sets instead of a list. See also Union (set theory). The given file sets are evaluated as lazily as possible, with the first argument being evaluated first if needed. Inputs fileset1 The first file set. This argument can also be a path, which gets implicitly coerced to a file set. fileset2 The second file set. This argument can also be a path, which gets implicitly coerced to a file set. Type union :: FileSet -> FileSet -> FileSet Examples Example 241. lib.fileset.union usage example # Create a file set containing the file `Makefile` # and all files recursively in the `src` directory union ./Makefile ./src # Create a file set containing the file `Makefile` # and the LICENSE file from the parent directory union ./Makefile ../LICENSE Located at lib/fileset/default.nix:557 in <nixpkgs>.

##### lib.fileset.unions

The file set containing all files that are in any of the given file sets. This is the same as union, but takes a list of file sets instead of just two. See also Union (set theory). The given file sets are evaluated as lazily as possible, with earlier elements being evaluated first if needed. Inputs filesets A list of file sets. The elements can also be paths, which get implicitly coerced to file sets. Type unions :: [ FileSet ] -> FileSet Examples Example 242. lib.fileset.unions usage example # Create a file set containing selected files unions [ # Include the single file `Makefile` in the current directory # This errors if the file doesn't exist ./Makefile # Recursively include all files in the `src/code` directory # If this directory is empty this has no effect ./src/code # Include the files `run.sh` and `unit.c` from the `tests` directory ./tests/run.sh ./tests/unit.c # Include the `LICENSE` file from the parent directory ../LICENSE ] Located at lib/fileset/default.nix:619 in <nixpkgs>.

##### lib.fileset.intersection

The file set containing all files that are in both of two given file sets. See also Intersection (set theory). The given file sets are evaluated as lazily as possible, with the first argument being evaluated first if needed. Inputs fileset1 The first file set. This argument can also be a path, which gets implicitly coerced to a file set. fileset2 The second file set. This argument can also be a path, which gets implicitly coerced to a file set. Type intersection :: FileSet -> FileSet -> FileSet Examples Example 243. lib.fileset.intersection usage example # Limit the selected files to the ones in ./., so only ./src and ./Makefile intersection ./. (unions [ ../LICENSE ./src ./Makefile ]) Located at lib/fileset/default.nix:670 in <nixpkgs>.

##### lib.fileset.difference

The file set containing all files from the first file set that are not in the second file set. See also Difference (set theory). The given file sets are evaluated as lazily as possible, with the first argument being evaluated first if needed. Inputs positive The positive file set. The result can only contain files that are also in this file set. This argument can also be a path, which gets implicitly coerced to a file set. negative The negative file set. The result will never contain files that are also in this file set. This argument can also be a path, which gets implicitly coerced to a file set. Type difference :: FileSet -> FileSet -> FileSet Examples Example 244. lib.fileset.difference usage example # Create a file set containing all files from the current directory, # except ones under ./tests difference ./. ./tests let # A set of Nix-related files nixFiles = unions [ ./default.nix ./nix ./tests/default.nix ]; in # Create a file set containing all files under ./tests, except ones in `nixFiles`, # meaning only without ./tests/default.nix difference ./tests nixFiles Located at lib/fileset/default.nix:729 in <nixpkgs>.

##### lib.fileset.fileFilter

Filter a file set to only contain files matching some predicate. Inputs predicate The predicate function to call on all files contained in given file set. A file is included in the resulting file set if this function returns true for it. This function is called with an attribute set containing these attributes: name (String): The name of the file type (String, one of "regular", "symlink" or "unknown"): The type of the file. This matches result of calling builtins.readFileType on the file’s path. hasExt (String -> Bool): Whether the file has a certain file extension. hasExt ext is true only if hasSuffix ".${ext}" name. This also means that e.g. for a file with name .gitignore, hasExt "gitignore" is true. Other attributes may be added in the future. path The path whose files to filter Type fileFilter :: ({ name :: String, type :: String, hasExt :: String -> Bool, ... } -> Bool) -> Path -> FileSet Examples Example 245. lib.fileset.fileFilter usage example # Include all regular `default.nix` files in the current directory fileFilter (file: file.name == "default.nix") ./. # Include all non-Nix files from the current directory fileFilter (file: ! file.hasExt "nix") ./. # Include all files that start with a "." in the current directory fileFilter (file: hasPrefix "." file.name) ./. # Include all regular files (not symlinks or others) in the current directory fileFilter (file: file.type == "regular") ./. Located at lib/fileset/default.nix:808 in <nixpkgs>.

##### lib.fileset.fromSource

Create a file set with the same files as a lib.sources-based value. This does not import any of the files into the store. This can be used to gradually migrate from lib.sources-based filtering to lib.fileset. A file set can be turned back into a source using toSource.

#### Note

File sets cannot represent empty directories. Turning the result of this function back into a source using toSource will therefore not preserve empty directories. Inputs source 1. Function argument Type fromSource :: SourceLike -> FileSet Examples Example 246. lib.fileset.fromSource usage example # There's no cleanSource-like function for file sets yet, # but we can just convert cleanSource to a file set and use it that way toSource { root = ./.; fileset = fromSource (lib.sources.cleanSource ./.); } # Keeping a previous sourceByRegex (which could be migrated to `lib.fileset.unions`), # but removing a subdirectory using file set functions difference (fromSource (lib.sources.sourceByRegex ./. [ "^README\.md$" # This regex includes everything in ./doc "^doc(/.*)?$" ]) ./doc/generated # Use cleanSource, but limit it to only include ./Makefile and files under ./src intersection (fromSource (lib.sources.cleanSource ./.)) (unions [ ./Makefile ./src ]); Located at lib/fileset/default.nix:882 in <nixpkgs>.

##### lib.fileset.gitTracked

Create a file set containing all Git-tracked files in a repository. This function behaves like gitTrackedWith { } - using the defaults. Inputs path The path to the working directory of a local Git repository. This directory must contain a .git file or subdirectory. Type gitTracked :: Path -> FileSet Examples Example 247. lib.fileset.gitTracked usage example # Include all files tracked by the Git repository in the current directory gitTracked ./. # Include only files tracked by the Git repository in the parent directory # that are also in the current directory intersection ./. (gitTracked ../.) Located at lib/fileset/default.nix:941 in <nixpkgs>.

##### lib.fileset.gitTrackedWith

Create a file set containing all Git-tracked files in a repository. The first argument allows configuration with an attribute set, while the second argument is the path to the Git working tree. gitTrackedWith does not perform any filtering when the path is a Nix store path and not a repository. In this way, it accommodates the use case where the expression that makes the gitTracked call does not reside in an actual git repository anymore, and has presumably already been fetched in a way that excludes untracked files. Fetchers with such equivalent behavior include builtins.fetchGit, builtins.fetchTree (experimental), and pkgs.fetchgit when used without leaveDotGit. If you don’t need the configuration, you can use gitTracked instead. This is equivalent to the result of unions on all files returned by git ls-files (which uses --cached by default).

#### Warning

Currently this function is based on builtins.fetchGit As such, this function causes all Git-tracked files to be unnecessarily added to the Nix store, without being re-usable by toSource. This may change in the future. Inputs options (attribute set) recurseSubmodules (optional, default: false) Whether to recurse into Git submodules to also include their tracked files. If true, this is equivalent to passing the –recurse-submodules flag to git ls-files. path The path to the working directory of a local Git repository. This directory must contain a .git file or subdirectory. Type gitTrackedWith :: { recurseSubmodules :: Bool ? false } -> Path -> FileSet Examples Example 248. lib.fileset.gitTrackedWith usage example # Include all files tracked by the Git repository in the current directory # and any submodules under it gitTracked { recurseSubmodules = true; } ./. Located at lib/fileset/default.nix:996 in <nixpkgs>.

##### lib.fileset.empty

The empty fileset. It can be useful as a default value or as starting accumulator for a folding operation. Type empty :: FileSet Located at lib/fileset/default.nix:1019 in <nixpkgs>.

##### lib.fileset.isFileset

Tests whether a given value is a fileset, or can be used in place of a fileset. Inputs value The value to test Type isFileset :: Any -> Bool Examples Example 249. lib.fileset.isFileset usage example isFileset ./. => true isFileset (unions [ ]) => true isFileset 1 => false Located at lib/fileset/default.nix:1053 in <nixpkgs>.

##### lib.sources.commitIdFromGitRepo

Get the commit id of a git repo. Inputs path 1. Function argument Examples Example 250. commitIdFromGitRepo usage example commitIdFromGitRepo <nixpkgs/.git> Located at lib/sources.nix:514 in <nixpkgs>.

##### lib.sources.cleanSource

Filters a source tree removing version control files and directories using cleanSourceFilter. Inputs src 1. Function argument Examples Example 251. cleanSource usage example cleanSource ./. Located at lib/sources.nix:516 in <nixpkgs>.

##### lib.sources.cleanSourceWith

Like builtins.filterSource, except it will compose with itself, allowing you to chain multiple calls together without any intermediate copies being put in the nix store. Examples Example 252. cleanSourceWith usage example lib.cleanSourceWith { filter = f; src = lib.cleanSourceWith { filter = g; src = ./.; }; } # Succeeds! builtins.filterSource f (builtins.filterSource g ./.) # Fails! Located at lib/sources.nix:517 in <nixpkgs>.

##### lib.sources.cleanSourceFilter

A basic filter for cleanSourceWith that removes directories of version control system, backup files (*~) and some generated files. Inputs name 1. Function argument type 2. Function argument Located at lib/sources.nix:518 in <nixpkgs>.

##### lib.sources.sourceByRegex

Filter sources by a list of regular expressions. Inputs src 1. Function argument regexes 2. Function argument Examples Example 253. sourceByRegex usage example src = sourceByRegex ./my-subproject [".*\.py$" "^database.sql$"] Located at lib/sources.nix:527 in <nixpkgs>.

##### lib.sources.sourceFilesBySuffices

Get all files ending with the specified suffices from the given source directory or its descendants, omitting files that do not match any suffix. The result of the example below will include files like ./dir/module.c and ./dir/subdir/doc.xml if present. Inputs src Path or source containing the files to be returned exts A list of file suffix strings Type sourceLike -> [String] -> Source Examples Example 254. sourceFilesBySuffices usage example sourceFilesBySuffices ./. [ ".xml" ".c" ] Located at lib/sources.nix:528 in <nixpkgs>.

##### lib.sources.trace

Add logging to a source, for troubleshooting the filtering behavior. Inputs src Source to debug. The returned source will behave like this source, but also log its filter invocations. Type sources.trace :: sourceLike -> Source Located at lib/sources.nix:530 in <nixpkgs>.

##### lib.cli.toGNUCommandLineShell

Automatically convert an attribute set to command-line options. This helps protect against malformed command lines and also to reduce boilerplate related to command-line construction for simple use cases. toGNUCommandLineShell returns an escaped shell string. Inputs options How to format the arguments, see toGNUCommandLine attrs The attributes to transform into arguments. Examples Example 255. lib.cli.toGNUCommandLineShell usage example cli.toGNUCommandLineShell {} { data = builtins.toJSON { id = 0; }; X = "PUT"; retry = 3; retry-delay = null; url = [ "https://example.com/foo" "https://example.com/bar" ]; silent = false; verbose = true; } => "'-X' 'PUT' '--data' '{\"id\":0}' '--retry' '3' '--url' 'https://example.com/foo' '--url' 'https://example.com/bar' '--verbose'"; Located at lib/cli.nix:42 in <nixpkgs>.

##### lib.cli.toGNUCommandLine

Automatically convert an attribute set to a list of command-line options. toGNUCommandLine returns a list of string arguments. Inputs options How to format the arguments, see below. attrs The attributes to transform into arguments. Options mkOptionName How to string-format the option name; By default one character is a short option (-), more than one characters a long option (--). mkBool How to format a boolean value to a command list; By default it’s a flag option (only the option name if true, left out completely if false). mkList How to format a list value to a command list; By default the option name is repeated for each value and mkOption is applied to the values themselves. mkOption How to format any remaining value to a command list; On the toplevel, booleans and lists are handled by mkBool and mkList, though they can still appear as values of a list. By default, everything is printed verbatim and complex types are forbidden (lists, attrsets, functions). null values are omitted. optionValueSeparator How to separate an option from its flag; By default, there is no separator, so option -c and value 5 would become [“-c” “5”]. This is useful if the command requires equals, for example, -c=5. Examples Example 256. lib.cli.toGNUCommandLine usage example cli.toGNUCommandLine {} { data = builtins.toJSON { id = 0; }; X = "PUT"; retry = 3; retry-delay = null; url = [ "https://example.com/foo" "https://example.com/bar" ]; silent = false; verbose = true; } => [ "-X" "PUT" "--data" "{\"id\":0}" "--retry" "3" "--url" "https://example.com/foo" "--url" "https://example.com/bar" "--verbose" ] Located at lib/cli.nix:118 in <nixpkgs>.

##### lib.cli.toCommandLineShellGNU

Converts the given attributes into a single shell-escaped command-line string. Similar to toCommandLineGNU, but returns a single escaped string instead of an array of arguments. For further reference see: lib.cli.toCommandLineGNU Located at lib/cli.nix:163 in <nixpkgs>.

##### lib.cli.toCommandLineGNU

Converts an attribute set into a list of GNU-style command line options. toCommandLineGNU returns a list of string arguments. Inputs options Options, see below. attrs The attributes to transform into arguments. Options isLong A function that determines whether an option is long or short. explicitBool Whether or not boolean option arguments should be formatted explicitly. formatArg A function that turns the option argument into a string. Examples Example 257. lib.cli.toCommandLineGNU usage example lib.cli.toCommandLineGNU {} { v = true; verbose = [true true false null]; i = ".bak"; testsuite = ["unit" "integration"]; e = ["s/a/b/" "s/b/c/"]; n = false; data = builtins.toJSON {id = 0;}; } => [ "--data={\"id\":0}" "-es/a/b/" "-es/b/c/" "-i.bak" "--testsuite=unit" "--testsuite=integration" "-v" "--verbose" "--verbose" ] Located at lib/cli.nix:225 in <nixpkgs>.

##### lib.cli.toCommandLineShell

Converts the given attributes into a single shell-escaped command-line string. Similar to toCommandLine, but returns a single escaped string instead of an array of arguments. For further reference see: lib.cli.toCommandLine Located at lib/cli.nix:245 in <nixpkgs>.

##### lib.cli.toCommandLine

Converts an attribute set into a list of command line options. toCommandLine returns a list of string arguments. Inputs optionFormat The option format that describes how options and their arguments should be formatted. attrs The attributes to transform into arguments. Examples Example 258. lib.cli.toCommandLine usage example let optionFormat = optionName: { option = "-${optionName}"; sep = "="; explicitBool = true; }; in lib.cli.toCommandLine optionFormat { v = true; verbose = [true true false null]; i = ".bak"; testsuite = ["unit" "integration"]; e = ["s/a/b/" "s/b/c/"]; n = false; data = builtins.toJSON {id = 0;}; } => [ "-data={\"id\":0}" "-e=s/a/b/" "-e=s/b/c/" "-i=.bak" "-n=false" "-testsuite=unit" "-testsuite=integration" "-v=true" "-verbose=true" "-verbose=true" "-verbose=false" ] Located at lib/cli.nix:300 in <nixpkgs>.

#### lib.generators: functions that create file formats from nix data structures

Functions that generate widespread file formats from nix data structures. They all follow a similar interface: generator { config-attrs } data config-attrs are “holes” in the generators with sensible default implementations that can be overwritten. The default implementations are mostly generators themselves, called with their respective default values; they can be reused. Tests can be found in ./tests/misc.nix Further Documentation can be found here.

##### lib.generators.mkValueStringDefault

Convert a value to a sensible default string representation. The builtin toString function has some strange defaults, suitable for bash scripts but not much else. Inputs Options Empty set, there may be configuration options in the future v 2. Function argument Located at lib/generators.nix:92 in <nixpkgs>.

##### lib.generators.mkKeyValueDefault

Generate a line of key k and value v, separated by character sep. If sep appears in k, it is escaped. Helper for synaxes with different separators. mkValueString specifies how values should be formatted. mkKeyValueDefault {} ":" "f:oo" "bar" > "f\:oo:bar" Inputs Structured function argument mkValueString (optional, default: mkValueStringDefault {}) Function to convert values to strings sep 2. Function argument k 3. Function argument v 4. Function argument Located at lib/generators.nix:161 in <nixpkgs>.

##### lib.generators.toKeyValue

Generate a key-value-style config file from an attrset. Inputs Structured function argument mkKeyValue (optional, default: mkKeyValueDefault {} "=") format a setting line from key and value listsAsDuplicateKeys (optional, default: false) allow lists as values for duplicate keys indent (optional, default: "") Initial indentation level Located at lib/generators.nix:186 in <nixpkgs>.

##### lib.generators.toINI

Generate an INI-style config file from an attrset of sections to an attrset of key-value pairs. Inputs Structured function argument mkSectionName (optional, default: (name: escape [ "[" "]" ] name)) apply transformations (e.g. escapes) to section names mkKeyValue (optional, default: {} "=") format a setting line from key and value listsAsDuplicateKeys (optional, default: false) allow lists as values for duplicate keys Examples Example 259. lib.generators.toINI usage example generators.toINI {} { foo = { hi = "${pkgs.hello}"; ciao = "bar"; }; baz = { "also, integers" = 42; }; } > [baz] > also, integers=42 > > [foo] > ciao=bar > hi=/nix/store/y93qql1p5ggfnaqjjqhxcw0vqw95rlz0-hello-2.10 The mk* configuration attributes can generically change the way sections and key-value strings are generated. For more examples see the test cases in ./tests/misc.nix. Located at lib/generators.nix:244 in <nixpkgs>.

##### lib.generators.toINIWithGlobalSection

Generate an INI-style config file from an attrset specifying the global section (no header), and an attrset of sections to an attrset of key-value pairs. Inputs 1. Structured function argument mkSectionName (optional, default: (name: escape [ "[" "]" ] name)) apply transformations (e.g. escapes) to section names mkKeyValue (optional, default: {} "=") format a setting line from key and value listsAsDuplicateKeys (optional, default: false) allow lists as values for duplicate keys 2. Structured function argument globalSection (required) global section key-value pairs sections (optional, default: {}) attrset of sections to key-value pairs Examples Example 260. lib.generators.toINIWithGlobalSection usage example generators.toINIWithGlobalSection {} { globalSection = { someGlobalKey = "hi"; }; sections = { foo = { hi = "${pkgs.hello}"; ciao = "bar"; }; baz = { "also, integers" = 42; }; } > someGlobalKey=hi > > [baz] > also, integers=42 > > [foo] > ciao=bar > hi=/nix/store/y93qql1p5ggfnaqjjqhxcw0vqw95rlz0-hello-2.10 The mk* configuration attributes can generically change the way sections and key-value strings are generated. For more examples see the test cases in ./tests/misc.nix. If you don’t need a global section, you can also use generators.toINI directly, which only takes the part in sections. Located at lib/generators.nix:327 in <nixpkgs>.

##### lib.generators.toGitINI

Generate a git-config file from an attrset. It has two major differences from the regular INI format: values are indented with tabs sections can have sub-sections Further: https://git-scm.com/docs/git-config#EXAMPLES Examples Example 261. lib.generators.toGitINI usage example generators.toGitINI { url."ssh://git@github.com/".insteadOf = "https://github.com"; user.name = "edolstra"; } > [url "ssh://git@github.com/"] > insteadOf = "https://github.com" > > [user] > name = "edolstra" Inputs attrs Key-value pairs to be converted to a git-config file. See: https://git-scm.com/docs/git-config#_variables for possible values. Located at lib/generators.nix:381 in <nixpkgs>.

##### lib.generators.mkDconfKeyValue

mkKeyValueDefault wrapper that handles dconf INI quirks. The main differences of the format is that it requires strings to be quoted. Located at lib/generators.nix:436 in <nixpkgs>.

##### lib.generators.toDconfINI

Generates INI in dconf keyfile style. See https://help.gnome.org/admin/system-admin-guide/stable/dconf-keyfiles.html.en for details. Located at lib/generators.nix:442 in <nixpkgs>.

##### lib.generators.withRecursion

Recurses through a Value limited to a certain depth. (depthLimit) If the depth is exceeded, an error is thrown, unless throwOnDepthLimit is set to false. Inputs Structured function argument depthLimit (required) If this option is not null, the given value will stop evaluating at a certain depth throwOnDepthLimit (optional, default: true) If this option is true, an error will be thrown, if a certain given depth is exceeded Value The value to be evaluated recursively Located at lib/generators.nix:462 in <nixpkgs>.

##### lib.generators.toPretty

Pretty print a value, akin to builtins.trace. Should probably be a builtin as well. The pretty-printed string should be suitable for rendering default values in the NixOS manual. In particular, it should be as close to a valid Nix expression as possible. Inputs Structured function argument allowPrettyValues If this option is true, attrsets like { __pretty = fn; val = …; } will use fn to convert val to a pretty printed representation. (This means fn is type Val -> String.) multiline If this option is true, the output is indented with newlines for attribute sets and lists indent Initial indentation level Value The value to be pretty printed Located at lib/generators.nix:523 in <nixpkgs>.

##### lib.generators.toPlist

Translate a simple Nix expression to Plist notation. Inputs Structured function argument escape (optional, default: false) If this option is true, XML special characters are escaped in string values and keys Value The value to be converted to Plist Located at lib/generators.nix:627 in <nixpkgs>.

##### lib.generators.toDhall

Translate a simple Nix expression to Dhall notation. Note that integers are translated to Integer and never the Natural type. Inputs Options Empty set, there may be configuration options in the future Value The value to be converted to Dhall Located at lib/generators.nix:728 in <nixpkgs>.

##### lib.generators.toLua

Translate a simple Nix expression to Lua representation with occasional Lua-inlines that can be constructed by mkLuaInline function. Configuration: multiline - by default is true which results in indented block-like view. indent - initial indent. asBindings - by default generate single value, but with this use attrset to set global vars. Attention: Regardless of multiline parameter there is no trailing newline. Inputs Structured function argument multiline (optional, default: true) If this option is true, the output is indented with newlines for attribute sets and lists indent (optional, default: "") Initial indentation level asBindings (optional, default: false) Interpret as variable bindings Value The value to be converted to Lua Type toLua :: AttrSet -> Any -> String Examples Example 262. lib.generators.toLua usage example generators.toLua {} { cmd = [ "typescript-language-server" "--stdio" ]; settings.workspace.library = mkLuaInline ''vim.api.nvim_get_runtime_file("", true)''; } -> { ["cmd"] = { "typescript-language-server", "--stdio" }, ["settings"] = { ["workspace"] = { ["library"] = (vim.api.nvim_get_runtime_file("", true)) } } } Located at lib/generators.nix:810 in <nixpkgs>.

##### lib.generators.mkLuaInline

Mark string as Lua expression to be inlined when processed by toLua. Inputs expr 1. Function argument Type mkLuaInline :: String -> AttrSet Located at lib/generators.nix:885 in <nixpkgs>.

#### lib.gvariant: GVariant formatted string serialization functions

A partial and basic implementation of GVariant formatted strings. See GVariant Format Strings for details.

#### Warning

This API is not considered fully stable and it might therefore change in backwards incompatible ways without prior notice.

##### lib.gvariant.isGVariant

Check if a value is a GVariant value Inputs v value to check Type isGVariant :: Any -> Bool Located at lib/gvariant.nix:69 in <nixpkgs>.

##### lib.gvariant.mkValue

Returns the GVariant value that most closely matches the given Nix value. If no GVariant value can be found unambiguously then error is thrown. Inputs v 1. Function argument Type mkValue :: Any -> gvariant Located at lib/gvariant.nix:134 in <nixpkgs>.

##### lib.gvariant.mkArray

Returns the GVariant array from the given type of the elements and a Nix list. Inputs elems 1. Function argument Type mkArray :: [Any] -> gvariant Examples Example 263. lib.gvariant.mkArray usage example # Creating a string array lib.gvariant.mkArray [ "a" "b" "c" ] Located at lib/gvariant.nix:191 in <nixpkgs>.

##### lib.gvariant.mkEmptyArray

Returns the GVariant array from the given empty Nix list. Inputs elemType 1. Function argument Type mkEmptyArray :: gvariant.type -> gvariant Examples Example 264. lib.gvariant.mkEmptyArray usage example # Creating an empty string array lib.gvariant.mkEmptyArray (lib.gvariant.type.string) Located at lib/gvariant.nix:230 in <nixpkgs>.

##### lib.gvariant.mkVariant

Returns the GVariant variant from the given Nix value. Variants are containers of different GVariant type. Inputs elem 1. Function argument Type mkVariant :: Any -> gvariant Examples Example 265. lib.gvariant.mkVariant usage example lib.gvariant.mkArray [ (lib.gvariant.mkVariant "a string") (lib.gvariant.mkVariant (lib.gvariant.mkInt32 1)) ] Located at lib/gvariant.nix:266 in <nixpkgs>.

##### lib.gvariant.mkDictionaryEntry

Returns the GVariant dictionary entry from the given key and value. Inputs name The key of the entry value The value of the entry Type mkDictionaryEntry :: String -> Any -> gvariant Examples Example 266. lib.gvariant.mkDictionaryEntry usage example # A dictionary describing an Epiphany’s search provider [ (lib.gvariant.mkDictionaryEntry "url" (lib.gvariant.mkVariant "https://duckduckgo.com/?q=%s&t=epiphany")) (lib.gvariant.mkDictionaryEntry "bang" (lib.gvariant.mkVariant "!d")) (lib.gvariant.mkDictionaryEntry "name" (lib.gvariant.mkVariant "DuckDuckGo")) ] Located at lib/gvariant.nix:310 in <nixpkgs>.

##### lib.gvariant.mkMaybe

Returns the GVariant maybe from the given element type. Inputs elemType 1. Function argument elem 2. Function argument Type mkMaybe :: gvariant.type -> Any -> gvariant Located at lib/gvariant.nix:341 in <nixpkgs>.

##### lib.gvariant.mkNothing

Returns the GVariant nothing from the given element type. Inputs elemType 1. Function argument Type mkNothing :: gvariant.type -> gvariant Located at lib/gvariant.nix:364 in <nixpkgs>.

##### lib.gvariant.mkJust

Returns the GVariant just from the given Nix value. Inputs elem 1. Function argument Type mkJust :: Any -> gvariant Located at lib/gvariant.nix:381 in <nixpkgs>.

##### lib.gvariant.mkTuple

Returns the GVariant tuple from the given Nix list. Inputs elems 1. Function argument Type mkTuple :: [Any] -> gvariant Located at lib/gvariant.nix:403 in <nixpkgs>.

##### lib.gvariant.mkBoolean

Returns the GVariant boolean from the given Nix bool value. Inputs v 1. Function argument Type mkBoolean :: Bool -> gvariant Located at lib/gvariant.nix:429 in <nixpkgs>.

##### lib.gvariant.mkString

Returns the GVariant string from the given Nix string value. Inputs v 1. Function argument Type mkString :: String -> gvariant Located at lib/gvariant.nix:451 in <nixpkgs>.

##### lib.gvariant.mkObjectpath

Returns the GVariant object path from the given Nix string value. Inputs v 1. Function argument Type mkObjectpath :: String -> gvariant Located at lib/gvariant.nix:476 in <nixpkgs>.

##### lib.gvariant.mkUchar

Returns the GVariant uchar from the given Nix int value. Type mkUchar :: Int -> gvariant Located at lib/gvariant.nix:492 in <nixpkgs>.

##### lib.gvariant.mkInt16

Returns the GVariant int16 from the given Nix int value. Type mkInt16 :: Int -> gvariant Located at lib/gvariant.nix:503 in <nixpkgs>.

##### lib.gvariant.mkUint16

Returns the GVariant uint16 from the given Nix int value. Type mkUint16 :: Int -> gvariant Located at lib/gvariant.nix:514 in <nixpkgs>.

##### lib.gvariant.mkInt32

Returns the GVariant int32 from the given Nix int value. Inputs v 1. Function argument Type mkInt32 :: Int -> gvariant Located at lib/gvariant.nix:531 in <nixpkgs>.

##### lib.gvariant.mkUint32

Returns the GVariant uint32 from the given Nix int value. Type mkUint32 :: Int -> gvariant Located at lib/gvariant.nix:547 in <nixpkgs>.

##### lib.gvariant.mkInt64

Returns the GVariant int64 from the given Nix int value. Type mkInt64 :: Int -> gvariant Located at lib/gvariant.nix:558 in <nixpkgs>.

##### lib.gvariant.mkUint64

Returns the GVariant uint64 from the given Nix int value. Type mkUint64 :: Int -> gvariant Located at lib/gvariant.nix:569 in <nixpkgs>.

##### lib.gvariant.mkDouble

Returns the GVariant double from the given Nix float value. Inputs v 1. Function argument Type mkDouble :: Float -> gvariant Located at lib/gvariant.nix:586 in <nixpkgs>.

##### lib.customisation.overrideDerivation

overrideDerivation drv f takes a derivation (i.e., the result of a call to the builtin function derivation) and returns a new derivation in which the attributes of the original are overridden according to the function f. The function f is called with the original derivation attributes. overrideDerivation allows certain “ad-hoc” customisation scenarios (e.g. in ~/.config/nixpkgs/config.nix). For instance, if you want to “patch” the derivation returned by a package function in Nixpkgs to build another version than what the function itself provides. For another application, see build-support/vm, where this function is used to build arbitrary derivations inside a QEMU virtual machine. Note that in order to preserve evaluation errors, the new derivation’s outPath depends on the old one’s, which means that this function cannot be used in circular situations when the old derivation also depends on the new one. You should in general prefer drv.overrideAttrs over this function; see the nixpkgs manual for more information on overriding. Inputs drv 1. Function argument f 2. Function argument Type overrideDerivation :: Derivation -> ( Derivation -> AttrSet ) -> Derivation Examples Example 267. lib.customisation.overrideDerivation usage example mySed = overrideDerivation pkgs.gnused (oldAttrs: { name = "sed-4.2.2-pre"; src = fetchurl { url = ftp://alpha.gnu.org/gnu/sed/sed-4.2.2-pre.tar.bz2; hash = "sha256-MxBJRcM2rYzQYwJ5XKxhXTQByvSg5jZc5cSHEZoB2IY="; }; patches = []; }); Located at lib/customisation.nix:100 in <nixpkgs>.

##### lib.customisation.makeOverridable

makeOverridable takes a function from attribute set to attribute set and injects override attribute which can be used to override arguments of the function. Please refer to documentation on <pkg>.overrideDerivation to learn about overrideDerivation and caveats related to its use. Inputs f 1. Function argument Type makeOverridable :: (AttrSet -> a) -> AttrSet -> a Examples Example 268. lib.customisation.makeOverridable usage example nix-repl> x = {a, b}: { result = a + b; } nix-repl> y = lib.makeOverridable x { a = 1; b = 2; } nix-repl> y { override = «lambda»; overrideDerivation = «lambda»; result = 3; } nix-repl> y.override { a = 10; } { override = «lambda»; overrideDerivation = «lambda»; result = 12; } Located at lib/customisation.nix:154 in <nixpkgs>.

##### lib.customisation.callPackageWith

Call the package function in the file fn with the required arguments automatically. The function is called with the arguments args, but any missing arguments are obtained from autoArgs. This function is intended to be partially parameterised, e.g., callPackage = callPackageWith pkgs; pkgs = { libfoo = callPackage ./foo.nix { }; libbar = callPackage ./bar.nix { }; }; If the libbar function expects an argument named libfoo, it is automatically passed as an argument. Overrides or missing arguments can be supplied in args, e.g. libbar = callPackage ./bar.nix { libfoo = null; enableX11 = true; }; Inputs autoArgs 1. Function argument fn 2. Function argument args 3. Function argument Type callPackageWith :: AttrSet -> ((AttrSet -> a) | Path) -> AttrSet -> a Located at lib/customisation.nix:258 in <nixpkgs>.

##### lib.customisation.callPackagesWith

Like callPackage, but for a function that returns an attribute set of derivations. The override function is added to the individual attributes. Inputs autoArgs 1. Function argument fn 2. Function argument args 3. Function argument Type callPackagesWith :: AttrSet -> ((AttrSet -> AttrSet) | Path) -> AttrSet -> AttrSet Located at lib/customisation.nix:350 in <nixpkgs>.

##### lib.customisation.extendDerivation

Add attributes to each output of a derivation without changing the derivation itself and check a given condition when evaluating. Inputs condition 1. Function argument passthru 2. Function argument drv 3. Function argument Type extendDerivation :: Bool -> Any -> Derivation -> Derivation Located at lib/customisation.nix:393 in <nixpkgs>.

##### lib.customisation.hydraJob

Strip a derivation of all non-essential attributes, returning only those needed by hydra-eval-jobs. Also strictly evaluate the result to ensure that there are no thunks kept alive to prevent garbage collection. Inputs drv 1. Function argument Type hydraJob :: (Derivation | Null) -> (Derivation | Null) Located at lib/customisation.nix:455 in <nixpkgs>.

##### lib.customisation.makeScope

Make an attribute set (a “scope”) from functions that take arguments from that same attribute set. See Example 269 for how to use it. Inputs newScope (AttrSet -> ((AttrSet -> a) | Path) -> AttrSet -> a) A function that takes an attribute set attrs and returns what ends up as callPackage in the output. Typical values are callPackageWith or the output attribute newScope. f (AttrSet -> AttrSet) A function that takes an attribute set as returned by makeScope newScope f (a “scope”) and returns any attribute set. This function is used to compute the fixpoint of the resulting scope using callPackage. Its argument is the lazily evaluated reference to the value of that fixpoint, and is typically called self or final. See Example 269 for how to use it. See the section called “lib.fixedPoints: explicit recursion functions” for details on fixpoint computation. Output makeScope returns an attribute set of a form called scope, which also contains the final attributes produced by f: scope :: { callPackage :: ((AttrSet -> a) | Path) -> AttrSet -> a newScope = AttrSet -> scope overrideScope = (scope -> scope -> AttrSet) -> scope packages :: AttrSet -> AttrSet } callPackage (((AttrSet -> a) | Path) -> AttrSet -> a) A function that Takes a function p, or a path to a Nix file that contains a function p, which takes an attribute set and returns value of arbitrary type a, Takes an attribute set args with explicit attributes to pass to p, Calls f with attributes from the original attribute set attrs passed to newScope updated with args, i.e. attrs // args, if they match the attributes in the argument of p. All such functions p will be called with the same value for attrs. See Example 270 for how to use it. newScope (AttrSet -> scope) Takes an attribute set attrs and returns a scope that extends the original scope. overrideScope ((scope -> scope -> AttrSet) -> scope) Takes a function g of the form final: prev: { # attributes } to act as an overlay on f, and returns a new scope with values determined by extends g f. See for details. This allows subsequent modification of the final attribute set in a consistent way, i.e. all functions p invoked with callPackage will be called with the modified values. packages (AttrSet -> AttrSet) The value of the argument f to makeScope. final attributes The final values returned by f. Examples Example 269. Create an interdependent package set on top of pkgs The functions in foo.nix and bar.nix can depend on each other, in the sense that foo.nix can contain a function that expects bar as an attribute in its argument. let pkgs = import <nixpkgs> { }; in pkgs.lib.makeScope pkgs.newScope (self: { foo = self.callPackage ./foo.nix { }; bar = self.callPackage ./bar.nix { }; }) evaluates to { callPackage = «lambda»; newScope = «lambda»; overrideScope = «lambda»; packages = «lambda»; foo = «derivation»; bar = «derivation»; } Example 270. Using callPackage from a scope let pkgs = import <nixpkgs> { }; inherit (pkgs) lib; scope = lib.makeScope lib.callPackageWith (self: { a = 1; b = 2; }); three = scope.callPackage ({ a, b }: a + b) { }; four = scope.callPackage ({ a, b }: a + b) { a = 2; }; in [ three four ] evaluates to [ 3 4 ] Type makeScope :: (AttrSet -> ((AttrSet -> a) | Path) -> AttrSet -> a) -> (AttrSet -> AttrSet) -> scope Located at lib/customisation.nix:615 in <nixpkgs>.

##### lib.customisation.makeScopeWithSplicing

backward compatibility with old uncurried form; deprecated Inputs splicePackages 1. Function argument newScope 2. Function argument otherSplices 3. Function argument keep 4. Function argument extra 5. Function argument f 6. Function argument Located at lib/customisation.nix:656 in <nixpkgs>.

##### lib.customisation.makeScopeWithSplicing'

Like makeScope, but aims to support cross compilation. It’s still ugly, but hopefully it helps a little bit. Type makeScopeWithSplicing' :: { splicePackages :: Splice -> AttrSet , newScope :: AttrSet -> ((AttrSet -> a) | Path) -> AttrSet -> a } -> { otherSplices :: Splice, keep :: AttrSet -> AttrSet, extra :: AttrSet -> AttrSet } -> AttrSet Splice :: { pkgsBuildBuild :: AttrSet , pkgsBuildHost :: AttrSet , pkgsBuildTarget :: AttrSet , pkgsHostHost :: AttrSet , pkgsHostTarget :: AttrSet , pkgsTargetTarget :: AttrSet } Located at lib/customisation.nix:691 in <nixpkgs>.

##### lib.customisation.extendMkDerivation

Define a mkDerivation-like function based on another mkDerivation-like function. stdenv.mkDerivation gives access to its final set of derivation attributes when it is passed a function, or when it is passed an overlay-style function in overrideAttrs. Instead of composing new stdenv.mkDerivation-like build helpers using normal function composition, extendMkDerivation makes sure that the returned build helper supports such first class recursion like mkDerivation does. extendMkDerivation takes an extra attribute set to configure its behaviour. One can optionally specify transformDrv to specify a function to apply to the result derivation, or inheritFunctionArgs to decide whether to inherit the __functionArgs from the base build helper. Inputs extendMkDerivation-specific configurations constructDrv (required) Base build helper, the mkDerivation-like build helper to extend. excludeDrvArgNames (default to [ ]) Argument names not to pass from the input fixed-point arguments to constructDrv. It doesn’t apply to the updating arguments returned by extendDrvArgs. excludeFunctionArgNames (default to [ ]) __functionArgs attribute names to remove from the result build helper. excludeFunctionArgNames is useful for argument deprecation while avoiding ellipses. extendDrvArgs (required) An extension (overlay) of the argument set, like the one taken by overrideAttrs but applied before passing to constructDrv. inheritFunctionArgs (default to true) Whether to inherit __functionArgs from the base build helper. Set inheritFunctionArgs to false when extendDrvArgs’s args set pattern does not contain an ellipsis. transformDrv (default to lib.id) Function to apply to the result derivation. Type extendMkDerivation :: { constructDrv :: ((FixedPointArgs | AttrSet) -> a) excludeDrvArgNames :: [ String ], excludeFunctionArgNames :: [ String ] extendDrvArgs :: (AttrSet -> AttrSet -> AttrSet) inheritFunctionArgs :: Bool, transformDrv :: a -> a, } -> (FixedPointArgs | AttrSet) -> a FixedPointArgs = AttrSet -> AttrSet a = Derivation when defining a build helper Examples Example 271. lib.customisation.extendMkDerivation usage example mkLocalDerivation = lib.extendMkDerivation { constructDrv = pkgs.stdenv.mkDerivation; excludeDrvArgNames = [ "specialArg" ]; extendDrvArgs = finalAttrs: args@{ preferLocalBuild ? true, allowSubstitute ? false, specialArg ? (_: false), ... }: { inherit preferLocalBuild allowSubstitute; passthru = { inherit specialArg; } // args.passthru or { }; }; } mkLocalDerivation.__functionArgs => { allowSubstitute = true; preferLocalBuild = true; specialArg = true; } mkLocalDerivation { inherit (pkgs.hello) pname version src; specialArg = _: false; } => «derivation /nix/store/xirl67m60ahg6jmzicx43a81g635g8z8-hello-2.12.1.drv» mkLocalDerivation (finalAttrs: { inherit (pkgs.hello) pname version src; specialArg = _: false; }) => «derivation /nix/store/xirl67m60ahg6jmzicx43a81g635g8z8-hello-2.12.1.drv» (mkLocalDerivation (finalAttrs: { inherit (pkgs.hello) pname version src; passthru = { foo = "a"; bar = "${finalAttrs.passthru.foo}b"; }; })).bar => "ab"
