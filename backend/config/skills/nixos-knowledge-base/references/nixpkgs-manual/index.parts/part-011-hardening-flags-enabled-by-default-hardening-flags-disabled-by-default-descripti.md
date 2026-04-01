---
title: "Nixpkgs Reference Manual"
source: index.html
---
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

### Source provenance

lib.sourceTypes.fromSource lib.sourceTypes.binaryNativeCode lib.sourceTypes.binaryFirmware lib.sourceTypes.binaryBytecode The value of a package’s meta.sourceProvenance attribute specifies the provenance of the package’s derivation outputs. If a package contains elements that are not built from the original source by a nixpkgs derivation, the meta.sourceProvenance attribute should be a list containing one or more value from lib.sourceTypes defined in nixpkgs/lib/source-types.nix. Adding this information helps users who have needs related to build transparency and supply-chain security to gain some visibility into their installed software or set policy to allow or disallow installation based on source provenance. The presence of a particular sourceType in a package’s meta.sourceProvenance list indicates that the package contains some components falling into that category, though the absence of that sourceType does not guarantee the absence of that category of sourceType in the package’s contents. A package with no meta.sourceProvenance set implies it has no known sourceTypes other than fromSource. The meaning of the meta.sourceProvenance attribute does not depend on the value of the meta.license attribute.

#### lib.sourceTypes.fromSource

Package elements which are produced by a nixpkgs derivation which builds them from source code.

#### lib.sourceTypes.binaryNativeCode

Native code to be executed on the target system’s CPU, built by a third party. This includes packages which wrap a downloaded AppImage or Debian package.

#### lib.sourceTypes.binaryFirmware

Code to be executed on a peripheral device or embedded controller, built by a third party.

#### lib.sourceTypes.binaryBytecode

Code to run on a VM interpreter or JIT compiled into bytecode by a third party. This includes packages which download Java .jar files from another source.

### Software identifiers

CPE Package’s meta.identifiers attribute specifies information about software identifiers associated with this package. Software identifiers are used, for example: to generate Software Bill of Materials (SBOM) that lists all components used to build the software, which can later be used to perform vulnerability or license analysis of the resulting software; to lookup software in different vulnerability databases or report new vulnerabilities to them. Overriding the default meta.identifiers attribute is optional, but it is recommended to fill in pieces to help tools mentioned above get precise data. For example, we could get automatic notifications about potential vulnerabilities for users in the future. All identifiers specified in meta.identifiers are expected to be unambiguous and valid. meta.identifiers contains v1 attribute which is an attribute set that guarantees backward compatibility of its constituents. Right now it contains copies of all other attributes in meta.identifiers.

#### CPE

