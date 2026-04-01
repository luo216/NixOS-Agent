---
title: "Nixpkgs lib"
source: index.html
---
##### lib.trivial.throwIfNot

Like the assert b; e expression, but with a custom error message and without the semicolon. If true, return the identity function, r: r. If false, throw the error message. Calls can be juxtaposed using function application, as (r: r) a = a, so (r: r) (r: r) a = a, and so forth. Inputs cond 1. Function argument msg 2. Function argument Type bool -> string -> a -> a Examples Example 144. lib.trivial.throwIfNot usage example throwIfNot (lib.isList overlays) "The overlays argument to nixpkgs must be a list." lib.foldr (x: throwIfNot (lib.isFunction x) "All overlays passed to nixpkgs must be functions.") (r: r) overlays pkgs Located at lib/trivial.nix:913 in <nixpkgs>.

##### lib.trivial.throwIf

Like throwIfNot, but negated (throw if the first argument is true). Inputs cond 1. Function argument msg 2. Function argument Type bool -> string -> a -> a Located at lib/trivial.nix:934 in <nixpkgs>.

##### lib.trivial.checkListOfEnum

Check if the elements in a list are valid values from a enum, returning the identity function, or throwing an error message otherwise. Inputs msg 1. Function argument valid 2. Function argument given 3. Function argument Type String -> List ComparableVal -> List ComparableVal -> a -> a Examples Example 145. lib.trivial.checkListOfEnum usage example let colorVariants = ["bright" "dark" "black"] in checkListOfEnum "color variants" [ "standard" "light" "dark" ] colorVariants; => error: color variants: bright, black unexpected; valid ones: standard, light, dark Located at lib/trivial.nix:972 in <nixpkgs>.

##### lib.trivial.setFunctionArgs

Add metadata about expected function arguments to a function. The metadata should match the format given by builtins.functionArgs, i.e. a set from expected argument to a bool representing whether that argument has a default or not. setFunctionArgs : (a → b) → Map String Bool → (a → b) This function is necessary because you can’t dynamically create a function of the { a, b ? foo, … }: format, but some facilities like callPackage expect to be able to query expected arguments. Inputs f 1. Function argument args 2. Function argument Located at lib/trivial.nix:1007 in <nixpkgs>.

##### lib.trivial.functionArgs

Extract the expected function arguments from a function. This works both with nix-native { a, b ? foo, … }: style functions and functions with args set with ‘setFunctionArgs’. It has the same return type and semantics as builtins.functionArgs. setFunctionArgs : (a → b) → Map String Bool. Inputs f 1. Function argument Located at lib/trivial.nix:1026 in <nixpkgs>.

##### lib.trivial.isFunction

Check whether something is a function or something annotated with function args. Inputs f 1. Function argument Located at lib/trivial.nix:1043 in <nixpkgs>.

##### lib.trivial.mirrorFunctionArgs

