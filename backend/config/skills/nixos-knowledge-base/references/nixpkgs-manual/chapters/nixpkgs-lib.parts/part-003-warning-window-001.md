---
title: "Nixpkgs lib"
source: index.html
---
#### Warning

This is an implementation detail of Nix and should be used carefully. Strings in Nix carry an invisible context which is a list of strings representing store paths. If the string is later used in a derivation attribute, the derivation will properly populate the inputDrvs and inputSrcs. Inputs src The string to take the context from. If the argument is not a string, it will be implicitly converted to a string. target The string to append the context to. If the argument is not a string, it will be implicitly converted to a string. Type addContextFrom :: string -> string -> string Examples Example 97. lib.strings.addContextFrom usage example pkgs = import <nixpkgs> { }; addContextFrom pkgs.coreutils "bar" => "bar" The context can be displayed using the toString function: nix-repl> builtins.getContext (lib.strings.addContextFrom pkgs.coreutils "bar") { "/nix/store/m1s1d2dk2dqqlw3j90jl3cjy2cykbdxz-coreutils-9.5.drv" = { ... }; } Located at lib/strings.nix:1672 in <nixpkgs>.

##### lib.strings.splitString

Cut a string with a separator and produces a list of strings which were separated by this separator. Inputs sep 1. Function argument s 2. Function argument Type splitString :: string -> string -> [string] Examples Example 98. lib.strings.splitString usage example splitString "." "foo.bar.baz" => [ "foo" "bar" "baz" ] splitString "/" "/usr/local/bin" => [ "" "usr" "local" "bin" ] Located at lib/strings.nix:1705 in <nixpkgs>.

##### lib.strings.splitStringBy

Splits a string into substrings based on a predicate that examines adjacent characters. This function provides a flexible way to split strings by checking pairs of characters against a custom predicate function. Unlike simpler splitting functions, this allows for context-aware splitting based on character transitions and patterns. Inputs predicate Function that takes two arguments (previous character and current character) and returns true when the string should be split at the current position. For the first character, previous will be “” (empty string). keepSplit Boolean that determines whether the splitting character should be kept as part of the result. If true, the character will be included at the beginning of the next substring; if false, it will be discarded. str The input string to split. Return A list of substrings from the original string, split according to the predicate. Type splitStringBy :: (string -> string -> bool) -> bool -> string -> [string] Examples Example 99. lib.strings.splitStringBy usage example Split on periods and hyphens, discarding the separators: splitStringBy (prev: curr: builtins.elem curr [ "." "-" ]) false "foo.bar-baz" => [ "foo" "bar" "baz" ] Split on transitions from lowercase to uppercase, keeping the uppercase characters: splitStringBy (prev: curr: builtins.match "[a-z]" prev != null && builtins.match "[A-Z]" curr != null) true "fooBarBaz" => [ "foo" "Bar" "Baz" ] Handle leading separators correctly: splitStringBy (prev: curr: builtins.elem curr [ "." ]) false ".foo.bar.baz" => [ "" "foo" "bar" "baz" ] Handle trailing separators correctly: splitStringBy (prev: curr: builtins.elem curr [ "." ]) false "foo.bar.baz." => [ "foo" "bar" "baz" "" ] Located at lib/strings.nix:1775 in <nixpkgs>.

##### lib.strings.removePrefix

Returns a string without the specified prefix, if the prefix matches. Inputs prefix Prefix to remove if it matches str Input string Type removePrefix :: string -> string -> string Examples Example 100. lib.strings.removePrefix usage example removePrefix "foo." "foo.bar.baz" => "bar.baz" removePrefix "xxx" "foo.bar.baz" => "foo.bar.baz" Located at lib/strings.nix:1835 in <nixpkgs>.

##### lib.strings.removeSuffix

Returns a string without the specified suffix, if the suffix matches. Inputs suffix Suffix to remove if it matches str Input string Type removeSuffix :: string -> string -> string Examples Example 101. lib.strings.removeSuffix usage example removeSuffix "front" "homefront" => "home" removeSuffix "xxx" "homefront" => "homefront" Located at lib/strings.nix:1886 in <nixpkgs>.

##### lib.strings.versionOlder

