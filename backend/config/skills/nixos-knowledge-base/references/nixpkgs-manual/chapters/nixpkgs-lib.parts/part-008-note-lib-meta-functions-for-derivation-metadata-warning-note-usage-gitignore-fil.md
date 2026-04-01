---
title: "Nixpkgs lib"
source: index.html
---
#### Note

If transformDrv is specified, it should take care of existing attributes that perform overriding (e.g., overrideAttrs) to ensure that the overriding functionality of the result derivation work as expected. Modifications that breaks the overriding include direct attribute set update and lib.extendDerivation. Located at lib/customisation.nix:843 in <nixpkgs>.

##### lib.customisation.renameCrossIndexFrom

Removes a prefix from the attribute names of a cross index. A cross index (short for “Cross Platform Pair Index”) is a 6-field structure organizing values by cross-compilation platform relationships. Inputs prefix The prefix to remove from cross index attribute names crossIndex A cross index with prefixed names Type renameCrossIndexFrom :: String -> AttrSet -> AttrSet Examples Example 272. lib.customisation.renameCrossIndexFrom usage example renameCrossIndexFrom "pkgs" { pkgsBuildBuild = ...; pkgsBuildHost = ...; ... } => { buildBuild = ...; buildHost = ...; ... } Located at lib/customisation.nix:918 in <nixpkgs>.

##### lib.customisation.renameCrossIndexTo

Adds a prefix to the attribute names of a cross index. A cross index (short for “Cross Platform Pair Index”) is a 6-field structure organizing values by cross-compilation platform relationships. Inputs prefix The prefix to add to cross index attribute names crossIndex A cross index to be prefixed Type renameCrossIndexTo :: String -> AttrSet -> AttrSet Examples Example 273. lib.customisation.renameCrossIndexTo usage example renameCrossIndexTo "self" { buildBuild = ...; buildHost = ...; ... } => { selfBuildBuild = ...; selfBuildHost = ...; ... } Located at lib/customisation.nix:958 in <nixpkgs>.

##### lib.customisation.mapCrossIndex

Takes a function and applies it pointwise to each field of a cross index. A cross index (short for “Cross Platform Pair Index”) is a 6-field structure organizing values by cross-compilation platform relationships. Inputs f Function to apply to each cross index value crossIndex A cross index to transform Type mapCrossIndex :: (a -> b) -> AttrSet -> AttrSet Examples Example 274. lib.customisation.mapCrossIndex usage example mapCrossIndex (x: x * 10) { buildBuild = 1; buildHost = 2; ... } => { buildBuild = 10; buildHost = 20; ... } # Extract a package from package sets mapCrossIndex (pkgs: pkgs.hello) crossIndexedPackageSets Located at lib/customisation.nix:1003 in <nixpkgs>.

#### lib.meta: functions for derivation metadata

Some functions for manipulating meta attributes, as well as the name attribute.

##### lib.meta.addMetaAttrs

Add to or override the meta attributes of the given derivation. Inputs newAttrs 1. Function argument drv 2. Function argument Examples Example 275. lib.meta.addMetaAttrs usage example addMetaAttrs {description = "Bla blah";} somePkg Located at lib/meta.nix:52 in <nixpkgs>.

##### lib.meta.dontDistribute

Disable Hydra builds of given derivation. Inputs drv 1. Function argument Located at lib/meta.nix:70 in <nixpkgs>.

##### lib.meta.setName

Change the symbolic name of a derivation.

#### Warning

Dependent derivations will be rebuilt when the symbolic name is changed. Inputs name 1. Function argument drv 2. Function argument Located at lib/meta.nix:89 in <nixpkgs>.

##### lib.meta.updateName

Like setName, but takes the previous name as an argument. Inputs updater 1. Function argument drv 2. Function argument Examples Example 276. lib.meta.updateName usage example updateName (oldName: oldName + "-experimental") somePkg Located at lib/meta.nix:114 in <nixpkgs>.

##### lib.meta.appendToName

Append a suffix to the name of a package (before the version part). Inputs suffix 1. Function argument Located at lib/meta.nix:126 in <nixpkgs>.

##### lib.meta.mapDerivationAttrset

