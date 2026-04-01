---
title: "Nixpkgs Reference Manual"
source: index.html
---
#### Warning

The opposite is not always true. In general expect that attrsToList (builtins.listToAttrs list) != list This is because the listToAttrs removes duplicate names and doesn’t preserve the order of the list. Inputs set The attribute set to deconstruct. Type attrsToList :: AttrSet -> [ { name :: String; value :: Any; } ] Examples Example 27. lib.attrsets.attrsToList usage example attrsToList { foo = 1; bar = "asdf"; } => [ { name = "bar"; value = "asdf"; } { name = "foo"; value = 1; } ] Located at lib/attrsets.nix:1130 in <nixpkgs>.

##### lib.attrsets.mapAttrsRecursive

Like mapAttrs, except that it recursively applies itself to the leaf attributes of a potentially-nested attribute set: the second argument of the function will never be an attrset. Also, the first argument of the mapping function is a list of the attribute names that form the path to the leaf attribute. For a function that gives you control over what counts as a leaf, see mapAttrsRecursiveCond. Example 28. Map over leaf attributes mapAttrsRecursive (path: value: concatStringsSep "-" (path ++ [value])) { n = { a = "A"; m = { b = "B"; c = "C"; }; }; d = "D"; } evaluates to { n = { a = "n-a-A"; m = { b = "n-m-b-B"; c = "n-m-c-C"; }; }; d = "d-D"; } Type mapAttrsRecursive :: ([String] -> a -> b) -> AttrSet -> AttrSet Located at lib/attrsets.nix:1157 in <nixpkgs>.

##### lib.attrsets.mapAttrsRecursiveCond

Like mapAttrsRecursive, but it takes an additional predicate that tells it whether to recurse into an attribute set. If the predicate returns false, mapAttrsRecursiveCond does not recurse, but instead applies the mapping function. If the predicate returns true, it does recurse, and does not apply the mapping function. Example 29. Map over an leaf attributes defined by a condition Map derivations to their name attribute. Derivatons are identified as attribute sets that contain { type = "derivation"; }. mapAttrsRecursiveCond (as: !(as ? "type" && as.type == "derivation")) (path: x: x.name) attrs Type mapAttrsRecursiveCond :: (AttrSet -> Bool) -> ([String] -> a -> b) -> AttrSet -> AttrSet Located at lib/attrsets.nix:1182 in <nixpkgs>.

##### lib.attrsets.mapAttrsToListRecursive

Apply a function to each leaf (non‐attribute‐set attribute) of a tree of nested attribute sets, returning the results of the function as a list, ordered lexicographically by their attribute paths. Like mapAttrsRecursive, but concatenates the mapping function results into a list. Inputs f Mapping function which, given an attribute’s path and value, returns a new value. This value will be an element of the list returned by mapAttrsToListRecursive. The first argument to the mapping function is a list of attribute names forming the path to the leaf attribute. The second argument is the leaf attribute value, which will never be an attribute set. set Attribute set to map over. Type mapAttrsToListRecursive :: ([String] -> a -> b) -> AttrSet -> [b] Examples Example 30. lib.attrsets.mapAttrsToListRecursive usage example mapAttrsToListRecursive (path: value: "${concatStringsSep "." path}=${value}") { n = { a = "A"; m = { b = "B"; c = "C"; }; }; d = "D"; } => [ "n.a=A" "n.m.b=B" "n.m.c=C" "d=D" ] Located at lib/attrsets.nix:1237 in <nixpkgs>.

##### lib.attrsets.mapAttrsToListRecursiveCond