Common Platform Enumeration (CPE) is a specification maintained by NIST as part of the Security Content Automation Protocol (SCAP). It is used to identify software in National Vulnerabilities Database (NVD, https://nvd.nist.gov) and other vulnerability databases. Current version of CPE 2.3 consists of 13 parts: cpe:2.3:a:<vendor>:<product>:<version>:<update>:<edition>:<language>:<sw_edition>:<target_sw>:<target_hw>:<other> Some of them are as follows: CPE version - current version of CPE is 2.3 part - usually in Nixpkgs a for “application”, can also be o for “operating system” or h for “hardware” vendor - can point to the source of the package, or to Nixpkgs itself product - name of the package version - version of the package update - name of the latest update, can be a patch version for semantically versioned packages edition - any additional specification about the version You can find information about all of these attributes in the official specification (heading 5.3.3, pages 11-13). Any fields that don’t have a value are set to either - if the value is not available or * when the field can match any value. For example, for glibc 2.40.1 CPE would be cpe:2.3:a:gnu:glibc:2.40:1:*:*:*:*:*:*.

##### meta.identifiers.cpeParts

This attribute contains an attribute set of all parts of the CPE for this package. Most of the parts default to * (match any value), with some exceptions: part defaults to a (application), can also be set to o for operating systems, for example, Linux kernel, or to h for hardware vendor cannot be deduced from other sources, so it must be specified by the package author product defaults to provided derivation’s pname attribute and must be provided explicitly if pname is missing version and update have no defaults and should be specified explicitly or using helper functions, when missing, cpe attribute will be empty, and all possible guesses using helper functions will be in possibleCPEs attribute. It is up to the package author to make sure all parts are correct and match expected values in NVD dictionary. Unknown values can be skipped, which would leave them with the default value of *. Following functions help with filling out version and update fields: lib.meta.cpeFullVersionWithVendor lib.meta.cpePatchVersionInUpdateWithVendor For many packages to make CPE available it should be enough to specify only: { # ... meta.identifiers.cpeParts = lib.meta.cpePatchVersionInUpdateWithVendor vendor version; }

##### meta.identifiers.cpe

A readonly attribute that concatenates all CPE parts in one string.

##### meta.identifiers.possibleCPEs

A readonly attribute containing the list of guesses for what CPE for this package can look like. It includes all variants of version handling mentioned above. Each item is an attrset with attributes cpeParts and cpe for each guess.

### Passthru-attributes

Table of Contents Common passthru-attributes As opposed to most other mkDerivation input attributes, passthru is not passed to the derivation’s builder executable. Changing it will not trigger a rebuild – it is “passed through”. Its value can be accessed as if it was set inside a derivation.

#### Note

passthru attributes follow no particular schema, but there are a few conventional patterns. Example 295. Setting and accessing passthru attributes { stdenv, fetchGit }: let hello = stdenv.mkDerivation { pname = "hello"; src = fetchGit { # ... }; passthru = { foo = "bar"; baz = { value1 = 4; value2 = 5; }; }; }; in hello.baz.value1 4

### Common passthru-attributes

passthru.tests passthru.updateScript Many passthru attributes are situational, so this section only lists recurring patterns. They fall in one of these categories: Global conventions, which are applied almost universally in Nixpkgs. Generally these don’t entail any special support built into the derivation they belong to. Common examples of this type are passthru.tests and passthru.updateScript. Conventions for adding extra functionality to a derivation. These tend to entail support from the derivation or the passthru attribute in question. Common examples of this type are passthru.optional-dependencies, passthru.withPlugins, and passthru.withPackages. All of those allow associating the package with a set of components built for that specific package, such as when building Python runtime environments using python.withPackages. Attributes that apply only to particular build helpers or language ecosystems are documented there.

#### passthru.tests

An attribute set with tests as values. A test is a derivation that builds when the test passes and fails to build otherwise. Run these tests with: $ cd path/to/nixpkgs $ nix-build -A your-package.tests

#### Note

The Nixpkgs systems for continuous integration Hydra and nixpkgs-review don’t build these derivations by default, and (@ofborg) only builds them when evaluating pull requests for that particular package, or when manually instructed.

##### Package tests

Besides tests provided by upstream, that you run in the checkPhase, you may want to define tests derivations in the passthru.tests attribute, which won’t change the build. passthru.tests have several advantages over running tests during any of the standard phases: They access the package as consumers would, independently from the environment in which it was built They can be run and debugged without rebuilding the package, which is useful if that takes a long time They don’t add overhead to each build, as opposed checks added to the installCheckPhase, such as versionCheckHook. It is also possible to use passthru.tests to test the version with testVersion, but since that is a pretty trivial and recommended thing to do, we recommend using versionCheckHook for that, which has the following advantages over passthru.tests: If the versionCheckPhase (the phase defined by versionCheckHook) fails, it triggers a failure which can’t be ignored if you use the package, or if you find out about it in a nixpkgs-review report. Sometimes packages become silently broken - meaning they fail to launch but their build passes because they don’t perform any tests in the checkPhase. If you use this tool infrequently, such a silent breakage may rot in your system / profile configuration, and you will not notice the failure until you will want to use this package. Testing such basic functionality ensures you have to deal with the failure when you update your system / profile. When you open a PR, ofborg’s CI will run passthru.tests of packages that are directly changed by your PR (according to your commits’ messages), but if you’d want to use the @ofborg build command for dependent packages, you won’t have to specify in addition the .tests attribute of the packages you want to build, and nobody will be able to avoid these tests. For more on how to write and run package tests for Nixpkgs, see the testing section in the package contributor guide.

##### NixOS tests

Tests written for NixOS are available as the nixosTests argument to package recipes. For instance, the OpenSMTPD derivation includes lines similar to: { nixosTests, ... }: { # ... passthru.tests = { basic-functionality-and-dovecot-integration = nixosTests.opensmtpd; }; } NixOS tests run in a virtual machine (VM), so they are slower than regular package tests. For more information see the NixOS manual on NixOS module tests.

#### passthru.updateScript

Nixpkgs tries to automatically update all packages that have an passthru.updateScript attribute. See the section on automatic package updates in the package contributor guide for details.

### Multiple-output packages

Table of Contents Using a split package Writing a split derivation The Nix language allows a derivation to produce multiple outputs, which is similar to what is utilized by other Linux distribution packaging systems. The outputs reside in separate Nix store paths, so they can be mostly handled independently of each other, including passing to build inputs, garbage collection or binary substitution. The exception is that building from source always produces all the outputs. The main motivation is to save disk space by reducing runtime closure sizes; consequently also sizes of substituted binaries get reduced. Splitting can be used to have more granular runtime dependencies, for example the typical reduction is to split away development-only files, as those are typically not needed during runtime. As a result, closure sizes of many packages can get reduced to a half or even much less.

#### Note

The reduction effects could be instead achieved by building the parts in completely separate derivations. That would often additionally reduce build-time closures, but it tends to be much harder to write such derivations, as build systems typically assume all parts are being built at once. This compromise approach of single source package producing multiple binary packages is also utilized often by rpm and deb. A number of attributes can be used to work with a derivation with multiple outputs. The attribute outputs is a list of strings, which are the names of the outputs. For each of these names, an identically named attribute is created, corresponding to that output. The attribute meta.outputsToInstall is used to determine the default set of outputs to install when using the derivation name unqualified: bin, or out, or the first specified output; as well as man if that is specified.

### Using a split package

In the Nix language the individual outputs can be reached explicitly as attributes, e.g. coreutils.info, but the typical case is just using packages as build inputs. When a multiple-output derivation gets into a build input of another derivation, the dev output is added if it exists, otherwise the first output is added. In addition to that, propagatedBuildOutputs of that package which by default contain $outputBin and $outputLib are also added. (See the section called “File type groups”.) In some cases it may be desirable to combine different outputs under a single store path. The symlinkJoin builder can be used to do this. (See the section called “symlinkJoin”). Note that this may negate some closure size benefits of using a multiple-output package.

### Writing a split derivation

“Binaries first” File type groups Common caveats Here you find how to write a derivation that produces multiple outputs. In nixpkgs there is a framework supporting multiple-output derivations. It tries to cover most cases by default behavior. You can find the source separated in <nixpkgs/pkgs/build-support/setup-hooks/multiple-outputs.sh>; it’s relatively well-readable. The whole machinery is triggered by defining the outputs attribute to contain the list of desired output names (strings). { outputs = [ "bin" "dev" "out" "doc" ]; } Often such a single line is enough. For each output an equally named environment variable is passed to the builder and contains the path in nix store for that output. Typically you also want to have the main out output, as it catches any files that didn’t get elsewhere.

#### Note

There is a special handling of the debug output, described at the section called “separateDebugInfo”.

#### “Binaries first”

A commonly adopted convention in nixpkgs is that executables provided by the package are contained within its first output. This convention allows the dependent packages to reference the executables provided by packages in a uniform manner. For instance, provided with the knowledge that the perl package contains a perl executable it can be referenced as ${pkgs.perl}/bin/perl within a Nix derivation that needs to execute a Perl script. The glibc package is a deliberate single exception to the “binaries first” convention. The glibc has libs as its first output allowing the libraries provided by glibc to be referenced directly (e.g. ${glibc}/lib/ld-linux-x86-64.so.2). The executables provided by glibc can be accessed via its bin attribute (e.g. ${lib.getBin stdenv.cc.libc}/bin/ldd). The reason for why glibc deviates from the convention is because referencing a library provided by glibc is a very common operation among Nix packages. For instance, third-party executables packaged by Nix are typically patched and relinked with the relevant version of glibc libraries from Nix packages (please see the documentation on patchelf for more details).
