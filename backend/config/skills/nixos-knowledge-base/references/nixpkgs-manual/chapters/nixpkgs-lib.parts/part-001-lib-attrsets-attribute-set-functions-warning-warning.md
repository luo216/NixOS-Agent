---
title: "Nixpkgs lib"
source: index.html
---

# Nixpkgs lib

Table of Contents Functions reference Module System

### Functions reference

Table of Contents Nixpkgs Library Functions Generators Debugging Nix Expressions prefer-remote-fetch overlay pkgs.nix-gitignore The Nixpkgs repository has several utility functions to manipulate Nix expressions.

### Nixpkgs Library Functions

lib.asserts: assertion functions lib.attrsets: attribute set functions lib.strings: string manipulation functions lib.versions: version string functions lib.trivial: miscellaneous functions lib.fixedPoints: explicit recursion functions lib.lists: list manipulation functions lib.debug: debugging functions lib.options: NixOS / nixpkgs option handling lib.path: path functions lib.fetchers: functions which can be reused across fetchers lib.filesystem: filesystem functions lib.fileset: file set functions lib.sources: source filtering functions lib.cli: command-line serialization functions lib.generators: functions that create file formats from nix data structures lib.gvariant: GVariant formatted string serialization functions lib.customisation: Functions to customise (derivation-related) functions, derivations, or attribute sets lib.meta: functions for derivation metadata lib.derivations: miscellaneous derivation-specific functions Nixpkgs provides a standard library at pkgs.lib, or through import <nixpkgs/lib>.

##### lib.asserts.assertMsg

Throw if pred is false, else return pred. Intended to be used to augment asserts with helpful error messages. Inputs pred Predicate that needs to succeed, otherwise msg is thrown msg Message to throw in case pred fails Type assertMsg :: Bool -> String -> Bool Examples Example 1. lib.asserts.assertMsg usage example assertMsg false "nope" stderr> error: nope assert assertMsg ("foo" == "bar") "foo is not bar, silly"; "" stderr> error: foo is not bar, silly Located at lib/asserts.nix:50 in <nixpkgs>.

##### lib.asserts.assertOneOf

Specialized assertMsg for checking if val is one of the elements of the list xs. Useful for checking enums. Inputs name The name of the variable the user entered val into, for inclusion in the error message val The value of what the user provided, to be compared against the values in xs xs The list of valid values Type assertOneOf :: String -> ComparableVal -> List ComparableVal -> Bool Examples Example 2. lib.asserts.assertOneOf usage example let sslLibrary = "libressl"; in assertOneOf "sslLibrary" sslLibrary [ "openssl" "bearssl" ] stderr> error: sslLibrary must be one of [ stderr> "openssl" stderr> "bearssl" stderr> ], but is: "libressl" Located at lib/asserts.nix:91 in <nixpkgs>.

##### lib.asserts.assertEachOneOf

Specialized assertMsg for checking if every one of vals is one of the elements of the list xs. Useful for checking lists of supported attributes. Inputs name The name of the variable the user entered val into, for inclusion in the error message vals The list of values of what the user provided, to be compared against the values in xs xs The list of valid values Type assertEachOneOf :: String -> List ComparableVal -> List ComparableVal -> Bool Examples Example 3. lib.asserts.assertEachOneOf usage example let sslLibraries = [ "libressl" "bearssl" ]; in assertEachOneOf "sslLibraries" sslLibraries [ "openssl" "bearssl" ] stderr> error: each element in sslLibraries must be one of [ stderr> "openssl" stderr> "bearssl" stderr> ], but is: [ stderr> "libressl" stderr> "bearssl" stderr> ] Located at lib/asserts.nix:139 in <nixpkgs>.

##### lib.asserts.checkAssertWarn