Returns true if string v1 denotes a version older than v2. Inputs v1 1. Function argument v2 2. Function argument Type versionOlder :: String -> String -> Bool Examples Example 102. lib.strings.versionOlder usage example versionOlder "1.1" "1.2" => true versionOlder "1.1" "1.1" => false Located at lib/strings.nix:1937 in <nixpkgs>.

##### lib.strings.versionAtLeast

Returns true if string v1 denotes a version equal to or newer than v2. Inputs v1 1. Function argument v2 2. Function argument Type versionAtLeast :: String -> String -> Bool Examples Example 103. lib.strings.versionAtLeast usage example versionAtLeast "1.1" "1.0" => true versionAtLeast "1.1" "1.1" => true versionAtLeast "1.1" "1.2" => false Located at lib/strings.nix:1971 in <nixpkgs>.

##### lib.strings.getName

This function takes an argument x that’s either a derivation or a derivation’s “name” attribute and extracts the name part from that argument. Inputs x 1. Function argument Type getName :: String | Derivation -> String Examples Example 104. lib.strings.getName usage example getName "youtube-dl-2016.01.01" => "youtube-dl" getName pkgs.youtube-dl => "youtube-dl" Located at lib/strings.nix:2002 in <nixpkgs>.

##### lib.strings.getVersion

This function takes an argument x that’s either a derivation or a derivation’s “name” attribute and extracts the version part from that argument. Inputs x 1. Function argument Type getVersion :: String | Derivation -> String Examples Example 105. lib.strings.getVersion usage example getVersion "youtube-dl-2016.01.01" => "2016.01.01" getVersion pkgs.youtube-dl => "2016.01.01" Located at lib/strings.nix:2037 in <nixpkgs>.

##### lib.strings.nameFromURL

Extract name and version from a URL as shown in the examples. Separator sep is used to determine the end of the extension. Inputs url 1. Function argument sep 2. Function argument Type nameFromURL :: String -> String Examples Example 106. lib.strings.nameFromURL usage example nameFromURL "https://nixos.org/releases/nix/nix-1.7/nix-1.7-x86_64-linux.tar.bz2" "-" => "nix" nameFromURL "https://nixos.org/releases/nix/nix-1.7/nix-1.7-x86_64-linux.tar.bz2" "_" => "nix-1.7-x86" Located at lib/strings.nix:2075 in <nixpkgs>.

##### lib.strings.cmakeOptionType

Create a "-D<feature>:<type>=<value>" string that can be passed to typical CMake invocations. Inputs type The type of the feature to be set, as described in https://cmake.org/cmake/help/latest/command/set.html the possible values (case insensitive) are: BOOL FILEPATH PATH STRING INTERNAL LIST feature The feature to be set value The desired value Type cmakeOptionType :: string -> string -> string -> string Examples Example 107. lib.strings.cmakeOptionType usage example cmakeOptionType "string" "ENGINE" "sdl2" => "-DENGINE:STRING=sdl2" Located at lib/strings.nix:2120 in <nixpkgs>.

##### lib.strings.cmakeBool

Create a -D<condition>={TRUE,FALSE} string that can be passed to typical CMake invocations. Inputs condition The condition to be made true or false flag The controlling flag of the condition Type cmakeBool :: string -> bool -> string Examples Example 108. lib.strings.cmakeBool usage example cmakeBool "ENABLE_STATIC_LIBS" false => "-DENABLESTATIC_LIBS:BOOL=FALSE" Located at lib/strings.nix:2166 in <nixpkgs>.

##### lib.strings.cmakeFeature

Create a -D<feature>:STRING=<value> string that can be passed to typical CMake invocations. This is the most typical usage, so it deserves a special case. Inputs feature The feature to be set value The desired value Type cmakeFeature :: string -> string -> string Examples Example 109. lib.strings.cmakeFeature usage example cmakeFeature "MODULES" "badblock" => "-DMODULES:STRING=badblock" Located at lib/strings.nix:2202 in <nixpkgs>.

##### lib.strings.mesonOption

Create a -D<feature>=<value> string that can be passed to typical Meson invocations. Inputs feature The feature to be set value The desired value Type mesonOption :: string -> string -> string Examples Example 110. lib.strings.mesonOption usage example mesonOption "engine" "opengl" => "-Dengine=opengl" Located at lib/strings.nix:2237 in <nixpkgs>.

##### lib.strings.mesonBool

