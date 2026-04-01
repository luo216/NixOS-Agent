---
title: "Standard environment"
source: index.html
---
### Package setup hooks

move-docs.sh compress-man-pages.sh strip.sh patch-shebangs.sh audit-tmpdir.sh multiple-outputs.sh move-sbin.sh move-lib64.sh move-systemd-user-units.sh no-broken-symlinks.sh set-source-date-epoch-to-latest.sh add-bin-to-path.sh writable-tmpdir-as-home.sh Bintools Wrapper and hook CC Wrapper and hook Other hooks Compiler and Linker wrapper hooks Nix itself considers a build-time dependency as merely something that should previously be built and accessible at build time—packages themselves are on their own to perform any additional setup. In most cases, that is fine, and the downstream derivation can deal with its own dependencies. But for a few common tasks, that would result in almost every package doing the same sort of setup work—depending not on the package itself, but entirely on which dependencies were used. In order to alleviate this burden, the setup hook mechanism was written, where any package can include a shell script that [by convention rather than enforcement by Nix], any downstream reverse-dependency will source as part of its build process. That allows the downstream dependency to merely specify its dependencies, and lets those dependencies effectively initialize themselves. No boilerplate mirroring the list of dependencies is needed. The setup hook mechanism is a bit of a sledgehammer though: a powerful feature with a broad and indiscriminate area of effect. The combination of its power and implicit use may be expedient, but isn’t without costs. Nix itself is unchanged, but the spirit of added dependencies being effect-free is violated even if the latter isn’t. For example, if a derivation path is mentioned more than once, Nix itself doesn’t care and makes sure the dependency derivation is already built just the same—depending is just needing something to exist, and needing is idempotent. However, a dependency specified twice will have its setup hook run twice, and that could easily change the build environment (though a well-written setup hook will therefore strive to be idempotent so this is in fact not observable). More broadly, setup hooks are anti-modular in that multiple dependencies, whether the same or different, should not interfere and yet their setup hooks may well do so. The most typical use of the setup hook is actually to add other hooks which are then run (i.e. after all the setup hooks) on each dependency. For example, the C compiler wrapper’s setup hook feeds itself flags for each dependency that contains relevant libraries and headers. This is done by defining a bash function, and appending its name to one of envBuildBuildHooks, envBuildHostHooks, envBuildTargetHooks, envHostHostHooks, envHostTargetHooks, or envTargetTargetHooks. These 6 bash variables correspond to the 6 sorts of dependencies by platform (there’s 12 total but we ignore the propagated/non-propagated axis). Packages adding a hook should not hard code a specific hook, but rather choose a variable relative to how they are included. Returning to the C compiler wrapper example, if the wrapper itself is an n dependency, then it only wants to accumulate flags from n + 1 dependencies, as only those ones match the compiler’s target platform. The hostOffset variable is defined with the current dependency’s host offset targetOffset with its target offset, before its setup hook is sourced. Additionally, since most environment hooks don’t care about the target platform, that means the setup hook can append to the right bash array by doing something like addEnvHooks "$hostOffset" myBashFunction The existence of setups hooks has long been documented and packages inside Nixpkgs are free to use this mechanism. Other packages, however, should not rely on these mechanisms not changing between Nixpkgs versions. Because of the existing issues with this system, there’s little benefit from mandating it be stable for any period of time. First, let’s cover some setup hooks that are part of Nixpkgs default stdenv. This means that they are run for every package built using stdenv.mkDerivation, even with custom builders. Some of these are platform specific, so they may run on Linux but not Darwin or vice-versa.

#### move-docs.sh

This setup hook moves any installed documentation to the /share subdirectory directory. This includes the man, doc and info directories. This is needed for legacy programs that do not know how to use the share subdirectory.

#### compress-man-pages.sh

This setup hook compresses any man pages that have been installed. The compression is done using the gzip program. This helps to reduce the installed size of packages.

#### strip.sh

This runs the strip command on installed binaries and libraries. This removes unnecessary information like debug symbols when they are not needed. This also helps to reduce the installed size of packages.

#### patch-shebangs.sh

This setup hook patches installed scripts to add Nix store paths to their shebang interpreter as found in the build environment. The shebang line tells a Unix-like operating system which interpreter to use to execute the script’s contents.

#### Note

The generic builder populates PATH from inputs of the derivation.

##### Invocation