Determine the nodes of a tree of nested attribute sets by applying a predicate, then apply a function to the leaves, returning the results as a list, ordered lexicographically by their attribute paths. Like mapAttrsToListRecursive, but takes an additional predicate to decide whether to recurse into an attribute set. Unlike mapAttrsRecursiveCond this predicate receives the attribute path as its first argument, in addition to the attribute set. Inputs pred Predicate to decide whether to recurse into an attribute set. If the predicate returns true, mapAttrsToListRecursiveCond recurses into the attribute set. If the predicate returns false, it does not recurse but instead applies the mapping function, treating the attribute set as a leaf. The first argument to the predicate is a list of attribute names forming the path to the attribute set. The second argument is the attribute set. f Mapping function which, given an attribute’s path and value, returns a new value. This value will be an element of the list returned by mapAttrsToListRecursiveCond. The first argument to the mapping function is a list of attribute names forming the path to the leaf attribute. The second argument is the leaf attribute value, which may be an attribute set if the predicate returned false. set Attribute set to map over. Type mapAttrsToListRecursiveCond :: ([String] -> AttrSet -> Bool) -> ([String] -> a -> b) -> AttrSet -> [b] Examples Example 31. lib.attrsets.mapAttrsToListRecursiveCond usage example mapAttrsToListRecursiveCond (path: as: !(lib.isDerivation as)) (path: value: "--set=${lib.concatStringsSep "." path}=${toString value}") { rust.optimize = 2; target = { riscv64-unknown-linux-gnu.linker = pkgs.lld; }; } => [ "--set=rust.optimize=2" "--set=target.riscv64-unknown-linux-gnu.linker=/nix/store/sjw4h1k…" ] Located at lib/attrsets.nix:1304 in <nixpkgs>.

##### lib.attrsets.genAttrs

Generate an attribute set by mapping a function over a list of attribute names. Inputs names Names of values in the resulting attribute set. f A function, given the name of the attribute, returns the attribute’s value. Type genAttrs :: [ String ] -> (String -> Any) -> AttrSet Examples Example 32. lib.attrsets.genAttrs usage example genAttrs [ "foo" "bar" ] (name: "x_" + name) => { foo = "x_foo"; bar = "x_bar"; } Located at lib/attrsets.nix:1344 in <nixpkgs>.

##### lib.attrsets.genAttrs'

Like genAttrs, but allows the name of each attribute to be specified in addition to the value. The applied function should return both the new name and value as a nameValuePair.

#### Warning

In case of attribute name collision the first entry determines the value, all subsequent conflicting entries for the same name are silently ignored. Inputs xs A list of strings s used as generator. f A function, given a string s from the list xs, returns a new nameValuePair. Type genAttrs' :: [ Any ] -> (Any -> { name :: String; value :: Any; }) -> AttrSet Examples Example 33. lib.attrsets.genAttrs' usage example genAttrs' [ "foo" "bar" ] (s: nameValuePair ("x_" + s) ("y_" + s)) => { x_foo = "y_foo"; x_bar = "y_bar"; } Located at lib/attrsets.nix:1381 in <nixpkgs>.

##### lib.attrsets.isDerivation

Check whether the argument is a derivation. Any set with { type = "derivation"; } counts as a derivation. Inputs value Value to check. Type isDerivation :: Any -> Bool Examples Example 34. lib.attrsets.isDerivation usage example nixpkgs = import <nixpkgs> {} isDerivation nixpkgs.ruby => true isDerivation "foobar" => false Located at lib/attrsets.nix:1413 in <nixpkgs>.

##### lib.attrsets.toDerivation

Converts a store path to a fake derivation. Inputs path A store path to convert to a derivation. Type toDerivation :: Path -> Derivation Located at lib/attrsets.nix:1430 in <nixpkgs>.

##### lib.attrsets.optionalAttrs

If cond is true, return the attribute set as, otherwise an empty attribute set. Inputs cond Condition under which the as attribute set is returned. as The attribute set to return if cond is true. Type optionalAttrs :: Bool -> AttrSet -> AttrSet Examples Example 35. lib.attrsets.optionalAttrs usage example optionalAttrs (true) { my = "set"; } => { my = "set"; } optionalAttrs (false) { my = "set"; } => { } Located at lib/attrsets.nix:1478 in <nixpkgs>.

##### lib.attrsets.zipAttrsWithNames

