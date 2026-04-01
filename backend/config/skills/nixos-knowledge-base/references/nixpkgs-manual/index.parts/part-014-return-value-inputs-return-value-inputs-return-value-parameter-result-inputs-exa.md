---
title: "Nixpkgs Reference Manual"
source: index.html
---
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

### vmTools

vmTools.createEmptyImage vmTools.runInLinuxVM vmTools.extractFs vmTools.extractMTDfs vmTools.runInLinuxImage vmTools.makeImageTestScript vmTools.diskImageFuns vmTools.diskImageExtraFuns vmTools.diskImages A set of VM related utilities, that help in building some packages in more advanced scenarios.

#### vmTools.createEmptyImage

A bash script fragment that produces a disk image at destination.

##### Attributes

size. The disk size, in MiB. fullName. Name that will be written to ${destination}/nix-support/full-name. destination (optional, default $out). Where to write the image files.

#### vmTools.runInLinuxVM

Run a derivation in a Linux virtual machine (using Qemu/KVM). By default, there is no disk image; the root filesystem is a tmpfs, and the Nix store is shared with the host (via the 9P protocol). Thus, any pure Nix derivation should run unmodified. If the build fails and Nix is run with the -K/--keep-failed option, a script run-vm will be left behind in the temporary build directory that allows you to boot into the VM and debug it interactively.

##### Attributes

preVM (optional). Shell command to be evaluated before the VM is started (i.e., on the host). memSize (optional, default 512). The memory size of the VM in MiB (1024×1024 bytes). diskImage (optional). A file system image to be attached to /dev/sda. Note that currently we expect the image to contain a filesystem, not a full disk image with a partition table etc.

##### Examples

Build the derivation hello inside a VM: { pkgs }: with pkgs; with vmTools; runInLinuxVM hello Build inside a VM with extra memory: { pkgs }: with pkgs; with vmTools; runInLinuxVM ( hello.overrideAttrs (_: { memSize = 1024; }) ) Use VM with a disk image (implicitly sets diskImage, see vmTools.createEmptyImage): { pkgs }: with pkgs; with vmTools; runInLinuxVM ( hello.overrideAttrs (_: { preVM = createEmptyImage { size = 1024; fullName = "vm-image"; }; }) )

#### vmTools.extractFs

Takes a file, such as an ISO, and extracts its contents into the store.

##### Attributes

file. Path to the file to be extracted. Note that currently we expect the image to contain a filesystem, not a full disk image with a partition table etc. fs (optional). Filesystem of the contents of the file.

##### Examples

Extract the contents of an ISO file: { pkgs }: with pkgs; with vmTools; extractFs { file = ./image.iso; }

#### vmTools.extractMTDfs

Like the section called “vmTools.extractFs”, but it makes use of a Memory Technology Device (MTD).

#### vmTools.runInLinuxImage

Like the section called “vmTools.runInLinuxVM”, but instead of using stdenv from the Nix store, run the build using the tools provided by /bin, /usr/bin, etc. from the specified filesystem image, which typically is a filesystem containing a FHS-based Linux distribution.

#### vmTools.makeImageTestScript

Generate a script that can be used to run an interactive session in the given image.

##### Examples

Create a script for running a Fedora 27 VM: { pkgs }: with pkgs; with vmTools; makeImageTestScript diskImages.fedora27x86_64 Create a script for running an Ubuntu 20.04 VM: { pkgs }: with pkgs; with vmTools; makeImageTestScript diskImages.ubuntu2004x86_64

#### vmTools.diskImageFuns

A set of functions that build a predefined set of minimal Linux distributions images.

##### Images

Fedora fedora26x86_64 fedora27x86_64 CentOS centos6i386 centos6x86_64 centos7x86_64 Ubuntu ubuntu1404i386 ubuntu1404x86_64 ubuntu1604i386 ubuntu1604x86_64 ubuntu1804i386 ubuntu1804x86_64 ubuntu2004i386 ubuntu2004x86_64 ubuntu2204i386 ubuntu2204x86_64 Debian debian10i386 debian10x86_64 debian11i386 debian11x86_64 debian12i386 debian12x86_64

##### Attributes

size (optional, defaults to 4096). The size of the image, in MiB. extraPackages (optional). A list names of additional packages from the distribution that should be included in the image.

##### Examples

8GiB image containing Firefox in addition to the default packages: { pkgs }: with pkgs; with vmTools; diskImageFuns.ubuntu2004x86_64 { extraPackages = [ "firefox" ]; size = 8192; }

#### vmTools.diskImageExtraFuns

Shorthand for vmTools.diskImageFuns.<attr> { extraPackages = ... }.

#### vmTools.diskImages