Wrap a value with logic that throws an error when assertions fail and emits any warnings. Inputs assertions A list of assertions. If any of their assertion attrs is false, their message attrs will be emitted in a throw. warnings A list of strings to emit as warnings. This function does no filtering on this list. val A value to return, wrapped in warn, if a throw is not necessary. Type checkAssertWarn :: [ { assertion :: Bool; message :: String } ] -> [ String ] -> Any -> Any Examples Example 4. lib.asserts.checkAssertWarn usage example checkAssertWarn [ { assertion = false; message = "Will fail"; } ] [ ] null stderr> error: stderr> Failed assertions: stderr> - Will fail checkAssertWarn [ { assertion = true; message = "Will not fail"; } ] [ "Will warn" ] null stderr> evaluation warning: Will warn null Located at lib/asserts.nix:192 in <nixpkgs>.

#### lib.attrsets: attribute set functions

Operations on attribute sets.

##### lib.attrsets.attrByPath

Returns an attribute from nested attribute sets. Nix has an attribute selection operator . which is sufficient for such queries, as long as the number of attributes is static. For example: (x.a.b or 6) == attrByPath ["a" "b"] 6 x # and (x.${f p}."example.com" or 6) == attrByPath [ (f p) "example.com" ] 6 x Inputs attrPath A list of strings representing the attribute path to return from set default Default value if attrPath does not resolve to an existing value set The nested attribute set to select values from Type attrByPath :: [String] -> Any -> AttrSet -> Any Examples Example 5. lib.attrsets.attrByPath usage example x = { a = { b = 3; }; } # ["a" "b"] is equivalent to x.a.b # 6 is a default value to return if the path does not exist in attrset attrByPath ["a" "b"] 6 x => 3 attrByPath ["z" "z"] 6 x => 6 Located at lib/attrsets.nix:88 in <nixpkgs>.

##### lib.attrsets.hasAttrByPath

Returns if an attribute from nested attribute set exists. Nix has a has attribute operator ?, which is sufficient for such queries, as long as the number of attributes is static. For example: (x?a.b) == hasAttrByPath ["a" "b"] x # and (x?${f p}."example.com") == hasAttrByPath [ (f p) "example.com" ] x Laws: hasAttrByPath [] x == true Inputs attrPath A list of strings representing the attribute path to check from set e The nested attribute set to check Type hasAttrByPath :: [String] -> AttrSet -> Bool Examples Example 6. lib.attrsets.hasAttrByPath usage example x = { a = { b = 3; }; } hasAttrByPath ["a" "b"] x => true hasAttrByPath ["z" "z"] x => false hasAttrByPath [] (throw "no need") => true Located at lib/attrsets.nix:156 in <nixpkgs>.

##### lib.attrsets.longestValidPathPrefix

Returns the longest prefix of an attribute path that refers to an existing attribute in a nesting of attribute sets. Can be used after mapAttrsRecursiveCond to apply a condition, although this will evaluate the predicate function on sibling attributes as well. Note that the empty attribute path is valid for all values, so this function only throws an exception if any of its inputs does. Laws: attrsets.longestValidPathPrefix [] x == [] hasAttrByPath (attrsets.longestValidPathPrefix p x) x == true Inputs attrPath A list of strings representing the longest possible path that may be returned. v The nested attribute set to check. Type attrsets.longestValidPathPrefix :: [String] -> Value -> [String] Examples Example 7. lib.attrsets.longestValidPathPrefix usage example x = { a = { b = 3; }; } attrsets.longestValidPathPrefix ["a" "b" "c"] x => ["a" "b"] attrsets.longestValidPathPrefix ["a"] x => ["a"] attrsets.longestValidPathPrefix ["z" "z"] x => [] attrsets.longestValidPathPrefix ["z" "z"] (throw "no need") => [] Located at lib/attrsets.nix:225 in <nixpkgs>.

##### lib.attrsets.setAttrByPath

Create a new attribute set with value set at the nested attribute location specified in attrPath. Inputs attrPath A list of strings representing the attribute path to set value The value to set at the location described by attrPath Type setAttrByPath :: [String] -> Any -> AttrSet Examples Example 8. lib.attrsets.setAttrByPath usage example setAttrByPath ["a" "b"] 3 => { a = { b = 3; }; } Located at lib/attrsets.nix:285 in <nixpkgs>.

##### lib.attrsets.getAttrFromPath