Apply a function to each derivation and only to derivations in an attrset. Inputs f 1. Function argument set 2. Function argument Located at lib/meta.nix:149 in <nixpkgs>.

##### lib.meta.defaultPriority

The default priority of packages in Nix. See defaultPriority in src/nix/profile.cc. Located at lib/meta.nix:155 in <nixpkgs>.

##### lib.meta.setPrio

Set the nix-env priority of the package. Note that higher values are lower priority, and vice versa. Inputs priority 1. The priority to set. drv 2. Function argument Located at lib/meta.nix:168 in <nixpkgs>.

##### lib.meta.lowPrio

Decrease the nix-env priority of the package, i.e., other versions/variants of the package will be preferred. Inputs drv 1. Function argument Located at lib/meta.nix:180 in <nixpkgs>.

##### lib.meta.lowPrioSet

Apply lowPrio to an attrset with derivations. Inputs set 1. Function argument Located at lib/meta.nix:191 in <nixpkgs>.

##### lib.meta.hiPrio

Increase the nix-env priority of the package, i.e., this version/variant of the package will be preferred. Inputs drv 1. Function argument Located at lib/meta.nix:203 in <nixpkgs>.

##### lib.meta.hiPrioSet

Apply hiPrio to an attrset with derivations. Inputs set 1. Function argument Located at lib/meta.nix:214 in <nixpkgs>.

##### lib.meta.platformMatch

Check to see if a platform is matched by the given meta.platforms element. A meta.platform pattern is either (legacy) a system string. (modern) a pattern for the entire platform structure (see lib.systems.inspect.platformPatterns). (modern) a pattern for the platform parsed field (see lib.systems.inspect.patterns). We can inject these into a pattern for the whole of a structured platform, and then match that. Inputs platform 1. Function argument elem 2. Function argument Examples Example 277. lib.meta.platformMatch usage example lib.meta.platformMatch { system = "aarch64-darwin"; } "aarch64-darwin" => true Located at lib/meta.nix:252 in <nixpkgs>.

##### lib.meta.availableOn

Check if a package is available on a given platform. A package is available on a platform if both One of meta.platforms pattern matches the given platform, or meta.platforms is not present. None of meta.badPlatforms pattern matches the given platform. Inputs platform 1. Function argument pkg 2. Function argument Examples Example 278. lib.meta.availableOn usage example lib.meta.availableOn { system = "aarch64-darwin"; } pkg.zsh => true Located at lib/meta.nix:302 in <nixpkgs>.

##### lib.meta.licensesSpdx

Mapping of SPDX ID to the attributes in lib.licenses. For SPDX IDs, see https://spdx.org/licenses. Note that some SPDX licenses might be missing. Examples Example 279. lib.meta.licensesSpdx usage example lib.licensesSpdx.MIT == lib.licenses.mit => true lib.licensesSpdx."MY LICENSE" => error: attribute 'MY LICENSE' missing Located at lib/meta.nix:326 in <nixpkgs>.

##### lib.meta.getLicenseFromSpdxId

Get the corresponding attribute in lib.licenses from the SPDX ID or warn and fallback to { shortName = <license string>; }. For SPDX IDs, see https://spdx.org/licenses. Note that some SPDX licenses might be missing. Type getLicenseFromSpdxId :: str -> AttrSet Examples Example 280. lib.meta.getLicenseFromSpdxId usage example lib.getLicenseFromSpdxId "MIT" == lib.licenses.mit => true lib.getLicenseFromSpdxId "mIt" == lib.licenses.mit => true lib.getLicenseFromSpdxId "MY LICENSE" => trace: warning: getLicenseFromSpdxId: No license matches the given SPDX ID: MY LICENSE => { shortName = "MY LICENSE"; } Located at lib/meta.nix:360 in <nixpkgs>.

##### lib.meta.getLicenseFromSpdxIdOr