Create a -D<condition>={true,false} string that can be passed to typical Meson invocations. Inputs condition The condition to be made true or false flag The controlling flag of the condition Type mesonBool :: string -> bool -> string Examples Example 111. lib.strings.mesonBool usage example mesonBool "hardened" true => "-Dhardened=true" mesonBool "static" false => "-Dstatic=false" Located at lib/strings.nix:2274 in <nixpkgs>.

##### lib.strings.mesonEnable

Create a -D<feature>={enabled,disabled} string that can be passed to typical Meson invocations. Inputs feature The feature to be enabled or disabled flag The controlling flag Type mesonEnable :: string -> bool -> string Examples Example 112. lib.strings.mesonEnable usage example mesonEnable "docs" true => "-Ddocs=enabled" mesonEnable "savage" false => "-Dsavage=disabled" Located at lib/strings.nix:2311 in <nixpkgs>.

##### lib.strings.enableFeature

Create an --{enable,disable}-<feature> string that can be passed to standard GNU Autoconf scripts. Inputs flag 1. Function argument feature 2. Function argument Type enableFeature :: bool -> string -> string Examples Example 113. lib.strings.enableFeature usage example enableFeature true "shared" => "--enable-shared" enableFeature false "shared" => "--disable-shared" Located at lib/strings.nix:2348 in <nixpkgs>.

##### lib.strings.enableFeatureAs

Create an --{enable-<feature>=<value>,disable-<feature>} string that can be passed to standard GNU Autoconf scripts. Inputs flag 1. Function argument feature 2. Function argument value 3. Function argument Type enableFeatureAs :: bool -> string -> string -> string Examples Example 114. lib.strings.enableFeatureAs usage example enableFeatureAs true "shared" "foo" => "--enable-shared=foo" enableFeatureAs false "shared" (throw "ignored") => "--disable-shared" Located at lib/strings.nix:2388 in <nixpkgs>.

##### lib.strings.withFeature

Create an --{with,without}-<feature> string that can be passed to standard GNU Autoconf scripts. Inputs flag 1. Function argument feature 2. Function argument Type withFeature :: bool -> string -> string Examples Example 115. lib.strings.withFeature usage example withFeature true "shared" => "--with-shared" withFeature false "shared" => "--without-shared" Located at lib/strings.nix:2423 in <nixpkgs>.

##### lib.strings.withFeatureAs

Create an --{with-<feature>=<value>,without-<feature>} string that can be passed to standard GNU Autoconf scripts. Inputs flag 1. Function argument feature 2. Function argument value 3. Function argument Type withFeatureAs :: bool -> string -> string -> string Examples Example 116. lib.strings.withFeatureAs usage example withFeatureAs true "shared" "foo" => "--with-shared=foo" withFeatureAs false "shared" (throw "ignored") => "--without-shared" Located at lib/strings.nix:2462 in <nixpkgs>.

##### lib.strings.fixedWidthString

Create a fixed width string with additional prefix to match required width. This function will fail if the input string is longer than the requested length. Inputs width 1. Function argument filler 2. Function argument str 3. Function argument Type fixedWidthString :: int -> string -> string -> string Examples Example 117. lib.strings.fixedWidthString usage example fixedWidthString 5 "0" (toString 15) => "00015" Located at lib/strings.nix:2501 in <nixpkgs>.

##### lib.strings.fixedWidthNumber

Format a number adding leading zeroes up to fixed width. Inputs width 1. Function argument n 2. Function argument Type fixedWidthNumber :: int -> int -> string Examples Example 118. lib.strings.fixedWidthNumber usage example fixedWidthNumber 5 15 => "00015" Located at lib/strings.nix:2539 in <nixpkgs>.

##### lib.strings.floatToString

Convert a float to a string, but emit a warning when precision is lost during the conversion Inputs float 1. Function argument Type floatToString :: float -> string Examples Example 119. lib.strings.floatToString usage example floatToString 0.000001 => "0.000001" floatToString 0.0000001 => trace: warning: Imprecise conversion from float to string 0.000000 "0.000000" Located at lib/strings.nix:2570 in <nixpkgs>.

##### lib.strings.isConvertibleWithToString

