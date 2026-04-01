---
title: "Nixpkgs lib"
source: index.html
---
#### lib.debug: debugging functions

Collection of functions useful for debugging broken nix expressions. trace-like functions take two values, print the first to stderr and return the second. traceVal-like functions take one argument which both printed and returned. traceSeq-like functions fully evaluate their traced value before printing (not just to “weak head normal form” like trace does by default). Functions that end in -Fn take an additional function as their first argument, which is applied to the traced value before it is printed.

##### lib.debug.traceIf

Conditionally trace the supplied message, based on a predicate. Inputs pred Predicate to check msg Message that should be traced x Value to return Type traceIf :: bool -> string -> a -> a Examples Example 203. lib.debug.traceIf usage example traceIf true "hello" 3 trace: hello => 3 Located at lib/debug.nix:74 in <nixpkgs>.

##### lib.debug.traceValFn

Trace the supplied value after applying a function to it, and return the original value. Inputs f Function to apply x Value to trace and return Type traceValFn :: (a -> b) -> a -> a Examples Example 204. lib.debug.traceValFn usage example traceValFn (v: "mystring ${v}") "foo" trace: mystring foo => "foo" Located at lib/debug.nix:110 in <nixpkgs>.

##### lib.debug.traceVal

Trace the supplied value and return it. Inputs x Value to trace and return Type traceVal :: a -> a Examples Example 205. lib.debug.traceVal usage example traceVal 42 # trace: 42 => 42 Located at lib/debug.nix:139 in <nixpkgs>.

##### lib.debug.traceSeq

builtins.trace, but the value is builtins.deepSeqed first. Inputs x The value to trace y The value to return Type traceSeq :: a -> b -> b Examples Example 206. lib.debug.traceSeq usage example trace { a.b.c = 3; } null trace: { a = <CODE>; } => null traceSeq { a.b.c = 3; } null trace: { a = { b = { c = 3; }; }; } => null Located at lib/debug.nix:175 in <nixpkgs>.

##### lib.debug.traceSeqN

Like traceSeq, but only evaluate down to depth n. This is very useful because lots of traceSeq usages lead to an infinite recursion. Inputs depth 1. Function argument x 2. Function argument y 3. Function argument Type traceSeqN :: Int -> a -> b -> b Examples Example 207. lib.debug.traceSeqN usage example traceSeqN 2 { a.b.c = 3; } null trace: { a = { b = {…}; }; } => null Located at lib/debug.nix:214 in <nixpkgs>.

##### lib.debug.traceValSeqFn

A combination of traceVal and traceSeq that applies a provided function to the value to be traced after deepSeqing it. Inputs f Function to apply v Value to trace Located at lib/debug.nix:257 in <nixpkgs>.

##### lib.debug.traceValSeq

A combination of traceVal and traceSeq. Inputs v Value to trace Located at lib/debug.nix:268 in <nixpkgs>.

##### lib.debug.traceValSeqNFn

A combination of traceVal and traceSeqN that applies a provided function to the value to be traced. Inputs f Function to apply depth 2. Function argument v Value to trace Located at lib/debug.nix:288 in <nixpkgs>.

##### lib.debug.traceValSeqN

A combination of traceVal and traceSeqN. Inputs depth 1. Function argument v Value to trace Located at lib/debug.nix:305 in <nixpkgs>.

##### lib.debug.traceFnSeqN

Trace the input and output of a function f named name, both down to depth. This is useful for adding around a function call, to see the before/after of values as they are transformed. Inputs depth 1. Function argument name 2. Function argument f 3. Function argument v 4. Function argument Examples Example 208. lib.debug.traceFnSeqN usage example traceFnSeqN 2 "id" (x: x) { a.b.c = 3; } trace: { fn = "id"; from = { a.b = {…}; }; to = { a.b = {…}; }; } => { a.b.c = 3; } Located at lib/debug.nix:344 in <nixpkgs>.

##### lib.debug.runTests

Evaluates a set of tests. A test is an attribute set {expr, expected}, denoting an expression and its expected result. The result is a list of failed tests, each represented as {name, expected, result}, expected What was passed as expected result The actual result of the test Used for regression testing of the functions in lib; see tests.nix for more examples. Important: Only attributes that start with test are executed. If you want to run only a subset of the tests add the attribute tests = ["testName"]; Inputs tests Tests to run Type runTests :: { tests = [ String ]; ${testName} :: { expr :: a; expected :: a; }; } -> [ { name :: String; expected :: a; result :: a; } ] Examples Example 209. lib.debug.runTests usage example runTests { testAndOk = { expr = lib.and true false; expected = false; }; testAndFail = { expr = lib.and true false; expected = true; }; } -> [ { name = "testAndFail"; expected = true; result = false; } ] Located at lib/debug.nix:431 in <nixpkgs>.

##### lib.debug.throwTestFailures

