---
title: "Nixpkgs Reference Manual"
source: index.html
---
#### Controlling CTest invocation

By default tests are run by make in checkPhase or by ninja if ninja is available in nativeBuildInputs. Makefile and Ninja generators produce the test target, which invokes ctest under the hood. This makes passing additional arguments to ctest difficult, so it’s possible to invoke it directly in checkPhase by adding ctestCheckHook to nativeCheckInputs.

##### CTest Variables

disabledTests Allows to disable running a list of tests. Note that regular expressions are not supported by disabledTests, but it can be combined with --exclude-regex option. ctestFlags Additional options passed to ctest together with checkFlags.

### desktop-file-utils

This setup hook removes the MIME cache (located at $out/share/applications/mimeinfo.cache) in the preFixupPhase. This hook is necessary because mimeinfo.cache can be created when a package uses desktop-file-utils, resulting in collisions if multiple packages are installed that contain this file (as in #48295).

### gdk-pixbuf

Exports GDK_PIXBUF_MODULE_FILE environment variable to the builder. Add librsvg package to buildInputs to get svg support. See also the setup hook description in GNOME platform docs.

### GHC

Creates a temporary package database and registers every Haskell build input in it (TODO: how?).

### GNOME platform

Hooks related to GNOME platform and related libraries like GLib, GTK and GStreamer are described in the section called “GNOME”.

### haredo

buildPhase checkPhase installPhase This hook uses the haredo command runner to build, check, and install the package. It overrides buildPhase, checkPhase, and installPhase by default. The hook builds its targets in parallel if enableParallelBuilding is set to true.

#### buildPhase

This phase attempts to build the default target. Targets can be explicitly set by adding a string to the haredoBuildTargets list. This behavior can be disabled by setting dontUseHaredoBuild to true.

#### checkPhase

This phase searches for the check.do or test.do targets, running them if they exist. Targets can be explicitly set by adding a string to the haredoCheckTargets list. This behavior can be disabled by setting dontUseHaredoCheck to true.

#### installPhase

This phase attempts to build the install.do target, if it exists. Targets can be explicitly set by adding a string to the haredoInstallTargets list. This behavior can be disabled by setting dontUseHaredoInstall to true.

### installShellFiles

installBin installManPage installShellCompletion This hook adds helpers that install artifacts like executable files, manpages and shell completions. It exposes the following functions that can be used from your postInstall hook:

#### installBin

The installBin function takes one or more paths to files to install as executable files. This function will place them into outputBin.

##### Example Usage

{ nativeBuildInputs = [ installShellFiles ]; # Sometimes the file has an undesirable name. It should be renamed before # being installed via installBin postInstall = '' mv a.out delmar installBin foobar delmar ''; }

#### installManPage

The installManPage function takes one or more paths to manpages to install. The manpages must have a section suffix, and may optionally be compressed (with .gz suffix). This function will place them into the correct share/man/man<section>/ directory in outputMan.

##### Example Usage

{ nativeBuildInputs = [ installShellFiles ]; # Sometimes the manpage file has an undesirable name; e.g., it conflicts with # another software with an equal name. To install it with a different name, # the installed name must be provided before the path to the file. # # Below install a manpage "foobar.1" from the source file "./foobar.1", and # also installs the manpage "fromsea.3" from the source file "./delmar.3". postInstall = '' installManPage \ foobar.1 \ --name fromsea.3 delmar.3 ''; } The manpage may be the result of a piped input (e.g. <(cmd)), in which case the name must be provided before the pipe with the --name flag. { nativeBuildInputs = [ installShellFiles ]; postInstall = '' installManPage --name foobar.1 <($out/bin/foobar --manpage) ''; } If no parsing of arguments is desired, pass -- to opt-out of all subsequent arguments. { nativeBuildInputs = [ installShellFiles ]; # Installs a manpage from a file called "--name" postInstall = '' installManPage -- --name ''; }

#### installShellCompletion

The installShellCompletion function takes one or more paths to shell completion files. By default it will autodetect the shell type from the completion file extension, but you may also specify it by passing one of --bash, --fish, --zsh, or --nushell. These flags apply to all paths listed after them (up until another shell flag is given). Each path may also have a custom installation name provided by providing a flag --name NAME before the path. If this flag is not provided, zsh completions will be renamed automatically such that foobar.zsh becomes _foobar. A root name may be provided for all paths using the flag --cmd NAME; this synthesizes the appropriate name depending on the shell (e.g. --cmd foo will synthesize the name foo.bash for bash and _foo for zsh).

##### Example Usage

{ nativeBuildInputs = [ installShellFiles ]; postInstall = '' # explicit behavior installShellCompletion --bash --name foobar.bash share/completions.bash installShellCompletion --fish --name foobar.fish share/completions.fish installShellCompletion --nushell --name foobar share/completions.nu installShellCompletion --zsh --name _foobar share/completions.zsh # implicit behavior installShellCompletion share/completions/foobar.{bash,fish,zsh,nu} ''; } The path may also be the result of process substitution (e.g. <(cmd)), in which case the shell and name must be provided (see below). If the destination shell completion file is not actually present or consists of zero bytes after calling installShellCompletion this is treated as a build failure. In particular, if completion files are not vendored but are generated by running an executable, this is likely to fail in cross compilation scenarios. The result will be a zero byte completion file and hence a build failure. To prevent this, guard the completion generation commands.

##### Example Usage

{ nativeBuildInputs = [ installShellFiles ]; postInstall = lib.optionalString (stdenv.buildPlatform.canExecute stdenv.hostPlatform) '' # using process substitution installShellCompletion --cmd foobar \ --bash <($out/bin/foobar --bash-completion) \ --fish <($out/bin/foobar --fish-completion) \ --nushell <($out/bin/foobar --nushell-completion) \ --zsh <($out/bin/foobar --zsh-completion) ''; }

### julec.hook

Example code snippet Variables controlling julec.hook Jule is an effective programming language designed to build efficient, fast, reliable and safe software while maintaining simplicity. In Nixpkgs, jule.hook overrides the default build, check and install phases.

#### Example code snippet

{ julec, clangStdenv, }: clangStdenv.mkDerivation (finalAttrs: { # ... nativeBuildInputs = [ julec.hook ]; # Customize filenames if needed JULE_SRC_DIR = "./src"; JULE_OUT_DIR = "./bin"; JULE_OUT_NAME = "hello-jule"; JULE_TEST_DIR = "./tests"; JULE_TEST_OUT_DIR = "./test-bin"; JULE_TEST_OUT_NAME = "hello-jule-test"; # ... })

##### JULE_SRC_DIR

Specifies the source directory containing main.jule. Default is ./src.

##### JULE_OUT_DIR

Specifies the output directory for the compiled binary. Default is ./bin.

##### JULE_OUT_NAME

Specifies the name of the compiled binary. Default is output.

##### JULE_TEST_DIR

Specifies the directory containing test files. Default is the value of JULE_SRC_DIR.

##### JULE_TEST_OUT_DIR

Specifies the output directory for compiled test binaries. Default is the value of JULE_OUT_DIR.

##### JULE_TEST_OUT_NAME

Specifies the name of the compiled test binary. Default is the value of JULE_OUT_NAME with -test suffix.

##### dontUseJulecBuild

When set to true, doesn’t use the predefined julecBuildHook. Default is false.

##### dontUseJulecCheck

When set to true, doesn’t use the predefined julecCheckHook. Default is false.

##### dontUseJulecInstall

When set to true, doesn’t use the predefined julecInstallHook. Default is false.

### just

buildPhase checkPhase installPhase This setup hook attempts to use the just command runner to build, check, and install the package. The hook overrides buildPhase, checkPhase, and installPhase by default. The justFlags variable can be set to a list of strings to add additional flags passed to all invocations of just.

#### buildPhase

This phase attempts to invoke just with the default recipe. This behavior can be disabled by setting dontUseJustBuild to true.

#### checkPhase

This phase attempts to invoke the just test recipe, if it is available. This can be overridden by setting checkTarget to a string. This behavior can be disabled by setting dontUseJustCheck to true.

#### installPhase

This phase attempts to invoke the just install recipe. This behavior can be disabled by setting dontUseJustInstall to true.

### libiconv, libintl

A few libraries automatically add to NIX_LDFLAGS their library, making their symbols automatically available to the linker. This includes libiconv and libintl (gettext). This is done to provide compatibility between GNU Linux, where libiconv and libintl are bundled in, and other systems where that might not be the case. Sometimes, this behavior is not desired. To disable this behavior, set dontAddExtraLibs.

### libxml2

Adds every file named catalog.xml found under the xml/dtd and xml/xsl subdirectories of each build input to the XML_CATALOG_FILES environment variable.

### Meson

Variables controlling Meson Meson is an open source meta build system meant to be fast and user-friendly. In Nixpkgs, meson comes with a setup hook that overrides the configure, check, and install phases. Being a meta build system, meson needs an accompanying backend. In the context of Nixpkgs, the typical companion backend is Ninja, that provides a setup hook registering ninja-based build and install phases.

##### Meson Exclusive Variables

mesonFlags Controls the flags passed to meson setup during configure phase. mesonBuildDir Directory where Meson will put intermediate files. Setting this can be useful for debugging multiple Meson builds while in the same source directory, for example, when building for different platforms. Different values for each build will prevent build artifacts from interfering with each other. This setting has no tangible effect when running the build in a sandboxed derivation. The default value is build. mesonWrapMode Which value is passed as -Dwrap_mode=. In Nixpkgs, the default value is nodownload, so that no subproject will be downloaded (since network access is already disabled during deployment in Nixpkgs). Note: Meson allows pre-population of subprojects that would otherwise be downloaded. mesonBuildType Which value is passed as --buildtype to meson setup during configure phase. In Nixpkgs, the default value is plain. mesonAutoFeatures Which value is passed as -Dauto_features= to meson setup during configure phase. In Nixpkgs, the default value is enabled, meaning that every feature declared as “auto” by the meson scripts will be enabled. mesonCheckFlags Controls the flags passed to meson test during check phase. mesonInstallFlags Controls the flags passed to meson install during install phase. mesonInstallTags A list of installation tags passed to Meson’s commandline option --tags during install phase. Note: mesonInstallTags should be a list of strings that will be converted to a comma-separated string that is recognized to --tags. Example: mesonInstallTags = [ "emulator" "assembler" ]; will be converted to --tags emulator,assembler. dontUseMesonConfigure When set to true, don’t use the predefined mesonConfigurePhase. dontUseMesonCheck When set to true, don’t use the predefined mesonCheckPhase. dontUseMesonInstall When set to true, don’t use the predefined mesonInstallPhase.

##### Honored variables

The following variables commonly used by stdenv.mkDerivation are honored by Meson setup hook. prefixKey enableParallelBuilding enableParallelChecking

### mpiCheckPhaseHook

This hook can be used to setup a check phase that requires running a MPI application. It detects the present MPI implementation type and exports the necessary environment variables to use mpirun and mpiexec in a Nix sandbox. Example: { mpiCheckPhaseHook, mpi, ... }: { # ... nativeCheckInputs = [ openssh mpiCheckPhaseHook ]; }

### ninja

Overrides the build, install, and check phase to run ninja instead of make. You can disable this behavior with dontUseNinjaBuild, dontUseNinjaInstall, and dontUseNinjaCheck, respectively. Parallel building is enabled by default in Ninja. Note that if the Meson setup hook is also active, Ninja’s install and check phases will be disabled in favor of Meson’s.

### patchRcPath hooks

These hooks provide shell-specific utilities (with the same name as the hook) to patch shell scripts meant to be sourced by software users. The typical usage is to patch initialisation or rc scripts inside $out/bin or $out/etc. Such scripts, when being sourced, would insert the binary locations of certain commands into PATH, modify other environment variables or run a series of start-up commands. When shipped from the upstream, they sometimes use commands that might not be available in the environment they are getting sourced in. The compatible shells for each hook are: patchRcPathBash: Bash, ksh, zsh and other shells supporting the Bash-like parameter expansions. patchRcPathCsh: Csh scripts, such as those targeting tcsh. patchRcPathFish: Fish scripts. patchRcPathPosix: POSIX-conformant shells supporting the limited parameter expansions specified by the POSIX standard. The current implementation uses the parameter expansion ${foo-} only. For each supported shell, it modifies the script with a PATH prefix that is later removed when the script ends. It allows nested patching, which guarantees that a patched script may source another patched script. Syntax to apply the utility to a script: patchRcPath<shell> <file> <PATH-prefix> Example usage: Given a package foo containing an init script this-foo.fish that depends on coreutils, man and which, patch the init script for users to source without having the above dependencies in their PATH: { lib, stdenv, patchRcPathFish, }: stdenv.mkDerivation { # ... nativeBuildInputs = [ patchRcPathFish ]; postFixup = '' patchRcPathFish $out/bin/this-foo.fish ${ lib.makeBinPath [ coreutils man which ] } ''; }

#### Note

patchRcPathCsh and patchRcPathPosix implementation depends on sed to do the string processing. The others are in vanilla shell and have no third-party dependencies.

### Perl

Adds the lib/site_perl subdirectory of each build input to the PERL5LIB environment variable. For instance, if buildInputs contains Perl, then the lib/site_perl subdirectory of each input is added to the PERL5LIB environment variable.

### pkg-config

Adds the lib/pkgconfig and share/pkgconfig subdirectories of each build input to the PKG_CONFIG_PATH environment variable.

### postgresqlTestHook

Variables Hooks TCP and the Nix sandbox This hook starts a PostgreSQL server during the checkPhase. Example: { stdenv, postgresql, postgresqlTestHook, }: stdenv.mkDerivation { # ... nativeCheckInputs = [ postgresql postgresqlTestHook ]; } If you use a custom checkPhase, remember to add the runHook calls: checkPhase '' runHook preCheck # ... your tests runHook postCheck ''

#### Variables

The hook logic will read a number of variables and set them to a default value if unset or empty. Exported variables: PGDATA: location of server files. PGHOST: location of UNIX domain socket directory; the default host in a connection string. PGUSER: user to create / log in with, default: test_user. PGDATABASE: database name, default: test_db. Bash-only variables: postgresqlTestUserOptions: SQL options to use when creating the $PGUSER role, default: "LOGIN". Example: "LOGIN SUPERUSER" postgresqlTestSetupSQL: SQL commands to run as database administrator after startup, default: statements that create $PGUSER and $PGDATABASE. postgresqlTestSetupCommands: bash commands to run after database start, defaults to running $postgresqlTestSetupSQL as database administrator. postgresqlEnableTCP: set to 1 to enable TCP listening. Flaky; not recommended. postgresqlStartCommands: defaults to pg_ctl start. postgresqlExtraSettings: Additional configuration to add to postgresql.conf

#### Hooks

A number of additional hooks are run in postgresqlTestHook postgresqlTestSetupPost: run after postgresql has been set up.

#### TCP and the Nix sandbox

postgresqlEnableTCP relies on network sandboxing, which is not available on macOS and some custom Nix installations, resulting in flaky tests. For this reason, it is disabled by default. The preferred solution is to make the test suite use a UNIX domain socket connection. This is the default behavior when no host connection parameter is provided. Some test suites hardcode a value for host though, so a patch may be required. If you can upstream the patch, you can make host default to the PGHOST environment variable when set. Otherwise, you can patch it locally to omit the host connection string parameter altogether.

#### Note

The error libpq: failed (could not receive data from server: Connection refused is generally an indication that the test suite is trying to connect through TCP.

### Premake

This setup hook attempts to configure the package using the Premake build configuration system. It overrides the configurePhase by default, if none exists. The Premakefile to use can be specified by setting premakefile in the derivation. The flags passed to Premake can be configured by adding strings to the premakeFlags list.

### Python

Adds the python.sitePackages subdirectory (i.e. lib/pythonX.Y/site-packages) of each build input to the PYTHONPATH environment variable.

### scons

Overrides the build, install, and check phases. This uses the scons build system as a replacement for make. scons does not provide a configure phase, so everything is managed at build and install time.

### cargo-tauri.hook

Example code snippet Variables controlling cargo-tauri Tauri is a framework for building smaller, faster, and more secure desktop applications with a web frontend. In Nixpkgs, cargo-tauri.hook overrides the default build and install phases.

#### Example code snippet

{ lib, stdenv, rustPlatform, fetchNpmDeps, cargo-tauri, glib-networking, nodejs, npmHooks, openssl, pkg-config, webkitgtk_4_1, wrapGAppsHook4, }: rustPlatform.buildRustPackage (finalAttrs: { # ... cargoHash = "..."; # Assuming our app's frontend uses `npm` as a package manager npmDeps = fetchNpmDeps { name = "${finalAttrs.pname}-${finalAttrs.version}-npm-deps"; inherit (finalAttrs) src; hash = "..."; }; nativeBuildInputs = [ # Pull in our main hook cargo-tauri.hook # Setup npm nodejs npmHooks.npmConfigHook # Make sure we can find our libraries pkg-config ] ++ lib.optionals stdenv.hostPlatform.isLinux [ wrapGAppsHook4 ]; buildInputs = lib.optionals stdenv.hostPlatform.isLinux [ glib-networking # Most Tauri apps need networking openssl webkitgtk_4_1 ]; # Set our Tauri source directory cargoRoot = "src-tauri"; # And make sure we build there too buildAndTestSubdir = finalAttrs.cargoRoot; # ... })

##### Tauri Exclusive Variables

tauriBuildFlags Controls the flags passed to cargo tauri build. tauriBundleType The bundle type to build. dontTauriBuild Disables using tauriBuildHook. dontTauriInstall Disables using tauriInstallPostBuildHook and tauriInstallHook.

##### Honored Variables

Along with those found in the section called “buildRustPackage: Compiling Rust applications with Cargo”, the following variables used by cargoBuildHook and cargoInstallHook are honored by the cargo-tauri setup hook. buildAndTestSubdir cargoBuildType cargoBuildNoDefaultFeatures cargoBuildFeatures

### teTeX / TeX Live

Adds the share/texmf-nix subdirectory of each build input to the TEXINPUTS environment variable.

### udevCheckHook

The udevCheckHook derivation adds udevCheckPhase to the preInstallCheckHooks, which finds all udev rules in all outputs and verifies them using udevadm verify --resolve-names=never --no-style. It should be used in any package that has udev rules outputs to ensure the rules are and remain valid. The hook runs in installCheckPhase, requiring doInstallCheck is enabled for the hook to take effect: { lib, stdenv, udevCheckHook, # ... }: stdenv.mkDerivation (finalAttrs: { # ... nativeInstallCheckInputs = [ udevCheckHook ]; doInstallCheck = true; # ... }) Note that for buildPythonPackage and buildPythonApplication, doInstallCheck is enabled by default. All outputs are scanned for their /{etc,lib}/udev/rules.d paths. If no rule output is found, the hook is basically a no-op. The udevCheckHook adds a dependency on systemdMinimal. It is internally guarded behind hostPlatform supporting udev and buildPlatform being able to execute udevadm. The hook does not need explicit platform checks in the places where it is used. The hook can be disabled using dontUdevCheck, which is necessary if you want to run some different task in installCheckPhase on a package with broken udev rule outputs.

### unzip

This setup hook will allow you to unzip .zip files specified in $src. There are many similar packages like unrar, undmg, etc.

### validatePkgConfig

The validatePkgConfig hook validates all pkg-config (.pc) files in a package. This helps catch some common errors in pkg-config files, such as undefined variables.

### versionCheckHook

This hook adds a versionCheckPhase to the preInstallCheckHooks that runs the main program of the derivation with a --help or --version argument, and checks that the ${version} string is found in that output. If this check fails then the whole build will fail. (A softer option is testers.testVersion.) You use it like this: { lib, stdenv, versionCheckHook, # ... }: stdenv.mkDerivation (finalAttrs: { # ... nativeInstallCheckInputs = [ versionCheckHook ]; doInstallCheck = true; # ... }) Note that for buildPythonPackage and buildPythonApplication, doInstallCheck is enabled by default. It does so in a clean environment (using env --ignore-environment), and it checks for the ${version} string in both the stdout and the stderr of the command. It will report to you in the build log the output it received and it will fail the build if it failed to find ${version}. The variables that this phase control are: dontVersionCheck: Disable adding this hook to the preInstallCheckHooks. Useful if you do want to load the bash functions of the hook, but run them differently. versionCheckProgram: The full path to the program that should print the ${version} string. Defaults to using the first non-empty value $binary out of ${NIX_MAIN_PROGRAM} and ${pname}, in that order, to build roughly ${placeholder "out"}/bin/$binary. ${NIX_MAIN_PROGRAM}'s value comes from meta.mainProgram, and does not normally need to be set explicitly. When setting versionCheckProgram, using $out directly won’t work, as environment variables from this variable are not expanded by the hook. Hence using placeholder "out" is unavoidable. versionCheckProgramArg: The argument that needs to be passed to versionCheckProgram. If undefined the hook tries first --help and then --version. Examples: version, -V, -v. versionCheckKeepEnvironment: A list of environment variables to keep and pass to the command. Only those variables should be added to this list that are actually required for the version command to work. If it is not feasible to explicitly list all these environment variables you can set this parameter to the special value "*" to disable the --ignore-environment flag and thus keep all environment variables. preVersionCheck: A hook to run before the check is done. postVersionCheck: A hook to run after the check is done. This check assumes the executable is hermetic. If environment variables such as PATH or HOME are required for the program to function, then testers.testVersion is currently the better alternative.

### wafHook

Variables controlling wafHook Waf is a Python-based software building system. In Nixpkgs, wafHook overrides the default configure, build, and install phases.

##### wafHook Exclusive Variables

The variables below are exclusive of wafHook. wafPath Location of the waf tool. It defaults to ./waf, to honor software projects that include it directly inside their source trees. If the file pointed by wafPath doesn’t exist, then waf provided by Nixpkgs will be used. wafFlags Controls the flags passed to waf tool during build and install phases. For settings specific to build or install phases, use wafBuildFlags or wafInstallFlags, respectively. dontUseWafConfigure When set to true, don’t use the predefined wafConfigurePhase. dontUseWafBuild When set to true, don’t use the predefined wafBuildPhase. dontUseWafInstall When set to true, don’t use the predefined wafInstallPhase.

##### Similar variables

The following variables are similar to their stdenv.mkDerivation counterparts. wafHook Variablestdenv.mkDerivation Counterpart wafConfigureFlagsconfigureFlags wafConfigureTargetsconfigureTargets wafBuildFlagsbuildFlags wafBuildTargetsbuildTargets wafInstallFlagsinstallFlags wafInstallTargetsinstallTargets

##### Honored variables

The following variables commonly used by stdenv.mkDerivation are honored by wafHook. prefixKey enableParallelBuilding enableParallelInstalling

### zig.hook

Example code snippet Variables controlling zig.hook Zig is a general-purpose programming language and toolchain for maintaining robust, optimal and reusable software. In Nixpkgs, zig.hook overrides the default build, check and install phases.

#### Example code snippet

{ lib, stdenv, zig, }: stdenv.mkDerivation { # . . . nativeBuildInputs = [ zig.hook ]; zigBuildFlags = [ "-Dman-pages=true" ]; dontUseZigCheck = true; # . . . }

##### zig.hook Exclusive Variables

The variables below are exclusive to zig.hook. dontUseZigBuild Disables using zigBuildPhase. dontUseZigCheck Disables using zigCheckPhase. dontUseZigInstall Disables using zigInstallPhase.

##### Similar variables

The following variables are similar to their stdenv.mkDerivation counterparts. zig.hook Variablestdenv.mkDerivation Counterpart zigBuildFlagsbuildFlags zigCheckFlagscheckFlags zigInstallFlagsinstallFlags

##### Variables honored by zig.hook

The following variables commonly used by stdenv.mkDerivation are honored by zig.hook. prefixKey dontAddPrefix

### xcbuildHook

Overrides the build and install phases to run the “xcbuild” command. This hook is needed when a project only comes with build files for the XCode build system. You can disable this behavior by setting buildPhase and configurePhase to a custom value. xcbuildFlags controls flags passed only to xcbuild.

### xfce.xfce4-dev-tools

This setup hook attempts to run xdt-autogen in xdtAutogenPhase, which is part of preConfigurePhases. This behavior can be disabled by setting dontUseXdtAutogenPhase to true.

### Languages and frameworks

Table of Contents Agda Android Astal BEAM Languages (Erlang, Elixir & LFE) CHICKEN Coq and coq packages COSMIC Crystal CUDA Cue (Cuelang) Dart Dhall D (Dlang) Dotnet Emscripten Factor GNOME Go Gradle Hare Haskell Hy Idris Idris2 iOS Java Javascript Julia lisp-modules Lua Maven Nim OCaml Octave Perl PHP pkg-config Python Qt R Ruby Rust Scheme Swift Tcl TeX Live Typst Vim Neovim The standard build environment makes it easy to build typical Autotools-based packages with very little code. Any other kind of package can be accommodated by overriding the appropriate phases of stdenv. However, there are specialised functions in Nixpkgs to easily build packages for other programming languages, such as Perl or Haskell. These are described in this chapter. Each supported language or software ecosystem has its own package set named <language or ecosystem>Packages, which can be explored in various ways: Search on search.nixos.org For example, search for haskellPackages or rubyPackages. Navigate attribute sets with nix repl. This technique is generally useful to inspect Nix language data structures. Example 369. Navigate Java compiler variants in javaPackages with nix repl $ nix repl '<nixpkgs>' -I nixpkgs=channel:nixpkgs-unstable nix-repl> javaPackages.<tab> javaPackages.compiler javaPackages.openjfx15 javaPackages.openjfx21 javaPackages.recurseForDerivations javaPackages.jogl_2_4_0 javaPackages.openjfx17 javaPackages.openjfx25 javaPackages.mavenfod javaPackages.openjfx19 javaPackages.override javaPackages.openjfx11 javaPackages.openjfx20 javaPackages.overrideDerivation List all derivations on the command line with nix-env --query. nix-env is the only convenient way to do that, as it will skip attributes that fail assertions, such as when a package is marked as broken, rather than failing the entire evaluation. Example 370. List all Python packages in Nixpkgs The following command lists all derivations names with their attribute path from the latest Nixpkgs rolling release (nixpkgs-unstable). $ nix-env -qaP -f '<nixpkgs>' -A pythonPackages -I nixpkgs=channel:nixpkgs-unstable pythonPackages.avahi avahi-0.8 pythonPackages.boost boost-1.81.0 pythonPackages.caffe caffe-1.0 pythonPackages.caffeWithCuda caffe-1.0 pythonPackages.cbeams cbeams-1.0.3 …

### Agda

How to use Agda Compiling Agda Writing Agda packages Maintaining the Agda package set on Nixpkgs
