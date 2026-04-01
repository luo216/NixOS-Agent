---
title: "Build helpers"
source: index.html
---
### Writing text files

makeDesktopItem writeTextFile writeText writeTextDir writeScript writeScriptBin writeShellScript writeShellScriptBin Nixpkgs provides the following functions for producing derivations which write text files or executable scripts into the Nix store. They are useful for creating files from Nix expression, and are all implemented as convenience wrappers around writeTextFile. Each of these functions will cause a derivation to be produced. When you coerce the result of each of these functions to a string with string interpolation or toString, it will evaluate to the store path of this derivation.

#### Note

Some of these functions will put the resulting files within a directory inside the derivation output. If you need to refer to the resulting files somewhere else in a Nix expression, append their path to the derivation’s store path. For example, if the file destination is a directory: { my-file = writeTextFile { name = "my-file"; text = '' Contents of File ''; destination = "/share/my-file"; }; } Remember to append “/share/my-file” to the resulting store path when using it elsewhere: writeShellScript "evaluate-my-file.sh" '' cat ${my-file}/share/my-file ''

#### makeDesktopItem

Write an XDG desktop file to the Nix store. This function is usually used to add desktop items to a package through the copyDesktopItems hook. makeDesktopItem adheres to version 1.4 of the specification.

##### Inputs

makeDesktopItem takes an attribute set that accepts most values from the XDG specification. All recognised keys from the specification are supported with the exception of the “Hidden” field. The keys are converted into camelCase format, but correspond 1:1 to their equivalent in the specification: genericName, noDisplay, comment, icon, onlyShowIn, notShowIn, dbusActivatable, tryExec, exec, path, terminal, mimeTypes, categories, implements, keywords, startupNotify, startupWMClass, url, prefersNonDefaultGPU. The “Version” field is hardcoded to the version makeDesktopItem currently adheres to. The following fields are either required, are of a different type than in the specification, carry specific default values, or are additional fields supported by makeDesktopItem: name (String) The name of the desktop file in the Nix store. type (String; optional) Default value: "Application" desktopName (String) Corresponds to the “Name” field of the specification. actions (List of Attribute set; optional) A list of attribute sets {name, exec?, icon?} extraConfig (Attribute set; optional) Additional key/value pairs to be added verbatim to the desktop file. Attributes need to be prefixed with ‘X-’.

##### Examples

Example 306. Usage 1 of makeDesktopItem Write a desktop file /nix/store/<store path>/my-program.desktop to the Nix store. { makeDesktopItem }: makeDesktopItem { name = "my-program"; desktopName = "My Program"; genericName = "Video Player"; noDisplay = false; comment = "Cool video player"; icon = "/path/to/icon"; onlyShowIn = [ "KDE" ]; dbusActivatable = true; tryExec = "my-program"; exec = "my-program --someflag"; path = "/some/working/path"; terminal = false; actions.example = { name = "New Window"; exec = "my-program --new-window"; icon = "/some/icon"; }; mimeTypes = [ "video/mp4" ]; categories = [ "Utility" ]; implements = [ "org.my-program" ]; keywords = [ "Video" "Player" ]; startupNotify = false; startupWMClass = "MyProgram"; prefersNonDefaultGPU = false; extraConfig.X-SomeExtension = "somevalue"; } Example 307. Usage 2 of makeDesktopItem Override the hello package to add a desktop item. { copyDesktopItems, hello, makeDesktopItem, }: hello.overrideAttrs { nativeBuildInputs = [ copyDesktopItems ]; desktopItems = [ (makeDesktopItem { name = "hello"; desktopName = "Hello"; exec = "hello"; }) ]; }

#### writeTextFile