Like attrByPath, but without a default value. If it doesn’t find the path it will throw an error. Nix has an attribute selection operator which is sufficient for such queries, as long as the number of attributes is static. For example: x.a.b == getAttrFromPath ["a" "b"] x # and x.${f p}."example.com" == getAttrFromPath [ (f p) "example.com" ] x Inputs attrPath A list of strings representing the attribute path to get from set set The nested attribute set to find the value in. Type getAttrFromPath :: [String] -> AttrSet -> Any Examples Example 9. lib.attrsets.getAttrFromPath usage example x = { a = { b = 3; }; } getAttrFromPath ["a" "b"] x => 3 getAttrFromPath ["z" "z"] x => error: cannot find attribute `z.z' Located at lib/attrsets.nix:335 in <nixpkgs>.

##### lib.attrsets.concatMapAttrs

Map each attribute in the given set and merge them into a new attribute set. Inputs f 1. Function argument v 2. Function argument Type concatMapAttrs :: (String -> a -> AttrSet) -> AttrSet -> AttrSet Examples Example 10. lib.attrsets.concatMapAttrs usage example concatMapAttrs (name: value: { ${name} = value; ${name + value} = value; }) { x = "a"; y = "b"; } => { x = "a"; xa = "a"; y = "b"; yb = "b"; } Located at lib/attrsets.nix:374 in <nixpkgs>.

##### lib.attrsets.updateManyAttrsByPath

Update or set specific paths of an attribute set. Takes a list of updates to apply and an attribute set to apply them to, and returns the attribute set with the updates applied. Updates are represented as { path = ...; update = ...; } values, where path is a list of strings representing the attribute path that should be updated, and update is a function that takes the old value at that attribute path as an argument and returns the new value it should be. Properties: Updates to deeper attribute paths are applied before updates to more shallow attribute paths Multiple updates to the same attribute path are applied in the order they appear in the update list If any but the last path element leads into a value that is not an attribute set, an error is thrown If there is an update for an attribute path that doesn’t exist, accessing the argument in the update function causes an error, but intermediate attribute sets are implicitly created as needed Type updateManyAttrsByPath :: [{ path :: [String]; update :: (Any -> Any); }] -> AttrSet -> AttrSet Examples Example 11. lib.attrsets.updateManyAttrsByPath usage example updateManyAttrsByPath [ { path = [ "a" "b" ]; update = old: { d = old.c; }; } { path = [ "a" "b" "c" ]; update = old: old + 1; } { path = [ "x" "y" ]; update = old: "xy"; } ] { a.b.c = 0; } => { a = { b = { d = 1; }; }; x = { y = "xy"; }; } Located at lib/attrsets.nix:432 in <nixpkgs>.

##### lib.attrsets.attrVals

Returns the specified attributes from a set. Inputs nameList The list of attributes to fetch from set. Each attribute name must exist on the attribute set set The set to get attribute values from Type attrVals :: [String] -> AttrSet -> [Any] Examples Example 12. lib.attrsets.attrVals usage example attrVals ["a" "b" "c"] as => [as.a as.b as.c] Located at lib/attrsets.nix:531 in <nixpkgs>.

##### lib.attrsets.attrValues

Returns the values of all attributes in the given set, sorted by attribute name. Type attrValues :: AttrSet -> [Any] Examples Example 13. lib.attrsets.attrValues usage example attrValues {c = 3; a = 1; b = 2;} => [1 2 3] Located at lib/attrsets.nix:554 in <nixpkgs>.

##### lib.attrsets.getAttrs

Given a set of attribute names, return the set of the corresponding attributes from the given set. Inputs names A list of attribute names to get out of set attrs The set to get the named attributes from Type getAttrs :: [String] -> AttrSet -> AttrSet Examples Example 14. lib.attrsets.getAttrs usage example getAttrs [ "a" "b" ] { a = 1; b = 2; c = 3; } => { a = 1; b = 2; } Located at lib/attrsets.nix:587 in <nixpkgs>.

##### lib.attrsets.catAttrs

Collect each attribute named attr from a list of attribute sets. Sets that don’t contain the named attribute are ignored. Inputs attr The attribute name to get out of the sets. list The list of attribute sets to go through Type catAttrs :: String -> [AttrSet] -> [Any] Examples Example 15. lib.attrsets.catAttrs usage example catAttrs "a" [{a = 1;} {b = 0;} {a = 2;}] => [1 2] Located at lib/attrsets.nix:620 in <nixpkgs>.