Merge sets of attributes and use the function f to merge attributes values. Inputs names List of attribute names to zip. f A function, accepts an attribute name, all the values, and returns a combined value. sets List of values from the list of attribute sets. Type zipAttrsWithNames :: [ String ] -> (String -> [ Any ] -> Any) -> [ AttrSet ] -> AttrSet Examples Example 36. lib.attrsets.zipAttrsWithNames usage example zipAttrsWithNames ["a"] (name: vs: vs) [{a = "x";} {a = "y"; b = "z";}] => { a = ["x" "y"]; } Located at lib/attrsets.nix:1515 in <nixpkgs>.

##### lib.attrsets.zipAttrsWith

Merge sets of attributes and use the function f to merge attribute values. Like lib.attrsets.zipAttrsWithNames with all key names are passed for names. Implementation note: Common names appear multiple times in the list of names, hopefully this does not affect the system because the maximal laziness avoid computing twice the same expression and listToAttrs does not care about duplicated attribute names. Type zipAttrsWith :: (String -> [ Any ] -> Any) -> [ AttrSet ] -> AttrSet Examples Example 37. lib.attrsets.zipAttrsWith usage example zipAttrsWith (name: values: values) [{a = "x";} {a = "y"; b = "z";}] => { a = ["x" "y"]; b = ["z"]; } Located at lib/attrsets.nix:1550 in <nixpkgs>.

##### lib.attrsets.zipAttrs

Merge sets of attributes and combine each attribute value in to a list. Like lib.attrsets.zipAttrsWith with (name: values: values) as the function. Type zipAttrs :: [ AttrSet ] -> AttrSet Examples Example 38. lib.attrsets.zipAttrs usage example zipAttrs [{a = "x";} {a = "y"; b = "z";}] => { a = ["x" "y"]; b = ["z"]; } Located at lib/attrsets.nix:1575 in <nixpkgs>.

##### lib.attrsets.mergeAttrsList

Merge a list of attribute sets together using the // operator. In case of duplicate attributes, values from later list elements take precedence over earlier ones. The result is the same as foldl mergeAttrs { }, but the performance is better for large inputs. For n list elements, each with an attribute set containing m unique attributes, the complexity of this operation is O(nm log n). Inputs list 1. Function argument Type mergeAttrsList :: [ Attrs ] -> Attrs Examples Example 39. lib.attrsets.mergeAttrsList usage example mergeAttrsList [ { a = 0; b = 1; } { c = 2; d = 3; } ] => { a = 0; b = 1; c = 2; d = 3; } mergeAttrsList [ { a = 0; } { a = 1; } ] => { a = 1; } Located at lib/attrsets.nix:1608 in <nixpkgs>.

##### lib.attrsets.recursiveUpdateUntil

Does the same as the update operator ‘//’ except that attributes are merged until the given predicate is verified. The predicate should accept 3 arguments which are the path to reach the attribute, a part of the first attribute set and a part of the second attribute set. When the predicate is satisfied, the value of the first attribute set is replaced by the value of the second attribute set. Inputs pred Predicate, taking the path to the current attribute as a list of strings for attribute names, and the two values at that path from the original arguments. lhs Left attribute set of the merge. rhs Right attribute set of the merge. Type recursiveUpdateUntil :: ( [ String ] -> AttrSet -> AttrSet -> Bool ) -> AttrSet -> AttrSet -> AttrSet Examples Example 40. lib.attrsets.recursiveUpdateUntil usage example recursiveUpdateUntil (path: l: r: path == ["foo"]) { # first attribute set foo.bar = 1; foo.baz = 2; bar = 3; } { #second attribute set foo.bar = 1; foo.quz = 2; baz = 4; } => { foo.bar = 1; # 'foo.*' from the second set foo.quz = 2; # bar = 3; # 'bar' from the first set baz = 4; # 'baz' from the second set } Located at lib/attrsets.nix:1685 in <nixpkgs>.

##### lib.attrsets.recursiveUpdate

