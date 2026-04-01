---
title: "Nixpkgs lib"
source: index.html
---
#### lib.strings: string manipulation functions

String manipulation functions.

##### lib.strings.join

Concatenates a list of strings with a separator between each element. Inputs sep Separator to add between elements list List of strings that will be joined Type join :: string -> [ string ] -> string Examples Example 54. lib.strings.join usage example join ", " ["foo" "bar"] => "foo, bar" Located at lib/strings.nix:72 in <nixpkgs>.

##### lib.strings.concatStrings

Concatenate a list of strings. Type concatStrings :: [string] -> string Examples Example 55. lib.strings.concatStrings usage example concatStrings ["foo" "bar"] => "foobar" Located at lib/strings.nix:94 in <nixpkgs>.

##### lib.strings.concatMapStrings

Map a function over a list and concatenate the resulting strings. Inputs f 1. Function argument list 2. Function argument Type concatMapStrings :: (a -> string) -> [a] -> string Examples Example 56. lib.strings.concatMapStrings usage example concatMapStrings (x: "a" + x) ["foo" "bar"] => "afooabar" Located at lib/strings.nix:124 in <nixpkgs>.

##### lib.strings.concatImapStrings

Like concatMapStrings except that the f functions also gets the position as a parameter. Inputs f 1. Function argument list 2. Function argument Type concatImapStrings :: (int -> a -> string) -> [a] -> string Examples Example 57. lib.strings.concatImapStrings usage example concatImapStrings (pos: x: "${toString pos}-${x}") ["foo" "bar"] => "1-foo2-bar" Located at lib/strings.nix:155 in <nixpkgs>.

##### lib.strings.intersperse

Place an element between each element of a list Inputs separator Separator to add between elements list Input list Type intersperse :: a -> [a] -> [a] Examples Example 58. lib.strings.intersperse usage example intersperse "/" ["usr" "local" "bin"] => ["usr" "/" "local" "/" "bin"]. Located at lib/strings.nix:185 in <nixpkgs>.

##### lib.strings.concatStringsSep

Concatenate a list of strings with a separator between each element Inputs sep Separator to add between elements list List of input strings Type concatStringsSep :: string -> [string] -> string Examples Example 59. lib.strings.concatStringsSep usage example concatStringsSep "/" ["usr" "local" "bin"] => "usr/local/bin" Located at lib/strings.nix:225 in <nixpkgs>.

##### lib.strings.concatMapStringsSep

Maps a function over a list of strings and then concatenates the result with the specified separator interspersed between elements. Inputs sep Separator to add between elements f Function to map over the list list List of input strings Type concatMapStringsSep :: string -> (a -> string) -> [a] -> string Examples Example 60. lib.strings.concatMapStringsSep usage example concatMapStringsSep "-" (x: toUpper x) ["foo" "bar" "baz"] => "FOO-BAR-BAZ" Located at lib/strings.nix:260 in <nixpkgs>.

##### lib.strings.concatImapStringsSep

Same as concatMapStringsSep, but the mapping function additionally receives the position of its argument. Inputs sep Separator to add between elements f Function that receives elements and their positions list List of input strings Type concatIMapStringsSep :: string -> (int -> a -> string) -> [a] -> string Examples Example 61. lib.strings.concatImapStringsSep usage example concatImapStringsSep "-" (pos: x: toString (x / pos)) [ 6 6 6 ] => "6-3-2" Located at lib/strings.nix:296 in <nixpkgs>.

##### lib.strings.concatMapAttrsStringSep

Like concatMapStringsSep but takes an attribute set instead of a list. Inputs sep Separator to add between item strings f Function that takes each key and value and return a string attrs Attribute set to map from Type concatMapAttrsStringSep :: String -> (String -> Any -> String) -> AttrSet -> String Examples Example 62. lib.strings.concatMapAttrsStringSep usage example concatMapAttrsStringSep "\n" (name: value: "${name}: foo-${value}") { a = "0.1.0"; b = "0.2.0"; } => "a: foo-0.1.0\nb: foo-0.2.0" Located at lib/strings.nix:333 in <nixpkgs>.