Multiple paths can be specified. patchShebangs [--build | --host] PATH... Flags --build Look up commands available at build time --host Look up commands available at run time Examples patchShebangs --host /nix/store/<hash>-hello-1.0/bin patchShebangs --build configure #!/bin/sh will be rewritten to #!/nix/store/<hash>-some-bash/bin/sh. #!/usr/bin/env gets special treatment: #!/usr/bin/env python is rewritten to /nix/store/<hash>/bin/python. Interpreter paths that point to a valid Nix store location are not changed.

#### Note

A script file must be marked as executable, otherwise it will not be considered. This mechanism ensures that the interpreter for a given script is always found and is exactly the one specified by the build. It can be disabled by setting dontPatchShebangs: stdenv.mkDerivation { # ... dontPatchShebangs = true; # ... } The file patch-shebangs.sh defines the patchShebangs function. It is used to implement patchShebangsAuto, the setup hook that is registered to run during the fixup phase by default. If you need to run patchShebangs at build time, it must be called explicitly within one of the build phases.

#### audit-tmpdir.sh

This verifies that no references are left from the install binaries to the directory used to build those binaries. This ensures that the binaries do not need things outside the Nix store. This is currently supported in Linux only.

#### multiple-outputs.sh

This setup hook adds configure flags that tell packages to install files into any one of the proper outputs listed in outputs. This behavior can be turned off by setting setOutputFlags to false in the derivation environment. See Multiple-output packages for more information.

#### move-sbin.sh

This setup hook moves any binaries installed in the sbin/ subdirectory into bin/. In addition, a link is provided from sbin/ to bin/ for compatibility.

#### move-lib64.sh

This setup hook moves any libraries installed in the lib64/ subdirectory into lib/. In addition, a link is provided from lib64/ to lib/ for compatibility.

#### move-systemd-user-units.sh

This setup hook moves any systemd user units installed in the lib/ subdirectory into share/. In addition, a link is provided from share/ to lib/ for compatibility. This is needed for systemd to find user services when installed into the user profile. This hook only runs when compiling for Linux.

#### no-broken-symlinks.sh

This setup hook checks for, reports, and (by default) fails builds when “broken” symlinks are found. A symlink is considered “broken” if it’s dangling (the target doesn’t exist) or reflexive (it refers to itself). This hook can be disabled by setting dontCheckForBrokenSymlinks.

#### Note

The hook only considers symlinks with targets inside the Nix store or $TMPDIR directory (typically /nix/store and /build in the builder environment, the later being where build is executed).

#### Note

The check for reflexivity is direct and does not account for transitivity, so this hook will not prevent cycles in symlinks.

#### set-source-date-epoch-to-latest.sh

This sets SOURCE_DATE_EPOCH to the modification time of the most recent file.

#### add-bin-to-path.sh

This setup hook checks if the bin/ directory exists in the $out output path and, if so, adds it to the PATH environment variable. This ensures that executables located in $out/bin are accessible. This hook is particularly useful during testing, as it allows packages to locate their executables without requiring manual modifications to the PATH. Note: This hook is specifically designed for the $out/bin directory only and does not handle and support other paths like $sourceRoot/bin. It may not work as intended in cases with multiple outputs or when binaries are located in directories like sbin/. These caveats should be considered when using this hook, as they might introduce unexpected behavior in some specific cases.

#### writable-tmpdir-as-home.sh

This setup hook ensures that the directory specified by the HOME environment variable is writable. If it is not, the hook assigns HOME to a writable directory (in .home in $NIX_BUILD_TOP). This adjustment is necessary for certain packages that require write access to a home directory. By setting HOME to a writable directory, this setup hook prevents failures in packages that attempt to write to the home directory.

#### Bintools Wrapper and hook

The Bintools Wrapper wraps the binary utilities for a bunch of miscellaneous purposes. These are GNU Binutils when targeting Linux, and a mix of cctools and GNU binutils for Darwin. [The “Bintools” name is supposed to be a compromise between “Binutils” and “cctools” not denoting any specific implementation.] Specifically, the underlying bintools package, and a C standard library (glibc or Darwin’s libSystem, just for the dynamic loader) are all fed in, and dependency finding, hardening (see below), and purity checks for each are handled by the Bintools Wrapper. Packages typically depend on CC Wrapper, which in turn (at run time) depends on the Bintools Wrapper. The Bintools Wrapper was only just recently split off from CC Wrapper, so the division of labor is still being worked out. For example, it shouldn’t care about the C standard library, but just take a derivation with the dynamic loader (which happens to be the glibc on linux). Dependency finding however is a task both wrappers will continue to need to share, and probably the most important to understand. It is currently accomplished by collecting directories of host-platform dependencies (i.e. buildInputs and nativeBuildInputs) in environment variables. The Bintools Wrapper’s setup hook causes any lib and lib64 subdirectories to be added to NIX_LDFLAGS. Since the CC Wrapper and the Bintools Wrapper use the same strategy, most of the Bintools Wrapper code is sparsely commented and refers to the CC Wrapper. But the CC Wrapper’s code, by contrast, has quite lengthy comments. The Bintools Wrapper merely cites those, rather than repeating them, to avoid falling out of sync. A final task of the setup hook is defining a number of standard environment variables to tell build systems which executables fulfill which purpose. They are defined to just be the base name of the tools, under the assumption that the Bintools Wrapper’s binaries will be on the path. Firstly, this helps poorly-written packages, e.g. ones that look for just gcc when CC isn’t defined yet clang is to be used. Secondly, this helps packages not get confused when cross-compiling, in which case multiple Bintools Wrappers may simultaneously be in use. [6] BUILD_- and TARGET_-prefixed versions of the normal environment variable are defined for additional Bintools Wrappers, properly disambiguating them. A problem with this final task is that the Bintools Wrapper is honest and defines LD as ld. Most packages, however, firstly use the C compiler for linking, secondly use LD anyways, defining it as the C compiler, and thirdly, only so define LD when it is undefined as a fallback. This triple-threat means Bintools Wrapper will break those packages, as LD is already defined as the actual linker which the package won’t override yet doesn’t want to use. The workaround is to define, just for the problematic package, LD as the C compiler. A good way to do this would be preConfigure = "LD=$CC".

#### CC Wrapper and hook

The CC Wrapper wraps a C toolchain for a bunch of miscellaneous purposes. Specifically, a C compiler (GCC or Clang), wrapped binary tools, and a C standard library (glibc or Darwin’s libSystem, just for the dynamic loader) are all fed in, and dependency finding, hardening (see below), and purity checks for each are handled by the CC Wrapper. Packages typically depend on the CC Wrapper, which in turn (at run-time) depends on the Bintools Wrapper. Dependency finding is undoubtedly the main task of the CC Wrapper. This works just like the Bintools Wrapper, except that any include subdirectory of any relevant dependency is added to NIX_CFLAGS_COMPILE. The setup hook itself contains elaborate comments describing the exact mechanism by which this is accomplished. Similarly, the CC Wrapper follows the Bintools Wrapper in defining standard environment variables with the names of the tools it wraps, for the same reasons described above. Importantly, while it includes a cc symlink to the c compiler for portability, the CC will be defined using the compiler’s “real name” (i.e. gcc or clang). This helps lousy build systems that inspect on the name of the compiler rather than run it. Here are some more packages that provide a setup hook. Since the list of hooks is extensible, this is not an exhaustive list. The mechanism is only to be used as a last resort, so it might cover most uses.

#### Other hooks

Many other packages provide hooks, that are not part of stdenv. You can find these in the Hooks Reference.

#### Compiler and Linker wrapper hooks

If the file ${cc}/nix-support/cc-wrapper-hook exists, it will be run at the end of the compiler wrapper. If the file ${binutils}/nix-support/ld-wrapper-hook exists, it will be run at the end of the linker wrapper, before the linker runs. If the file ${binutils}/nix-support/post-link-hook exists, it will be run at the end of the linker wrapper. These hooks allow a user to inject code into the wrappers. As an example, these hooks can be used to extract extraBefore, params and extraAfter which store all the command line arguments passed to the compiler and linker respectively.

### Purity in Nixpkgs

Measures taken to prevent dependencies on packages outside the store, and what you can do to prevent them. GCC doesn’t search in locations such as /usr/include. In fact, attempts to add such directories through the -I flag are filtered out. Likewise, the linker (from GNU binutils) doesn’t search in standard locations such as /usr/lib. Programs built on Linux are linked against a GNU C Library that likewise doesn’t search in the default system locations.

### Hardening in Nixpkgs

Hardening flags enabled by default Hardening flags disabled by default There are flags available to harden packages at compile or link-time. These can be toggled using the stdenv.mkDerivation parameters hardeningDisable and hardeningEnable. Both parameters take a list of flags as strings. The special "all" flag can be passed to hardeningDisable to turn off all hardening. These flags can also be used as environment variables for testing or development purposes. For more in-depth information on these hardening flags and hardening in general, refer to the Debian Wiki, Ubuntu Wiki, Gentoo Wiki, and the Arch Wiki. Note that support for some hardening flags varies by compiler, CPU architecture, target OS and libc. Combinations of these that don’t support a particular hardening flag will silently ignore attempts to enable it. To see exactly which hardening flags are being employed in any invocation, the NIX_DEBUG environment variable can be used.

#### Hardening flags enabled by default

The following flags are enabled by default and might require disabling with hardeningDisable if the program to be packaged is incompatible.

##### format

Adds the -Wformat -Wformat-security -Werror=format-security compiler options. At present, this warns about calls to printf and scanf functions where the format string is not a string literal and there are no format arguments, as in printf(foo);. This may be a security hole if the format string came from untrusted input and contains %n. This needs to be turned off or fixed for errors similar to: /tmp/nix-build-zynaddsubfx-2.5.2.drv-0/zynaddsubfx-2.5.2/src/UI/guimain.cpp:571:28: error: format not a string literal and no format arguments [-Werror=format-security] printf(help_message); ^ cc1plus: some warnings being treated as errors

##### stackprotector

Adds the -fstack-protector-strong --param ssp-buffer-size=4 compiler options. This adds safety checks against stack overwrites rendering many potential code injection attacks into aborting situations. In the best case this turns code injection vulnerabilities into denial of service or into non-issues (depending on the application). This needs to be turned off or fixed for errors similar to: bin/blib.a(bios_console.o): In function `bios_handle_cup': /tmp/nix-build-ipxe-20141124-5cbdc41.drv-0/ipxe-5cbdc41/src/arch/i386/firmware/pcbios/bios_console.c:86: undefined reference to `__stack_chk_fail'

##### fortify

Adds the -O2 -D_FORTIFY_SOURCE=2 compiler options. During code generation the compiler knows a great deal of information about buffer sizes (where possible), and attempts to replace insecure unlimited length buffer function calls with length-limited ones. This is especially useful for old, crufty code. Additionally, format strings in writable memory that contain %n are blocked. If an application depends on such a format string, it will need to be worked around. Additionally, some warnings are enabled which might trigger build failures if compiler warnings are treated as errors in the package build. In this case, set env.NIX_CFLAGS_COMPILE to -Wno-error=warning-type. This needs to be turned off or fixed for errors similar to: malloc.c:404:15: error: return type is an incomplete type malloc.c:410:19: error: storage size of 'ms' isn't known strdup.h:22:1: error: expected identifier or '(' before '__extension__' strsep.c:65:23: error: register name not specified for 'delim' installwatch.c:3751:5: error: conflicting types for '__open_2' fcntl2.h:50:4: error: call to '__open_missing_mode' declared with attribute error: open with O_CREAT or O_TMPFILE in second argument needs 3 arguments Disabling fortify implies disablement of fortify3

##### fortify3

Adds the -O2 -D_FORTIFY_SOURCE=3 compiler options. This expands the cases that can be protected by fortify-checks to include some situations with dynamic-length buffers whose length can be inferred at runtime using compiler hints. Enabling this flag implies enablement of fortify. Disabling this flag does not imply disablement of fortify. This flag can sometimes conflict with a build-system’s own attempts at enabling fortify support and result in errors complaining about redefinition of _FORTIFY_SOURCE.

##### pic

Adds the -fPIC compiler options. This options adds support for position independent code in shared libraries and thus making ASLR possible. Most notably, the Linux kernel, kernel modules and other code not running in an operating system environment like boot loaders won’t build with PIC enabled. The compiler will is most cases complain that PIC is not supported for a specific build. This needs to be turned off or fixed for assembler errors similar to: ccbLfRgg.s: Assembler messages: ccbLfRgg.s:33: Error: missing or invalid displacement expression `private_key_len@GOTOFF'

##### strictoverflow

Signed integer overflow is undefined behaviour according to the C standard. If it happens, it is an error in the program as it should check for overflow before it can happen, not afterwards. GCC provides built-in functions to perform arithmetic with overflow checking, which are correct and faster than any custom implementation. As a workaround, the option -fno-strict-overflow makes gcc behave as if signed integer overflows were defined. This flag should not trigger any build or runtime errors.

##### relro

Adds the -z relro linker option. During program load, several ELF memory sections need to be written to by the linker, but can be turned read-only before turning over control to the program. This prevents some GOT (and .dtors) overwrite attacks, but at least the part of the GOT used by the dynamic linker (.got.plt) is still vulnerable. This flag can break dynamic shared object loading. For instance, the module systems of Xorg and OpenCV are incompatible with this flag. In almost all cases the bindnow flag must also be disabled and incompatible programs typically fail with similar errors at runtime.

##### bindnow

Adds the -z now linker option. During program load, all dynamic symbols are resolved, allowing for the complete GOT to be marked read-only (due to relro). This prevents GOT overwrite attacks. For very large applications, this can incur some performance loss during initial load while symbols are resolved, but this shouldn’t be an issue for daemons. This flag can break dynamic shared object loading. For instance, the module systems of Xorg and PHP are incompatible with this flag. Programs incompatible with this flag often fail at runtime due to missing symbols, like: intel_drv.so: undefined symbol: vgaHWFreeHWRec

##### zerocallusedregs

Adds the -fzero-call-used-regs=used-gpr compiler option. This causes the general-purpose registers that an architecture’s calling convention considers “call-used” to be zeroed on return from the function. This can make it harder for attackers to construct useful ROP gadgets and also reduces the chance of data leakage from a function call.

##### stackclashprotection

This flag adds the -fstack-clash-protection compiler option, which causes growth of a program’s stack to access each successive page in order. This should force the guard page to be accessed and cause an attempt to “jump over” this guard page to crash.

#### Hardening flags disabled by default

The following flags are disabled by default and should be enabled with hardeningEnable for packages that take untrusted input like network services.

##### nostrictaliasing

This flag adds the -fno-strict-aliasing compiler option, which prevents the compiler from assuming code has been written strictly following the standard in regards to pointer aliasing and therefore performing optimizations that may be unsafe for code that has not followed these rules.

##### strictflexarrays1

This flag adds the -fstrict-flex-arrays=1 compiler option, which reduces the cases the compiler treats as “flexible arrays” to those declared with length [1], [0] or (the correct) []. This increases the coverage of fortify checks, because such arrays declared as the trailing element of a structure can normally not have their intended length determined by the compiler. Enabling this flag on packages that still use length declarations of flexible arrays >1 may cause the package to fail to compile citing accesses beyond the bounds of an array or even crash at runtime by detecting an array access as an “overrun”. Few projects still use length declarations of flexible arrays >1. Disabling strictflexarrays1 implies disablement of strictflexarrays3.

##### strictflexarrays3

This flag adds the -fstrict-flex-arrays=3 compiler option, which reduces the cases the compiler treats as “flexible arrays” to only those declared with length as (the correct) []. This increases the coverage of fortify checks, because such arrays declared as the trailing element of a structure can normally not have their intended length determined by the compiler. Enabling this flag on packages that still use non-empty length declarations for flexible arrays may cause the package to fail to compile citing accesses beyond the bounds of an array or even crash at runtime by detecting an array access as an “overrun”. Many projects still use such non-empty length declarations for flexible arrays. Enabling this flag implies enablement of strictflexarrays1. Disabling this flag does not imply disablement of strictflexarrays1.

##### shadowstack

Adds the -fcf-protection=return compiler option. This enables the Shadow Stack feature supported by some newer processors, which maintains a user-inaccessible copy of the program’s stack containing only return-addresses. When returning from a function, the processor compares the return-address value on the two stacks and throws an error if they do not match, considering it a sign of corruption and possible tampering. This should significantly increase the difficulty of ROP attacks. For the Shadow Stack to be enabled at runtime, all code linked into a process must be built with Shadow Stack enabled, so this is probably only useful to enable on a wide scale, so that all of a packages dependencies also have the feature enabled. This is currently only supported on some newer Intel and AMD processors as part of the Intel CET set of features. However, the generated code should continue to work on older processors which will simply omit any of this checking. This breaks some code that does advanced stack management or exception handling. If enabling this hardening flag it is important to test the result on a system that has known working and enabled CET support, so that any such breakage can be discovered.

##### trivialautovarinit

Adds the -ftrivial-auto-var-init=pattern compiler option. Uninitialized variables generally take on their values based on fragments of previous program state, and attackers can carefully manipulate that state to craft malicious initial values for these variables. This flag causes “trivially-initializable” uninitialized stack variables to be forcibly initialized with a nonzero value that is likely to cause a crash (and therefore be noticed). Use of this flag is controversial as it can prevent tools that detect uninitialized variable use (such as valgrind) from operating correctly. This should be turned off or fixed for build errors such as: sorry, unimplemented: __builtin_clear_padding not supported for variable length aggregates

##### glibcxxassertions

Adds the -D_GLIBCXX_ASSERTIONS compiler flag. This flag only has an effect on libstdc++ targets, and when defined, enables extra error checking in the form of precondition assertions, such as bounds checking in c++ strings and null pointer checks when dereferencing c++ smart pointers. These checks may have an impact on performance in some cases.

##### libcxxhardeningfast

Adds the -D_LIBCPP_HARDENING_MODE=_LIBCPP_HARDENING_MODE_FAST compiler flag. This flag only has an effect on libc++ targets, and when defined, enables a set of assertions that prevent undefined behavior caused by violating preconditions of the standard library. libc++ provides several hardening modes, and this “fast” mode contains a set of security-critical checks that can be done with relatively little overhead in constant time. Disabling libcxxhardeningfast implies disablement of checks from libcxxhardeningextensive.

##### libcxxhardeningextensive

Adds the -D_LIBCPP_HARDENING_MODE=_LIBCPP_HARDENING_MODE_EXTENSIVE compiler flag. This flag only has an effect on libc++ targets, and when defined, enables a set of assertions that prevent undefined behavior caused by violating preconditions of the standard library. libc++ provides several hardening modes, and this “extensive” mode adds checks for undefined behavior that incur relatively little overhead but aren’t security-critical. The additional rigour impacts performance more than fast mode: benchmarking is recommended to determine if it is acceptable for a particular application. Enabling this flag implies enablement of checks from libcxxhardeningfast. Disabling this flag does not imply disablement of checks from libcxxhardeningfast.

##### pacret

This flag adds the -mbranch-protection=pac-ret compiler option on aarch64-linux targets. This uses ARM v8.3’s Pointer Authentication feature to sign function return pointers before adding them to the stack. The pointer’s authenticity is then validated before returning to its destination. This dramatically increases the difficulty of ROP exploitation techniques. This may cause problems with code that does advanced stack manipulation, and debugging/stack-unwinding tools need to be pac-ret aware to work correctly when these features are in operation. Pre-ARM v8.3 processors will ignore Pointer Authentication instructions, so code built with this flag will continue to work on older processors, though without any of the intended protections. If enabling this flag, it is recommended to ensure the resultant packages are tested against an ARM v8.3+ linux system with known-working Pointer Authentication support so that any breakage caused by this feature is actually detected. The build platform is ignored because it is a mere implementation detail of the package satisfying the dependency: As a general programming principle, dependencies are always specified as interfaces, not concrete implementation.[1] Currently, this means for native builds all dependencies are put on the PATH. But in the future that may not be the case for sake of matching cross: the platforms would be assumed to be unique for native and cross builds alike, so only the depsBuild* and nativeBuildInputs would be added to the PATH.[2] The findInputs function, currently residing in pkgs/stdenv/generic/setup.sh, implements the propagation logic.[3] It clears the sys_lib_*search_path variables in the Libtool script to prevent Libtool from using libraries in /usr/lib and such.[4] Eventually these will be passed building natively as well, to improve determinism: build-time guessing, as is done today, is a risk of impurity.[5] Each wrapper targets a single platform, so if binaries for multiple platforms are needed, the underlying binaries must be wrapped multiple times. As this is a property of the wrapper itself, the multiple wrappings are needed whether or not the same underlying binaries can target multiple platforms.[6]

### Meta-attributes

Table of Contents Standard meta-attributes knownVulnerabilities Licenses Source provenance Software identifiers Nix packages can declare meta-attributes that contain information about a package such as a description, its homepage, its license, and so on. For instance, the GNU Hello package has a meta declaration like this: { meta = { description = "Program that produces a familiar, friendly greeting"; longDescription = '' GNU Hello is a program that prints "Hello, world!" when you run it. It is fully customizable. ''; homepage = "https://www.gnu.org/software/hello/manual/"; license = lib.licenses.gpl3Plus; maintainers = with lib.maintainers; [ eelco ]; platforms = lib.platforms.all; }; } Meta-attributes are not passed to the builder of the package. Thus, a change to a meta-attribute doesn’t trigger a recompilation of the package.

### Standard meta-attributes

description longDescription branch homepage downloadPage changelog license sourceProvenance maintainers teams mainProgram priority platforms badPlatforms timeout hydraPlatforms broken If the package is to be submitted to Nixpkgs, please check out the requirements for meta attributes in the contributing documentation. It is expected that each meta-attribute is one of the following:

#### description

A short (one-line) description of the package. This is displayed on search.nixos.org. The general requirements of a description are: Be short, just one sentence. Be capitalized. Not start with definite (“The”) or indefinite (“A”/“An”) article. Not start with the package name. More generally, it should not refer to the package name. Not end with a period (or any punctuation for that matter). Provide factual information. Avoid subjective language. Wrong: "libpng is a library that allows you to decode PNG images." Right: "Library for decoding PNG images"

#### longDescription

An arbitrarily long description of the package in CommonMark Markdown.

#### branch

Release branch. Used to specify that a package is not going to receive updates that are not in this branch; for example, Linux kernel 3.0 is supposed to be updated to 3.0.X, not 3.1.

#### homepage

The package’s homepage. Example: https://www.gnu.org/software/hello/manual/

#### downloadPage

The page where a link to the current version can be found. Example: https://ftp.gnu.org/gnu/hello/

#### changelog

A link or a list of links to the location of Changelog for a package. A link may use expansion to refer to the correct changelog version. Example: "https://git.savannah.gnu.org/cgit/hello.git/plain/NEWS?h=v${version}"

#### license

The license, or licenses, for the package. One from the attribute set defined in nixpkgs/lib/licenses.nix. At this moment using both a list of licenses and a single license is valid. If the license field is in the form of a list representation, then it means that parts of the package are licensed differently. Each license should preferably be referenced by their attribute. The non-list attribute value can also be a space delimited string representation of the contained attribute shortNames or spdxIds. The following are all valid examples: Single license referenced by attribute (preferred) lib.licenses.gpl3Only. Single license referenced by its attribute shortName (frowned upon) "gpl3Only". Single license referenced by its attribute spdxId (frowned upon) "GPL-3.0-only". Multiple licenses referenced by attribute (preferred) with lib.licenses; [ asl20 free ofl ]. Multiple licenses referenced as a space delimited string of attribute shortNames (frowned upon) "asl20 free ofl". For details, see Licenses.

#### sourceProvenance

A list containing the type or types of source inputs from which the package is built, e.g. original source code, pre-built binaries, etc. For details, see Source provenance.

#### maintainers

A list of the maintainers of this Nix expression. Maintainers are defined in nixpkgs/maintainers/maintainer-list.nix. There is no restriction to becoming a maintainer, just add yourself to that list in a separate commit titled “maintainers: add alice” in the same pull request, and reference maintainers with maintainers = with lib.maintainers; [ alice bob ].

#### teams

A list of the teams of this Nix expression. Teams are defined in nixpkgs/maintainers/team-list.nix, and can be defined in a package with meta.teams = with lib.teams; [ team1 team2 ].

#### mainProgram

The name of the main binary for the package. This affects the binary nix run executes. Example: "rg"

#### priority

The priority of the package, used by nix-env to resolve file name conflicts between packages. See the manual page for nix-env for details. Example: "10" (a low-priority package).

#### platforms

The list of Nix platform types on which the package is supported. Hydra builds packages according to the platform specified. If no platform is specified, the package does not have prebuilt binaries. An example is: { meta.platforms = lib.platforms.linux; } Attribute Set lib.platforms defines various common lists of platforms types.

#### badPlatforms

The list of Nix platform types on which the package is known not to be buildable. Hydra will never create prebuilt binaries for these platform types, even if they are in meta.platforms. In general it is preferable to set meta.platforms = lib.platforms.all and then exclude any platforms on which the package is known not to build. For example, a package which requires dynamic linking and cannot be linked statically could use this: { meta.platforms = lib.platforms.all; meta.badPlatforms = [ lib.systems.inspect.platformPatterns.isStatic ]; } The lib.meta.availableOn function can be used to test whether or not a package is available (i.e. buildable) on a given platform. Some packages use this to automatically detect the maximum set of features with which they can be built. For example, systemd requires dynamic linking, and has a meta.badPlatforms setting similar to the one above. Packages which can be built with or without systemd support will use lib.meta.availableOn to detect whether or not systemd is available on the hostPlatform for which they are being built; if it is not available (e.g. due to a statically-linked host platform like pkgsStatic) this support will be disabled by default.

#### timeout

A timeout (in seconds) for building the derivation. If the derivation takes longer than this time to build, Hydra will fail it due to breaking the timeout. However, all computers do not have the same computing power, hence some builders may decide to apply a multiplicative factor to this value. When filling this value in, try to keep it approximately consistent with other values already present in nixpkgs. meta attributes are not stored in the instantiated derivation. Therefore, this setting may be lost when the package is used as a dependency. To be effective, it must be presented directly to an evaluation process that handles the meta.timeout attribute.

#### hydraPlatforms

The list of Nix platform types for which the Hydra instance at hydra.nixos.org will build the package. (Hydra is the Nix-based continuous build system.) It defaults to the value of meta.platforms. Thus, the only reason to set meta.hydraPlatforms is if you want hydra.nixos.org to build the package on a subset of meta.platforms, or not at all, e.g. { meta.platforms = lib.platforms.linux; meta.hydraPlatforms = [ ]; }

#### broken

If set to true, the package is marked as “broken”, meaning that it won’t show up in search.nixos.org, and cannot be built or installed unless the environment variable NIXPKGS_ALLOW_BROKEN is set. Such unconditionally-broken packages should be removed from Nixpkgs eventually unless they are fixed. The value of this attribute can depend on a package’s arguments, including stdenv. This means that broken can be used to express constraints, for example: Does not cross compile { meta.broken = !(stdenv.buildPlatform.canExecute stdenv.hostPlatform); } Broken if all of a certain set of its dependencies are broken { meta.broken = lib.all ( map (p: p.meta.broken) [ glibc musl ] ); } This makes broken strictly more powerful than meta.badPlatforms. However meta.availableOn currently examines only meta.platforms and meta.badPlatforms, so meta.broken does not influence the default values for optional dependencies.

### knownVulnerabilities

A list of known vulnerabilities affecting the package, usually identified by CVE identifiers. This metadata allows users and tools to be aware of unresolved security issues before using the package, for example: { meta.knownVulnerabilities = [ "CVE-2024-3094: Malicious backdoor allowing unauthorized remote code execution" ]; } If this list is not empty, the package is marked as “insecure”, meaning that it cannot be built or installed unless the environment variable NIXPKGS_ALLOW_INSECURE is set.

### Licenses

lib.licenses.free, "free" lib.licenses.unfreeRedistributable, "unfree-redistributable" lib.licenses.unfree, "unfree" lib.licenses.unfreeRedistributableFirmware, "unfree-redistributable-firmware" The meta.license attribute should preferably contain a value from lib.licenses defined in nixpkgs/lib/licenses.nix, or in-place license description of the same format if the license is unlikely to be useful in another expression. Although it’s typically better to indicate the specific license, a few generic options are available:

#### lib.licenses.free, "free"

Catch-all for free software licenses not listed above.

#### lib.licenses.unfreeRedistributable, "unfree-redistributable"

Unfree package that can be redistributed in binary form. That is, it’s legal to redistribute the output of the derivation. This means that the package can be included in the Nixpkgs channel. Sometimes proprietary software can only be redistributed unmodified. Make sure the builder doesn’t actually modify the original binaries; otherwise we’re breaking the license. For instance, the NVIDIA X11 drivers can be redistributed unmodified, but our builder applies patchelf to make them work. Thus, its license is "unfree" and it cannot be included in the Nixpkgs channel.

#### lib.licenses.unfree, "unfree"

Unfree package that cannot be redistributed. You can build it yourself, but you cannot redistribute the output of the derivation. Thus it cannot be included in the Nixpkgs channel.

#### lib.licenses.unfreeRedistributableFirmware, "unfree-redistributable-firmware"

This package supplies unfree, redistributable firmware. This is a separate value from unfree-redistributable because not everybody cares whether firmware is free.
