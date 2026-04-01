---
title: "Operators - Nix 2.28.6 Reference Manual"
source: language/operators.html
---

# Operators - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Operators

NameSyntaxAssociativityPrecedence Attribute selectionattrset . attrpath [ or expr ]none1 Function applicationfunc exprleft2 Arithmetic negation- numbernone3 Has attributeattrset ? attrpathnone4 List concatenationlist ++ listright5 Multiplicationnumber * numberleft6 Divisionnumber / numberleft6 Subtractionnumber - numberleft7 Additionnumber + numberleft7 String concatenationstring + stringleft7 Path concatenationpath + pathleft7 Path and string concatenationpath + stringleft7 String and path concatenationstring + pathleft7 Logical negation (NOT)! boolnone8 Updateattrset // attrsetright9 Less thanexpr < exprnone10 Less than or equal toexpr <= exprnone10 Greater thanexpr > exprnone10 Greater than or equal toexpr >= exprnone10 Equalityexpr == exprnone11 Inequalityexpr != exprnone11 Logical conjunction (AND)bool && boolleft12 Logical disjunction (OR)bool || boolleft13 Logical implicationbool -> boolright14 Pipe operator (experimental)expr |> funcleft15 Pipe operator (experimental)func <| exprright15

### Attribute selection

Syntax attrset . attrpath [ or expr ] Select the attribute denoted by attribute path attrpath from attribute set attrset. If the attribute doesn’t exist, return the expr after or if provided, otherwise abort evaluation.

### Function application

Syntax func expr Apply the callable value func to the argument expr. Note the absence of any visible operator symbol. A callable value is either: a user-defined function a built-in function an attribute set with a __functor attribute Warning List items are also separated by whitespace, which means that function calls in list items must be enclosed by parentheses.

### Has attribute

Syntax attrset ? attrpath Test whether attribute set attrset contains the attribute denoted by attrpath. The result is a Boolean value. See also: builtins.hasAttr After evaluating attrset and attrpath, the computational complexity is O(log(n)) for n attributes in the attrset

### Arithmetic

Numbers will retain their type unless mixed with other numeric types: Pure integer operations will always return integers, whereas any operation involving at least one floating point number returns a floating point number. Evaluation of the following numeric operations throws an evaluation error: Division by zero Integer overflow, that is, any operation yielding a result outside of the representable range of Nix language integers See also Comparison and Equality. The + operator is overloaded to also work on strings and paths.

### String concatenation

Syntax string + string Concatenate two strings and merge their string contexts.

### Path concatenation

Syntax path + path Concatenate two paths. The result is a path.

### Path and string concatenation

Syntax path + string Concatenate path with string. The result is a path. Note The string must not have a string context that refers to a store path.

### String and path concatenation

Syntax string + path Concatenate string with path. The result is a string. Important The file or directory at path must exist and is copied to the store. The path appears in the result as the corresponding store path.

### Update

Syntax attrset1 // attrset2 Update attribute set attrset1 with names and values from attrset2. The returned attribute set will have all of the attributes in attrset1 and attrset2. If an attribute name is present in both, the attribute value from the latter is taken.

### Comparison

Comparison is arithmetic for numbers lexicographic for strings and paths item-wise lexicographic for lists: elements at the same index in both lists are compared according to their type and skipped if they are equal. All comparison operators are implemented in terms of <, and the following equivalencies hold: comparisonimplementation a <= b! ( b < a ) a > bb < a a >= b! ( a < b )

### Equality

Attribute sets and lists are compared recursively, and therefore are fully evaluated. Comparison of functions always returns false. Numbers are type-compatible, see arithmetic operators. Floating point numbers only differ up to a limited precision.

### Logical implication

Equivalent to !b1 || b2 (or if b1 then b2 else true)

### Pipe operators

a |> b is equivalent to b a a <| b is equivalent to a b Example nix-repl> 1 |> builtins.add 2 |> builtins.mul 3 9 nix-repl> builtins.add 1 <| builtins.mul 2 <| 3 7 Warning This syntax is part of an experimental feature and may change in future releases. To use this syntax, make sure the pipe-operators experimental feature is enabled. For example, include the following in nix.conf: extra-experimental-features = pipe-operators