mirrorFunctionArgs f g creates a new function g' with the same behavior as g (g' x == g x) but its function arguments mirroring f (lib.functionArgs g' == lib.functionArgs f). Inputs f Function to provide the argument metadata g Function to set the argument metadata to Type mirrorFunctionArgs :: (a -> b) -> (a -> c) -> (a -> c) Examples Example 146. lib.trivial.mirrorFunctionArgs usage example addab = {a, b}: a + b addab { a = 2; b = 4; } => 6 lib.functionArgs addab => { a = false; b = false; } addab1 = attrs: addab attrs + 1 addab1 { a = 2; b = 4; } => 7 lib.functionArgs addab1 => { } addab1' = lib.mirrorFunctionArgs addab addab1 addab1' { a = 2; b = 4; } => 7 lib.functionArgs addab1' => { a = false; b = false; } Located at lib/trivial.nix:1089 in <nixpkgs>.

##### lib.trivial.toFunction

Turns any non-callable values into constant functions. Returns callable values as is. Inputs v Any value Examples Example 147. lib.trivial.toFunction usage example nix-repl> lib.toFunction 1 2 1 nix-repl> lib.toFunction (x: x + 1) 2 3 Located at lib/trivial.nix:1120 in <nixpkgs>.

##### lib.trivial.fromHexString

Convert a hexadecimal string to it’s integer representation. Type fromHexString :: String -> [ String ] Examples fromHexString "FF" => 255 fromHexString "0x7fffffffffffffff" => 9223372036854775807 Located at lib/trivial.nix:1141 in <nixpkgs>.

##### lib.trivial.toHexString

Convert the given positive integer to a string of its hexadecimal representation. For example: toHexString 0 => “0” toHexString 16 => “10” toHexString 250 => “FA” Located at lib/trivial.nix:1168 in <nixpkgs>.

##### lib.trivial.toBaseDigits

toBaseDigits base i converts the positive integer i to a list of its digits in the given base. For example: toBaseDigits 10 123 => [ 1 2 3 ] toBaseDigits 2 6 => [ 1 1 0 ] toBaseDigits 16 250 => [ 15 10 ] Inputs base 1. Function argument i 2. Function argument Located at lib/trivial.nix:1202 in <nixpkgs>.

##### lib.fixedPoints.fix

fix f computes the fixed point of the given function f. In other words, the return value is x in x = f x. f must be a lazy function. This means that x must be a value that can be partially evaluated, such as an attribute set, a list, or a function. This way, f can use one part of x to compute another part. Relation to syntactic recursion This section explains fix by refactoring from syntactic recursion to a call of fix instead. For context, Nix lets you define attributes in terms of other attributes syntactically using the rec { } syntax. nix-repl> rec { foo = "foo"; bar = "bar"; foobar = foo + bar; } { bar = "bar"; foo = "foo"; foobar = "foobar"; } This is convenient when constructing a value to pass to a function for example, but an equivalent effect can be achieved with the let binding syntax: nix-repl> let self = { foo = "foo"; bar = "bar"; foobar = self.foo + self.bar; }; in self { bar = "bar"; foo = "foo"; foobar = "foobar"; } But in general you can get more reuse out of let bindings by refactoring them to a function. nix-repl> f = self: { foo = "foo"; bar = "bar"; foobar = self.foo + self.bar; } This is where fix comes in, it contains the syntactic recursion that’s not in f anymore. nix-repl> fix = f: let self = f self; in self; By applying fix we get the final result. nix-repl> fix f { bar = "bar"; foo = "foo"; foobar = "foobar"; } Such a refactored f using fix is not useful by itself. See extends for an example use case. There self is also often called final. Inputs f 1. Function argument Type fix :: (a -> a) -> a Examples Example 148. lib.fixedPoints.fix usage example fix (self: { foo = "foo"; bar = "bar"; foobar = self.foo + self.bar; }) => { bar = "bar"; foo = "foo"; foobar = "foobar"; } fix (self: [ 1 2 (elemAt self 0 + elemAt self 1) ]) => [ 1 2 3 ] Located at lib/fixed-points.nix:92 in <nixpkgs>.

##### lib.fixedPoints.fix'

A variant of fix that records the original recursive attribute set in the result, in an attribute named __unfix__. This is useful in combination with the extends function to implement deep overriding. Inputs f 1. Function argument Located at lib/fixed-points.nix:112 in <nixpkgs>.

##### lib.fixedPoints.converge

Returns the fixpoint that f converges to when called iteratively, starting with the input x. nix-repl> converge (x: x / 2) 16 0 Inputs f 1. Function argument x 2. Function argument Type (a -> a) -> a -> a Located at lib/fixed-points.nix:146 in <nixpkgs>.

##### lib.fixedPoints.extends

Extend a function using an overlay. Overlays allow modifying and extending fixed-point functions, specifically ones returning attribute sets. A fixed-point function is a function which is intended to be evaluated by passing the result of itself as the argument. This is possible due to Nix’s lazy evaluation. A fixed-point function returning an attribute set has the form final: { # attributes } where final refers to the lazily evaluated attribute set returned by the fixed-point function. An overlay to such a fixed-point function has the form final: prev: { # attributes } where prev refers to the result of the original function to final, and final is the result of the composition of the overlay and the original function. Applying an overlay is done with extends: let f = final: { # attributes }; overlay = final: prev: { # attributes }; in extends overlay f; To get the value of final, use lib.fix: let f = final: { # attributes }; overlay = final: prev: { # attributes }; g = extends overlay f; in fix g