Check whether a list or other value x can be passed to toString. Many types of value are coercible to string this way, including int, float, null, bool, list of similarly coercible values. Inputs val 1. Function argument Type isConvertibleWithToString :: a -> bool Located at lib/strings.nix:2595 in <nixpkgs>.

##### lib.strings.isStringLike

Check whether a value can be coerced to a string. The value must be a string, path, or attribute set. String-like values can be used without explicit conversion in string interpolations and in most functions that expect a string. Inputs x 1. Function argument Type isStringLike :: a -> bool Located at lib/strings.nix:2624 in <nixpkgs>.

##### lib.strings.isStorePath

Check whether a value x is a store path. Inputs x 1. Function argument Type isStorePath :: a -> bool Examples Example 120. lib.strings.isStorePath usage example isStorePath "/nix/store/d945ibfx9x185xf04b890y4f9g3cbb63-python-2.7.11/bin/python" => false isStorePath "/nix/store/d945ibfx9x185xf04b890y4f9g3cbb63-python-2.7.11" => true isStorePath pkgs.python => true isStorePath [] || isStorePath 42 || isStorePath {} || … => false Located at lib/strings.nix:2657 in <nixpkgs>.

##### lib.strings.toInt

Parse a string as an int. Does not support parsing of integers with preceding zero due to ambiguity between zero-padded and octal numbers. See toIntBase10. Inputs str A string to be interpreted as an int. Type toInt :: string -> int Examples Example 121. lib.strings.toInt usage example toInt "1337" => 1337 toInt "-4" => -4 toInt " 123 " => 123 toInt "00024" => error: Ambiguity in interpretation of 00024 between octal and zero padded integer. toInt "3.14" => error: floating point JSON numbers are not supported Located at lib/strings.nix:2714 in <nixpkgs>.

##### lib.strings.toIntBase10

Parse a string as a base 10 int. This supports parsing of zero-padded integers. Inputs str A string to be interpreted as an int. Type toIntBase10 :: string -> int Examples Example 122. lib.strings.toIntBase10 usage example toIntBase10 "1337" => 1337 toIntBase10 "-4" => -4 toIntBase10 " 123 " => 123 toIntBase10 "00024" => 24 toIntBase10 "3.14" => error: floating point JSON numbers are not supported Located at lib/strings.nix:2784 in <nixpkgs>.

##### lib.strings.fileContents

Read the contents of a file removing the trailing \n Inputs file 1. Function argument Type fileContents :: path -> string Examples Example 123. lib.strings.fileContents usage example $ echo "1.0" > ./version fileContents ./version => "1.0" Located at lib/strings.nix:2845 in <nixpkgs>.

##### lib.strings.sanitizeDerivationName

Creates a valid derivation name from a potentially invalid one. Inputs string 1. Function argument Type sanitizeDerivationName :: String -> String Examples Example 124. lib.strings.sanitizeDerivationName usage example sanitizeDerivationName "../hello.bar # foo" => "-hello.bar-foo" sanitizeDerivationName "" => "unknown" sanitizeDerivationName pkgs.hello => "-nix-store-2g75chlbpxlrqn15zlby2dfh8hr9qwbk-hello-2.10" Located at lib/strings.nix:2876 in <nixpkgs>.

##### lib.strings.levenshtein

Computes the Levenshtein distance between two strings a and b. Complexity O(n*m) where n and m are the lengths of the strings. Algorithm adjusted from https://stackoverflow.com/a/9750974/6605742 Inputs a 1. Function argument b 2. Function argument Type levenshtein :: string -> string -> int Examples Example 125. lib.strings.levenshtein usage example levenshtein "foo" "foo" => 0 levenshtein "book" "hook" => 1 levenshtein "hello" "Heyo" => 3 Located at lib/strings.nix:2938 in <nixpkgs>.

##### lib.strings.commonPrefixLength

Returns the length of the prefix that appears in both strings a and b. Inputs a 1. Function argument b 2. Function argument Type commonPrefixLength :: string -> string -> int Located at lib/strings.nix:2975 in <nixpkgs>.

##### lib.strings.commonSuffixLength

Returns the length of the suffix common to both strings a and b. Inputs a 1. Function argument b 2. Function argument Type commonSuffixLength :: string -> string -> int Located at lib/strings.nix:3007 in <nixpkgs>.

##### lib.strings.levenshteinAtMost