Get the corresponding attribute in lib.licenses from the SPDX ID or fallback to the given default value. For SPDX IDs, see https://spdx.org/licenses. Note that some SPDX licenses might be missing. Inputs licstr 1. SPDX ID string to find a matching license default 2. Fallback value when a match is not found Type getLicenseFromSpdxIdOr :: str -> Any -> Any Examples Example 281. lib.meta.getLicenseFromSpdxIdOr usage example lib.getLicenseFromSpdxIdOr "MIT" null == lib.licenses.mit => true lib.getLicenseFromSpdxId "mIt" null == lib.licenses.mit => true lib.getLicenseFromSpdxIdOr "MY LICENSE" lib.licenses.free == lib.licenses.free => true lib.getLicenseFromSpdxIdOr "MY LICENSE" null => null lib.getLicenseFromSpdxIdOr "MY LICENSE" (throw "No SPDX ID matches MY LICENSE") => error: No SPDX ID matches MY LICENSE Located at lib/meta.nix:407 in <nixpkgs>.

##### lib.meta.getExe

Get the path to the main program of a package based on meta.mainProgram Inputs x 1. Function argument Type getExe :: package -> string Examples Example 282. lib.meta.getExe usage example getExe pkgs.hello => "/nix/store/g124820p9hlv4lj8qplzxw1c44dxaw1k-hello-2.12/bin/hello" getExe pkgs.mustache-go => "/nix/store/am9ml4f4ywvivxnkiaqwr0hyxka1xjsf-mustache-go-1.3.0/bin/mustache" Located at lib/meta.nix:444 in <nixpkgs>.

##### lib.meta.getExe'

Get the path of a program of a derivation. Inputs x 1. Function argument y 2. Function argument Type getExe' :: derivation -> string -> string Examples Example 283. lib.meta.getExe' usage example getExe' pkgs.hello "hello" => "/nix/store/g124820p9hlv4lj8qplzxw1c44dxaw1k-hello-2.12/bin/hello" getExe' pkgs.imagemagick "convert" => "/nix/store/5rs48jamq7k6sal98ymj9l4k2bnwq515-imagemagick-7.1.1-15/bin/convert" Located at lib/meta.nix:490 in <nixpkgs>.

##### lib.meta.cpeFullVersionWithVendor