Shorthand for vmTools.diskImageFuns.<attr> { }.

### pkgs.checkpointBuildTools

Example pkgs.checkpointBuildTools provides a way to build derivations incrementally. It consists of two functions to make checkpoint builds using Nix possible. For hermeticity, Nix derivations do not allow any state to be carried over between builds, making a transparent incremental build within a derivation impossible. However, we can tell Nix explicitly what the previous build state was, by representing that previous state as a derivation output. This allows the passed build state to be used for an incremental build. To change a normal derivation to a checkpoint based build, these steps must be taken: { checkpointArtifacts = (pkgs.checkpointBuildTools.prepareCheckpointBuild pkgs.virtualbox); } { changedVBox = pkgs.virtualbox.overrideAttrs (old: { src = path/to/vbox/sources; }); } use mkCheckpointBuild changedVBox checkpointArtifacts enjoy shorter build times

#### Example

{ pkgs ? import <nixpkgs> { }, }: let inherit (pkgs.checkpointBuildTools) prepareCheckpointBuild mkCheckpointBuild; helloCheckpoint = prepareCheckpointBuild pkgs.hello; changedHello = pkgs.hello.overrideAttrs (_: { doCheck = false; postPatch = '' sed -i 's/Hello, world!/Hello, Nix!/g' src/hello.c ''; }); in mkCheckpointBuild changedHello helloCheckpoint

### Images

Table of Contents pkgs.appimageTools pkgs.dockerTools pkgs.ociTools pkgs.portableService <nixpkgs/nixos/lib/make-disk-image.nix> pkgs.mkBinaryCache This chapter describes tools for creating various types of images.

### pkgs.appimageTools

Wrapping Extracting pkgs.appimageTools is a set of functions for extracting and wrapping AppImage files. They are meant to be used if traditional packaging from source is infeasible, or if it would take too long. To quickly run an AppImage file, pkgs.appimage-run can be used as well.

#### Warning

The appimageTools API is unstable and may be subject to backwards-incompatible changes in the future.

#### Wrapping

Use wrapType2 to wrap any AppImage. This will create a FHS environment with many packages expected to exist for the AppImage to work. wrapType2 expects an argument with the src attribute, and either a name attribute or pname and version attributes. It will eventually call into buildFHSEnv, and any extra attributes in the argument to wrapType2 will be passed through to it. This means that you can pass the extraInstallCommands attribute, for example, and it will have the same effect as described in buildFHSEnv.

#### Note

In the past, appimageTools provided both wrapType1 and wrapType2, to be used depending on the type of AppImage that was being wrapped. However, those were unified early 2020, meaning that both wrapType1 and wrapType2 have the same behaviour now. Example 338. Wrapping an AppImage from GitHub { appimageTools, fetchurl }: let pname = "nuclear"; version = "0.6.30"; src = fetchurl { url = "https://github.com/nukeop/nuclear/releases/download/v${version}/nuclear-v${version}.AppImage"; hash = "sha256-he1uGC1M/nFcKpMM9JKY4oeexJcnzV0ZRxhTjtJz6xw="; }; in appimageTools.wrapType2 { inherit pname version src; } The argument passed to wrapType2 can also contain an extraPkgs attribute, which allows you to include additional packages inside the FHS environment your AppImage is going to run in. extraPkgs must be a function that returns a list of packages. There are a few ways to learn which dependencies an application needs: Looking through the extracted AppImage files, reading its scripts and running patchelf and ldd on its executables. This can also be done in appimage-run, by setting APPIMAGE_DEBUG_EXEC=bash. Running strace -vfefile on the wrapped executable, looking for libraries that can’t be found. Example 339. Wrapping an AppImage with extra packages { appimageTools, fetchurl }: let pname = "irccloud"; version = "0.16.0"; src = fetchurl { url = "https://github.com/irccloud/irccloud-desktop/releases/download/v${version}/IRCCloud-${version}-linux-x86_64.AppImage"; hash = "sha256-/hMPvYdnVB1XjKgU2v47HnVvW4+uC3rhRjbucqin4iI="; }; in appimageTools.wrapType2 { inherit pname version src; extraPkgs = pkgs: [ pkgs.at-spi2-core ]; }

#### Extracting

Use extract if you need to extract the contents of an AppImage. This is usually used in Nixpkgs to install extra files in addition to wrapping the AppImage. extract expects an argument with the src attribute, and either a name attribute or pname and version attributes.

#### Note