##### lib.attrsets.filterAttrs

Filter an attribute set by removing all attributes for which the given predicate return false. Inputs pred Predicate taking an attribute name and an attribute value, which returns true to include the attribute, or false to exclude the attribute. If possible, decide on name first and on value only if necessary. This avoids evaluating the value if the name is already enough, making it possible, potentially, to have the argument reference the return value. (Depending on context, that could still be considered a self reference by users; a common pattern in Nix.) filterAttrs is occasionally the cause of infinite recursion in configuration systems that allow self-references. To support the widest range of user-provided logic, perform the filterAttrs call as late as possible. Typically that’s right before using it in a derivation, as opposed to an implicit conversion whose result is accessible to the user’s expressions. set The attribute set to filter Type filterAttrs :: (String -> Any -> Bool) -> AttrSet -> AttrSet Examples Example 16. lib.attrsets.filterAttrs usage example filterAttrs (n: v: n == "foo") { foo = 1; bar = 2; } => { foo = 1; } Located at lib/attrsets.nix:663 in <nixpkgs>.

##### lib.attrsets.filterAttrsRecursive

Filter an attribute set recursively by removing all attributes for which the given predicate return false. Inputs pred Predicate taking an attribute name and an attribute value, which returns true to include the attribute, or false to exclude the attribute. set The attribute set to filter Type filterAttrsRecursive :: (String -> Any -> Bool) -> AttrSet -> AttrSet Examples Example 17. lib.attrsets.filterAttrsRecursive usage example filterAttrsRecursive (n: v: v != null) { foo = { bar = null; }; } => { foo = {}; } Located at lib/attrsets.nix:696 in <nixpkgs>.

##### lib.attrsets.foldlAttrs

Like lib.lists.foldl' but for attribute sets. Iterates over every name-value pair in the given attribute set. The result of the callback function is often called acc for accumulator. It is passed between callbacks from left to right and the final acc is the return value of foldlAttrs. Attention: There is a completely different function lib.foldAttrs which has nothing to do with this function, despite the similar name. Inputs f 1. Function argument init 2. Function argument set 3. Function argument Type foldlAttrs :: ( a -> String -> b -> a ) -> a -> { ... :: b } -> a Examples Example 18. lib.attrsets.foldlAttrs usage example foldlAttrs (acc: name: value: { sum = acc.sum + value; names = acc.names ++ [name]; }) { sum = 0; names = []; } { foo = 1; bar = 10; } -> { sum = 11; names = ["bar" "foo"]; } foldlAttrs (throw "function not needed") 123 {}; -> 123 foldlAttrs (acc: _: _: acc) 3 { z = throw "value not needed"; a = throw "value not needed"; }; -> 3 The accumulator doesn't have to be an attrset. It can be as simple as a number or string. foldlAttrs (acc: _: v: acc * 10 + v) 1 { z = 1; a = 2; }; -> 121 Located at lib/attrsets.nix:791 in <nixpkgs>.

##### lib.attrsets.foldAttrs

Apply fold functions to values grouped by key. Inputs op A function, given a value and a collector combines the two. nul The starting value. list_of_attrs A list of attribute sets to fold together by key. Type foldAttrs :: (Any -> Any -> Any) -> Any -> [AttrSets] -> Any Examples Example 19. lib.attrsets.foldAttrs usage example foldAttrs (item: acc: [item] ++ acc) [] [{ a = 2; } { a = 3; }] => { a = [ 2 3 ]; } Located at lib/attrsets.nix:829 in <nixpkgs>.

##### lib.attrsets.collect

Recursively collect sets that verify a given predicate named pred from the set attrs. The recursion is stopped when the predicate is verified. Inputs pred Given an attribute’s value, determine if recursion should stop. attrs The attribute set to recursively collect. Type collect :: (AttrSet -> Bool) -> AttrSet -> [x] Examples Example 20. lib.attrsets.collect usage example collect isList { a = { b = ["b"]; }; c = [1]; } => [["b"] [1]] collect (x: x ? outPath) { a = { outPath = "a/"; }; b = { outPath = "b/"; }; } => [{ outPath = "a/"; } { outPath = "b/"; }] Located at lib/attrsets.nix:871 in <nixpkgs>.

