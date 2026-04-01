---
title: "Data Types - Nix 2.28.6 Reference Manual"
source: language/types.html
---

# Data Types - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Data Types

Every value in the Nix language has one of the following types: Integer Float Boolean String Path Null Attribute set List Function External

#### Integer

An integer in the Nix language is a signed 64-bit integer. Non-negative integers can be expressed as integer literals. Negative integers are created with the arithmetic negation operator. The function builtins.isInt can be used to determine if a value is an integer.

#### Float

A float in the Nix language is a 64-bit IEEE 754 floating-point number. Most non-negative floats can be expressed as float literals. Negative floats are created with the arithmetic negation operator. The function builtins.isFloat can be used to determine if a value is a float.

#### Boolean

A boolean in the Nix language is one of true or false. These values are available as attributes of builtins as builtins.true and builtins.false. The function builtins.isBool can be used to determine if a value is a boolean.

#### String

A string in the Nix language is an immutable, finite-length sequence of bytes, along with a string context. Nix does not assume or support working natively with character encodings. String values without string context can be expressed as string literals. The function builtins.isString can be used to determine if a value is a string.

#### Path

A path in the Nix language is an immutable, finite-length sequence of bytes starting with /, representing a POSIX-style, canonical file system path. Path values are distinct from string values, even if they contain the same sequence of bytes. Operations that produce paths will simplify the result as the standard C function realpath would, except that there is no symbolic link resolution. Paths are suitable for referring to local files, and are often preferable over strings. Path values do not contain trailing or duplicate slashes, ., or ... Relative path literals are automatically resolved relative to their base directory. Tooling can recognize path literals and provide additional features, such as autocompletion, refactoring automation and jump-to-file. A file is not required to exist at a given path in order for that path value to be valid, but a path that is converted to a string with string interpolation or string-and-path concatenation must resolve to a readable file or directory which will be copied into the Nix store. For instance, evaluating "${./foo.txt}" will cause foo.txt from the same directory to be copied into the Nix store and result in the string "/nix/store/<hash>-foo.txt". Operations such as import can also expect a path to resolve to a readable file or directory. Note The Nix language assumes that all input files will remain unchanged while evaluating a Nix expression. For example, assume you used a file path in an interpolated string during a nix repl session. Later in the same session, after having changed the file contents, evaluating the interpolated string with the file path again might not return a new store path, since Nix might not re-read the file contents. Use :r to reset the repl as needed. Path values can be expressed as path literals. The function builtins.isPath can be used to determine if a value is a path.

#### Null

There is a single value of type null in the Nix language. This value is available as an attribute on the builtins attribute set as builtins.null.

#### Attribute set

An attribute set can be constructed with an attribute set literal. The function builtins.isAttrs can be used to determine if a value is an attribute set.

#### List

A list can be constructed with a list literal. The function builtins.isList can be used to determine if a value is a list.

### Function

A function can be constructed with a function expression. The function builtins.isFunction can be used to determine if a value is a function.

### External

An external value is an opaque value created by a Nix plugin. Such a value can be substituted in Nix expressions but only created and used by plugin code.