In the past, appimageTools provided both extractType1 and extractType2, to be used depending on the type of AppImage that was being extracted. However, those were unified early 2020, meaning that both extractType1 and extractType2 have the same behaviour as extract now. Example 340. Extracting an AppImage to install extra files This example was adapted from a real package in Nixpkgs to show how extract is usually used in combination with wrapType2. Note how appimageContents is used in extraInstallCommands to install additional files that were extracted from the AppImage. { appimageTools, fetchurl }: let pname = "irccloud"; version = "0.16.0"; src = fetchurl { url = "https://github.com/irccloud/irccloud-desktop/releases/download/v${version}/IRCCloud-${version}-linux-x86_64.AppImage"; hash = "sha256-/hMPvYdnVB1XjKgU2v47HnVvW4+uC3rhRjbucqin4iI="; }; appimageContents = appimageTools.extract { inherit pname version src; }; in appimageTools.wrapType2 { inherit pname version src; extraPkgs = pkgs: [ pkgs.at-spi2-core ]; extraInstallCommands = '' mv $out/bin/irccloud-${version} $out/bin/irccloud install -m 444 -D ${appimageContents}/irccloud.desktop $out/share/applications/irccloud.desktop install -m 444 -D ${appimageContents}/usr/share/icons/hicolor/512x512/apps/irccloud.png \ $out/share/icons/hicolor/512x512/apps/irccloud.png substituteInPlace $out/share/applications/irccloud.desktop \ --replace-fail 'Exec=AppRun' 'Exec=irccloud' ''; } The argument passed to extract can also contain a postExtract attribute, which allows you to execute additional commands after the files are extracted from the AppImage. postExtract must be a string with commands to run.

#### Warning