A recursive variant of the update operator ‘//’. The recursion stops when one of the attribute values is not an attribute set, in which case the right hand side value takes precedence over the left hand side value. Inputs lhs Left attribute set of the merge. rhs Right attribute set of the merge. Type recursiveUpdate :: AttrSet -> AttrSet -> AttrSet Examples Example 41. lib.attrsets.recursiveUpdate usage example recursiveUpdate { boot.loader.grub.enable = true; boot.loader.grub.device = "/dev/hda"; } { boot.loader.grub.device = ""; } returns: { boot.loader.grub.enable = true; boot.loader.grub.device = ""; } Located at lib/attrsets.nix:1745 in <nixpkgs>.

##### lib.attrsets.matchAttrs

Recurse into every attribute set of the first argument and check that: Each attribute path also exists in the second argument. If the attribute’s value is not a nested attribute set, it must have the same value in the right argument. Inputs pattern Attribute set structure to match attrs Attribute set to check Type matchAttrs :: AttrSet -> AttrSet -> Bool Examples Example 42. lib.attrsets.matchAttrs usage example matchAttrs { cpu = {}; } { cpu = { bits = 64; }; } => true Located at lib/attrsets.nix:1784 in <nixpkgs>.

##### lib.attrsets.overrideExisting

Override only the attributes that are already present in the old set useful for deep-overriding. Inputs old Original attribute set new Attribute set with attributes to override in old. Type overrideExisting :: AttrSet -> AttrSet -> AttrSet Examples Example 43. lib.attrsets.overrideExisting usage example overrideExisting {} { a = 1; } => {} overrideExisting { b = 2; } { a = 1; } => { b = 2; } overrideExisting { a = 3; b = 2; } { a = 1; } => { a = 1; b = 2; } Located at lib/attrsets.nix:1837 in <nixpkgs>.

##### lib.attrsets.showAttrPath

Turns a list of strings into a human-readable description of those strings represented as an attribute path. The result of this function is not intended to be machine-readable. Create a new attribute set with value set at the nested attribute location specified in attrPath. Inputs path Attribute path to render to a string Type showAttrPath :: [String] -> String Examples Example 44. lib.attrsets.showAttrPath usage example showAttrPath [ "foo" "10" "bar" ] => "foo.\"10\".bar" showAttrPath [] => "<root attribute path>" Located at lib/attrsets.nix:1870 in <nixpkgs>.

##### lib.attrsets.getOutput

Get a package output. If no output is found, fallback to .out and then to the default. The function is idempotent: getOutput "b" (getOutput "a" p) == getOutput "a" p. Inputs output 1. Function argument pkg 2. Function argument Type getOutput :: String -> :: Derivation -> Derivation Examples Example 45. lib.attrsets.getOutput usage example "${getOutput "dev" pkgs.openssl}" => "/nix/store/9rz8gxhzf8sw4kf2j2f1grr49w8zx5vj-openssl-1.0.1r-dev" Located at lib/attrsets.nix:1906 in <nixpkgs>.

##### lib.attrsets.getFirstOutput

Get the first of the outputs provided by the package, or the default. This function is aligned with _overrideFirst() from the multiple-outputs.sh setup hook. Like getOutput, the function is idempotent. Inputs outputs 1. Function argument pkg 2. Function argument Type getFirstOutput :: [String] -> Derivation -> Derivation Examples Example 46. lib.attrsets.getFirstOutput usage example "${getFirstOutput [ "include" "dev" ] pkgs.openssl}" => "/nix/store/00000000000000000000000000000000-openssl-1.0.1r-dev" Located at lib/attrsets.nix:1942 in <nixpkgs>.

##### lib.attrsets.getBin

Get a package’s bin output. If the output does not exist, fallback to .out and then to the default. Inputs pkg The package whose bin output will be retrieved. Type getBin :: Derivation -> Derivation Examples Example 47. lib.attrsets.getBin usage example "${getBin pkgs.openssl}" => "/nix/store/00000000000000000000000000000000-openssl-1.0.1r" Located at lib/attrsets.nix:1977 in <nixpkgs>.

##### lib.attrsets.getLib