Pretty-print a list of test failures. This takes an attribute set containing failures (a list of test failures produced by runTests) and pretty-prints each failing test, before throwing an error containing the raw test data as JSON. If the input list is empty, null is returned. Inputs failures A list of test failures (produced runTests), each containing name, expected, and result attributes. Type throwTestFailures :: { failures = [ { name :: String; expected :: a; result :: a; } ]; } -> null Examples Example 210. lib.debug.throwTestFailures usage example throwTestFailures { failures = [ { name = "testDerivation"; expected = derivation { name = "a"; builder = "bash"; system = "x86_64-linux"; }; result = derivation { name = "b"; builder = "bash"; system = "x86_64-linux"; }; } ]; } -> trace: FAIL testDerivation: Expected: <derivation a> Result: <derivation b> error: … while evaluating the file '...': … caused by explicit throw at /nix/store/.../lib/debug.nix:528:7: 527| in 528| throw ( | ^ 529| builtins.seq traceFailures ( error: 1 tests failed: - testDerivation [{"expected":"/nix/store/xh7kyqp69mxkwspmi81a94m9xx74r8dr-a","name":"testDerivation","result":"/nix/store/503l84nir4zw57d1shfhai25bxxn16c6-b"}] null Located at lib/debug.nix:538 in <nixpkgs>.

##### lib.debug.testAllTrue

Create a test assuming that list elements are true. Inputs expr 1. Function argument Examples Example 211. lib.debug.testAllTrue usage example { testX = allTrue [ true ]; } Located at lib/debug.nix:601 in <nixpkgs>.

#### lib.options: NixOS / nixpkgs option handling

Module System option handling.

##### lib.options.isOption

Returns true when the given argument a is an option Inputs a Any value to check whether it is an option Examples Example 212. lib.options.isOption usage example isOption 1 // => false isOption (mkOption {}) // => true Type isOption :: a -> Bool Located at lib/options.nix:77 in <nixpkgs>.

##### lib.options.mkOption

Creates an Option attribute set. mkOption accepts an attribute set with the following keys: Inputs Structured attribute set Attribute set containing none or some of the following attributes. default Optional default value used when no definition is given in the configuration. defaultText Substitute for documenting the default, if evaluating the default value during documentation rendering is not possible. Can be any nix value that evaluates. Usage with lib.literalMD or lib.literalExpression is supported example Optional example value used in the manual. Can be any nix value that evaluates. Usage with lib.literalMD or lib.literalExpression is supported description Optional string describing the option. This is required if option documentation is generated. relatedPackages Optional related packages used in the manual (see genRelatedPackages in ../nixos/lib/make-options-doc/default.nix). type Optional option type, providing type-checking and value merging. apply Optional function that converts the option value to something else. internal Optional boolean indicating whether the option is for NixOS developers only. visible Optional, whether the option and/or sub-options show up in the manual. Use false to hide the option and any sub-options from submodules. Use “shallow” to hide only sub-options. Use “transparent” to hide this option, but not its sub-options. Default: true. readOnly Optional boolean indicating whether the option can be set only once. ... (any other attribute) Any other attribute is passed through to the resulting option attribute set. Examples Example 213. lib.options.mkOption usage example mkOption { } // => { _type = "option"; } mkOption { default = "foo"; } // => { _type = "option"; default = "foo"; } Located at lib/options.nix:139 in <nixpkgs>.

##### lib.options.mkEnableOption

Creates an option declaration with a default value of ´false´, and can be defined to ´true´. Inputs name Name for the created option Examples Example 214. lib.options.mkEnableOption usage example # module let eval = lib.evalModules { modules = [ { options.foo.enable = mkEnableOption "foo"; config.foo.enable = true; } ]; }; in eval.config => { foo.enable = true; } Located at lib/options.nix:186 in <nixpkgs>.

##### lib.options.mkPackageOption

Creates an Option attribute set for an option that specifies the package a module should use for some purpose. The package is specified in the third argument under default as a list of strings representing its attribute path in nixpkgs (or another package set). Because of this, you need to pass nixpkgs itself (usually pkgs in a module; alternatively to nixpkgs itself, another package set) as the first argument. If you pass another package set you should set the pkgsText option. This option is used to display the expression for the package set. It is "pkgs" by default. If your expression is complex you should parenthesize it, as the pkgsText argument is usually immediately followed by an attribute lookup (.). The second argument may be either a string or a list of strings. It provides the display name of the package in the description of the generated option (using only the last element if the passed value is a list) and serves as the fallback value for the default argument. To include extra information in the description, pass extraDescription to append arbitrary text to the generated description. You can also pass an example value, either a literal string or an attribute path. The default argument can be omitted if the provided name is an attribute of pkgs (if name is a string) or a valid attribute path in pkgs (if name is a list). You can also set default to just a string in which case it is interpreted as an attribute name (a singleton attribute path, if you will). If you wish to explicitly provide no default, pass null as default. If you want users to be able to set no package, pass nullable = true. In this mode a default = null will not be interpreted as no default and is interpreted literally. Inputs pkgs Package set (an instantiation of nixpkgs such as pkgs in modules or another package set) name Name for the package, shown in option description Structured function argument Attribute set containing the following attributes. nullable Optional whether the package can be null, for example to disable installing a package altogether. Default: false default Optional attribute path where the default package is located. Default: name If omitted will be copied from name example Optional string or an attribute path to use as an example. Default: null extraDescription Optional additional text to include in the option description. Default: "" pkgsText Optional representation of the package set passed as pkgs. Default: "pkgs" Type mkPackageOption :: pkgs -> (string|[string]) -> { nullable? :: bool, default? :: string|[string], example? :: null|string|[string], extraDescription? :: string, pkgsText? :: string } -> option Examples Example 215. lib.options.mkPackageOption usage example mkPackageOption pkgs "hello" { } => { ...; default = pkgs.hello; defaultText = literalExpression "pkgs.hello"; description = "The hello package to use."; type = package; } mkPackageOption pkgs "GHC" { default = [ "ghc" ]; example = "pkgs.haskellPackages.ghc.withPackages (hkgs: [ hkgs.primes ])"; } => { ...; default = pkgs.ghc; defaultText = literalExpression "pkgs.ghc"; description = "The GHC package to use."; example = literalExpression "pkgs.haskellPackages.ghc.withPackages (hkgs: [ hkgs.primes ])"; type = package; } mkPackageOption pkgs [ "python3Packages" "pytorch" ] { extraDescription = "This is an example and doesn't actually do anything."; } => { ...; default = pkgs.python3Packages.pytorch; defaultText = literalExpression "pkgs.python3Packages.pytorch"; description = "The pytorch package to use. This is an example and doesn't actually do anything."; type = package; } mkPackageOption pkgs "nushell" { nullable = true; } => { ...; default = pkgs.nushell; defaultText = literalExpression "pkgs.nushell"; description = "The nushell package to use."; type = nullOr package; } mkPackageOption pkgs "coreutils" { default = null; } => { ...; description = "The coreutils package to use."; type = package; } mkPackageOption pkgs "dbus" { nullable = true; default = null; } => { ...; default = null; description = "The dbus package to use."; type = nullOr package; } mkPackageOption pkgs.javaPackages "OpenJFX" { default = "openjfx20"; pkgsText = "pkgs.javaPackages"; } => { ...; default = pkgs.javaPackages.openjfx20; defaultText = literalExpression "pkgs.javaPackages.openjfx20"; description = "The OpenJFX package to use."; type = package; } Located at lib/options.nix:308 in <nixpkgs>.

##### lib.options.mkSinkUndeclaredOptions

This option accepts arbitrary definitions, but it does not produce an option value. This is useful for sharing a module across different module sets without having to implement similar features as long as the values of the options are not accessed. Inputs attrs Attribute set whose attributes override the argument to mkOption. Located at lib/options.nix:360 in <nixpkgs>.

##### lib.options.mergeDefaultOption

A merge function that merges multiple definitions of an option into a single value

#### Caution

This function is used as the default merge operation in lib.types.mkOptionType. In most cases, explicit usage of this function is unnecessary. Inputs loc location of the option in the configuration as a list of strings. e.g. ["boot" "loader "grub" "enable"] defs list of definition values and locations. e.g. [ { file = "/foo.nix"; value = 1; } { file = "/bar.nix"; value = 2 } ] Example Example 216. lib.options.mergeDefaultOption usage example myType = mkOptionType { name = "myType"; merge = mergeDefaultOption; # <- This line is redundant. It is the default already. }; Merge behavior Merging requires all definition values to have the same type. If all definitions are booleans, the result of a foldl' with the or operation is returned. If all definitions are strings, they are concatenated. (lib.concatStrings) If all definitions are integers and all are equal, the first one is returned. If all definitions are lists, they are concatenated. (++) If all definitions are attribute sets, they are merged. (lib.mergeAttrs) If all definitions are functions, the first function is applied to the result of the second function. (f -> x: f x) Otherwise, an error is thrown. Located at lib/options.nix:422 in <nixpkgs>.

##### lib.options.mergeOneOption

Require a single definition. WARNING: Does not perform nested checks, as this does not run the merge function! Located at lib/options.nix:449 in <nixpkgs>.

##### lib.options.mergeUniqueOption

Require a single definition. NOTE: When the type is not checked completely by check, pass a merge function for further checking (of sub-attributes, etc). Inputs loc 2. Function argument defs 3. Function argument Located at lib/options.nix:466 in <nixpkgs>.

##### lib.options.mergeEqualOption

“Merge” option definitions by checking that they all have the same value. Inputs loc 1. Function argument defs 2. Function argument Located at lib/options.nix:495 in <nixpkgs>.

##### lib.options.getValues

Extracts values of all “value” keys of the given list. Type getValues :: [ { value :: a; } ] -> [a] Examples Example 217. getValues usage example getValues [ { value = 1; } { value = 2; } ] // => [ 1 2 ] getValues [ ] // => [ ] Located at lib/options.nix:538 in <nixpkgs>.

##### lib.options.getFiles

Extracts values of all “file” keys of the given list Type getFiles :: [ { file :: a; } ] -> [a] Examples Example 218. getFiles usage example getFiles [ { file = "file1"; } { file = "file2"; } ] // => [ "file1" "file2" ] getFiles [ ] // => [ ] Located at lib/options.nix:560 in <nixpkgs>.

##### lib.options.scrubOptionValue

This function recursively removes all derivation attributes from x except for the name attribute. This is to make the generation of options.xml much more efficient: the XML representation of derivations is very large (on the order of megabytes) and is not actually used by the manual generator. This function was made obsolete by renderOptionValue and is kept for compatibility with out-of-tree code. Inputs x 1. Function argument Located at lib/options.nix:627 in <nixpkgs>.

##### lib.options.renderOptionValue

Ensures that the given option value (default or example) is a _typed string by rendering Nix values to literalExpressions. Inputs v 1. Function argument Located at lib/options.nix:653 in <nixpkgs>.

##### lib.options.literalExpression

For use in the defaultText and example option attributes. Causes the given string to be rendered verbatim in the documentation as Nix code. This is necessary for complex values, e.g. functions, or values that depend on other values or packages. Inputs text 1. Function argument Located at lib/options.nix:677 in <nixpkgs>.

##### lib.options.literalMD

For use in the defaultText and example option attributes. Causes the given MD text to be inserted verbatim in the documentation, for when a literalExpression would be too hard to read. Inputs text 1. Function argument Located at lib/options.nix:698 in <nixpkgs>.

##### lib.options.showOption

Convert an option, described as a list of the option parts to a human-readable version. Inputs parts 1. Function argument Examples Example 219. showOption usage example (showOption ["foo" "bar" "baz"]) == "foo.bar.baz" (showOption ["foo" "bar.baz" "tux"]) == "foo.\"bar.baz\".tux" (showOption ["windowManager" "2bwm" "enable"]) == "windowManager.\"2bwm\".enable" Placeholders will not be quoted as they are not actual values: (showOption ["foo" "*" "bar"]) == "foo.*.bar" (showOption ["foo" "<name>" "bar"]) == "foo.<name>.bar" (showOption ["foo" "<myPlaceholder>" "bar"]) == "foo.<myPlaceholder>.bar" Located at lib/options.nix:737 in <nixpkgs>.

##### lib.options.showOptionWithDefLocs

Pretty prints all option definition locations Inputs option The option to pretty print Examples Example 220. lib.options.showOptionWithDefLocs usage example showOptionWithDefLocs { loc = ["x" "y" ]; files = [ "foo.nix" "bar.nix" ]; } "x.y, with values defined in:\n - foo.nix\n - bar.nix\n" nix-repl> eval = lib.evalModules { modules = [ { options = { foo = lib.mkEnableOption "foo"; }; } ]; } nix-repl> lib.options.showOptionWithDefLocs eval.options.foo "foo, with values defined in:\n - <unknown-file>\n" Type showDefsSep :: { files :: [ String ]; loc :: [ String ]; ... } -> string Located at lib/options.nix:825 in <nixpkgs>.

##### lib.path.append

Append a subpath string to a path. Like path + ("/" + string) but safer, because it errors instead of returning potentially surprising results. More specifically, it checks that the first argument is a path value type, and that the second argument is a valid subpath string. Laws: Not influenced by subpath normalisation: append p s == append p (subpath.normalise s) Inputs path The absolute path to append to subpath The subpath string to append Type append :: Path -> String -> Path Examples Example 221. append usage example append /foo "bar/baz" => /foo/bar/baz # subpaths don't need to be normalised append /foo "./bar//baz/./" => /foo/bar/baz # can append to root directory append /. "foo/bar" => /foo/bar # first argument needs to be a path value type append "/foo" "bar" => <error> # second argument needs to be a valid subpath string append /foo /bar => <error> append /foo "" => <error> append /foo "/bar" => <error> append /foo "../bar" => <error> Located at lib/path/default.nix:236 in <nixpkgs>.

##### lib.path.hasPrefix

Whether the first path is a component-wise prefix of the second path. Laws: hasPrefix p q is only true if q == append p s for some subpath s. hasPrefix is a non-strict partial order over the set of all path values. Inputs path1 1. Function argument Type hasPrefix :: Path -> Path -> Bool Examples Example 222. hasPrefix usage example hasPrefix /foo /foo/bar => true hasPrefix /foo /foo => true hasPrefix /foo/bar /foo => false hasPrefix /. /foo => true Located at lib/path/default.nix:286 in <nixpkgs>.

##### lib.path.removePrefix

Remove the first path as a component-wise prefix from the second path. The result is a normalised subpath string. Laws: Inverts append for normalised subpath string: removePrefix p (append p s) == subpath.normalise s Inputs path1 1. Function argument Type removePrefix :: Path -> Path -> String Examples Example 223. removePrefix usage example removePrefix /foo /foo/bar/baz => "./bar/baz" removePrefix /foo /foo => "./." removePrefix /foo/bar /foo => <error> removePrefix /. /foo => "./foo" Located at lib/path/default.nix:345 in <nixpkgs>.

##### lib.path.splitRoot

Split the filesystem root from a path. The result is an attribute set with these attributes: root: The filesystem root of the path, meaning that this directory has no parent directory. subpath: The normalised subpath string that when appended to root returns the original path. Laws: Appending the root and subpath gives the original path: p == append (splitRoot p).root (splitRoot p).subpath Trying to get the parent directory of root using dirOf returns root itself: dirOf (splitRoot p).root == (splitRoot p).root Inputs path The path to split the root off of Type splitRoot :: Path -> { root :: Path, subpath :: String } Examples Example 224. splitRoot usage example splitRoot /foo/bar => { root = /.; subpath = "./foo/bar"; } splitRoot /. => { root = /.; subpath = "./."; } # Nix neutralises `..` path components for all path values automatically splitRoot /foo/../bar => { root = /.; subpath = "./bar"; } splitRoot "/foo/bar" => <error> Located at lib/path/default.nix:422 in <nixpkgs>.

##### lib.path.hasStorePathPrefix

Whether a path has a store path as a prefix.

#### Note

As with all functions of this lib.path library, it does not work on paths in strings, which is how you’d typically get store paths. Instead, this function only handles path values themselves, which occur when Nix files in the store use relative path expressions. Inputs path 1. Function argument Type hasStorePathPrefix :: Path -> Bool Examples Example 225. hasStorePathPrefix usage example # Subpaths of derivation outputs have a store path as a prefix hasStorePathPrefix /nix/store/nvl9ic0pj1fpyln3zaqrf4cclbqdfn1j-foo/bar/baz => true # The store directory itself is not a store path hasStorePathPrefix /nix/store => false # Derivation outputs are store paths themselves hasStorePathPrefix /nix/store/nvl9ic0pj1fpyln3zaqrf4cclbqdfn1j-foo => true # Paths outside the Nix store don't have a store path prefix hasStorePathPrefix /home/user => false # Not all paths under the Nix store are store paths hasStorePathPrefix /nix/store/.links/10gg8k3rmbw8p7gszarbk7qyd9jwxhcfq9i6s5i0qikx8alkk4hq => false # Store derivations are also store paths themselves hasStorePathPrefix /nix/store/nvl9ic0pj1fpyln3zaqrf4cclbqdfn1j-foo.drv => true Located at lib/path/default.nix:492 in <nixpkgs>.

##### lib.path.subpath.isValid

Whether a value is a valid subpath string. A subpath string points to a specific file or directory within an absolute base directory. It is a stricter form of a relative path that excludes .. components, since those could escape the base directory. The value is a string. The string is not empty. The string doesn’t start with a /. The string doesn’t contain any .. path components. Inputs value The value to check Type subpath.isValid :: String -> Bool Examples Example 226. subpath.isValid usage example # Not a string subpath.isValid null => false # Empty string subpath.isValid "" => false # Absolute path subpath.isValid "/foo" => false # Contains a `..` path component subpath.isValid "../foo" => false # Valid subpath subpath.isValid "foo/bar" => true # Doesn't need to be normalised subpath.isValid "./foo//bar/" => true Located at lib/path/default.nix:565 in <nixpkgs>.

##### lib.path.subpath.join

Join subpath strings together using /, returning a normalised subpath string. Like concatStringsSep "/" but safer, specifically: All elements must be valid subpath strings. The result gets normalised. The edge case of an empty list gets properly handled by returning the neutral subpath "./.". Laws: Associativity: subpath.join [ x (subpath.join [ y z ]) ] == subpath.join [ (subpath.join [ x y ]) z ] Identity - "./." is the neutral element for normalised paths: subpath.join [ ] == "./." subpath.join [ (subpath.normalise p) "./." ] == subpath.normalise p subpath.join [ "./." (subpath.normalise p) ] == subpath.normalise p Normalisation - the result is normalised: subpath.join ps == subpath.normalise (subpath.join ps) For non-empty lists, the implementation is equivalent to normalising the result of concatStringsSep "/". Note that the above laws can be derived from this one: ps != [] -> subpath.join ps == subpath.normalise (concatStringsSep "/" ps) Inputs subpaths The list of subpaths to join together Type subpath.join :: [ String ] -> String Examples Example 227. subpath.join usage example subpath.join [ "foo" "bar/baz" ] => "./foo/bar/baz" # normalise the result subpath.join [ "./foo" "." "bar//./baz/" ] => "./foo/bar/baz" # passing an empty list results in the current directory subpath.join [ ] => "./." # elements must be valid subpath strings subpath.join [ /foo ] => <error> subpath.join [ "" ] => <error> subpath.join [ "/foo" ] => <error> subpath.join [ "../foo" ] => <error> Located at lib/path/default.nix:642 in <nixpkgs>.

##### lib.path.subpath.components

Split a subpath into its path component strings. Throw an error if the subpath isn’t valid. Note that the returned path components are also valid subpath strings, though they are intentionally not normalised. Laws: Splitting a subpath into components and joining the components gives the same subpath but normalised: subpath.join (subpath.components s) == subpath.normalise s Inputs subpath The subpath string to split into components Type subpath.components :: String -> [ String ] Examples Example 228. subpath.components usage example subpath.components "." => [ ] subpath.components "./foo//bar/./baz/" => [ "foo" "bar" "baz" ] subpath.components "/foo" => <error> Located at lib/path/default.nix:702 in <nixpkgs>.

##### lib.path.subpath.normalise

Normalise a subpath. Throw an error if the subpath isn’t valid. Limit repeating / to a single one. Remove redundant . components. Remove trailing / and /.. Add leading ./. Laws: Idempotency - normalising multiple times gives the same result: subpath.normalise (subpath.normalise p) == subpath.normalise p Uniqueness - there’s only a single normalisation for the paths that lead to the same file system node: subpath.normalise p != subpath.normalise q -> $(realpath ${p}) != $(realpath ${q}) Don’t change the result when appended to a Nix path value: append base p == append base (subpath.normalise p) Don’t change the path according to realpath: $(realpath ${p}) == $(realpath ${subpath.normalise p}) Only error on invalid subpaths: builtins.tryEval (subpath.normalise p)).success == subpath.isValid p Inputs subpath The subpath string to normalise Type subpath.normalise :: String -> String Examples Example 229. subpath.normalise usage example # limit repeating `/` to a single one subpath.normalise "foo//bar" => "./foo/bar" # remove redundant `.` components subpath.normalise "foo/./bar" => "./foo/bar" # add leading `./` subpath.normalise "foo/bar" => "./foo/bar" # remove trailing `/` subpath.normalise "foo/bar/" => "./foo/bar" # remove trailing `/.` subpath.normalise "foo/bar/." => "./foo/bar" # Return the current directory as `./.` subpath.normalise "." => "./." # error on `..` path components subpath.normalise "foo/../bar" => <error> # error on empty string subpath.normalise "" => <error> # error on absolute path subpath.normalise "/foo" => <error> Located at lib/path/default.nix:799 in <nixpkgs>.

##### lib.fetchers.normalizeHash

Converts an attrset containing one of hash, sha256 or sha512, into one containing outputHash{,Algo} as accepted by mkDerivation. An appropriate “fake hash” is substituted when the hash value is "", as is the convention for fetchers. All other attributes in the set remain as-is. Example normalizeHash { } { hash = ""; foo = "bar"; } => { outputHash = lib.fakeHash; outputHashAlgo = null; foo = "bar"; } normalizeHash { } { sha256 = lib.fakeSha256; } => { outputHash = lib.fakeSha256; outputHashAlgo = "sha256"; } normalizeHash { } { sha512 = lib.fakeSha512; } => { outputHash = lib.fakeSha512; outputHashAlgo = "sha512"; } Type normalizeHash :: { hashTypes :: List String, required :: Bool } -> AttrSet -> AttrSet Arguments hashTypes the set of attribute names accepted as hash inputs, in addition to hash required whether to throw if no hash was present in the input; otherwise returns the original input, unmodified Located at lib/fetchers.nix:89 in <nixpkgs>.

##### lib.fetchers.withNormalizedHash

Wraps a function which accepts outputHash{,Algo} into one which accepts hash or sha{256,512} Example withNormalizedHash { hashTypes = [ "sha256" "sha512" ]; } ( { outputHash, outputHashAlgo, ... }: ... ) is a function which accepts one of hash, sha256, or sha512 (or the original’s outputHash and outputHashAlgo). Its functionArgs metadata only lists hash as a parameter, optional iff. outputHash was an optional parameter of the original function. sha256, sha512, outputHash, or outputHashAlgo are not mentioned in the functionArgs metadata. Type withNormalizedHash :: { hashTypes :: List String } -> (AttrSet -> T) -> (AttrSet -> T) Arguments hashTypes the set of attribute names accepted as hash inputs, in addition to hash they must correspond to a valid value for outputHashAlgo, currently one of: md5, sha1, sha256, or sha512. f the function to be wrapped

#### Note

In nixpkgs, mkDerivation rejects MD5 outputHashes, and SHA-1 is being deprecated. As such, there is no reason to add md5 to hashTypes, and sha1 should only ever be included for backwards compatibility. Output withNormalizedHash { inherit hashTypes; } f is functionally equivalent to args: f (normalizeHash { inherit hashTypes; required = !(lib.functionArgs f).outputHash; } args) However, withNormalizedHash preserves functionArgs metadata insofar as possible, and is implemented somewhat more efficiently. Located at lib/fetchers.nix:190 in <nixpkgs>.

#### lib.filesystem: filesystem functions

Functions for querying information about the filesystem without copying any files to the Nix store.

##### lib.filesystem.pathType

The type of a path. The path needs to exist and be accessible. The result is either “directory” for a directory, “regular” for a regular file, “symlink” for a symlink, or “unknown” for anything else. Inputs path The path to query Type pathType :: Path -> String Examples Example 230. lib.filesystem.pathType usage example pathType /. => "directory" pathType /some/file.nix => "regular" Located at lib/filesystem.nix:59 in <nixpkgs>.

##### lib.filesystem.pathIsDirectory

Whether a path exists and is a directory. Inputs path 1. Function argument Type pathIsDirectory :: Path -> Bool Examples Example 231. lib.filesystem.pathIsDirectory usage example pathIsDirectory /. => true pathIsDirectory /this/does/not/exist => false pathIsDirectory /some/file.nix => false Located at lib/filesystem.nix:93 in <nixpkgs>.

##### lib.filesystem.pathIsRegularFile

Whether a path exists and is a regular file, meaning not a symlink or any other special file type. Inputs path 1. Function argument Type pathIsRegularFile :: Path -> Bool Examples Example 232. lib.filesystem.pathIsRegularFile usage example pathIsRegularFile /. => false pathIsRegularFile /this/does/not/exist => false pathIsRegularFile /some/file.nix => true Located at lib/filesystem.nix:127 in <nixpkgs>.

##### lib.filesystem.haskellPathsInDir

A map of all haskell packages defined in the given path, identified by having a cabal file with the same name as the directory itself. Inputs root The directory within to search Type Path -> Map String Path Located at lib/filesystem.nix:146 in <nixpkgs>.

##### lib.filesystem.locateDominatingFile

Find the first directory containing a file matching ‘pattern’ upward from a given ‘file’. Returns ‘null’ if no directories contain a file matching ‘pattern’. Inputs pattern The pattern to search for file The file to start searching upward from Type RegExp -> Path -> Nullable { path : Path; matches : [ MatchResults ]; } Located at lib/filesystem.nix:183 in <nixpkgs>.

##### lib.filesystem.listFilesRecursive

Given a directory, return a flattened list of all files within it recursively. Inputs dir The path to recursively list Type Path -> [ Path ] Located at lib/filesystem.nix:223 in <nixpkgs>.

##### lib.filesystem.packagesFromDirectoryRecursive

Transform a directory tree containing package files suitable for callPackage into a matching nested attribute set of derivations. For a directory tree like this: my-packages ├── a.nix ├── b.nix ├── c │ ├── my-extra-feature.patch │ ├── package.nix │ └── support-definitions.nix └── my-namespace ├── d.nix ├── e.nix └── f └── package.nix packagesFromDirectoryRecursive will produce an attribute set like this: # packagesFromDirectoryRecursive { # callPackage = pkgs.callPackage; # directory = ./my-packages; # } { a = pkgs.callPackage ./my-packages/a.nix { }; b = pkgs.callPackage ./my-packages/b.nix { }; c = pkgs.callPackage ./my-packages/c/package.nix { }; my-namespace = { d = pkgs.callPackage ./my-packages/my-namespace/d.nix { }; e = pkgs.callPackage ./my-packages/my-namespace/e.nix { }; f = pkgs.callPackage ./my-packages/my-namespace/f/package.nix { }; }; } In particular: If the input directory contains a package.nix file, then callPackage <directory>/package.nix { } is returned. Otherwise, the input directory’s contents are listed and transformed into an attribute set. If a regular file’s name has the .nix extension, it is turned into attribute where: The attribute name is the file name without the .nix extension The attribute value is callPackage <file path> { } Directories are turned into an attribute where: The attribute name is the name of the directory The attribute value is the result of calling packagesFromDirectoryRecursive { ... } on the directory. As a result, directories with no .nix files (including empty directories) will be transformed into empty attribute sets. Other files are ignored, including symbolic links to directories and to regular .nix files; this is because nixlang code cannot distinguish the type of a link’s target. Type packagesFromDirectoryRecursive :: { callPackage :: Path -> {} -> a, newScope? :: AttrSet -> scope, directory :: Path, } -> AttrSet Inputs callPackage The function used to convert a Nix file’s path into a leaf of the attribute set. It is typically the callPackage function, taken from either pkgs or a new scope corresponding to the directory. newScope If present, this function is used when recursing into a directory, to generate a new scope. The arguments are updated with the scope’s callPackage and newScope functions, so packages can require anything in their scope, or in an ancestor of their scope. directory The directory to read package files from. Examples Example 233. Basic use of lib.packagesFromDirectoryRecursive packagesFromDirectoryRecursive { inherit (pkgs) callPackage; directory = ./my-packages; } => { ... } In this case, callPackage will only search pkgs for a file’s input parameters. In other words, a file cannot refer to another file in the directory in its input parameters. Example 234. Create a scope for the nix files found in a directory packagesFromDirectoryRecursive { inherit (pkgs) callPackage newScope; directory = ./my-packages; } => { ... } For example, take the following directory structure: my-packages ├── a.nix → { b }: assert b ? b1; ... └── b ├── b1.nix → { a }: ... └── b2.nix Here, b1.nix can specify { a } as a parameter, which callPackage will resolve as expected. Likewise, a.nix receive an attrset corresponding to the contents of the b directory.

#### Note

a.nix cannot directly take as inputs packages defined in a child directory, such as b1. Located at lib/filesystem.nix:360 in <nixpkgs>.

##### lib.filesystem.resolveDefaultNix

Append /default.nix if the passed path is a directory. Type resolveDefaultNix :: (Path | String) -> (Path | String) Inputs A single argument which can be a path value or a string containing an absolute path. Output If the input refers to a directory that exists, the output is that same path with /default.nix appended. Furthermore, if the input is a string that ends with /, default.nix is appended to it. Otherwise, the input is returned unchanged. Examples Example 235. lib.filesystem.resolveDefaultNix usage example This expression checks whether a and b refer to the same locally available Nix file path. resolveDefaultNix a == resolveDefaultNix b For instance, if a is /some/dir and b is /some/dir/default.nix, and /some/dir/ exists, the expression evaluates to true, despite a and b being different references to the same Nix file. Located at lib/filesystem.nix:469 in <nixpkgs>.

#### lib.fileset: file set functions

The lib.fileset library allows you to work with file sets. A file set is a (mathematical) set of local files that can be added to the Nix store for use in Nix derivations. File sets are easy and safe to use, providing obvious and composable semantics with good error messages to prevent mistakes.

##### Overview

Basics: Implicit coercion from paths to file sets lib.fileset.maybeMissing: Create a file set from a path that may be missing. lib.fileset.trace/lib.fileset.traceVal: Pretty-print file sets for debugging. lib.fileset.toSource: Add files in file sets to the store to use as derivation sources. lib.fileset.toList: The list of files contained in a file set. Combinators: lib.fileset.union/lib.fileset.unions: Create a larger file set from all the files in multiple file sets. lib.fileset.intersection: Create a smaller file set from only the files in both file sets. lib.fileset.difference: Create a smaller file set containing all files that are in one file set, but not another one. Filtering: lib.fileset.fileFilter: Create a file set from all files that satisisfy a predicate in a directory. Utilities: lib.fileset.fromSource: Create a file set from a lib.sources-based value. lib.fileset.gitTracked/lib.fileset.gitTrackedWith: Create a file set from all tracked files in a local Git repository. If you need more file set functions, see this issue to request it.

##### Implicit coercion from paths to file sets

All functions accepting file sets as arguments can also accept paths as arguments. Such path arguments are implicitly coerced to file sets containing all files under that path: A path to a file turns into a file set containing that single file. A path to a directory turns into a file set containing all files recursively in that directory. If the path points to a non-existent location, an error is thrown.

#### Note

Just like in Git, file sets cannot represent empty directories. Because of this, a path to a directory that contains no files (recursively) will turn into a file set containing no files.

#### Note

File set coercion does not add any of the files under the coerced paths to the store. Only the toSource function adds files to the Nix store, and only those files contained in the fileset argument. This is in contrast to using paths in string interpolation, which does add the entire referenced path to the store. Example Assume we are in a local directory with a file hierarchy like this: ├─ a/ │ ├─ x (file) │ └─ b/ │ └─ y (file) └─ c/ └─ d/ Here’s a listing of which files get included when different path expressions get coerced to file sets: ./. as a file set contains both a/x and a/b/y (c/ does not contain any files and is therefore omitted). ./a as a file set contains both a/x and a/b/y. ./a/x as a file set contains only a/x. ./a/b as a file set contains only a/b/y. ./c as a file set is empty, since neither c nor c/d contain any files.

##### lib.fileset.maybeMissing

Create a file set from a path that may or may not exist: If the path does exist, the path is coerced to a file set. If the path does not exist, a file set containing no files is returned. Inputs path 1. Function argument Type maybeMissing :: Path -> FileSet Examples Example 236. lib.fileset.maybeMissing usage example # All files in the current directory, but excluding main.o if it exists difference ./. (maybeMissing ./main.o) Located at lib/fileset/default.nix:188 in <nixpkgs>.

##### lib.fileset.trace

Incrementally evaluate and trace a file set in a pretty way. This function is only intended for debugging purposes. The exact tracing format is unspecified and may change. This function takes a final argument to return. In comparison, traceVal returns the given file set argument. This variant is useful for tracing file sets in the Nix repl. Inputs fileset The file set to trace. This argument can also be a path, which gets implicitly coerced to a file set. val The value to return. Type trace :: FileSet -> Any -> Any Examples Example 237. lib.fileset.trace usage example trace (unions [ ./Makefile ./src ./tests/run.sh ]) null => trace: /home/user/src/myProject trace: - Makefile (regular) trace: - src (all files in directory) trace: - tests trace: - run.sh (regular) null Located at lib/fileset/default.nix:247 in <nixpkgs>.

##### lib.fileset.traceVal

Incrementally evaluate and trace a file set in a pretty way. This function is only intended for debugging purposes. The exact tracing format is unspecified and may change. This function returns the given file set. In comparison, trace takes another argument to return. This variant is useful for tracing file sets passed as arguments to other functions. Inputs fileset The file set to trace and return. This argument can also be a path, which gets implicitly coerced to a file set. Type traceVal :: FileSet -> FileSet Examples Example 238. lib.fileset.traceVal usage example toSource { root = ./.; fileset = traceVal (unions [ ./Makefile ./src ./tests/run.sh ]); } => trace: /home/user/src/myProject trace: - Makefile (regular) trace: - src (all files in directory) trace: - tests trace: - run.sh (regular) "/nix/store/...-source" Located at lib/fileset/default.nix:305 in <nixpkgs>.

##### lib.fileset.toSource

Add the local files contained in fileset to the store as a single store path rooted at root. The result is the store path as a string-like value, making it usable e.g. as the src of a derivation, or in string interpolation: stdenv.mkDerivation { src = lib.fileset.toSource { ... }; # ... } The name of the store path is always source. Inputs Takes an attribute set with the following attributes root (Path; required) The local directory path that will correspond to the root of the resulting store path. Paths in strings, including Nix store paths, cannot be passed as root. root has to be a directory.

#### Note

Changing root only affects the directory structure of the resulting store path, it does not change which files are added to the store. The only way to change which files get added to the store is by changing the fileset attribute. fileset (FileSet; required) The file set whose files to import into the store. File sets can be created using other functions in this library. This argument can also be a path, which gets implicitly coerced to a file set.

#### Note

If a directory does not recursively contain any file, it is omitted from the store path contents. Type toSource :: { root :: Path, fileset :: FileSet, } -> SourceLike Examples Example 239. lib.fileset.toSource usage example # Import the current directory into the store # but only include files under ./src toSource { root = ./.; fileset = ./src; } => "/nix/store/...-source" # Import the current directory into the store # but only include ./Makefile and all files under ./src toSource { root = ./.; fileset = union ./Makefile ./src; } => "/nix/store/...-source" # Trying to include a file outside the root will fail toSource { root = ./.; fileset = unions [ ./Makefile ./src ../LICENSE ]; } => <error> # The root needs to point to a directory that contains all the files toSource { root = ../.; fileset = unions [ ./Makefile ./src ../LICENSE ]; } => "/nix/store/...-source" # The root has to be a local filesystem path toSource { root = "/nix/store/...-source"; fileset = ./.; } => <error> Located at lib/fileset/default.nix:420 in <nixpkgs>.

##### lib.fileset.toList

The list of file paths contained in the given file set.