Returns whether the levenshtein distance between two strings a and b is at most some value k. Complexity is O(min(n,m)) for k <= 2 and O(n*m) otherwise Inputs k Distance threshold a String a b String b Type levenshteinAtMost :: int -> string -> string -> bool Examples Example 126. lib.strings.levenshteinAtMost usage example levenshteinAtMost 0 "foo" "foo" => true levenshteinAtMost 1 "foo" "boa" => false levenshteinAtMost 2 "foo" "boa" => true levenshteinAtMost 2 "This is a sentence" "this is a sentense." => false levenshteinAtMost 3 "This is a sentence" "this is a sentense." => true Located at lib/strings.nix:3063 in <nixpkgs>.

##### lib.versions.splitVersion

Break a version string into its component parts. Examples Example 127. splitVersion usage example splitVersion "1.2.3" => ["1" "2" "3"] Located at lib/versions.nix:20 in <nixpkgs>.

##### lib.versions.major

Get the major version string from a string. Inputs v 1. Function argument Examples Example 128. major usage example major "1.2.3" => "1" Located at lib/versions.nix:42 in <nixpkgs>.

##### lib.versions.minor

Get the minor version string from a string. Inputs v 1. Function argument Examples Example 129. minor usage example minor "1.2.3" => "2" Located at lib/versions.nix:64 in <nixpkgs>.

##### lib.versions.patch

Get the patch version string from a string. Inputs v 1. Function argument Examples Example 130. patch usage example patch "1.2.3" => "3" Located at lib/versions.nix:86 in <nixpkgs>.

##### lib.versions.majorMinor

Get string of the first two parts (major and minor) of a version string. Inputs v 1. Function argument Examples Example 131. majorMinor usage example majorMinor "1.2.3" => "1.2" Located at lib/versions.nix:109 in <nixpkgs>.

##### lib.versions.pad

Pad a version string with zeros to match the given number of components. Inputs n 1. Function argument version 2. Function argument Examples Example 132. pad usage example pad 3 "1.2" => "1.2.0" pad 3 "1.3-rc1" => "1.3.0-rc1" pad 3 "1.2.3.4" => "1.2.3" Located at lib/versions.nix:139 in <nixpkgs>.

##### lib.trivial.id

The identity function For when you need a function that does “nothing”. Inputs x The value to return Type id :: a -> a Located at lib/trivial.nix:40 in <nixpkgs>.

##### lib.trivial.const

The constant function Ignores the second argument. If called with only one argument, constructs a function that always returns a static value. Inputs x Value to return y Value to ignore Type const :: a -> b -> a Examples Example 133. lib.trivial.const usage example let f = const 5; in f 10 => 5 Located at lib/trivial.nix:75 in <nixpkgs>.

##### lib.trivial.pipe