Get a package’s lib output. If the output does not exist, fallback to .out and then to the default. Inputs pkg The package whose lib output will be retrieved. Type getLib :: Derivation -> Derivation Examples Example 48. lib.attrsets.getLib usage example "${getLib pkgs.openssl}" => "/nix/store/9rz8gxhzf8sw4kf2j2f1grr49w8zx5vj-openssl-1.0.1r-lib" Located at lib/attrsets.nix:2006 in <nixpkgs>.

##### lib.attrsets.getStatic

Get a package’s static output. If the output does not exist, fallback to .lib, then to .out, and then to the default. Inputs pkg The package whose static output will be retrieved. Type getStatic :: Derivation -> Derivation Examples Example 49. lib.attrsets.getStatic usage example "${lib.getStatic pkgs.glibc}" => "/nix/store/00000000000000000000000000000000-glibc-2.39-52-static" Located at lib/attrsets.nix:2035 in <nixpkgs>.

##### lib.attrsets.getDev

Get a package’s dev output. If the output does not exist, fallback to .out and then to the default. Inputs pkg The package whose dev output will be retrieved. Type getDev :: Derivation -> Derivation Examples Example 50. lib.attrsets.getDev usage example "${getDev pkgs.openssl}" => "/nix/store/9rz8gxhzf8sw4kf2j2f1grr49w8zx5vj-openssl-1.0.1r-dev" Located at lib/attrsets.nix:2068 in <nixpkgs>.

##### lib.attrsets.getInclude

Get a package’s include output. If the output does not exist, fallback to .dev, then to .out, and then to the default. Inputs pkg The package whose include output will be retrieved. Type getInclude :: Derivation -> Derivation Examples Example 51. lib.attrsets.getInclude usage example "${getInclude pkgs.openssl}" => "/nix/store/00000000000000000000000000000000-openssl-1.0.1r-dev" Located at lib/attrsets.nix:2097 in <nixpkgs>.

##### lib.attrsets.getMan

Get a package’s man output. If the output does not exist, fallback to .out and then to the default. Inputs pkg The package whose man output will be retrieved. Type getMan :: Derivation -> Derivation Examples Example 52. lib.attrsets.getMan usage example "${getMan pkgs.openssl}" => "/nix/store/9rz8gxhzf8sw4kf2j2f1grr49w8zx5vj-openssl-1.0.1r-man" Located at lib/attrsets.nix:2130 in <nixpkgs>.

##### lib.attrsets.chooseDevOutputs

Pick the outputs of packages to place in buildInputs Inputs pkgs List of packages. Type chooseDevOutputs :: [Derivation] -> [Derivation] Located at lib/attrsets.nix:2147 in <nixpkgs>.

##### lib.attrsets.recurseIntoAttrs

Make various Nix tools consider the contents of the resulting attribute set when looking for what to build, find, etc. This function only affects a single attribute set; it does not apply itself recursively for nested attribute sets. Inputs attrs An attribute set to scan for derivations. Type recurseIntoAttrs :: AttrSet -> AttrSet Examples Example 53. lib.attrsets.recurseIntoAttrs usage example { pkgs ? import <nixpkgs> {} }: { myTools = pkgs.lib.recurseIntoAttrs { inherit (pkgs) hello figlet; }; } Located at lib/attrsets.nix:2183 in <nixpkgs>.

##### lib.attrsets.dontRecurseIntoAttrs

Undo the effect of recurseIntoAttrs. Inputs attrs An attribute set to not scan for derivations. Type dontRecurseIntoAttrs :: AttrSet -> AttrSet Located at lib/attrsets.nix:2200 in <nixpkgs>.

##### lib.attrsets.unionOfDisjoint

unionOfDisjoint x y is equal to x // y, but accessing attributes present in both x and y will throw an error. This operator is commutative, unlike //. Inputs x 1. Function argument y 2. Function argument Type unionOfDisjoint :: AttrSet -> AttrSet -> AttrSet Located at lib/attrsets.nix:2222 in <nixpkgs>.