##### lib.attrsets.cartesianProduct

Return the cartesian product of attribute set value combinations. Inputs attrsOfLists Attribute set with attributes that are lists of values Type cartesianProduct :: AttrSet -> [AttrSet] Examples Example 21. lib.attrsets.cartesianProduct usage example cartesianProduct { a = [ 1 2 ]; b = [ 10 20 ]; } => [ { a = 1; b = 10; } { a = 1; b = 20; } { a = 2; b = 10; } { a = 2; b = 20; } ] Located at lib/attrsets.nix:911 in <nixpkgs>.

##### lib.attrsets.mapCartesianProduct

Return the result of function f applied to the cartesian product of attribute set value combinations. Equivalent to using cartesianProduct followed by map. Inputs f A function, given an attribute set, it returns a new value. attrsOfLists Attribute set with attributes that are lists of values Type mapCartesianProduct :: (AttrSet -> a) -> AttrSet -> [a] Examples Example 22. lib.attrsets.mapCartesianProduct usage example mapCartesianProduct ({a, b}: "${a}-${b}") { a = [ "1" "2" ]; b = [ "3" "4" ]; } => [ "1-3" "1-4" "2-3" "2-4" ] Located at lib/attrsets.nix:951 in <nixpkgs>.

##### lib.attrsets.nameValuePair

Utility function that creates a {name, value} pair as expected by builtins.listToAttrs. Inputs name Attribute name value Attribute value Type nameValuePair :: String -> Any -> { name :: String; value :: Any; } Examples Example 23. lib.attrsets.nameValuePair usage example nameValuePair "some" 6 => { name = "some"; value = 6; } Located at lib/attrsets.nix:983 in <nixpkgs>.

##### lib.attrsets.mapAttrs

Apply a function to each element in an attribute set, creating a new attribute set. Inputs f A function that takes an attribute name and its value, and returns the new value for the attribute. attrset The attribute set to iterate through. Type mapAttrs :: (String -> Any -> Any) -> AttrSet -> AttrSet Examples Example 24. lib.attrsets.mapAttrs usage example mapAttrs (name: value: name + "-" + value) { x = "foo"; y = "bar"; } => { x = "x-foo"; y = "y-bar"; } Located at lib/attrsets.nix:1016 in <nixpkgs>.

##### lib.attrsets.mapAttrs'

Like mapAttrs, but allows the name of each attribute to be changed in addition to the value. The applied function should return both the new name and value as a nameValuePair. Inputs f A function, given an attribute’s name and value, returns a new nameValuePair. set Attribute set to map over. Type mapAttrs' :: (String -> Any -> { name :: String; value :: Any; }) -> AttrSet -> AttrSet Examples Example 25. lib.attrsets.mapAttrs' usage example mapAttrs' (name: value: nameValuePair ("foo_" + name) ("bar-" + value)) { x = "a"; y = "b"; } => { foo_x = "bar-a"; foo_y = "bar-b"; } Located at lib/attrsets.nix:1051 in <nixpkgs>.

##### lib.attrsets.mapAttrsToList

Call a function for each attribute in the given set and return the result in a list. Inputs f A function, given an attribute’s name and value, returns a new value. attrs Attribute set to map over. Type mapAttrsToList :: (String -> a -> b) -> AttrSet -> [b] Examples Example 26. lib.attrsets.mapAttrsToList usage example mapAttrsToList (name: value: name + value) { x = "a"; y = "b"; } => [ "xa" "yb" ] Located at lib/attrsets.nix:1085 in <nixpkgs>.

##### lib.attrsets.attrsToList

Deconstruct an attrset to a list of name-value pairs as expected by builtins.listToAttrs. Each element of the resulting list is an attribute set with these attributes: name (string): The name of the attribute value (any): The value of the attribute The following is always true: builtins.listToAttrs (attrsToList attrs) == attrs

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
