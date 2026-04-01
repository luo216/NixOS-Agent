---
title: "Nixpkgs lib"
source: index.html
---
#### Note

The argument to the given fixed-point function after applying an overlay will not refer to its own return value, but rather to the value after evaluating the overlay function. The given fixed-point function is called with a separate argument than if it was evaluated with lib.fix. Example 149. Extend a fixed-point function with an overlay Define a fixed-point function f that expects its own output as the argument final: f = final: { # Constant value a a = 1; # b depends on the final value of a, available as final.a b = final.a + 2; } Evaluate this using lib.fix to get the final result: fix f => { a = 1; b = 3; } An overlay represents a modification or extension of such a fixed-point function. Here’s an example of an overlay: overlay = final: prev: { # Modify the previous value of a, available as prev.a a = prev.a + 10; # Extend the attribute set with c, letting it depend on the final values of a and b c = final.a + final.b; } Use extends overlay f to apply the overlay to the fixed-point function f. This produces a new fixed-point function g with the combined behavior of f and overlay: g = extends overlay f The result is a function, so we can’t print it directly, but it’s the same as: g' = final: { # The constant from f, but changed with the overlay a = 1 + 10; # Unchanged from f b = final.a + 2; # Extended in the overlay c = final.a + final.b; } Evaluate this using lib.fix again to get the final result: fix g => { a = 11; b = 13; c = 24; } Inputs overlay The overlay to apply to the fixed-point function f The fixed-point function Type extends :: (Attrs -> Attrs -> Attrs) # The overlay to apply to the fixed-point function -> (Attrs -> Attrs) # A fixed-point function -> (Attrs -> Attrs) # The resulting fixed-point function Examples Example 150. lib.fixedPoints.extends usage example f = final: { a = 1; b = final.a + 2; } fix f => { a = 1; b = 3; } fix (extends (final: prev: { a = prev.a + 10; }) f) => { a = 11; b = 13; } fix (extends (final: prev: { b = final.a + 5; }) f) => { a = 1; b = 6; } fix (extends (final: prev: { c = final.a + final.b; }) f) => { a = 1; b = 3; c = 4; } Located at lib/fixed-points.nix:319 in <nixpkgs>.

##### lib.fixedPoints.composeExtensions

Compose two overlay functions and return a single overlay function that combines them. For more details see: composeManyExtensions. Located at lib/fixed-points.nix:334 in <nixpkgs>.

##### lib.fixedPoints.composeManyExtensions

Composes a list of overlays and returns a single overlay function that combines them.

#### Note

The result is produced by using the update operator //. This means nested values of previous overlays are not merged recursively. In other words, previously defined attributes are replaced, ignoring the previous value, unless referenced by the overlay; for example final: prev: { foo = final.foo + 1; }. Inputs extensions A list of overlay functions

#### Note

The order of the overlays in the list is important. Each overlay function takes two arguments, by convention final and prev, and returns an attribute set. final is the result of the fixed-point function, with all overlays applied. prev is the result of the previous overlay function(s). Type # Pseudo code let # final prev # ↓ ↓ OverlayFn = { ... } -> { ... } -> { ... }; in composeManyExtensions :: ListOf OverlayFn -> OverlayFn Examples Example 151. lib.fixedPoints.composeManyExtensions usage example let # The "original function" that is extended by the overlays. # Note that it doesn't have prev: as argument since no overlay function precedes it. original = final: { a = 1; }; # Each overlay function has 'final' and 'prev' as arguments. overlayA = final: prev: { b = final.c; c = 3; }; overlayB = final: prev: { c = 10; x = prev.c or 5; }; extensions = composeManyExtensions [ overlayA overlayB ]; # Calculate the fixed point of all composed overlays. fixedpoint = lib.fix (lib.extends extensions original ); in fixedpoint => { a = 1; b = 10; c = 10; x = 3; } Located at lib/fixed-points.nix:406 in <nixpkgs>.

##### lib.fixedPoints.makeExtensible

Create an overridable, recursive attribute set. For example: nix-repl> obj = makeExtensible (final: { }) nix-repl> obj { __unfix__ = «lambda»; extend = «lambda»; } nix-repl> obj = obj.extend (final: prev: { foo = "foo"; }) nix-repl> obj { __unfix__ = «lambda»; extend = «lambda»; foo = "foo"; } nix-repl> obj = obj.extend (final: prev: { foo = prev.foo + " + "; bar = "bar"; foobar = final.foo + final.bar; }) nix-repl> obj { __unfix__ = «lambda»; bar = "bar"; extend = «lambda»; foo = "foo + "; foobar = "foo + bar"; } Located at lib/fixed-points.nix:428 in <nixpkgs>.

##### lib.fixedPoints.makeExtensibleWithCustomName

Same as makeExtensible but the name of the extending attribute is customized. Inputs extenderName 1. Function argument rattrs 2. Function argument Located at lib/fixed-points.nix:444 in <nixpkgs>.

##### lib.fixedPoints.toExtension

Convert to an extending function (overlay). toExtension is the toFunction for extending functions (a.k.a. extensions or overlays). It converts a non-function or a single-argument function to an extending function, while returning a two-argument function as-is. That is, it takes a value of the shape x, prev: x, or final: prev: x, and returns final: prev: x, assuming x is not a function. This function takes care of the input to stdenv.mkDerivation’s overrideAttrs function. It bridges the gap between <pkg>.overrideAttrs before and after the overlay-style support. Inputs f The function or value to convert to an extending function. Type toExtension :: b' -> Any -> Any -> b' or toExtension :: (a -> b') -> Any -> a -> b' or toExtension :: (a -> a -> b) -> a -> a -> b where b' = ! Callable Set a = b = b' = AttrSet & ! Callable to make toExtension return an extending function. Examples Example 152. lib.fixedPoints.toExtension usage example fix (final: { a = 0; c = final.a; }) => { a = 0; c = 0; }; fix (extends (toExtension { a = 1; b = 2; }) (final: { a = 0; c = final.a; })) => { a = 1; b = 2; c = 1; }; fix (extends (toExtension (prev: { a = 1; b = prev.a; })) (final: { a = 0; c = final.a; })) => { a = 1; b = 0; c = 1; }; fix (extends (toExtension (final: prev: { a = 1; b = prev.a; c = final.a + 1 })) (final: { a = 0; c = final.a; })) => { a = 1; b = 0; c = 2; }; Located at lib/fixed-points.nix:509 in <nixpkgs>.

#### lib.lists: list manipulation functions

General list operations.

##### lib.lists.singleton

Create a list consisting of a single element. singleton x is sometimes more convenient with respect to indentation than [x] when x spans multiple lines. Inputs x 1. Function argument Type singleton :: a -> [a] Examples Example 153. lib.lists.singleton usage example singleton "foo" => [ "foo" ] Located at lib/lists.nix:60 in <nixpkgs>.

##### lib.lists.forEach

Apply the function to each element in the list. Same as map, but arguments flipped. Inputs xs 1. Function argument f 2. Function argument Type forEach :: [a] -> (a -> b) -> [b] Examples Example 154. lib.lists.forEach usage example forEach [ 1 2 ] (x: toString x ) => [ "1" "2" ] Located at lib/lists.nix:95 in <nixpkgs>.

##### lib.lists.foldr

“right fold” a binary function op between successive elements of list with nul as the starting value, i.e., foldr op nul [x_1 x_2 ... x_n] == op x_1 (op x_2 ... (op x_n nul)). Inputs op 1. Function argument nul 2. Function argument list 3. Function argument Type foldr :: (a -> b -> b) -> b -> [a] -> b Examples Example 155. lib.lists.foldr usage example concat = foldr (a: b: a + b) "z" concat [ "a" "b" "c" ] => "abcz" # different types strange = foldr (int: str: toString (int + 1) + str) "a" strange [ 1 2 3 4 ] => "2345a" Located at lib/lists.nix:138 in <nixpkgs>.

##### lib.lists.fold

fold is an alias of foldr for historic reasons Located at lib/lists.nix:150 in <nixpkgs>.

##### lib.lists.foldl

“left fold”, like foldr, but from the left: foldl op nul [x_1 x_2 ... x_n] == op (... (op (op nul x_1) x_2) ... x_n). Inputs op 1. Function argument nul 2. Function argument list 3. Function argument Type foldl :: (b -> a -> b) -> b -> [a] -> b Examples Example 156. lib.lists.foldl usage example lconcat = foldl (a: b: a + b) "z" lconcat [ "a" "b" "c" ] => "zabc" # different types lstrange = foldl (str: int: str + toString (int + 1)) "a" lstrange [ 1 2 3 4 ] => "a2345" Located at lib/lists.nix:193 in <nixpkgs>.

##### lib.lists.foldl'

Reduce a list by applying a binary operator from left to right, starting with an initial accumulator. Before each application of the operator, the accumulator value is evaluated. This behavior makes this function stricter than foldl. Unlike builtins.foldl', the initial accumulator argument is evaluated before the first iteration. A call like foldl' op acc₀ [ x₀ x₁ x₂ ... xₙ₋₁ xₙ ] is (denotationally) equivalent to the following, but with the added benefit that foldl' itself will never overflow the stack. let acc₁ = builtins.seq acc₀ (op acc₀ x₀ ); acc₂ = builtins.seq acc₁ (op acc₁ x₁ ); acc₃ = builtins.seq acc₂ (op acc₂ x₂ ); ... accₙ = builtins.seq accₙ₋₁ (op accₙ₋₁ xₙ₋₁); accₙ₊₁ = builtins.seq accₙ (op accₙ xₙ ); in accₙ₊₁ # Or ignoring builtins.seq op (op (... (op (op (op acc₀ x₀) x₁) x₂) ...) xₙ₋₁) xₙ Inputs op The binary operation to run, where the two arguments are: acc: The current accumulator value: Either the initial one for the first iteration, or the result of the previous iteration x: The corresponding list element for this iteration acc The initial accumulator value. The accumulator value is evaluated in any case before the first iteration starts. To avoid evaluation even before the list argument is given an eta expansion can be used: list: lib.foldl' op acc list list The list to fold Type foldl' :: (acc -> x -> acc) -> acc -> [x] -> acc Examples Example 157. lib.lists.foldl' usage example foldl' (acc: x: acc + x) 0 [1 2 3] => 6 Located at lib/lists.nix:276 in <nixpkgs>.

##### lib.lists.imap0

Map with index starting from 0 Inputs f 1. Function argument list 2. Function argument Type imap0 :: (int -> a -> b) -> [a] -> [b] Examples Example 158. lib.lists.imap0 usage example imap0 (i: v: "${v}-${toString i}") ["a" "b"] => [ "a-0" "b-1" ] Located at lib/lists.nix:313 in <nixpkgs>.

##### lib.lists.imap1

Map with index starting from 1 Inputs f 1. Function argument list 2. Function argument Type imap1 :: (int -> a -> b) -> [a] -> [b] Examples Example 159. lib.lists.imap1 usage example imap1 (i: v: "${v}-${toString i}") ["a" "b"] => [ "a-1" "b-2" ] Located at lib/lists.nix:345 in <nixpkgs>.

##### lib.lists.ifilter0

Filter a list for elements that satisfy a predicate function. The predicate function is called with both the index and value for each element. It must return true/false to include/exclude a given element in the result. This function is strict in the result of the predicate function for each element. This function has O(n) complexity. Also see builtins.filter (available as lib.lists.filter), which can be used instead when the index isn’t needed. Inputs ipred The predicate function, it takes two arguments: (int): the index of the element. (a): the value of the element. It must return true/false to include/exclude a given element from the result. list The list to filter using the predicate. Type ifilter0 :: (int -> a -> bool) -> [a] -> [a] Examples Example 160. lib.lists.ifilter0 usage example ifilter0 (i: v: i == 0 || v > 2) [ 1 2 3 ] => [ 1 3 ] Located at lib/lists.nix:386 in <nixpkgs>.

##### lib.lists.concatMap

Map and concatenate the result. Type concatMap :: (a -> [b]) -> [a] -> [b] Examples Example 161. lib.lists.concatMap usage example concatMap (x: [x] ++ ["z"]) ["a" "b"] => [ "a" "z" "b" "z" ] Located at lib/lists.nix:412 in <nixpkgs>.

##### lib.lists.flatten

Flatten the argument into a single list; that is, nested lists are spliced into the top-level lists. Inputs x 1. Function argument Examples Example 162. lib.lists.flatten usage example flatten [1 [2 [3] 4] 5] => [1 2 3 4 5] flatten 1 => [1] Located at lib/lists.nix:437 in <nixpkgs>.

##### lib.lists.remove

Remove elements equal to ‘e’ from a list. Useful for buildInputs. Inputs e Element to remove from list list The list Type remove :: a -> [a] -> [a] Examples Example 163. lib.lists.remove usage example remove 3 [ 1 3 4 3 ] => [ 1 4 ] Located at lib/lists.nix:469 in <nixpkgs>.

##### lib.lists.findSingle

Find the sole element in the list matching the specified predicate. Returns default if no such element exists, or multiple if there are multiple matching elements. Inputs pred Predicate default Default value to return if element was not found. multiple Default value to return if more than one element was found list Input list Type findSingle :: (a -> bool) -> a -> a -> [a] -> a Examples Example 164. lib.lists.findSingle usage example findSingle (x: x == 3) "none" "multiple" [ 1 3 3 ] => "multiple" findSingle (x: x == 3) "none" "multiple" [ 1 3 ] => 3 findSingle (x: x == 3) "none" "multiple" [ 1 9 ] => "none" Located at lib/lists.nix:517 in <nixpkgs>.

##### lib.lists.findFirstIndex

Find the first index in the list matching the specified predicate or return default if no such element exists. Inputs pred Predicate default Default value to return list Input list Type findFirstIndex :: (a -> Bool) -> b -> [a] -> (Int | b) Examples Example 165. lib.lists.findFirstIndex usage example findFirstIndex (x: x > 3) null [ 0 6 4 ] => 1 findFirstIndex (x: x > 9) null [ 0 6 4 ] => null Located at lib/lists.nix:567 in <nixpkgs>.

##### lib.lists.findFirst

Find the first element in the list matching the specified predicate or return default if no such element exists. Inputs pred Predicate default Default value to return list Input list Type findFirst :: (a -> bool) -> a -> [a] -> a Examples Example 166. lib.lists.findFirst usage example findFirst (x: x > 3) 7 [ 1 6 4 ] => 6 findFirst (x: x > 9) 7 [ 1 6 4 ] => 7 Located at lib/lists.nix:637 in <nixpkgs>.

##### lib.lists.any

Returns true if function pred returns true for at least one element of list. Inputs pred Predicate list Input list Type any :: (a -> bool) -> [a] -> bool Examples Example 167. lib.lists.any usage example any isString [ 1 "a" { } ] => true any isString [ 1 { } ] => false Located at lib/lists.nix:677 in <nixpkgs>.

##### lib.lists.all

Returns true if function pred returns true for all elements of list. Inputs pred Predicate list Input list Type all :: (a -> bool) -> [a] -> bool Examples Example 168. lib.lists.all usage example all (x: x < 3) [ 1 2 ] => true all (x: x < 3) [ 1 2 3 ] => false Located at lib/lists.nix:712 in <nixpkgs>.

##### lib.lists.count

Count how many elements of list match the supplied predicate function. Inputs pred Predicate Type count :: (a -> bool) -> [a] -> int Examples Example 169. lib.lists.count usage example count (x: x == 3) [ 3 2 3 4 6 ] => 2 Located at lib/lists.nix:741 in <nixpkgs>.

##### lib.lists.optional

Return a singleton list or an empty list, depending on a boolean value. Useful when building lists with optional elements (e.g. ++ optional (system == "i686-linux") firefox). Inputs cond 1. Function argument elem 2. Function argument Type optional :: bool -> a -> [a] Examples Example 170. lib.lists.optional usage example optional true "foo" => [ "foo" ] optional false "foo" => [ ] Located at lib/lists.nix:777 in <nixpkgs>.

##### lib.lists.optionals

Returns a list or an empty list, depending on a boolean value. Inputs cond Condition elems List to return if condition is true Type optionals :: bool -> [a] -> [a] Examples Example 171. lib.lists.optionals usage example optionals true [ 2 3 ] => [ 2 3 ] optionals false [ 2 3 ] => [ ] Located at lib/lists.nix:811 in <nixpkgs>.

##### lib.lists.toList

If argument is a list, return it; else, wrap it in a singleton list. If you’re using this, you should almost certainly reconsider if there isn’t a more “well-typed” approach. Inputs x 1. Function argument Examples Example 172. lib.lists.toList usage example toList [ 1 2 ] => [ 1 2 ] toList "hi" => [ "hi" ] Located at lib/lists.nix:837 in <nixpkgs>.

##### lib.lists.range

Returns a list of integers from first up to and including last. Inputs first First integer in the range last Last integer in the range Type range :: int -> int -> [int] Examples Example 173. lib.lists.range usage example range 2 4 => [ 2 3 4 ] range 3 2 => [ ] Located at lib/lists.nix:871 in <nixpkgs>.

##### lib.lists.replicate

Returns a list with n copies of an element. Inputs n 1. Function argument elem 2. Function argument Type replicate :: int -> a -> [a] Examples Example 174. lib.lists.replicate usage example replicate 3 "a" => [ "a" "a" "a" ] replicate 2 true => [ true true ] Located at lib/lists.nix:905 in <nixpkgs>.

##### lib.lists.partition

Splits the elements of a list in two lists, right and wrong, depending on the evaluation of a predicate. Inputs pred Predicate list Input list Type (a -> bool) -> [a] -> { right :: [a]; wrong :: [a]; } Examples Example 175. lib.lists.partition usage example partition (x: x > 2) [ 5 1 2 3 4 ] => { right = [ 5 3 4 ]; wrong = [ 1 2 ]; } Located at lib/lists.nix:938 in <nixpkgs>.

##### lib.lists.groupBy'

Splits the elements of a list into many lists, using the return value of a predicate. Predicate should return a string which becomes keys of attrset groupBy returns. groupBy' allows to customise the combining function and initial value Inputs op 1. Function argument nul 2. Function argument pred 3. Function argument lst 4. Function argument Examples Example 176. lib.lists.groupBy' usage example groupBy (x: boolToString (x > 2)) [ 5 1 2 3 4 ] => { true = [ 5 3 4 ]; false = [ 1 2 ]; } groupBy (x: x.name) [ {name = "icewm"; script = "icewm &";} {name = "xfce"; script = "xfce4-session &";} {name = "icewm"; script = "icewmbg &";} {name = "mate"; script = "gnome-session &";} ] => { icewm = [ { name = "icewm"; script = "icewm &"; } { name = "icewm"; script = "icewmbg &"; } ]; mate = [ { name = "mate"; script = "gnome-session &"; } ]; xfce = [ { name = "xfce"; script = "xfce4-session &"; } ]; } groupBy' builtins.add 0 (x: boolToString (x > 2)) [ 5 1 2 3 4 ] => { true = 12; false = 3; } Located at lib/lists.nix:987 in <nixpkgs>.

##### lib.lists.zipListsWith

Merges two lists of the same size together. If the sizes aren’t the same the merging stops at the shortest. How both lists are merged is defined by the first argument. Inputs f Function to zip elements of both lists fst First list snd Second list Type zipListsWith :: (a -> b -> c) -> [a] -> [b] -> [c] Examples Example 177. lib.lists.zipListsWith usage example zipListsWith (a: b: a + b) ["h" "l"] ["e" "o"] => ["he" "lo"] Located at lib/lists.nix:1039 in <nixpkgs>.

##### lib.lists.zipLists

Merges two lists of the same size together. If the sizes aren’t the same the merging stops at the shortest. Inputs fst First list snd Second list Type zipLists :: [a] -> [b] -> [{ fst :: a; snd :: b; }] Examples Example 178. lib.lists.zipLists usage example zipLists [ 1 2 ] [ "a" "b" ] => [ { fst = 1; snd = "a"; } { fst = 2; snd = "b"; } ] Located at lib/lists.nix:1074 in <nixpkgs>.

##### lib.lists.reverseList

Reverse the order of the elements of a list. Inputs xs 1. Function argument Type reverseList :: [a] -> [a] Examples Example 179. lib.lists.reverseList usage example reverseList [ "b" "o" "j" ] => [ "j" "o" "b" ] Located at lib/lists.nix:1102 in <nixpkgs>.

##### lib.lists.listDfs

Depth-First Search (DFS) for lists list != []. before a b == true means that b depends on a (there’s an edge from b to a). Inputs stopOnCycles 1. Function argument before 2. Function argument list 3. Function argument Examples Example 180. lib.lists.listDfs usage example listDfs true hasPrefix [ "/home/user" "other" "/" "/home" ] == { minimal = "/"; # minimal element visited = [ "/home/user" ]; # seen elements (in reverse order) rest = [ "/home" "other" ]; # everything else } listDfs true hasPrefix [ "/home/user" "other" "/" "/home" "/" ] == { cycle = "/"; # cycle encountered at this element loops = [ "/" ]; # and continues to these elements visited = [ "/" "/home/user" ]; # elements leading to the cycle (in reverse order) rest = [ "/home" "other" ]; # everything else Located at lib/lists.nix:1149 in <nixpkgs>.

##### lib.lists.toposort

Sort a list based on a partial ordering using DFS. This implementation is O(N^2), if your ordering is linear, use sort instead. before a b == true means that b should be after a in the result. Inputs before 1. Function argument list 2. Function argument Examples Example 181. lib.lists.toposort usage example toposort hasPrefix [ "/home/user" "other" "/" "/home" ] == { result = [ "/" "/home" "/home/user" "other" ]; } toposort hasPrefix [ "/home/user" "other" "/" "/home" "/" ] == { cycle = [ "/home/user" "/" "/" ]; # path leading to a cycle loops = [ "/" ]; } # loops back to these elements toposort hasPrefix [ "other" "/home/user" "/home" "/" ] == { result = [ "other" "/" "/home" "/home/user" ]; } toposort (a: b: a < b) [ 3 2 1 ] == { result = [ 1 2 3 ]; } Located at lib/lists.nix:1214 in <nixpkgs>.

##### lib.lists.sort

Sort a list based on a comparator function which compares two elements and returns true if the first argument is strictly below the second argument. The returned list is sorted in an increasing order. The implementation does a quick-sort. See also sortOn, which applies the default comparison on a function-derived property, and may be more efficient. Inputs comparator 1. Function argument list 2. Function argument Type sort :: (a -> a -> Bool) -> [a] -> [a] Examples Example 182. lib.lists.sort usage example sort (p: q: p < q) [ 5 3 7 ] => [ 3 5 7 ] Located at lib/lists.nix:1273 in <nixpkgs>.

##### lib.lists.sortOn

Sort a list based on the default comparison of a derived property b. The items are returned in b-increasing order. Performance: The passed function f is only evaluated once per item, unlike an unprepared sort using f p < f q. Laws: sortOn f == sort (p: q: f p < f q) Inputs f 1. Function argument list 2. Function argument Type sortOn :: (a -> b) -> [a] -> [a], for comparable b Examples Example 183. lib.lists.sortOn usage example sortOn stringLength [ "aa" "b" "cccc" ] => [ "b" "aa" "cccc" ] Located at lib/lists.nix:1318 in <nixpkgs>.

##### lib.lists.compareLists

Compare two lists element-by-element with a comparison function cmp. List elements are compared pairwise in order by the provided comparison function cmp, the first non-equal pair of elements determines the result.

#### Note

The < operator can also be used to compare lists using a boolean condition. (e.g. [1 2] < [1 3] is true). See also language operators for more information. Inputs cmp The comparison function a: b: ... must return: 0 if a and b are equal 1 if a is greater than b -1 if a is less than b See lib.compare for a an example implementation. a The first list b The second list Examples Example 184. lib.lists.compareLists usage examples compareLists lib.compare [] [] => 0 compareLists lib.compare [] [ "a" ] => -1 compareLists lib.compare [ "a" ] [] => 1 compareLists lib.compare [ "a" "b" ] [ "a" "c" ] => -1 Located at lib/lists.nix:1382 in <nixpkgs>.

##### lib.lists.naturalSort

Sort list using “Natural sorting”. Numeric portions of strings are sorted in numeric order. Inputs lst 1. Function argument Examples Example 185. lib.lists.naturalSort usage example naturalSort ["disk11" "disk8" "disk100" "disk9"] => ["disk8" "disk9" "disk11" "disk100"] naturalSort ["10.46.133.149" "10.5.16.62" "10.54.16.25"] => ["10.5.16.62" "10.46.133.149" "10.54.16.25"] naturalSort ["v0.2" "v0.15" "v0.0.9"] => [ "v0.0.9" "v0.2" "v0.15" ] Located at lib/lists.nix:1419 in <nixpkgs>.

##### lib.lists.take

Returns the first (at most) N elements of a list. Inputs count Number of elements to take list Input list Type take :: int -> [a] -> [a] Examples Example 186. lib.lists.take usage example take 2 [ "a" "b" "c" "d" ] => [ "a" "b" ] take 2 [ ] => [ ] Located at lib/lists.nix:1463 in <nixpkgs>.

##### lib.lists.takeEnd

Returns the last (at most) N elements of a list. Inputs count Maximum number of elements to pick list Input list Type takeEnd :: int -> [a] -> [a] Examples Example 187. lib.lists.takeEnd usage example takeEnd 2 [ "a" "b" "c" "d" ] => [ "c" "d" ] takeEnd 2 [ ] => [ ] Located at lib/lists.nix:1497 in <nixpkgs>.

##### lib.lists.drop

Remove the first (at most) N elements of a list. Inputs count Number of elements to drop list Input list Type drop :: int -> [a] -> [a] Examples Example 188. lib.lists.drop usage example drop 2 [ "a" "b" "c" "d" ] => [ "c" "d" ] drop 2 [ ] => [ ] Located at lib/lists.nix:1531 in <nixpkgs>.

##### lib.lists.dropEnd

Remove the last (at most) N elements of a list. Inputs count Number of elements to drop list Input list Type dropEnd :: Int -> [a] -> [a] Examples Example 189. lib.lists.dropEnd usage example dropEnd 2 [ "a" "b" "c" "d" ] => [ "a" "b" ] dropEnd 2 [ ] => [ ] Located at lib/lists.nix:1565 in <nixpkgs>.

##### lib.lists.hasPrefix

Whether the first list is a prefix of the second list. Inputs list1 1. Function argument list2 2. Function argument Type hasPrefix :: [a] -> [a] -> bool Examples Example 190. lib.lists.hasPrefix usage example hasPrefix [ 1 2 ] [ 1 2 3 4 ] => true hasPrefix [ 0 1 ] [ 1 2 3 4 ] => false Located at lib/lists.nix:1599 in <nixpkgs>.

##### lib.lists.removePrefix

Remove the first list as a prefix from the second list. Error if the first list isn’t a prefix of the second list. Inputs list1 1. Function argument list2 2. Function argument Type removePrefix :: [a] -> [a] -> [a] Examples Example 191. lib.lists.removePrefix usage example removePrefix [ 1 2 ] [ 1 2 3 4 ] => [ 3 4 ] removePrefix [ 0 1 ] [ 1 2 3 4 ] => <error> Located at lib/lists.nix:1634 in <nixpkgs>.

##### lib.lists.sublist

Returns a list consisting of at most count elements of list, starting at index start. Inputs start Index at which to start the sublist count Number of elements to take list Input list Type sublist :: int -> int -> [a] -> [a] Examples Example 192. lib.lists.sublist usage example sublist 1 3 [ "a" "b" "c" "d" "e" ] => [ "b" "c" "d" ] sublist 1 3 [ ] => [ ] Located at lib/lists.nix:1678 in <nixpkgs>.

##### lib.lists.commonPrefix

The common prefix of two lists. Inputs list1 1. Function argument list2 2. Function argument Type commonPrefix :: [a] -> [a] -> [a] Examples Example 193. lib.lists.commonPrefix usage example commonPrefix [ 1 2 3 4 5 6 ] [ 1 2 4 8 ] => [ 1 2 ] commonPrefix [ 1 2 3 ] [ 1 2 3 4 5 ] => [ 1 2 3 ] commonPrefix [ 1 2 3 ] [ 4 5 6 ] => [ ] Located at lib/lists.nix:1726 in <nixpkgs>.

##### lib.lists.last

Returns the last element of a list. This function throws an error if the list is empty. Inputs list 1. Function argument Type last :: [a] -> a Examples Example 194. lib.lists.last usage example last [ 1 2 3 ] => 3 Located at lib/lists.nix:1767 in <nixpkgs>.

##### lib.lists.init

Returns all elements but the last. This function throws an error if the list is empty. Inputs list 1. Function argument Type init :: [a] -> [a] Examples Example 195. lib.lists.init usage example init [ 1 2 3 ] => [ 1 2 ] Located at lib/lists.nix:1800 in <nixpkgs>.

##### lib.lists.crossLists

Returns the image of the cross product of some lists by a function. Examples Example 196. lib.lists.crossLists usage example crossLists (x: y: "${toString x}${toString y}") [[1 2] [3 4]] => [ "13" "14" "23" "24" ] If you have an attrset already, consider mapCartesianProduct: mapCartesianProduct (x: "${toString x.a}${toString x.b}") { a = [1 2]; b = [3 4]; } => [ "13" "14" "23" "24" ] Located at lib/lists.nix:1825 in <nixpkgs>.

##### lib.lists.unique

Remove duplicate elements from the list. O(n^2) complexity.

#### Note

If the list only contains strings and order is not important, the complexity can be reduced to O(n log n) by using lib.lists.uniqueStrings instead. Inputs list Input list Type unique :: [a] -> [a] Examples Example 197. lib.lists.unique usage example unique [ 3 2 3 4 ] => [ 3 2 4 ] Located at lib/lists.nix:1857 in <nixpkgs>.

##### lib.lists.uniqueStrings

Removes duplicate strings from the list. O(n log n) complexity.

#### Note

Order is not preserved. All elements of the list must be strings without context. This function fails when the list contains a non-string element or a string with context. In that case use lib.lists.unique instead. Inputs list List of strings Type uniqueStrings :: [ String ] -> [ String ] Examples Example 198. lib.lists.uniqueStrings usage example uniqueStrings [ "foo" "bar" "foo" ] => [ "bar" "foo" ] # order is not preserved Located at lib/lists.nix:1894 in <nixpkgs>.

##### lib.lists.allUnique

Check if list contains only unique elements. O(n^2) complexity. Inputs list 1. Function argument Type allUnique :: [a] -> bool Examples Example 199. lib.lists.allUnique usage example allUnique [ 3 2 3 4 ] => false allUnique [ 3 2 4 1 ] => true Located at lib/lists.nix:1924 in <nixpkgs>.

##### lib.lists.intersectLists

Intersects list ‘list1’ and another list (list2). O(nm) complexity. Inputs list1 First list list2 Second list Examples Example 200. lib.lists.intersectLists usage example intersectLists [ 1 2 3 ] [ 6 3 2 ] => [ 3 2 ] Located at lib/lists.nix:1952 in <nixpkgs>.

##### lib.lists.subtractLists

Subtracts list ‘e’ from another list (list2). O(nm) complexity. Inputs e First list list2 Second list Examples Example 201. lib.lists.subtractLists usage example subtractLists [ 3 2 ] [ 1 2 3 4 5 3 ] => [ 1 4 5 ] Located at lib/lists.nix:1980 in <nixpkgs>.

##### lib.lists.mutuallyExclusive

Test if two lists have no common element. It should be slightly more efficient than (intersectLists a b == []) Inputs a 1. Function argument b 2. Function argument Located at lib/lists.nix:1996 in <nixpkgs>.

##### lib.lists.concatAttrValues

Concatenate all attributes of an attribute set. This assumes that every attribute of the set is a list. Inputs set Attribute set with attributes that are lists Examples Example 202. lib.concatAttrValues usage example concatAttrValues { a = [ 1 2 ]; b = [ 3 ]; } => [ 1 2 3 ] Located at lib/lists.nix:2019 in <nixpkgs>.