Pipes a value through a list of functions, left to right. Inputs value Value to start piping. fns List of functions to apply sequentially. Type pipe :: a -> [<functions>] -> <return type of last function> Examples Example 134. lib.trivial.pipe usage example pipe 2 [ (x: x + 2) # 2 + 2 = 4 (x: x * 2) # 4 * 2 = 8 ] => 8 # ideal to do text transformations pipe [ "a/b" "a/c" ] [ # create the cp command (map (file: ''cp "${src}/${file}" $out\n'')) # concatenate all commands into one string lib.concatStrings # make that string into a nix derivation (pkgs.runCommand "copy-to-out" {}) ] => <drv which copies all files to $out> The output type of each function has to be the input type of the next function, and the last function returns the final value. Located at lib/trivial.nix:129 in <nixpkgs>.

##### lib.trivial.concat

Concatenate two lists Inputs x 1. Function argument y 2. Function argument Type concat :: [a] -> [a] -> [a] Examples Example 135. lib.trivial.concat usage example concat [ 1 2 ] [ 3 4 ] => [ 1 2 3 4 ] Located at lib/trivial.nix:168 in <nixpkgs>.

##### lib.trivial."or" {#function-library-lib.trivial.“or”}

boolean “or” Inputs x 1. Function argument y 2. Function argument

##### lib.trivial.and

boolean “and” Inputs x 1. Function argument y 2. Function argument Located at lib/trivial.nix:198 in <nixpkgs>.

##### lib.trivial.xor

boolean “exclusive or” Inputs x 1. Function argument y 2. Function argument Located at lib/trivial.nix:215 in <nixpkgs>.

##### lib.trivial.bitNot

bitwise “not” Located at lib/trivial.nix:220 in <nixpkgs>.

##### lib.trivial.boolToString

Convert a boolean to a string. This function uses the strings “true” and “false” to represent boolean values. Calling toString on a bool instead returns “1” and “” (sic!). Inputs b 1. Function argument Type boolToString :: bool -> string Located at lib/trivial.nix:241 in <nixpkgs>.

##### lib.trivial.boolToYesNo

Converts a boolean to a string. This function uses the strings “yes” and “no” to represent boolean values. Inputs b The boolean to convert Type boolToYesNo :: bool -> string Located at lib/trivial.nix:261 in <nixpkgs>.

##### lib.trivial.mergeAttrs

Merge two attribute sets shallowly, right side trumps left mergeAttrs :: attrs -> attrs -> attrs Inputs x Left attribute set y Right attribute set (higher precedence for equal keys) Examples Example 136. lib.trivial.mergeAttrs usage example mergeAttrs { a = 1; b = 2; } { b = 3; c = 4; } => { a = 1; b = 3; c = 4; } Located at lib/trivial.nix:289 in <nixpkgs>.

##### lib.trivial.flip

Flip the order of the arguments of a binary function. Inputs f 1. Function argument a 2. Function argument b 3. Function argument Type flip :: (a -> b -> c) -> (b -> a -> c) Examples Example 137. lib.trivial.flip usage example flip concat [1] [2] => [ 2 1 ] Located at lib/trivial.nix:325 in <nixpkgs>.

##### lib.trivial.defaultTo

Returns maybeValue if not null, otherwise return default. Inputs default 1. Function argument maybeValue 2. Function argument Examples Example 138. lib.trivial.defaultTo usage example defaultTo "default" null => "default" defaultTo "default" "foo" => "foo" defaultTo "default" false => false Located at lib/trivial.nix:357 in <nixpkgs>.

##### lib.trivial.mapNullable

Apply function if the supplied argument is non-null. Inputs f Function to call a Argument to check for null before passing it to f Examples Example 139. lib.trivial.mapNullable usage example mapNullable (x: x+1) null => null mapNullable (x: x+1) 22 => 23 Located at lib/trivial.nix:385 in <nixpkgs>.

##### lib.trivial.version

Returns the current full nixpkgs version number. Located at lib/trivial.nix:410 in <nixpkgs>.

##### lib.trivial.release

Returns the current nixpkgs release number as string. Located at lib/trivial.nix:415 in <nixpkgs>.

##### lib.trivial.oldestSupportedRelease

The latest release that is supported, at the time of release branch-off, if applicable. Ideally, out-of-tree modules should be able to evaluate cleanly with all supported Nixpkgs versions (master, release and old release until EOL). So if possible, deprecation warnings should take effect only when all out-of-tree expressions/libs/modules can upgrade to the new way without losing support for supported Nixpkgs versions. This release number allows deprecation warnings to be implemented such that they take effect as soon as the oldest release reaches end of life. Located at lib/trivial.nix:430 in <nixpkgs>.

##### lib.trivial.isInOldestRelease

Whether a feature is supported in all supported releases (at the time of release branch-off, if applicable). See oldestSupportedRelease. Inputs release Release number of feature introduction as an integer, e.g. 2111 for 21.11. Set it to the upcoming release, matching the nixpkgs/.version file. Located at lib/trivial.nix:445 in <nixpkgs>.

##### lib.trivial.oldestSupportedReleaseIsAtLeast

Alias for isInOldestRelease introduced in 24.11. Use isInOldestRelease in expressions outside of Nixpkgs for greater compatibility. Located at lib/trivial.nix:454 in <nixpkgs>.

##### lib.trivial.codeName

Returns the current nixpkgs release code name. On each release the first letter is bumped and a new animal is chosen starting with that new letter. Located at lib/trivial.nix:462 in <nixpkgs>.

##### lib.trivial.versionSuffix

Returns the current nixpkgs version suffix as string. Located at lib/trivial.nix:467 in <nixpkgs>.

##### lib.trivial.revisionWithDefault

Attempts to return the the current revision of nixpkgs and returns the supplied default value otherwise. Inputs default Default value to return if revision can not be determined Type revisionWithDefault :: string -> string Located at lib/trivial.nix:489 in <nixpkgs>.

##### lib.trivial.inNixShell

Determine whether the function is being called from inside a Nix shell. Type inNixShell :: bool Located at lib/trivial.nix:514 in <nixpkgs>.

##### lib.trivial.inPureEvalMode

Determine whether the function is being called from inside pure-eval mode by seeing whether builtins contains currentSystem. If not, we must be in pure-eval mode. Type inPureEvalMode :: bool Located at lib/trivial.nix:527 in <nixpkgs>.

##### lib.trivial.min

Returns minimum of two numbers. Inputs x 1. Function argument y 2. Function argument Located at lib/trivial.nix:544 in <nixpkgs>.

##### lib.trivial.max

Returns maximum of two numbers. Inputs x 1. Function argument y 2. Function argument Located at lib/trivial.nix:559 in <nixpkgs>.

##### lib.trivial.mod

Integer modulus Inputs base 1. Function argument int 2. Function argument Examples Example 140. lib.trivial.mod usage example mod 11 10 => 1 mod 1 10 => 1 Located at lib/trivial.nix:587 in <nixpkgs>.

##### lib.trivial.compare

C-style comparisons a < b, compare a b => -1 a == b, compare a b => 0 a > b, compare a b => 1 Inputs a 1. Function argument b 2. Function argument Located at lib/trivial.nix:608 in <nixpkgs>.

##### lib.trivial.splitByAndCompare

Split type into two subtypes by predicate p, take all elements of the first subtype to be less than all the elements of the second subtype, compare elements of a single subtype with yes and no respectively. Inputs p Predicate yes Comparison function if predicate holds for both values no Comparison function if predicate holds for neither value a First value to compare b Second value to compare Type (a -> bool) -> (a -> a -> int) -> (a -> a -> int) -> (a -> a -> int) Examples Example 141. lib.trivial.splitByAndCompare usage example let cmp = splitByAndCompare (hasPrefix "foo") compare compare; in cmp "a" "z" => -1 cmp "fooa" "fooz" => -1 cmp "f" "a" => 1 cmp "fooa" "a" => -1 # while compare "fooa" "a" => 1 Located at lib/trivial.nix:669 in <nixpkgs>.

##### lib.trivial.importJSON

Reads a JSON file. Examples Example 142. lib.trivial.importJSON usage example example.json { "title": "Example JSON", "hello": { "world": "foo", "bar": { "foobar": true } } } importJSON ./example.json => { title = "Example JSON"; hello = { world = "foo"; bar = { foobar = true; }; }; } Inputs path 1. Function argument Type importJSON :: path -> any Located at lib/trivial.nix:725 in <nixpkgs>.

##### lib.trivial.importTOML

Reads a TOML file. Examples Example 143. lib.trivial.importTOML usage example example.toml title = "TOML Example" [hello] world = "foo" [hello.bar] foobar = true importTOML ./example.toml => { title = "TOML Example"; hello = { world = "foo"; bar = { foobar = true; }; }; } Inputs path 1. Function argument Type importTOML :: path -> any Located at lib/trivial.nix:772 in <nixpkgs>.

##### lib.trivial.warn

warn message value Print a warning before returning the second argument. See builtins.warn (Nix >= 2.23). On older versions, the Nix 2.23 behavior is emulated with builtins.trace, including the NIX_ABORT_ON_WARN behavior, but not the nix.conf setting or command line option. Inputs message (String) Warning message to print before evaluating value. value (any value) Value to return as-is. Type String -> a -> a Located at lib/trivial.nix:798 in <nixpkgs>.

##### lib.trivial.warnIf

warnIf condition message value Like warn, but only warn when the first argument is true. Inputs condition (Boolean) true to trigger the warning before continuing with value. message (String) Warning message to print before evaluating value (any value) Value to return as-is. Type Bool -> String -> a -> a Located at lib/trivial.nix:845 in <nixpkgs>.

##### lib.trivial.warnIfNot

warnIfNot condition message value Like warnIf, but negated: warn if the first argument is false. Inputs condition false to trigger the warning before continuing with val. message Warning message to print before evaluating value. value Value to return as-is. Type Boolean -> String -> a -> a Located at lib/trivial.nix:872 in <nixpkgs>.