Write a text file to the Nix store. writeTextFile takes an attribute set with the following possible attributes: name (String) Corresponds to the name used in the Nix store path identifier. text (String) The contents of the file. executable (Bool, optional) Make this file have the executable bit set. Default: false destination (String, optional) A subpath under the derivation’s output path into which to put the file. Subdirectories are created automatically when the derivation is realised. By default, the store path itself will be a file containing the text contents. Default: "" checkPhase (String, optional) Commands to run after generating the file. Default: "" meta (Attribute set, optional) Additional metadata for the derivation. Default: {} allowSubstitutes (Bool, optional) Whether to allow substituting from a binary cache. Passed through to allowSubstitutes of the underlying call to derivation. It defaults to false, as running the derivation’s simple builder executable locally is assumed to be faster than network operations. Set it to true if the checkPhase step is expensive. Default: false preferLocalBuild (Bool, optional) Whether to prefer building locally, even if faster remote build machines are available. Passed through to preferLocalBuild of the underlying call to derivation. It defaults to true for the same reason allowSubstitutes defaults to false. Default: true derivationArgs (Attribute set, optional) Extra arguments to pass to the underlying call to stdenv.mkDerivation. Default: {} The resulting store path will include some variation of the name, and it will be a file unless destination is used, in which case it will be a directory. Example 308. Usage 1 of writeTextFile Write my-file to /nix/store/<store path>/some/subpath/my-cool-script, making it executable. Also run a check on the resulting file in a checkPhase, and supply values for the less-used options. writeTextFile { name = "my-cool-script"; text = '' #!/bin/sh echo "This is my cool script!" ''; executable = true; destination = "/some/subpath/my-cool-script"; checkPhase = '' ${pkgs.shellcheck}/bin/shellcheck $out/some/subpath/my-cool-script ''; meta = { license = pkgs.lib.licenses.cc0; }; allowSubstitutes = true; preferLocalBuild = false; } Example 309. Usage 2 of writeTextFile Write the string Contents of File to /nix/store/<store path>. See also the the section called “writeText” helper function. writeTextFile { name = "my-file"; text = '' Contents of File ''; } Example 310. Usage 3 of writeTextFile Write an executable script my-script to /nix/store/<store path>/bin/my-script. See also the the section called “writeScriptBin” helper function. writeTextFile { name = "my-script"; text = '' echo "hi" ''; executable = true; destination = "/bin/my-script"; }

#### writeText

Write a text file to the Nix store writeText takes the following arguments: a string. name (String) The name used in the Nix store path. text (String) The contents of the file. The store path will include the name, and it will be a file. Example 311. Usage of writeText Write the string Contents of File to /nix/store/<store path>: writeText "my-file" '' Contents of File '' This is equivalent to: writeTextFile { name = "my-file"; text = '' Contents of File ''; }

#### writeTextDir

Write a text file within a subdirectory of the Nix store. writeTextDir takes the following arguments: path (String) The destination within the Nix store path under which to create the file. text (String) The contents of the file. The store path will be a directory. Example 312. Usage of writeTextDir Write the string Contents of File to /nix/store/<store path>/share/my-file: writeTextDir "share/my-file" '' Contents of File '' This is equivalent to: writeTextFile { name = "my-file"; text = '' Contents of File ''; destination = "/share/my-file"; }

#### writeScript

Write an executable script file to the Nix store. writeScript takes the following arguments: name (String) The name used in the Nix store path. text (String) The contents of the file. The created file is marked as executable. The store path will include the name, and it will be a file. Example 313. Usage of writeScript Write the string Contents of File to /nix/store/<store path> and make the file executable. writeScript "my-file" '' Contents of File '' This is equivalent to: writeTextFile { name = "my-file"; text = '' Contents of File ''; executable = true; }

#### writeScriptBin

Write a script within a bin subdirectory of a directory in the Nix store. This is for consistency with the convention of software packages placing executables under bin. writeScriptBin takes the following arguments: name (String) The name used in the Nix store path and within the file created under the store path. text (String) The contents of the file. The created file is marked as executable. The file’s contents will be put into /nix/store/<store path>/bin/<name>. The store path will include the name, and it will be a directory. Example 314. Usage of writeScriptBin writeScriptBin "my-script" '' echo "hi" '' This is equivalent to: writeTextFile { name = "my-script"; text = '' echo "hi" ''; executable = true; destination = "/bin/my-script"; }

#### writeShellScript

Write a Bash script to the store. writeShellScript takes the following arguments: name (String) The name used in the Nix store path. text (String) The contents of the file. The created file is marked as executable. The store path will include the name, and it will be a file. This function is almost exactly like the section called “writeScript”, except that it prepends to the file a shebang line that points to the version of Bash used in Nixpkgs. Example 315. Usage of writeShellScript writeShellScript "my-script" '' echo "hi" '' This is equivalent to: writeTextFile { name = "my-script"; text = '' #! ${pkgs.runtimeShell} echo "hi" ''; executable = true; }

#### writeShellScriptBin

Write a Bash script to a “bin” subdirectory of a directory in the Nix store. writeShellScriptBin takes the following arguments: name (String) The name used in the Nix store path and within the file generated under the store path. text (String) The contents of the file. The file’s contents will be put into /nix/store/<store path>/bin/<name>. The store path will include the name, and it will be a directory. This function is a combination of the section called “writeShellScript” and the section called “writeScriptBin”. Example 316. Usage of writeShellScriptBin writeShellScriptBin "my-script" '' echo "hi" '' This is equivalent to: writeTextFile { name = "my-script"; text = '' #! ${pkgs.runtimeShell} echo "hi" ''; executable = true; destination = "/bin/my-script"; }

### concatTextFile, concatText, concatScript

These functions concatenate files to the Nix store in a single file. This is useful for configuration files structured in lines of text. concatTextFile takes an attribute set and expects two arguments, name and files. name corresponds to the name used in the Nix store path. files will be the files to be concatenated. You can also set executable to true to make this file have the executable bit set. concatText andconcatScript are simple wrappers over concatTextFile. Here are a few examples: # Writes my-file to /nix/store/<store path> concatTextFile { name = "my-file"; files = [ drv1 "${drv2}/path/to/file" ]; } # See also the `concatText` helper function below. # Writes executable my-file to /nix/store/<store path>/bin/my-file concatTextFile { name = "my-file"; files = [ drv1 "${drv2}/path/to/file" ]; executable = true; destination = "/bin/my-file"; } # Writes contents of files to /nix/store/<store path> concatText "my-file" [ file1 file2 ] # Writes contents of files to /nix/store/<store path> concatScript "my-file" [ file1 file2 ]

### writeShellApplication

writeShellApplication is similar to writeShellScriptBin and writeScriptBin but supports runtime dependencies with runtimeInputs. Writes an executable shell script to /nix/store/<store path>/bin/<name> and checks its syntax with shellcheck and the bash’s -n option. Some basic Bash options are set by default (errexit, nounset, and pipefail), but can be overridden with bashOptions. Extra arguments may be passed to stdenv.mkDerivation by setting derivationArgs; note that variables set in this manner will be set when the shell script is built, not when it’s run. Runtime environment variables can be set with the runtimeEnv argument. For example, the following shell application can refer to curl directly, rather than needing to write ${curl}/bin/curl: writeShellApplication { name = "show-nixos-org"; runtimeInputs = [ curl w3m ]; text = '' curl -s 'https://nixos.org' | w3m -dump -T text/html ''; }

### symlinkJoin

This can be used to put many derivations into the same directory structure. It works by creating a new derivation and adding symlinks to each of the paths listed. It expects two arguments, name, and paths. name (or alternatively pname and version) is the name used in the Nix store path for the created derivation. paths is a list of paths that will be symlinked. These paths can be to Nix store derivations or any other subdirectory contained within. Here is an example: # adds symlinks of hello and stack to current build and prints "links added" symlinkJoin { name = "myexample"; paths = [ pkgs.hello pkgs.stack ]; postBuild = "echo links added"; } This creates a derivation with a directory structure like the following: /nix/store/sglsr5g079a5235hy29da3mq3hv8sjmm-myexample |-- bin | |-- hello -> /nix/store/qy93dp4a3rqyn2mz63fbxjg228hffwyw-hello-2.10/bin/hello | `-- stack -> /nix/store/6lzdpxshx78281vy056lbk553ijsdr44-stack-2.1.3.1/bin/stack `-- share |-- bash-completion | `-- completions | `-- stack -> /nix/store/6lzdpxshx78281vy056lbk553ijsdr44-stack-2.1.3.1/share/bash-completion/completions/stack |-- fish | `-- vendor_completions.d | `-- stack.fish -> /nix/store/6lzdpxshx78281vy056lbk553ijsdr44-stack-2.1.3.1/share/fish/vendor_completions.d/stack.fish ...

### writeClosure

Given a list of store paths (or string-like expressions coercible to store paths), write their collective closure to a text file. The result is equivalent to the output of nix-store -q --requisites. For example, writeClosure [ (writeScriptBin "hi" "${hello}/bin/hello") ] produces an output path /nix/store/<hash>-runtime-deps containing /nix/store/<hash>-hello-2.10 /nix/store/<hash>-hi /nix/store/<hash>-libidn2-2.3.0 /nix/store/<hash>-libunistring-0.9.10 /nix/store/<hash>-glibc-2.32-40 You can see that this includes hi, the original input path, hello, which is a direct reference, but also the other paths that are indirectly required to run hello.

### writeDirectReferencesToFile

Writes the set of references to the output file, that is, their immediate dependencies. This produces the equivalent of nix-store -q --references. For example, writeDirectReferencesToFile (writeScriptBin "hi" "${hello}/bin/hello") produces an output path /nix/store/<hash>-runtime-references containing /nix/store/<hash>-hello-2.10 but none of hello’s dependencies because those are not referenced directly by hi’s output.

### Testers

Table of Contents hasPkgConfigModules hasCmakeConfigModules lycheeLinkCheck shellcheck shfmt testVersion testBuildFailure testBuildFailure' testEqualContents testEqualArrayOrMap testEqualDerivation invalidateFetcherByDrvHash runCommand runNixOSTest nixosTest This chapter describes several testing builders which are available in the testers namespace.

### hasPkgConfigModules

Checks whether a package exposes a given list of pkg-config modules. If the moduleNames argument is omitted, hasPkgConfigModules will use meta.pkgConfigModules. Example 317. Check that pkg-config modules are exposed using default values { passthru.tests.pkg-config = testers.hasPkgConfigModules { package = finalAttrs.finalPackage; }; meta.pkgConfigModules = [ "libfoo" ]; } Example 318. Check that pkg-config modules are exposed using explicit module names { passthru.tests.pkg-config = testers.hasPkgConfigModules { package = finalAttrs.finalPackage; moduleNames = [ "libfoo" ]; }; }

### hasCmakeConfigModules

Checks whether a package exposes a given list of *config.cmake modules. Note the moduleNames used in cmake find_package are case sensitive. Example 319. Check that *config.cmake modules are exposed using explicit module names { passthru.tests.cmake-config = testers.hasCmakeConfigModules { package = finalAttrs.finalPackage; moduleNames = [ "Foo" ]; }; }

### lycheeLinkCheck

Return value Inputs Check a packaged static site’s links with the lychee package. You may use Nix to reproducibly build static websites, such as for software documentation. Some packages will install documentation in their out or doc outputs, or maybe you have dedicated package where you’ve made your static site reproducible by running a generator, such as Hugo or mdBook, in a derivation. If you have a static site that can be built with Nix, you can use lycheeLinkCheck to check that the hyperlinks in your site are correct, and do so as part of your Nix workflow and CI. Example 320. Check hyperlinks in the nix documentation testers.lycheeLinkCheck { site = nix.doc + "/share/doc/nix/manual"; }

#### Return value

This tester produces a package that does not produce useful outputs, but only succeeds if the hyperlinks in your site are correct. The build log will list the broken links. It has two modes: Build the returned derivation; its build process will check that internal hyperlinks are correct. This runs in the sandbox, so it will not check external hyperlinks, but it is quick and reliable. Invoke the .online attribute with nix run (experimental). This runs outside the sandbox, and checks that both internal and external hyperlinks are correct. Example: nix run nixpkgs#lychee.tests.ok.online

#### Inputs

site (path or derivation) {#tester-lycheeLinkCheck-param-site} The path to the files to check. remap (attribute set, optional) {#tester-lycheeLinkCheck-param-remap} An attribute set where the attribute names are regular expressions. The values should be strings, derivations, or path values. In the returned check’s default configuration, external URLs are only checked when you run the .online attribute. By adding remappings, you can check offline that URLs to external resources are correct, by providing a stand-in from the file system. Before checking the existence of a URL, the regular expressions are matched and replaced by their corresponding values. Example: { "https://nix\\.dev/manual/nix/[a-z0-9.-]*" = "${nix.doc}/share/doc/nix/manual"; "https://nixos\\.org/manual/nix/(un)?stable" = "${emptyDirectory}/placeholder-to-disallow-old-nix-docs-urls"; } Store paths in the attribute values are automatically prefixed with file://, because lychee requires this for paths in the file system. If this is a problem, or if you need to control the order in which replacements are performed, use extraConfig.remap instead. extraConfig (attribute set) {#tester-lycheeLinkCheck-param-extraConfig} Extra configuration to pass to lychee in its configuration file. It is automatically translated to TOML. Example: { "include_verbatim" = true; } lychee (derivation, optional) {#tester-lycheeLinkCheck-param-lychee} The lychee package to use.

### shellcheck

Inputs Return value Run files through shellcheck, a static analysis tool for shell scripts, failing if there are any issues. Example 321. Run testers.shellcheck A single script testers.shellcheck { name = "script"; src = ./script.sh; } Multiple files let inherit (lib) fileset; in testers.shellcheck { name = "nixbsd-activate"; src = fileset.toSource { root = ./.; fileset = fileset.unions [ ./lib.sh ./nixbsd-activate ]; }; }

#### Inputs

name (string, optional) The name of the test. name will be required at a future point because it massively improves traceability of test failures, but is kept optional for now to avoid breaking existing usages. Defaults to run-shellcheck. The name of the derivation produced by the tester is shellcheck-${name} when name is supplied. src (path-like) The path to the shell script(s) to check. This can be a single file or a directory containing shell files. All files in src will be checked, so you may want to provide fileset-based source instead of a whole directory.

#### Return value

A derivation that runs shellcheck on the given script(s), producing an empty output if no issues are found. The build will fail if shellcheck finds any issues.

### shfmt

Inputs Return value Run files through shfmt, a shell script formatter, failing if any files are reformatted. Example 322. Run testers.shfmt A single script testers.shfmt { name = "script"; src = ./script.sh; } Multiple files let inherit (lib) fileset; in testers.shfmt { name = "nixbsd"; src = fileset.toSource { root = ./.; fileset = fileset.unions [ ./lib.sh ./nixbsd-activate ]; }; }

#### Inputs

name (string) The name of the test. name is required because it massively improves traceability of test failures. The name of the derivation produced by the tester is shfmt-${name}. src (path-like) The path to the shell script(s) to check. This can be a single file or a directory containing shell files. All files in src will be checked, so you may want to provide fileset-based source instead of a whole directory. indent (integer, optional) The number of spaces to use for indentation. Defaults to 2. A value of 0 indents with tabs.

#### Return value

A derivation that runs shfmt on the given script(s), producing an empty output upon success. The build will fail if shfmt reformats anything.

### testVersion

Checks that the output from running a command contains the specified version string in it as a whole word. NOTE: This is a check you add to passthru.tests which is mainly run by OfBorg, but not in Hydra. If you want a version check failure to block the build altogether, then versionCheckHook is the tool you’re looking for (and recommended for quick builds). The motivation for adding either of these checks would be: Catch dynamic linking errors and such and missing environment variables that should be added by wrapping. Probable protection against accidentally building the wrong version, for example when using an “old” hash in a fixed-output derivation. By default, the command to be run will be inferred from the given package attribute: it will check meta.mainProgram first, and fall back to pname or name. The default argument to the command is --version, and the version to be checked will be inferred from the given package attribute as well. Example 323. Check a program version using all the default values This example will run the command hello --version, and then check that the version of the hello package is in the output of the command. { passthru.tests.version = testers.testVersion { package = hello; }; } Example 324. Check the program version using a specified command and expected version string This example will run the command leetcode -V, and then check that leetcode 0.4.2 is in the output of the command as a whole word (separated by whitespaces). This means that an output like “leetcode 0.4.21” would fail the tests, and an output like “You’re running leetcode 0.4.2” would pass the tests. A common usage of the version attribute is to specify version = "v${version}". { version = "0.4.2"; passthru.tests.version = testers.testVersion { package = leetcode-cli; command = "leetcode -V"; version = "leetcode ${version}"; }; }

### testBuildFailure

Make sure that a build does not succeed. This is useful for testing testers. This returns a derivation with an override on the builder, with the following effects: Fail the build when the original builder succeeds Move $out to $out/result, if it exists (assuming out is the default output) Save the build log to $out/testBuildFailure.log (same) While testBuildFailure is designed to keep changes to the original builder’s environment to a minimum, some small changes are inevitable: The file $TMPDIR/testBuildFailure.log is present. It should not be deleted. stdout and stderr are a pipe instead of a tty. This could be improved. One or two extra processes are present in the sandbox during the original builder’s execution. The derivation and output hashes are different, but not unusual. The derivation includes a dependency on buildPackages.bash and expect-failure.sh, which is built to include a transitive dependency on buildPackages.coreutils and possibly more. These are not added to PATH or any other environment variable, so they should be hard to observe. Example 325. Check that a build fails, and verify the changes made during build runCommand "example" { failed = testers.testBuildFailure ( runCommand "fail" { } '' echo ok-ish >$out echo failing though exit 3 '' ); } '' grep -F 'ok-ish' $failed/result grep -F 'failing though' $failed/testBuildFailure.log [[ 3 = $(cat $failed/testBuildFailure.exit) ]] touch $out ''

### testBuildFailure'

Inputs Return value This tester wraps the functionality provided by testers.testBuildFailure to make writing checks easier by simplifying checking the exit code of the builder and asserting the existence of entries in the builder’s log. Additionally, users may specify a script containing additional checks, accessing the result of applying testers.testBuildFailure through the variable failed. NOTE: This tester will produce an empty output and exit with success if none of the checks fail; there is no need to touch "$out" in script. Example 326. Check that a build fails, and verify the changes made during build Re-using the example from testers.testBuildFailure, we can see how common checks are made easier and remove the need for runCommand: testers.testBuildFailure' { drv = runCommand "doc-example" { } '' echo ok-ish >"$out" echo failing though exit 3 ''; expectedBuilderExitCode = 3; expectedBuilderLogEntries = [ "failing though" ]; script = '' grep --silent -F 'ok-ish' "$failed/result" ''; }

#### Inputs

drv (derivation) The failing derivation to wrap with testBuildFailure. name (string, optional) The name of the test. When not provided, this value defaults to testBuildFailure-${(testers.testBuildFailure drv).name}. expectedBuilderExitCode (integer, optional) The expected exit code of the builder of drv. When not provided, this value defaults to 1. expectedBuilderLogEntries (array of string-like values, optional) A list of string-like values which must be found in the builder’s log by exact match. When not provided, this value defaults to [ ]. NOTE: Patterns and regular expressions are not supported. script (string, optional) A string containing additional checks to run. When not provided, this value defaults to "". The result of testers.testBuildFailure drv is available through the variable failed. As an example, the builder’s log is at "$failed/testBuildFailure.log".

#### Return value

The tester produces an empty output and only succeeds when the checks using expectedBuilderExitCode, expectedBuilderLogEntries, and script succeed.

### testEqualContents

Check that two paths have the same contents. assertion (string) A message that is printed before the comparison, after Checking:. expected (path or value coercible to store path) The path to the expected file system object content actual (value coercible to store path) The path to the actual file system object content to check postFailureMessage (string) A message that is printed last if the file system object contents at the two paths don’t match exactly. checkMetadata (boolean) Whether to fail on metadata differences, such as permissions or ownership. Defaults to true. Example 327. Check that two paths have the same contents testers.testEqualContents { assertion = "sed -e performs replacement"; expected = writeText "expected" '' foo baz baz ''; actual = runCommand "actual" { # not really necessary for a package that's in stdenv nativeBuildInputs = [ gnused ]; base = writeText "base" '' foo bar baz ''; } '' sed -e 's/bar/baz/g' $base >$out ''; # if applicable postFailureMessage = '' The bar-baz replacer produced an unexpected result. If the new behavior is acceptable and validated against the bar-baz specification, run ./adopt-new-bar-baz-result.sh to adjust this test and require the new behavior. ''; }

### testEqualArrayOrMap

Inputs Return value Check that bash arrays (including associative arrays, referred to as “maps”) are populated correctly. This can be used to ensure setup hooks are registered in a certain order, or to write unit tests for shell functions which transform arrays. Example 328. Test a function which appends a value to an array testers.testEqualArrayOrMap { name = "test-function-add-cowbell"; valuesArray = [ "cowbell" "cowbell" ]; expectedArray = [ "cowbell" "cowbell" "cowbell" ]; script = '' addCowbell() { local -rn arrayNameRef="$1" arrayNameRef+=( "cowbell" ) } nixLog "appending all values in valuesArray to actualArray" for value in "''${valuesArray[@]}"; do actualArray+=( "$value" ) done nixLog "applying addCowbell" addCowbell actualArray ''; }

#### Inputs

NOTE: Internally, this tester uses __structuredAttrs to handle marshalling between Nix expressions and shell variables. This imposes the restriction that arrays and “maps” have values which are string-like. NOTE: At least one of expectedArray and expectedMap must be provided. name (string) The name of the test. script (string) The singular task of script is to populate actualArray or actualMap (it may populate both). To do this, script may access the following shell variables: valuesArray (available when valuesArray is provided to the tester) valuesMap (available when valuesMap is provided to the tester) actualArray (available when expectedArray is provided to the tester) actualMap (available when expectedMap is provided to the tester) While both expectedArray and expectedMap are in scope during the execution of script, they must not be accessed or modified from within script. valuesArray (array of string-like values, optional) An array of string-like values. This array may be used within script. valuesMap (attribute set of string-like values, optional) An attribute set of string-like values. This attribute set may be used within script. expectedArray (array of string-like values, optional) An array of string-like values. This array must not be accessed or modified from within script. When provided, script is expected to populate actualArray. expectedMap (attribute set of string-like values, optional) An attribute set of string-like values. This attribute set must not be accessed or modified from within script. When provided, script is expected to populate actualMap.

#### Return value

The tester produces an empty output and only succeeds when expectedArray and expectedMap match actualArray and actualMap, respectively, when non-null. The build log will contain differences encountered.

### testEqualDerivation

Checks that two packages produce the exact same build instructions. This can be used to make sure that a certain difference of configuration, such as the presence of an overlay does not cause a cache miss. When the derivations are equal, the return value is an empty file. Otherwise, the build log explains the difference via nix-diff. Example 329. Check that two packages produce the same derivation testers.testEqualDerivation "The hello package must stay the same when enabling checks." hello ( hello.overrideAttrs (o: { doCheck = true; }) )

### invalidateFetcherByDrvHash

Use the derivation hash to invalidate the output via name, for testing. Type: (a@{ name, ... } -> Derivation) -> a -> Derivation Normally, fixed output derivations can and should be cached by their output hash only, but for testing we want to re-fetch everytime the fetcher changes. Changes to the fetcher become apparent in the drvPath, which is a hash of how to fetch, rather than a fixed store path. By inserting this hash into the name, we can make sure to re-run the fetcher every time the fetcher changes. This relies on the assumption that Nix isn’t clever enough to reuse its database of local store contents to optimize fetching. You might notice that the “salted” name derives from the normal invocation, not the final derivation. invalidateFetcherByDrvHash has to invoke the fetcher function twice: once to get a derivation hash, and again to produce the final fixed output derivation. Example 330. Prevent nix from reusing the output of a fetcher { tests.fetchgit = testers.invalidateFetcherByDrvHash fetchgit { name = "nix-source"; url = "https://github.com/NixOS/nix"; rev = "9d9dbe6ed05854e03811c361a3380e09183f4f4a"; hash = "sha256-7DszvbCNTjpzGRmpIVAWXk20P0/XTrWZ79KSOGLrUWY="; }; }

### runCommand

runCommand :: { name, script, stdenv ? stdenvNoCC, hash ? "...", ... } -> Derivation This is a wrapper around pkgs.runCommandWith, which produces a fixed-output derivation, enabling the command(s) to access the network ; salts the derivation’s name based on its inputs, ensuring the command is re-run whenever the inputs change. It accepts the following attributes: the derivation’s name ; the script to be executed ; stdenv, the environment to use, defaulting to stdenvNoCC ; the derivation’s output hash, defaulting to the empty file’s. The derivation’s outputHashMode is set by default to recursive, so the script can output a directory as well. All other attributes are passed through to mkDerivation, including nativeBuildInputs to specify dependencies available to the script. Example 331. Run a command with network access testers.runCommand { name = "access-the-internet"; script = '' curl -o /dev/null https://example.com touch $out ''; nativeBuildInputs = with pkgs; [ cacert curl ]; }

### runNixOSTest

A helper function that behaves exactly like the NixOS runTest, except it also assigns this Nixpkgs package set as the pkgs of the test and makes the nixpkgs.* options read-only. If your test is part of the Nixpkgs repository, or if you need a more general entrypoint, see “Calling a test” in the NixOS manual. Example 332. Run a NixOS test using runNixOSTest pkgs.testers.runNixOSTest ( { lib, ... }: { name = "hello"; nodes.machine = { pkgs, ... }: { environment.systemPackages = [ pkgs.hello ]; }; testScript = '' machine.succeed("hello") ''; } )

### nixosTest

Parameter Result Run a NixOS VM network test using this evaluation of Nixpkgs. NOTE: This function is primarily for external use. NixOS itself uses make-test-python.nix directly. Packages defined in Nixpkgs reuse NixOS tests via nixosTests, plural. It is mostly equivalent to the function import ./make-test-python.nix from the NixOS manual, except that the current application of Nixpkgs (pkgs) will be used, instead of letting NixOS invoke Nixpkgs anew. If a test machine needs to set NixOS options under nixpkgs, it must set only the nixpkgs.pkgs option.

#### Parameter

A NixOS VM test network, or path to it. Example: { name = "my-test"; nodes = { machine1 = { lib, pkgs, nodes, ... }: { environment.systemPackages = [ pkgs.hello ]; services.foo.enable = true; }; # machine2 = ...; }; testScript = '' start_all() machine1.wait_for_unit("foo.service") machine1.succeed("hello | foo-send") ''; }

#### Result

A derivation that runs the VM test. Notable attributes: nodes: the evaluated NixOS configurations. Useful for debugging and exploring the configuration. driverInteractive: a script that launches an interactive Python session in the context of the testScript.

### Development Shell helpers

Table of Contents devShellTools.valueToString devShellTools.unstructuredDerivationInputEnv devShellTools.derivationOutputEnv The nix-shell command has popularized the concept of transient shell environments for development or testing purposes. However, nix-shell is not the only way to create such environments, and even nix-shell itself can indirectly benefit from this library. This library provides a set of functions that help create such environments.

### devShellTools.valueToString

Converts Nix values to strings in the way the derivation built-in function does. Example 333. valueToString usage examples devShellTools.valueToString (builtins.toFile "foo" "bar") # => "/nix/store/...-foo" devShellTools.valueToString false # => ""

### devShellTools.unstructuredDerivationInputEnv

Convert a set of derivation attributes (as would be passed to [derivation]) to a set of environment variables that can be used in a shell script. This function does not support __structuredAttrs, but does support passAsFile. Example 334. unstructuredDerivationInputEnv usage example devShellTools.unstructuredDerivationInputEnv { drvAttrs = { name = "foo"; buildInputs = [ hello figlet ]; builder = bash; args = [ "-c" "${./builder.sh}" ]; }; } # => { # name = "foo"; # buildInputs = "/nix/store/...-hello /nix/store/...-figlet"; # builder = "/nix/store/...-bash"; #} Note that args is not included, because Nix does not added it to the builder process environment.

### devShellTools.derivationOutputEnv

Takes the relevant parts of a derivation and returns a set of environment variables, that would be present in the derivation. Example 335. derivationOutputEnv usage example let pkg = hello; in devShellTools.derivationOutputEnv { outputList = pkg.outputs; outputMap = pkg; }

### Special build helpers

Table of Contents fakeNss buildFHSEnv pkgs.makeSetupHook pkgs.mkShell vmTools pkgs.checkpointBuildTools This chapter describes several special build helpers.

### fakeNss

Inputs Examples Provides /etc/passwd and /etc/group files that contain root and nobody, allowing user/group lookups to work in binaries that insist on doing those. This might be a better choice than a custom script running useradd and related utilities if you only need those files to exist with some entries. fakeNss also provides /etc/nsswitch.conf, configuring NSS host resolution to first check /etc/hosts before checking DNS, since the default in the absence of a config file (dns [!UNAVAIL=return] files) is quite unexpected. It also creates an empty directory at /var/empty because it uses that as the home directory for the root and nobody users. The /var/empty directory can also be used as a chroot target to prevent file access in processes that do not need to access files, if your container runs such processes. The user entries created by fakeNss use the /bin/sh shell, which is not provided by fakeNss because in most cases it won’t be used. If you need that to be available, see dockerTools.binSh or provide your own.

#### Inputs

fakeNss is made available in Nixpkgs as a package rather than a function, but it has two attributes that can be overridden and might be useful in particular cases. For more details on how overriding works, see Example 337 and the section called “<pkg>.override”. extraPasswdLines (List of Strings; optional) A list of lines that will be added to /etc/passwd. Useful if extra users need to exist in the output of fakeNss. If extraPasswdLines is specified, it will not override the root and nobody entries created by fakeNss. Those entries will always exist. Lines specified here must follow the format in passwd(5). Default value: []. extraGroupLines (List of Strings; optional) A list of lines that will be added to /etc/group. Useful if extra groups need to exist in the output of fakeNss. If extraGroupLines is specified, it will not override the root and nobody entries created by fakeNss. Those entries will always exist. Lines specified here must follow the format in group(5). Default value: [].

#### Examples

Example 336. Using fakeNss with dockerTools.buildImage This example shows how to use fakeNss as-is. It is useful with functions in dockerTools to allow building Docker images that have the /etc/passwd and /etc/group files. This example includes the hello binary in the image so it can do something besides just have the extra files. { dockerTools, fakeNss, hello, }: dockerTools.buildImage { name = "image-with-passwd"; tag = "latest"; copyToRoot = [ fakeNss hello ]; config = { Cmd = [ "/bin/hello" ]; }; } Example 337. Using fakeNss with an override to add extra lines The following code uses override to add extra lines to /etc/passwd and /etc/group to create another user and group entry. { fakeNss }: fakeNss.override { extraPasswdLines = [ "newuser:x:9001:9001:new user:/var/empty:/bin/sh" ]; extraGroupLines = [ "newuser:x:9001:" ]; }

### buildFHSEnv

buildFHSEnv provides a way to build and run an FHS-compatible, lightweight sandbox. It creates an isolated root filesystem with the host’s /nix/store, so its footprint in terms of disk space is quite small. This allows you to run software which is hard or unfeasible to patch for NixOS; 3rd-party source trees with FHS assumptions, games distributed as tarballs, software with integrity checking and/or external self-updated binaries for instance. It uses Linux’ namespaces feature to create temporary lightweight environments which are destroyed after all child processes exit, without requiring elevated privileges. It works similar to containerisation technology such as Docker or FlatPak but provides no security-relevant separation from the host system. Accepted arguments are: name The name of the environment. pname The pname of the environment. version The version of the environment. executableName The name of the wrapper executable. Defaults to pname if set, or name otherwise. targetPkgs Packages to be installed for the main host’s architecture (i.e. x86_64 on x86_64 installations). Along with libraries binaries are also installed. multiPkgs Packages to be installed for all architectures supported by a host (i.e. i686 and x86_64 on x86_64 installations). Only libraries are installed by default. multiArch Whether to install 32bit multiPkgs into the FHSEnv in 64bit environments extraBuildCommands Additional commands to be executed for finalizing the directory structure. extraBuildCommandsMulti Like extraBuildCommands, but executed only on multilib architectures. extraOutputsToInstall Additional derivation outputs to be linked for both target and multi-architecture packages. extraInstallCommands Additional commands to be executed for finalizing the derivation with runner script. runScript A shell command to be executed inside the sandbox. It defaults to bash. Command line arguments passed to the resulting wrapper are appended to this command by default. This command must be escaped; i.e. "foo app" --do-stuff --with "some file". See lib.escapeShellArgs. profile Optional script for /etc/profile within the sandbox. You can create a simple environment using a shell.nix like this: { pkgs ? import <nixpkgs> { }, }: (pkgs.buildFHSEnv { name = "simple-x11-env"; targetPkgs = pkgs: (with pkgs; [ udev alsa-lib ]) ++ (with pkgs.xorg; [ libX11 libXcursor libXrandr ]); multiPkgs = pkgs: (with pkgs; [ udev alsa-lib ]); runScript = "bash"; }).env Running nix-shell on it would drop you into a shell inside an FHS env where those libraries and binaries are available in FHS-compliant paths. Applications that expect an FHS structure (i.e. proprietary binaries) can run inside this environment without modification. You can build a wrapper by running your binary in runScript, e.g. ./bin/start.sh. Relative paths work as expected. Additionally, the FHS builder links all relocated gsettings-schemas (the glib setup-hook moves them to share/gsettings-schemas/${name}/glib-2.0/schemas) to their standard FHS location. This means you don’t need to wrap binaries with wrapGApps* hook.

### pkgs.makeSetupHook

Usage Attributes pkgs.makeSetupHook is a build helper that produces hooks that go in to nativeBuildInputs

#### Usage

pkgs.makeSetupHook { name = "something-hook"; propagatedBuildInputs = [ pkgs.commandsomething ]; depsTargetTargetPropagated = [ pkgs.libsomething ]; } ./script.sh

##### setup hook that depends on the hello package and runs hello and @shell@ is substituted with path to bash

pkgs.makeSetupHook { name = "run-hello-hook"; # Put dependencies here if they have hooks or necessary dependencies propagated # otherwise prefer direct paths to executables. propagatedBuildInputs = [ pkgs.hello pkgs.cowsay ]; substitutions = { shell = "${pkgs.bash}/bin/bash"; cowsay = "${pkgs.cowsay}/bin/cowsay"; }; } ( writeScript "run-hello-hook.sh" '' #!@shell@ # the direct path to the executable has to be here because # this will be run when the file is sourced # at which point '$PATH' has not yet been populated with inputs @cowsay@ cow _printHelloHook() { hello } preConfigureHooks+=(_printHelloHook) '' )

#### Attributes

name Set the name of the hook. propagatedBuildInputs Runtime dependencies (such as binaries) of the hook. depsTargetTargetPropagated Non-binary dependencies. meta passthru substitutions Variables for substituteAll

### pkgs.mkShell

Usage Attributes Variants Building the shell pkgs.mkShell is a specialized stdenv.mkDerivation that removes some repetition when using it with nix-shell (or nix develop).

#### Usage

Here is a common usage example: { pkgs ? import <nixpkgs> { }, }: pkgs.mkShell { packages = [ pkgs.gnumake ]; inputsFrom = [ pkgs.hello pkgs.gnutar ]; shellHook = '' export DEBUG=1 ''; }

#### Attributes

name (default: nix-shell). Set the name of the derivation. packages (default: []). Add executable packages to the nix-shell environment. inputsFrom (default: []). Add build dependencies of the listed derivations to the nix-shell environment. shellHook (default: ""). Bash statements that are executed by nix-shell. … all the attributes of stdenv.mkDerivation.

#### Variants

pkgs.mkShellNoCC is a variant that uses stdenvNoCC instead of stdenv as base environment. This is useful if no C compiler is needed in the shell environment.

#### Building the shell

This derivation output will contain a text file that contains a reference to all the build inputs. This is useful in CI where we want to make sure that every derivation, and its dependencies, build properly. Or when creating a GC root so that the build dependencies don’t get garbage-collected.