Generate CPE parts from inputs. Copies vendor and version to the output, and sets update to *. Inputs vendor package’s vendor version package’s version Type cpeFullVersionWithVendor :: string -> string -> AttrSet Examples Example 284. lib.meta.cpeFullVersionWithVendor usage example lib.meta.cpeFullVersionWithVendor "gnu" "1.2.3" => { vendor = "gnu"; version = "1.2.3"; update = "*"; } Example 285. lib.meta.cpeFullVersionWithVendor usage in derivations mkDerivation rec { version = "1.2.3"; # ... meta = { # ... identifiers.cpeParts = lib.meta.cpeFullVersionWithVendor "gnu" version; }; } Located at lib/meta.nix:548 in <nixpkgs>.

##### lib.meta.tryCPEPatchVersionInUpdateWithVendor

Alternate version of lib.meta.cpePatchVersionInUpdateWithVendor. If cpePatchVersionInUpdateWithVendor succeeds, returns an attribute set with success set to true and value set to the result. Otherwise, success is set to false and error is set to the string representation of the error. Inputs vendor package’s vendor version package’s version Type tryCPEPatchVersionInUpdateWithVendor :: string -> string -> AttrSet Examples Example 286. lib.meta.tryCPEPatchVersionInUpdateWithVendor usage example lib.meta.tryCPEPatchVersionInUpdateWithVendor "gnu" "1.2.3" => { success = true; value = { vendor = "gnu"; version = "1.2"; update = "3"; }; } Example 287. lib.meta.cpePatchVersionInUpdateWithVendor error example lib.meta.tryCPEPatchVersionInUpdateWithVendor "gnu" "5.3p0" => { success = false; error = "version 5.3p0 doesn't match regex `([0-9]+\\.[0-9]+)\\.([0-9]+)`"; } Located at lib/meta.nix:604 in <nixpkgs>.

##### lib.meta.cpePatchVersionInUpdateWithVendor

Generate CPE parts from inputs. Copies vendor to the result. When version matches X.Y.Z where all parts are numerical, sets version and update fields to X.Y and Z. Throws an error if the version doesn’t match the expected template. Inputs vendor package’s vendor version package’s version Type cpePatchVersionInUpdateWithVendor :: string -> string -> AttrSet Examples Example 288. lib.meta.cpePatchVersionInUpdateWithVendor usage example lib.meta.cpePatchVersionInUpdateWithVendor "gnu" "1.2.3" => { vendor = "gnu"; version = "1.2"; update = "3"; } Example 289. lib.meta.cpePatchVersionInUpdateWithVendor usage in derivations mkDerivation rec { version = "1.2.3"; # ... meta = { # ... identifiers.cpeParts = lib.meta.cpePatchVersionInUpdateWithVendor "gnu" version; }; } Located at lib/meta.nix:675 in <nixpkgs>.

##### lib.derivations.lazyDerivation

Restrict a derivation to a predictable set of attribute names, so that the returned attrset is not strict in the actual derivation, saving a lot of computation when the derivation is non-trivial. This is useful in situations where a derivation might only be used for its passthru attributes, improving evaluation performance. The returned attribute set is lazy in derivation. Specifically, this means that the derivation will not be evaluated in at least the situations below. For illustration and/or testing, we define derivation such that its evaluation is very noticeable. let derivation = throw "This won't be evaluated."; In the following expressions, derivation will not be evaluated: (lazyDerivation { inherit derivation; }).type attrNames (lazyDerivation { inherit derivation; }) (lazyDerivation { inherit derivation; } // { foo = true; }).foo (lazyDerivation { inherit derivation; meta.foo = true; }).meta In these expressions, derivation will be evaluated: "${lazyDerivation { inherit derivation }}" (lazyDerivation { inherit derivation }).outPath (lazyDerivation { inherit derivation }).meta And the following expressions are not valid, because the refer to implementation details and/or attributes that may not be present on some derivations: (lazyDerivation { inherit derivation }).buildInputs (lazyDerivation { inherit derivation }).passthru (lazyDerivation { inherit derivation }).pythonPath Inputs Takes an attribute set with the following attributes derivation The derivation to be wrapped. meta Optional meta attribute. While this function is primarily about derivations, it can improve the meta package attribute, which is usually specified through mkDerivation. passthru Optional extra values to add to the returned attrset. This can be used for adding package attributes, such as tests. outputs Optional list of assumed outputs. Default: [“out”] This must match the set of outputs that the returned derivation has. You must use this when the derivation has multiple outputs. Located at lib/derivations.nix:94 in <nixpkgs>.

##### lib.derivations.optionalDrvAttr

Conditionally set a derivation attribute. Because mkDerivation sets __ignoreNulls = true, a derivation attribute set to null will not impact the derivation output hash. Thus, this function passes through its value argument if the cond is true, but returns null if not. Inputs cond Condition value Attribute value Type optionalDrvAttr :: Bool -> a -> a | Null Examples Example 290. lib.derivations.optionalDrvAttr usage example (stdenv.mkDerivation { name = "foo"; x = optionalDrvAttr true 1; y = optionalDrvAttr false 1; }).drvPath == (stdenv.mkDerivation { name = "foo"; x = 1; }).drvPath => true Located at lib/derivations.nix:214 in <nixpkgs>.

##### lib.derivations.warnOnInstantiate

Wrap a derivation such that instantiating it produces a warning. All attributes will be wrapped with lib.warn except from .meta, .name, and .type which are used by nix search, and .outputName which avoids double warnings with nix-instantiate and nix-build. Inputs msg The warning message to emit (via lib.warn). drv The derivation to wrap. Examples Example 291. lib.derivations.warnOnInstantiate usage example { myPackage = warnOnInstantiate "myPackage has been renamed to my-package" my-package; } Located at lib/derivations.nix:243 in <nixpkgs>.

### Generators

Generators are functions that create file formats from Nix data structures, e.g. for configuration files. There are generators available for: INI, JSON and YAML. All generators follow a similar call interface: generatorName configFunctions data, where configFunctions is an attrset of user-defined functions that format nested parts of the content. They each have common defaults, so often they do not need to be set manually. An example is mkSectionName from the INI generator, which defaults to (name: libStr.escape [ "[" "]" ] name). It receives the name of a section and sanitizes it. The default mkSectionName escapes [ and ] with a backslash. Generators can be fine-tuned to produce exactly the file format required by your application/service. One example is an INI file format that uses : as a separator, the strings "yes" and "no" as boolean values, and requires all string values to be quoted: let inherit (lib) generators isString; customToINI = generators.toINI { # specifies how to format a key/value pair mkKeyValue = generators.mkKeyValueDefault { # specifies the generated string for a subset of nix values mkValueString = v: if v == true then ''"yes"'' else if v == false then ''"no"'' else if isString v then ''"${v}"'' # and delegates all other values to the default generator else generators.mkValueStringDefault { } v; } ":"; }; # the INI file can now be given as plain old nix values in customToINI { main = { pushinfo = true; autopush = false; host = "localhost"; port = 42; }; mergetool = { merge = "diff3"; }; } This will produce the following INI file as a Nix string: [main] autopush:"no" host:"localhost" port:42 pushinfo:"yes" str\:ange:"very::strange" [mergetool] merge:"diff3"

#### Note

Nix store paths can be converted to strings by enclosing a derivation attribute like so: "${drv}". Detailed documentation for each generator can be found here

### Debugging Nix Expressions

Nix is a unityped, dynamic language, this means any value can potentially appear anywhere. Since it is also non-strict, evaluation order and what is ultimately evaluated might surprise you. Therefore, it is important to be able to debug Nix expressions. In the lib/debug.nix file you will find a number of functions that help (pretty-)printing values while evaluation is running. You can even specify how deep these values should be printed recursively, and transform them on the fly. Please consult the docstrings in lib/debug.nix for usage information.

### prefer-remote-fetch overlay

prefer-remote-fetch is an overlay that downloads sources on a remote builder. This is useful when the evaluating machine has a slow upload while the builder can fetch faster, directly from the source. To use it, put the following snippet as a new overlay: self: super: (super.prefer-remote-fetch self super) A full configuration example that sets the overlay up for your own account could look like this $ mkdir ~/.config/nixpkgs/overlays/ $ cat > ~/.config/nixpkgs/overlays/prefer-remote-fetch.nix <<EOF self: super: super.prefer-remote-fetch self super EOF

### pkgs.nix-gitignore

Usage gitignore files in subdirectories pkgs.nix-gitignore is a function that acts similarly to builtins.filterSource but also allows filtering with the help of the gitignore format.

#### Usage

pkgs.nix-gitignore exports a number of functions, but you’ll most likely need either gitignoreSource or gitignoreSourcePure. As their first argument, they both accept either 1. a file with gitignore lines or 2. a string with gitignore lines, or 3. a list of either of the two. They will be concatenated into a single big string. { pkgs ? import <nixpkgs> { }, }: { src = nix-gitignore.gitignoreSource [ ] ./source; # Simplest version src = nix-gitignore.gitignoreSource '' supplemental-ignores '' ./source; # This one reads the ./source/.gitignore and concats the auxiliary ignores src = nix-gitignore.gitignoreSourcePure '' ignore-this ignore-that '' ./source; # Use this string as gitignore, don't read ./source/.gitignore. src = nix-gitignore.gitignoreSourcePure [ '' ignore-this ignore-that '' ~/.gitignore ] ./source; # It also accepts a list (of strings and paths) that will be concatenated # once the paths are turned to strings via readFile. } These functions are derived from the Filter functions by setting the first filter argument to (_: _: true): { gitignoreSourcePure = gitignoreFilterSourcePure (_: _: true); gitignoreSource = gitignoreFilterSource (_: _: true); } Those filter functions accept the same arguments the builtins.filterSource function would pass to its filters, thus fn: gitignoreFilterSourcePure fn "" should be extensionally equivalent to filterSource. The file is blacklisted if it’s blacklisted by either your filter or the gitignoreFilter. If you want to make your own filter from scratch, you may use { gitignoreFilter = ign: root: filterPattern (gitignoreToPatterns ign) root; }

#### gitignore files in subdirectories

If you wish to use a filter that would search for .gitignore files in subdirectories, just like git does by default, use this function: { # gitignoreFilterRecursiveSource = filter: patterns: root: # OR gitignoreRecursiveSource = gitignoreFilterSourcePure (_: _: true); }

### Module System

Table of Contents Introduction lib.evalModules Module arguments

### Introduction

The module system is a language for handling configuration, implemented as a Nix library. Compared to plain Nix, it adds documentation, type checking and composition or extensibility.

#### Note

This chapter is new and not complete yet. See also: Introduction to the module system, in the context of NixOS, see Writing NixOS Modules in the NixOS manual. Generic guide to the module system on nix.dev.

### lib.evalModules

Parameters Return value Evaluate a set of modules. This function is typically only used once per application (e.g. once in NixOS, once in Home Manager, …).

##### modules

A list of modules. These are merged together to form the final configuration.

##### specialArgs

An attribute set of module arguments that can be used in imports. This is in contrast to config._module.args, which is only available after all imports have been resolved.

#### Warning

You may be tempted to use specialArgs.lib to provide extra library functions. Doing so limits the interoperability of modules, as well as the interoperability of Module System applications. lib is reserved for the Nixpkgs library, and should not be used for custom functions. Instead, you may create a new attribute in specialArgs to provide custom functions. This clarifies their origin and avoids incompatibilities.

##### class

If the class attribute is set and non-null, the module system will reject imports with a different _class declaration. The class value should be a string in lower camel case. If applicable, the class should match the “prefix” of the attributes used in (experimental) flakes. Some examples are: nixos as in flake.nixosModules nixosTest: modules that constitute a NixOS VM test

##### prefix

A list of strings representing the location at or below which all options are evaluated. This is used by types.submodule to improve error reporting and find the implicit name module argument.

#### Return value

The result is an attribute set with the following attributes:

##### options

The nested attribute set of all option declarations.

##### config

The nested attribute set of all option values.

##### type

A module system type. This type is an instance of types.submoduleWith containing the current modules. The option definitions that are typed with this type will extend the current set of modules, like extendModules. However, the value returned from the type is just the config, like any submodule. If you’re familiar with prototype inheritance, you can think of this evalModules invocation as the prototype, and usages of this type as the instances. This type is also available to the modules as the module argument moduleType.

##### extendModules

A function similar to evalModules but building on top of the already passed modules. Its arguments, modules and specialArgs are added to the existing values. If you’re familiar with prototype inheritance, you can think of the current, actual evalModules invocation as the prototype, and the return value of extendModules as the instance. This functionality is also available to modules as the extendModules module argument.

#### Note

Evaluation Performance extendModules returns a configuration that shares very little with the original evalModules invocation, because the module arguments may be different. So if you have a configuration that has been (or will be) largely evaluated, almost none of the computation is shared with the configuration returned by extendModules. The real work of module evaluation happens while computing the values in config and options, so multiple invocations of extendModules have a particularly small cost, as long as only the final config and options are evaluated. If you do reference multiple config (or options) from before and after extendModules, evaluation performance is the same as with multiple evalModules invocations, because the new modules’ ability to override existing configuration fundamentally requires constructing a new config and options fixpoint.

##### _module

A portion of the configuration tree which is elided from config.

##### _type

A nominal type marker, always "configuration".

##### class

The class argument.

##### graph

Represents all the modules that took part in the evaluation. It is a list of ModuleGraph where ModuleGraph is defined as an attribute set with the following attributes: key: string for the purpose of module deduplication and disabledModules file: string for the purpose of error messages and warnings imports: [ ModuleGraph ] disabled: bool

### Module arguments

Module arguments are the attribute values passed to modules when they are evaluated. They originate from these sources: Built-in arguments lib, config, options, _class, _prefix, Attributes from the specialArgs argument passed to evalModules or submoduleWith. These are application-specific. Attributes from the _module.args option value. These are application-specific and can be provided by any module. The prior two categories are available while evaluating the imports, whereas the last category is only available after the imports have been resolved. lib 🔗 A reference to the Nixpkgs library. config 🔗 All option values. Unlike the evalModules config return attribute, this includes _module. options 🔗 All evaluated option declarations. _class 🔗 The expected class of the loaded modules. _prefix 🔗 The location under which the module is evaluated. This is used to improve error reporting and to find the implicit name module argument in submodules. It is exposed as a module argument due to how the module system is implemented, which cannot be avoided without breaking compatibility. It is a good practice not to rely on _prefix. A module should not make assumptions about its location in the configuration tree. For example, the root of a NixOS configuration may have a non-empty prefix, for example when it is a specialisation, or when it is part of a larger, multi-host configuration, such as a NixOS test. Instead of depending on _prefix use explicit options, whose default definitions can be provided by the module that imports them.