When specifying postExtract, you should use appimageTools.wrapAppImage instead of appimageTools.wrapType2. Otherwise wrapType2 will extract the AppImage contents without respecting the postExtract instructions. Example 341. Extracting an AppImage to install extra files, using postExtract This is a rewrite of Example 340 to use postExtract and wrapAppImage. { appimageTools, fetchurl }: let pname = "irccloud"; version = "0.16.0"; src = fetchurl { url = "https://github.com/irccloud/irccloud-desktop/releases/download/v${version}/IRCCloud-${version}-linux-x86_64.AppImage"; hash = "sha256-/hMPvYdnVB1XjKgU2v47HnVvW4+uC3rhRjbucqin4iI="; }; appimageContents = appimageTools.extract { inherit pname version src; postExtract = '' substituteInPlace $out/irccloud.desktop --replace-fail 'Exec=AppRun' 'Exec=irccloud' ''; }; in appimageTools.wrapAppImage { inherit pname version; src = appimageContents; extraPkgs = pkgs: [ pkgs.at-spi2-core ]; extraInstallCommands = '' mv $out/bin/irccloud-${version} $out/bin/irccloud install -m 444 -D ${appimageContents}/irccloud.desktop $out/share/applications/irccloud.desktop install -m 444 -D ${appimageContents}/usr/share/icons/hicolor/512x512/apps/irccloud.png \ $out/share/icons/hicolor/512x512/apps/irccloud.png ''; # specify src archive for nix-update passthru.src = src; }

### pkgs.dockerTools

buildImage buildLayeredImage streamLayeredImage pullImage exportImage Environment Helpers buildNixShellImage streamNixShellImage pkgs.dockerTools is a set of functions for creating and manipulating Docker images according to the Docker Image Specification v1.3.1. Docker itself is not used to perform any of the operations done by these functions.

#### buildImage

This function builds a Docker-compatible repository tarball containing a single image. As such, the result is suitable for being loaded in Docker with docker image load (see Example 342 for how to do this). This function will create a single layer for all files (and dependencies) that are specified in its argument. Only new dependencies that are not already in the existing layers will be copied. If you prefer to create multiple layers for the files and dependencies you want to add to the image, see the section called “buildLayeredImage” or the section called “streamLayeredImage” instead. This function allows a script to be run during the layer generation process, allowing custom behaviour to affect the final results of the image (see the documentation of the runAsRoot and extraCommands attributes). The resulting repository tarball will list a single image as specified by the name and tag attributes. By default, that image will use a static creation date (see documentation for the created attribute). This allows buildImage to produce reproducible images.

#### Tip

When running an image built with buildImage, you might encounter certain errors depending on what you included in the image, especially if you did not start with any base image. If you encounter errors similar to getProtocolByName: does not exist (no such protocol name: tcp), you may need to add the contents of pkgs.iana-etc in the copyToRoot attribute. Similarly, if you encounter errors similar to Error_Protocol ("certificate has unknown CA",True,UnknownCa), you may need to add the contents of pkgs.cacert in the copyToRoot attribute.

##### Inputs

buildImage expects an argument with the following attributes: name (String) The name of the generated image. tag (String or Null; optional) Tag of the generated image. If null, the hash of the nix derivation will be used as the tag. Default value: null. fromImage (Path or Null; optional) The repository tarball of an image to be used as the base for the generated image. It must be a valid Docker image, such as one exported by docker image save, or another image built with the dockerTools utility functions. This can be seen as an equivalent of FROM fromImage in a Dockerfile. A value of null can be seen as an equivalent of FROM scratch. If specified, the layer created by buildImage will be appended to the layers defined in the base image, resulting in an image with at least two layers (one or more layers from the base image and the layer created by buildImage). Otherwise, the resulting image will contain the single layer created by buildImage.

#### Note

Only Env configuration is inherited from the base image. Default value: null. fromImageName (String or Null; optional) Used to specify the image within the repository tarball in case it contains multiple images. A value of null means that buildImage will use the first image available in the repository.

#### Note

This must be used with fromImageTag. Using only fromImageName without fromImageTag will make buildImage use the first image available in the repository. Default value: null. fromImageTag (String or Null; optional) Used to specify the image within the repository tarball in case it contains multiple images. A value of null means that buildImage will use the first image available in the repository.

#### Note

This must be used with fromImageName. Using only fromImageTag without fromImageName will make buildImage use the first image available in the repository Default value: null. copyToRoot (Path, List of Paths, or Null; optional) Files to add to the generated image. Anything that coerces to a path (e.g. a derivation) can also be used. This can be seen as an equivalent of ADD contents/ / in a Dockerfile. Default value: null. keepContentsDirlinks (Boolean; optional) When adding files to the generated image (as specified by copyToRoot), this attribute controls whether to preserve symlinks to directories. If false, the symlinks will be transformed into directories. This behaves the same as rsync -k when keepContentsDirlinks is false, and the same as rsync -K when keepContentsDirlinks is true. Default value: false. runAsRoot (String or Null; optional) A bash script that will run as root inside a VM that contains the existing layers of the base image and the new generated layer (including the files from copyToRoot). The script will be run with a working directory of /. This can be seen as an equivalent of RUN ... in a Dockerfile. A value of null means that this step in the image generation process will be skipped. See Example 343 for how to work with this attribute.

#### Caution

Using this attribute requires the kvm device to be available, see system-features. If the kvm device isn’t available, you should consider using buildLayeredImage or streamLayeredImage instead. Those functions allow scripts to be run as root without access to the kvm device.

#### Note

At the time the script in runAsRoot is run, the files specified directly in copyToRoot will be present in the VM, but their dependencies might not be there yet. Copying their dependencies into the generated image is a step that happens after runAsRoot finishes running. Default value: null. extraCommands (String; optional) A bash script that will run before the layer created by buildImage is finalised. The script will be run on some (opaque) working directory which will become / once the layer is created. This is similar to runAsRoot, but the script specified in extraCommands is not run as root, and does not involve creating a VM. It is simply run as part of building the derivation that outputs the layer created by buildImage. See Example 344 for how to work with this attribute, and subtle differences compared to runAsRoot. Default value: "". config (Attribute Set or Null; optional) Used to specify the configuration of the containers that will be started off the generated image. Must be an attribute set, with each attribute as listed in the Docker Image Specification v1.3.1. Default value: null. architecture (String; optional) Used to specify the image architecture. This is useful for multi-architecture builds that don’t need cross compiling. If specified, its value should follow the OCI Image Configuration Specification, which should still be compatible with Docker. According to the linked specification, all possible values for $GOARCH in the Go docs should be valid, but will commonly be one of 386, amd64, arm, or arm64. Default value: the same value from pkgs.go.GOARCH. diskSize (Number; optional) Controls the disk size in MiB (1024x1024 bytes) of the VM used to run the script specified in runAsRoot. This attribute is ignored if runAsRoot is null. Default value: 1024. buildVMMemorySize (Number; optional) Controls the amount of memory in MiB (1024x1024 bytes) provisioned for the VM used to run the script specified in runAsRoot. This attribute is ignored if runAsRoot is null. Default value: 512. created (String; optional) Specifies the time of creation of the generated image. This should be either a date and time formatted according to ISO-8601 or "now", in which case buildImage will use the current date. See Example 345 for how to use "now".

#### Caution

Using "now" means that the generated image will not be reproducible anymore (because the date will always change whenever it’s built). Default value: "1970-01-01T00:00:01Z". uid (Number; optional) The uid of the user that will own the files packed in the new layer built by buildImage. Default value: 0. gid (Number; optional) The gid of the group that will own the files packed in the new layer built by buildImage. Default value: 0. compressor (String; optional) Selects the algorithm used to compress the image. Default value: "gz". Possible values: "none", "gz", "zstd". includeNixDB (Boolean; optional) Populate the nix database in the image with the dependencies of copyToRoot. The main purpose is to be able to use nix commands in the container.