##### lib.strings.concatLines

Concatenate a list of strings, adding a newline at the end of each one. Defined as concatMapStrings (s: s + "\n"). Inputs list List of strings. Any element that is not a string will be implicitly converted to a string. Type concatLines :: [string] -> string Examples Example 63. lib.strings.concatLines usage example concatLines [ "foo" "bar" ] => "foo\nbar\n" Located at lib/strings.nix:363 in <nixpkgs>.

##### lib.strings.replaceString

Given string s, replace every occurrence of the string from with the string to. Inputs from The string to be replaced to The string to replace with s The original string where replacements will be made Type replaceString :: string -> string -> string -> string Examples Example 64. lib.strings.replaceString usage example replaceString "world" "Nix" "Hello, world!" => "Hello, Nix!" replaceString "." "_" "v1.2.3" => "v1_2_3" Located at lib/strings.nix:398 in <nixpkgs>.

##### lib.strings.replicate

Repeat a string n times, and concatenate the parts into a new string. Inputs n 1. Function argument s 2. Function argument Type replicate :: int -> string -> string Examples Example 65. lib.strings.replicate usage example replicate 3 "v" => "vvv" replicate 5 "hello" => "hellohellohellohellohello" Located at lib/strings.nix:431 in <nixpkgs>.

##### lib.strings.trim

Remove leading and trailing whitespace from a string s. Whitespace is defined as any of the following characters: " ", “\t” “\r” “\n” Inputs s The string to trim Type trim :: string -> string Examples Example 66. lib.strings.trim usage example trim " hello, world! " => "hello, world!" Located at lib/strings.nix:461 in <nixpkgs>.

##### lib.strings.trimWith

Remove leading and/or trailing whitespace from a string s. To remove both leading and trailing whitespace, you can also use trim Whitespace is defined as any of the following characters: " ", “\t” “\r” “\n” Inputs config (Attribute set) start Whether to trim leading whitespace (false by default) end Whether to trim trailing whitespace (false by default) s The string to trim Type trimWith :: { start :: Bool; end :: Bool } -> String -> String Examples Example 67. lib.strings.trimWith usage example trimWith { start = true; } " hello, world! "} => "hello, world! " trimWith { end = true; } " hello, world! "} => " hello, world!" Located at lib/strings.nix:505 in <nixpkgs>.

##### lib.strings.makeSearchPath

Construct a Unix-style, colon-separated search path consisting of the given subDir appended to each of the given paths. Inputs subDir Directory name to append paths List of base paths Type makeSearchPath :: string -> [string] -> string Examples Example 68. lib.strings.makeSearchPath usage example makeSearchPath "bin" ["/root" "/usr" "/usr/local"] => "/root/bin:/usr/bin:/usr/local/bin" makeSearchPath "bin" [""] => "/bin" Located at lib/strings.nix:566 in <nixpkgs>.

##### lib.strings.makeSearchPathOutput

Construct a Unix-style search path by appending the given subDir to the specified output of each of the packages. If no output by the given name is found, fallback to .out and then to the default. Inputs output Package output to use subDir Directory name to append pkgs List of packages Type makeSearchPathOutput :: string -> string -> [package] -> string Examples Example 69. lib.strings.makeSearchPathOutput usage example makeSearchPathOutput "dev" "bin" [ pkgs.openssl pkgs.zlib ] => "/nix/store/9rz8gxhzf8sw4kf2j2f1grr49w8zx5vj-openssl-1.0.1r-dev/bin:/nix/store/wwh7mhwh269sfjkm6k5665b5kgp7jrk2-zlib-1.2.8/bin" Located at lib/strings.nix:604 in <nixpkgs>.

##### lib.strings.makeLibraryPath

Construct a library search path (such as RPATH) containing the libraries for a set of packages Inputs packages List of packages Type makeLibraryPath :: [package] -> string Examples Example 70. lib.strings.makeLibraryPath usage example makeLibraryPath [ "/usr" "/usr/local" ] => "/usr/lib:/usr/local/lib" pkgs = import <nixpkgs> { } makeLibraryPath [ pkgs.openssl pkgs.zlib ] => "/nix/store/9rz8gxhzf8sw4kf2j2f1grr49w8zx5vj-openssl-1.0.1r/lib:/nix/store/wwh7mhwh269sfjkm6k5665b5kgp7jrk2-zlib-1.2.8/lib" Located at lib/strings.nix:637 in <nixpkgs>.

##### lib.strings.makeIncludePath

Construct an include search path (such as C_INCLUDE_PATH) containing the header files for a set of packages or paths. Inputs packages List of packages Type makeIncludePath :: [package] -> string Examples Example 71. lib.strings.makeIncludePath usage example makeIncludePath [ "/usr" "/usr/local" ] => "/usr/include:/usr/local/include" pkgs = import <nixpkgs> { } makeIncludePath [ pkgs.openssl pkgs.zlib ] => "/nix/store/9rz8gxhzf8sw4kf2j2f1grr49w8zx5vj-openssl-1.0.1r-dev/include:/nix/store/wwh7mhwh269sfjkm6k5665b5kgp7jrk2-zlib-1.2.8-dev/include" Located at lib/strings.nix:668 in <nixpkgs>.

##### lib.strings.makeBinPath

Construct a binary search path (such as $PATH) containing the binaries for a set of packages. Inputs packages List of packages Type makeBinPath :: [package] -> string Examples Example 72. lib.strings.makeBinPath usage example makeBinPath ["/root" "/usr" "/usr/local"] => "/root/bin:/usr/bin:/usr/local/bin" Located at lib/strings.nix:696 in <nixpkgs>.

##### lib.strings.normalizePath

Normalize path, removing extraneous /s Inputs s 1. Function argument Type normalizePath :: string -> string Examples Example 73. lib.strings.normalizePath usage example normalizePath "/a//b///c/" => "/a/b/c/" Located at lib/strings.nix:723 in <nixpkgs>.

##### lib.strings.optionalString

Depending on the boolean `cond’, return either the given string or the empty string. Useful to concatenate against a bigger string. Inputs cond Condition string String to return if condition is true Type optionalString :: bool -> string -> string Examples Example 74. lib.strings.optionalString usage example optionalString true "some-string" => "some-string" optionalString false "some-string" => "" Located at lib/strings.nix:766 in <nixpkgs>.

##### lib.strings.hasPrefix

Determine whether a string has given prefix. Inputs pref Prefix to check for str Input string Type hasPrefix :: string -> string -> bool Examples Example 75. lib.strings.hasPrefix usage example hasPrefix "foo" "foobar" => true hasPrefix "foo" "barfoo" => false Located at lib/strings.nix:798 in <nixpkgs>.

##### lib.strings.hasSuffix

Determine whether a string has given suffix. Inputs suffix Suffix to check for content Input string Type hasSuffix :: string -> string -> bool Examples Example 76. lib.strings.hasSuffix usage example hasSuffix "foo" "foobar" => false hasSuffix "foo" "barfoo" => true Located at lib/strings.nix:841 in <nixpkgs>.

##### lib.strings.hasInfix

Determine whether a string contains the given infix Inputs infix 1. Function argument content 2. Function argument Type hasInfix :: string -> string -> bool Examples Example 77. lib.strings.hasInfix usage example hasInfix "bc" "abcd" => true hasInfix "ab" "abcd" => true hasInfix "cd" "abcd" => true hasInfix "foo" "abcd" => false Located at lib/strings.nix:891 in <nixpkgs>.

##### lib.strings.stringToCharacters

Convert a string s to a list of characters (i.e. singleton strings). This allows you to, e.g., map a function over each character. However, note that this will likely be horribly inefficient; Nix is not a general purpose programming language. Complex string manipulations should, if appropriate, be done in a derivation. Also note that Nix treats strings as a list of bytes and thus doesn’t handle unicode. Inputs s 1. Function argument Type stringToCharacters :: string -> [string] Examples Example 78. lib.strings.stringToCharacters usage example stringToCharacters "" => [ ] stringToCharacters "abc" => [ "a" "b" "c" ] stringToCharacters "🦄" => [ "�" "�" "�" "�" ] Located at lib/strings.nix:938 in <nixpkgs>.

##### lib.strings.stringAsChars

Manipulate a string character by character and replace them by strings before concatenating the results. Inputs f Function to map over each individual character s Input string Type stringAsChars :: (string -> string) -> string -> string Examples Example 79. lib.strings.stringAsChars usage example stringAsChars (x: if x == "a" then "i" else x) "nax" => "nix" Located at lib/strings.nix:969 in <nixpkgs>.

##### lib.strings.charToInt

Convert char to ascii value, must be in printable range Inputs c 1. Function argument Type charToInt :: string -> int Examples Example 80. lib.strings.charToInt usage example charToInt "A" => 65 charToInt "(" => 40 Located at lib/strings.nix:1003 in <nixpkgs>.

##### lib.strings.escape

Escape occurrence of the elements of list in string by prefixing it with a backslash. Inputs list 1. Function argument string 2. Function argument Type escape :: [string] -> string -> string Examples Example 81. lib.strings.escape usage example escape ["(" ")"] "(foo)" => "\\(foo\\)" Located at lib/strings.nix:1034 in <nixpkgs>.

##### lib.strings.escapeC

Escape occurrence of the element of list in string by converting to its ASCII value and prefixing it with \x. Only works for printable ascii characters. Inputs list 1. Function argument string 2. Function argument Type escapeC = [string] -> string -> string Examples Example 82. lib.strings.escapeC usage example escapeC [" "] "foo bar" => "foo\\x20bar" Located at lib/strings.nix:1066 in <nixpkgs>.

##### lib.strings.escapeURL

Escape the string so it can be safely placed inside a URL query. Inputs string 1. Function argument Type escapeURL :: string -> string Examples Example 83. lib.strings.escapeURL usage example escapeURL "foo/bar baz" => "foo%2Fbar%20baz" Located at lib/strings.nix:1098 in <nixpkgs>.

##### lib.strings.escapeShellArg

Quote string to be used safely within the Bourne shell if it has any special characters. Inputs string 1. Function argument Type escapeShellArg :: string -> string Examples Example 84. lib.strings.escapeShellArg usage example escapeShellArg "esc'ape\nme" => "'esc'\\''ape\nme'" Located at lib/strings.nix:1200 in <nixpkgs>.

##### lib.strings.escapeShellArgs

Quote all arguments that have special characters to be safely passed to the Bourne shell. Inputs args 1. Function argument Type escapeShellArgs :: [string] -> string Examples Example 85. lib.strings.escapeShellArgs usage example escapeShellArgs ["one" "two three" "four'five"] => "one 'two three' 'four'\\''five'" Located at lib/strings.nix:1236 in <nixpkgs>.

##### lib.strings.isValidPosixName

Test whether the given name is a valid POSIX shell variable name. Inputs name 1. Function argument Type string -> bool Examples Example 86. lib.strings.isValidPosixName usage example isValidPosixName "foo_bar000" => true isValidPosixName "0-bad.jpg" => false Located at lib/strings.nix:1265 in <nixpkgs>.

##### lib.strings.toShellVar

Translate a Nix value into a shell variable declaration, with proper escaping. The value can be a string (mapped to a regular variable), a list of strings (mapped to a Bash-style array) or an attribute set of strings (mapped to a Bash-style associative array). Note that “string” includes string-coercible values like paths or derivations. Strings are translated into POSIX sh-compatible code; lists and attribute sets assume a shell that understands Bash syntax (e.g. Bash or ZSH). Inputs name 1. Function argument value 2. Function argument Type string -> ( string | [string] | { ${name} :: string; } ) -> string Examples Example 87. lib.strings.toShellVar usage example '' ${toShellVar "foo" "some string"} [[ "$foo" == "some string" ]] '' Located at lib/strings.nix:1305 in <nixpkgs>.

##### lib.strings.toShellVars

Translate an attribute set vars into corresponding shell variable declarations using toShellVar. Inputs vars 1. Function argument Type toShellVars :: { ${name} :: string | [ string ] | { ${key} :: string; }; } -> string Examples Example 88. lib.strings.toShellVars usage example let foo = "value"; bar = foo; in '' ${toShellVars { inherit foo bar; }} [[ "$foo" == "$bar" ]] '' Located at lib/strings.nix:1351 in <nixpkgs>.

##### lib.strings.escapeNixString

Turn a string s into a Nix expression representing that string Inputs s 1. Function argument Type escapeNixString :: string -> string Examples Example 89. lib.strings.escapeNixString usage example escapeNixString "hello\${}\n" => "\"hello\\\${}\\n\"" Located at lib/strings.nix:1378 in <nixpkgs>.

##### lib.strings.escapeRegex

Turn a string s into an exact regular expression Inputs s 1. Function argument Type escapeRegex :: string -> string Examples Example 90. lib.strings.escapeRegex usage example escapeRegex "[^a-z]*" => "\\[\\^a-z]\\*" Located at lib/strings.nix:1405 in <nixpkgs>.

##### lib.strings.escapeNixIdentifier

Quotes a string s if it can’t be used as an identifier directly. Inputs s 1. Function argument Type escapeNixIdentifier :: string -> string Examples Example 91. lib.strings.escapeNixIdentifier usage example escapeNixIdentifier "hello" => "hello" escapeNixIdentifier "0abc" => "\"0abc\"" Located at lib/strings.nix:1434 in <nixpkgs>.

##### lib.strings.escapeXML

Escapes a string s such that it is safe to include verbatim in an XML document. Inputs s 1. Function argument Type escapeXML :: string -> string Examples Example 92. lib.strings.escapeXML usage example escapeXML ''"test" 'test' < & >'' => ""test" 'test' < & >" Located at lib/strings.nix:1465 in <nixpkgs>.

##### lib.strings.toLower

Converts an ASCII string s to lower-case. Inputs s The string to convert to lower-case. Type toLower :: string -> string Examples Example 93. lib.strings.toLower usage example toLower "HOME" => "home" Located at lib/strings.nix:1499 in <nixpkgs>.

##### lib.strings.toUpper

Converts an ASCII string s to upper-case. Inputs s The string to convert to upper-case. Type toUpper :: string -> string Examples Example 94. lib.strings.toUpper usage example toUpper "home" => "HOME" Located at lib/strings.nix:1526 in <nixpkgs>.

##### lib.strings.toSentenceCase

Converts the first character of a string s to upper-case. Inputs str The string to convert to sentence case. Type toSentenceCase :: string -> string Examples Example 95. lib.strings.toSentenceCase usage example toSentenceCase "home" => "Home" Located at lib/strings.nix:1553 in <nixpkgs>.

##### lib.strings.toCamelCase

Converts a string to camelCase. Handles snake_case, PascalCase, kebab-case strings as well as strings delimited by spaces. Inputs string The string to convert to camelCase Type toCamelCase :: string -> string Examples Example 96. lib.strings.toCamelCase usage example toCamelCase "hello-world" => "helloWorld" toCamelCase "hello_world" => "helloWorld" toCamelCase "hello world" => "helloWorld" toCamelCase "HelloWorld" => "helloWorld" Located at lib/strings.nix:1597 in <nixpkgs>.

##### lib.strings.addContextFrom

Appends string context from string like object src to target.
