---
title: "Nix 2.28.6 Reference Manual"
source: print.html
---
## Building Nix

This section provides some notes on how to start hacking on Nix. To get the latest version of Nix from GitHub: $ git clone https://github.com/NixOS/nix.git $ cd nix Note The following instructions assume you already have some version of Nix installed locally, so that you can use it to set up the development environment. If you don't have it installed, follow the installation instructions. To build all dependencies and start a shell in which all environment variables are set up so that those dependencies can be found: $ nix-shell To get a shell with one of the other supported compilation environments: $ nix-shell --attr devShells.x86_64-linux.native-clangStdenvPackages Note You can use native-ccacheStdenv to drastically improve rebuild time. By default, ccache keeps artifacts in ~/.cache/ccache/. To build Nix itself in this shell: [nix-shell]$ mesonFlags+=" --prefix=$(pwd)/outputs/out" [nix-shell]$ dontAddPrefix=1 configurePhase [nix-shell]$ buildPhase To test it: [nix-shell]$ checkPhase To install it in $(pwd)/outputs: [nix-shell]$ installPhase [nix-shell]$ ./outputs/out/bin/nix --version nix (Nix) 2.12 To build a release version of Nix for the current operating system and CPU architecture: $ nix-build You can also build Nix for one of the supported platforms.

### Building Nix with flakes

This section assumes you are using Nix with the flakes and nix-command experimental features enabled. To build all dependencies and start a shell in which all environment variables are set up so that those dependencies can be found: $ nix develop This shell also adds ./outputs/bin/nix to your $PATH so you can run nix immediately after building it. To get a shell with one of the other supported compilation environments: $ nix develop .#native-clangStdenv Note Use ccacheStdenv to drastically improve rebuild time. By default, ccache keeps artifacts in ~/.cache/ccache/. To build Nix itself in this shell: [nix-shell]$ configurePhase [nix-shell]$ buildPhase To test it: [nix-shell]$ checkPhase To install it in $(pwd)/outputs: [nix-shell]$ installPhase [nix-shell]$ nix --version nix (Nix) 2.12 For more information on running and filtering tests, see testing.md. To build a release version of Nix for the current operating system and CPU architecture: $ nix build You can also build Nix for one of the supported platforms.

### Platforms

Nix can be built for various platforms, as specified in flake.nix: x86_64-linux x86_64-darwin i686-linux aarch64-linux aarch64-darwin armv6l-linux armv7l-linux riscv64-linux In order to build Nix for a different platform than the one you're currently on, you need a way for your current Nix installation to build code for that platform. Common solutions include [remote build machines] and binary format emulation (only supported on NixOS). Given such a setup, executing the build only requires selecting the respective attribute. For example, to compile for aarch64-linux: $ nix-build --attr packages.aarch64-linux.default or for Nix with the flakes and nix-command experimental features enabled: $ nix build .#packages.aarch64-linux.default Cross-compiled builds are available for: armv6l-linux armv7l-linux riscv64-linux Add more system types to crossSystems in flake.nix to bootstrap Nix on unsupported platforms.

#### Building for multiple platforms at once

It is useful to perform multiple cross and native builds on the same source tree, for example to ensure that better support for one platform doesn't break the build for another. Meson thankfully makes this very easy by confining all build products to the build directory --- one simple shares the source directory between multiple build directories, each of which contains the build for Nix to a different platform. Here's how to do that: Instruct Nixpkgs's infra where we want Meson to put its build directory mesonBuildDir=build-my-variant-name Configure as usual configurePhase Build as usual buildPhase

### System type

Nix uses a string with the following format to identify the system type or platform it runs on: <cpu>-<os>[-<abi>] It is set when Nix is compiled for the given system, and based on the output of Meson's host_machine information> <cpu>-<vendor>-<os>[<version>][-<abi>] When cross-compiling Nix with Meson for local development, you need to specify a cross-file using the --cross-file option. Cross-files define the target architecture and toolchain. When cross-compiling Nix with Nix, Nixpkgs takes care of this for you. In the nix flake we also have some cross-compilation targets available: nix build .#nix-everything-riscv64-unknown-linux-gnu nix build .#nix-everything-armv7l-unknown-linux-gnueabihf nix build .#nix-everything-armv7l-unknown-linux-gnueabihf nix build .#nix-everything-x86_64-unknown-freebsd nix build .#nix-everything-x86_64-w64-mingw32 For historic reasons and backward-compatibility, some CPU and OS identifiers are translated as follows: host_machine.cpu_family()host_machine.endian()Nix x86i686 armhost_machine.cpu() ppclittlepowerpcle ppc64littlepowerpc64le ppcbigpowerpc ppc64bigpowerpc64 mipslittlemipsel mips64littlemips64el mipsbigmips mips64bigmips64

### Compilation environments

Nix can be compiled using multiple environments: stdenv: default; gccStdenv: force the use of gcc compiler; clangStdenv: force the use of clang compiler; ccacheStdenv: enable [ccache], a compiler cache to speed up compilation. To build with one of those environments, you can use $ nix build .#nix-cli-ccacheStdenv for flake-enabled Nix, or $ nix-build --attr nix-cli-ccacheStdenv for classic Nix. You can use any of the other supported environments in place of nix-cli-ccacheStdenv.

### Editor integration

The clangd LSP server is installed by default on the clang-based devShells. See supported compilation environments and instructions how to set up a shell with flakes or in classic Nix. To use the LSP with your editor, you will want a compile_commands.json file telling clangd how we are compiling the code. Meson's configure always produces this inside the build directory. Configure your editor to use the clangd from the .#native-clangStdenv shell. You can do that either by running it inside the development shell, or by using nix-direnv and the appropriate editor plugin. Note For some editors (e.g. Visual Studio Code), you may need to install a special extension for the editor to interact with clangd. Some other editors (e.g. Emacs, Vim) need a plugin to support LSP servers in general (e.g. lsp-mode for Emacs and vim-lsp for vim). Editor-specific setup is typically opinionated, so we will not cover it here in more detail.

### Formatting and pre-commit hooks

You may run the formatters as a one-off using: ./maintainers/format.sh

#### Pre-commit hooks

If you'd like to run the formatters before every commit, install the hooks: pre-commit-hooks-install This installs pre-commit using cachix/git-hooks.nix. When making a commit, pay attention to the console output. If it fails, run git add --patch to approve the suggestions and commit again. To refresh pre-commit hook's config file, do the following: Exit the development shell and start it again by running nix develop. If you also use the pre-commit hook, also run pre-commit-hooks-install again.

#### VSCode

Insert the following json into your .vscode/settings.json file to configure nixfmt. This will be picked up by the Format Document command, "editor.formatOnSave", etc. { "nix.formatterPath": "nixfmt", "nix.serverSettings": { "nixd": { "formatting": { "command": [ "nixfmt" ], }, }, "nil": { "formatting": { "command": [ "nixfmt" ], }, }, }, }

### Coverage analysis

A coverage analysis report is available online You can build it yourself: # nix build .#hydraJobs.coverage # xdg-open ./result/coverage/index.html Extensive records of build metrics, such as test coverage over time, are also available online.

### Unit-tests

The unit tests are defined using the googletest and rapidcheck frameworks.

#### Source and header layout

An example of some files, demonstrating much of what is described below src ├── libexpr │ ├── meson.build │ ├── include/nix/expr/value/context.hh │ ├── value/context.cc │ … │ ├── tests │ │ │ … │ ├── libutil-tests │ │ ├── meson.build │ │ … │ │ └── data │ │ ├── git/tree.txt │ │ … │ │ │ ├── libexpr-test-support │ │ ├── meson.build │ │ ├── include/nix/expr │ │ │ ├── meson.build │ │ │ └── tests │ │ │ ├── value/context.hh │ │ │ … │ │ └── tests │ │ ├── value/context.cc │ │ … │ │ │ ├── libexpr-tests │ … ├── meson.build │ ├── value/context.cc │ … … The tests for each Nix library (libnixexpr, libnixstore, etc..) live inside a directory src/${library_name_without-nix}-test. Given an interface (header) and implementation pair in the original library, say, src/libexpr/include/nix/expr/value/context.hh and src/libexpr/value/context.cc, we write tests for it in src/libexpr-tests/value/context.cc, and (possibly) declare/define additional interfaces for testing purposes in src/libexpr-test-support/include/nix/expr/tests/value/context.hh and src/libexpr-test-support/tests/value/context.cc. Data for unit tests is stored in a data subdir of the directory for each unit test executable. For example, libnixstore code is in src/libstore, and its test data is in src/libstore-tests/data. The path to the src/${library_name_without-nix}-test/data directory is passed to the unit test executable with the environment variable _NIX_TEST_UNIT_DATA. Note that each executable only gets the data for its tests. The unit test libraries are in src/${library_name_without-nix}-test-support. All headers are in a tests subdirectory so they are included with #include "nix/tests/". The use of all these separate directories for the unit tests might seem inconvenient, as for example the tests are not "right next to" the part of the code they are testing. But organizing the tests this way has one big benefit: there is no risk of any build-system wildcards for the library accidentally picking up test code that should not built and installed as part of the library.

#### Running tests

You can run the whole testsuite with meson test from the Meson build directory, or the tests for a specific component with meson test nix-store-tests. A environment variables that Google Test accepts are also worth knowing: GTEST_FILTER This is used for finer-grained filtering of which tests to run. GTEST_BRIEF This is used to avoid logging passing tests. GTEST_BREAK_ON_FAILURE This is used to create a debugger breakpoint when an assertion failure occurs. Putting the first two together, one might run GTEST_BRIEF=1 GTEST_FILTER='ErrorTraceTest.*' meson test nix-expr-tests -v for short but comprensive output.

#### Debugging tests

For debugging, it is useful to combine the third option above with Meson's --gdb flag: GTEST_BRIEF=1 GTEST_FILTER='Group.my-failing-test' meson test nix-expr-tests --gdb This will: Run the unit test with GDB Run just Group.my-failing-test Stop the program when the test fails, allowing the user to then issue arbitrary commands to GDB.

#### Characterisation testing

See functional characterisation testing for a broader discussion of characterisation testing. Like with the functional characterisation, _NIX_TEST_ACCEPT=1 is also used. For example: $ _NIX_TEST_ACCEPT=1 meson test nix-store-tests -v ... [ SKIPPED ] WorkerProtoTest.string_read [ SKIPPED ] WorkerProtoTest.string_write [ SKIPPED ] WorkerProtoTest.storePath_read [ SKIPPED ] WorkerProtoTest.storePath_write ... will regenerate the "golden master" expected result for the libnixstore characterisation tests. The characterisation tests will mark themselves "skipped" since they regenerated the expected result instead of actually testing anything.

#### Unit test support libraries

There are headers and code which are not just used to test the library in question, but also downstream libraries. For example, we do property testing with the rapidcheck library. This requires writing Arbitrary "instances", which are used to describe how to generate values of a given type for the sake of running property tests. Because types contain other types, Arbitrary "instances" for some type are not just useful for testing that type, but also any other type that contains it. Downstream types frequently contain upstream types, so it is very important that we share arbitrary instances so that downstream libraries' property tests can also use them. It is important that these testing libraries don't contain any actual tests themselves. On some platforms they would be run as part of every test executable that uses them, which is redundant. On other platforms they wouldn't be run at all.

### Functional tests

The functional tests reside under the tests/functional directory and are listed in tests/functional/meson.build. Each test is a bash script. Functional tests are run during installCheck in the nix package build, as well as separately from the build, in VM tests.

#### Running the whole test suite

The whole test suite (functional and unit tests) can be run with: $ checkPhase

#### Grouping tests

Sometimes it is useful to group related tests so they can be easily run together without running the entire test suite. Each test group is in a subdirectory of tests. For example, tests/functional/ca/meson.build defines a ca test group for content-addressing derivation outputs. That test group can be run like this: $ meson test --suite ca ninja: Entering directory `/home/jcericson/src/nix/master/build' ninja: no work to do. [1-20/20] 🌑 nix-functional-tests:ca / ca/why-depends 1/20 nix-functional-tests:ca / ca/nix-run OK 0.16s [2-20/20] 🌒 nix-functional-tests:ca / ca/why-depends 2/20 nix-functional-tests:ca / ca/import-derivation OK 0.17s

#### Running individual tests

Individual tests can be run with meson: $ meson test --verbose ${testName} ninja: Entering directory `/home/jcericson/src/nix/master/build' ninja: no work to do. 1/1 nix-functional-tests:main / ${testName} OK 0.41s Ok: 1 Expected Fail: 0 Fail: 0 Unexpected Pass: 0 Skipped: 0 Timeout: 0 Full log written to /home/jcericson/src/nix/master/build/meson-logs/testlog.txt The --verbose flag will make Meson also show the console output of each test for easier debugging. The test script will then be traced with set -x and the output displayed as it happens, regardless of whether the test succeeds or fails. Tests can be also run directly without meson: $ TEST_NAME=${testName} NIX_REMOTE='' PS4='+(${BASH_SOURCE[0]-$0}:$LINENO) tests/functional/${testName}.sh +(${testName}.sh:1) foo output from foo +(${testName}.sh:2) bar output from bar ...

#### Debugging failing functional tests

When a functional test fails, it usually does so somewhere in the middle of the script. To figure out what's wrong, it is convenient to run the test regularly up to the failing nix command, and then run that command with a debugger like GDB. For example, if the script looks like: foo nix blah blub bar edit it like so: foo -nix blah blub +gdb --args nix blah blub bar Then, running the test with --interactive will prevent Meson from hijacking the terminal so you can drop you into GDB once the script reaches that point: $ meson test ${testName} --interactive ... + gdb blash blub GNU gdb (GDB) 12.1 ... (gdb) One can debug the Nix invocation in all the usual ways. For example, enter run to start the Nix invocation.

#### Troubleshooting

Sometimes running tests in the development shell may leave artefacts in the local repository. To remove any traces of that: git clean -x --force tests

#### Characterisation testing

Occasionally, Nix utilizes a technique called Characterisation Testing as part of the functional tests. This technique is to include the exact output/behavior of a former version of Nix in a test in order to check that Nix continues to produce the same behavior going forward. For example, this technique is used for the language tests, to check both the printed final value if evaluation was successful, and any errors and warnings encountered. It is frequently useful to regenerate the expected output. To do that, rerun the failed test(s) with _NIX_TEST_ACCEPT=1. For example: _NIX_TEST_ACCEPT=1 meson test lang This convention is shared with the characterisation unit tests too. An interesting situation to document is the case when these tests are "overfitted". The language tests are, again, an example of this. The expected successful output of evaluation is supposed to be highly stable – we do not intend to make breaking changes to (the stable parts of) the Nix language. However, the errors and warnings during evaluation (successful or not) are not stable in this way. We are free to change how they are displayed at any time. It may be surprising that we would test non-normative behavior like diagnostic outputs. Diagnostic outputs are indeed not a stable interface, but they still are important to users. By recording the expected output, the test suite guards against accidental changes, and ensure the result (not just the code that implements it) of the diagnostic code paths are under code review. Regressions are caught, and improvements always show up in code review. To ensure that characterisation testing doesn't make it harder to intentionally change these interfaces, there always must be an easy way to regenerate the expected output, as we do with _NIX_TEST_ACCEPT=1.

#### Running functional tests on NixOS

We run the functional tests not just in the build, but also in VM tests. This helps us ensure that Nix works correctly on NixOS, and environments that have similar characteristics that are hard to reproduce in a build environment. These can be run with: nix build .#hydraJobs.tests.functional_user Generally, this build is sufficient, but in nightly or CI we also test the attributes functional_root and functional_trusted, in which the test suite is run with different levels of authorization.

### Integration tests

The integration tests are defined in the Nix flake under the hydraJobs.tests attribute. These tests include everything that needs to interact with external services or run Nix in a non-trivial distributed setup. Because these tests are expensive and require more than what the standard github-actions setup provides, they only run on the master branch (on https://hydra.nixos.org/jobset/nix/master). You can run them manually with nix build .#hydraJobs.tests.{testName} or nix-build -A hydraJobs.tests.{testName}.

### Installer tests

After a one-time setup, the Nix repository's GitHub Actions continuous integration (CI) workflow can test the installer each time you push to a branch. Creating a Cachix cache for your installer tests and adding its authorisation token to GitHub enables two installer-specific jobs in the CI workflow: The installer job generates installers for the platforms below and uploads them to your Cachix cache: x86_64-linux armv6l-linux armv7l-linux x86_64-darwin The installer_test job (which runs on ubuntu-24.04 and macos-14) will try to install Nix with the cached installer and run a trivial Nix command.

#### One-time setup

Have a GitHub account with a fork of the Nix repository. At cachix.org: Create or log in to an account. Create a Cachix cache using the format <github-username>-nix-install-tests. Navigate to the new cache > Settings > Auth Tokens. Generate a new Cachix auth token and copy the generated value. At github.com: Navigate to your Nix fork > Settings > Secrets > Actions > New repository secret. Name the secret CACHIX_AUTH_TOKEN. Paste the copied value of the Cachix cache auth token.

#### Using the CI-generated installer for manual testing

After the CI run completes, you can check the output to extract the installer URL: Click into the detailed view of the CI run. Click into any installer_test run (the URL you're here to extract will be the same in all of them). Click into the Run cachix/install-nix-action@v... step and click the detail triangle next to the first log line (it will also be Run cachix/install-nix-action@v...) Copy the value of install_url To generate an install command, plug this install_url and your GitHub username into this template: curl -L <install_url> | sh -s -- --tarball-url-prefix https://<github-username>-nix-install-tests.cachix.org/serve

## Debugging Nix

This section shows how to build and debug Nix with debug symbols enabled. Additionally, see Testing Nix for further instructions on how to debug Nix in the context of a unit test or functional test.

### Building Nix with Debug Symbols

In the development shell, set the mesonBuildType environment variable to debug before configuring the build: [nix-shell]$ export mesonBuildType=debugoptimized Then, proceed to build Nix as described in Building Nix. This will build Nix with debug symbols, which are essential for effective debugging. It is also possible to build without debugging for faster build: [nix-shell]$ NIX_HARDENING_ENABLE=$(printLines $NIX_HARDENING_ENABLE | grep -v fortify) [nix-shell]$ export mesonBuildType=debug (The first line is needed because fortify hardening requires at least some optimization.)

### Debugging the Nix Binary

Obtain your preferred debugger within the development shell: [nix-shell]$ nix-shell -p gdb On macOS, use lldb: [nix-shell]$ nix-shell -p lldb

#### Launching the Debugger

To debug the Nix binary, run: [nix-shell]$ gdb --args ../outputs/out/bin/nix On macOS, use lldb: [nix-shell]$ lldb -- ../outputs/out/bin/nix

#### Using the Debugger

Inside the debugger, you can set breakpoints, run the program, and inspect variables. (gdb) break main (gdb) run <arguments> Refer to the GDB Documentation for comprehensive usage instructions. On macOS, use lldb: (lldb) breakpoint set --name main (lldb) process launch -- <arguments> Refer to the LLDB Tutorial for comprehensive usage instructions.

## Contributing documentation

Improvements to documentation are very much appreciated, and a good way to start out with contributing to Nix. This is how you can help: Address open issues with documentation Review pull requests concerning documentation Incremental refactorings of the documentation build setup to make it faster or easier to understand and maintain are also welcome.

### Building the manual

Build the manual from scratch: nix-build -E '(import ./.).packages.${builtins.currentSystem}.nix.doc' or nix build .#nix-manual and open ./result/share/doc/nix/manual/index.html. To build the manual incrementally, enter the development shell and run: make manual-html-open -j $NIX_BUILD_CORES In order to reflect changes to the Makefile for the manual, clear all generated files before re-building: rm $(git ls-files doc/manual/ -o | grep -F '.md') && rmdir doc/manual/source/command-ref/new-cli && make manual-html -j $NIX_BUILD_CORES

### Style guide

The goal of this style guide is to make it such that The manual is easy to search and skim for relevant information Documentation sources are easy to edit Changes to documentation are easy to review You will notice that this is not implemented consistently yet. Please follow the guide when making additions or changes to existing documentation. Do not make sweeping changes, unless they are programmatic and can be validated easily.

#### Language

This manual is reference documentation. The typical usage pattern is to look up isolated pieces of information. It should therefore aim to be correct, consistent, complete, and easy to navigate at a glance. Aim for clarity and brevity. Please take the time to read the plain language guidelines for details. Describe the subject factually. In particular, do not make value judgements or recommendations. Check the code or add tests if in doubt. Provide complete, minimal examples, and explain them. Readers should be able to try examples verbatim and get the same results as shown in the manual. Always describe in words what a given example does. Non-trivial examples may need additional explanation, especially if they use concepts from outside the given context. Always explain code examples in the text. Use comments in code samples very sparingly, for instance to highlight a particular aspect. Readers tend to glance over large amounts of code when scanning for information. Especially beginners will likely find reading more complex-looking code strenuous and may therefore avoid it altogether. If a code sample appears to require a lot of inline explanation, consider replacing it with a simpler one. If that's not possible, break the example down into multiple parts, explain them separately, and then show the combined result at the end. This should be a last resort, as that would amount to writing a tutorial on the given subject. Use British English. This is a somewhat arbitrary choice to force consistency, and accounts for the fact that a majority of Nix users and developers are from Europe.

#### Links and anchors

Reference documentation must be readable in arbitrary order. Readers cannot be expected to have any particular prerequisite knowledge about Nix. While the table of contents can provide guidance and full-text search can help, they are most likely to find what they need by following sensible cross-references. Link to technical terms When mentioning Nix-specific concepts, commands, options, settings, etc., link to appropriate documentation. Also link to external tools or concepts, especially if their meaning may be ambiguous. You may also want to link to definitions of less common technical terms. Then readers won't have to actively search for definitions and are more likely to discover relevant information on their own. Note man and --help pages don't display links. Use appropriate link texts such that readers of terminal output can infer search terms. Do not break existing URLs between releases. There are countless links in the wild pointing to old versions of the manual. We want people to find up-to-date documentation when following popular advice. When moving files, update redirects on nixos.org. This is especially important when moving information out of the Nix manual to other resources. When changing anchors, update client-side redirects The current setup is cumbersome, and help making better automation is appreciated. The build checks for broken internal links with. This happens late in the process, so building the whole manual is not suitable for iterating quickly. mdbook-linkcheck does not implement checking URI fragments yet.

#### Markdown conventions

The manual is written in markdown, and rendered with mdBook for the web and with lowdown for man pages and --help output. For supported markdown features, refer to: mdBook documentation lowdown documentation Please observe these guidelines to ease reviews: Write one sentence per line. This makes long sentences immediately visible, and makes it easier to review changes and make direct suggestions. Use reference links – sparingly – to ease source readability. Put definitions close to their first use. Example: A [store object] contains a [file system object] and [references] to other store objects. [store object]: ../store/store-object.md [file system object]: ../architecture/file-system-object.md [references]: ../glossary.md#gloss-reference Use admonitions of the following form: > **Note** > > This is a note. Highlight examples as such: > **Example** > > ```console > $ nix --version > ``` Highlight syntax definitions as such, using EBNF notation: > **Syntax** > > *attribute-set* = `{` [ *attribute-name* `=` *expression* `;` ... ] `}`

#### The .. variable

.. provides a base path for links that occur in reusable snippets or other documentation that doesn't have a base path of its own. If a broken link occurs in a snippet that was inserted into multiple generated files in different directories, use .. to reference the doc/manual/source directory. If the .. literal appears in an error message from the mdbook-linkcheck tool, the .. replacement needs to be applied to the generated source file that mentions it. See existing .. logic in the Makefile for the manual. Regular markdown files used for the manual have a base path of their own and they can use relative paths instead of ...

### API documentation

Doxygen API documentation is available online. You can also build and view it yourself: $ nix build .#hydraJobs.internal-api-docs $ xdg-open ./result/share/doc/nix/internal-api/html/index.html or inside nix-shell or nix develop: $ configurePhase $ ninja src/internal-api-docs/html $ xdg-open src/internal-api-docs/html/index.html

### C API documentation

Note that the C API is not yet stable. C API documentation is available online. You can also build and view it yourself: $ nix build .#hydraJobs.external-api-docs $ xdg-open ./result/share/doc/nix/external-api/html/index.html or inside nix-shell or nix develop: $ configurePhase $ ninja src/external-api-docs/html $ xdg-open src/external-api-docs/html/index.html

### Goals

Purpose of this document is to provide a clear direction to help design delightful command line experience. This document contains guidelines to follow to ensure a consistent and approachable user experience.

### Overview

nix command provides a single entry to a number of sub-commands that help developers and system administrators in the life-cycle of a software project. We particularly need to pay special attention to help and assist new users of Nix.

## Naming the COMMANDS

Words matter. Naming is an important part of the usability. Users will be interacting with Nix on a regular basis so we should name things for ease of understanding. We recommend following the Principle of Least Astonishment. This means that you should never use acronyms or abbreviations unless they are commonly used in other tools (e.g. nix init). And if the command name is too long (> 10-12 characters) then shortening it makes sense (e.g. “prioritization” → “priority”). Commands should follow a noun-verb dialogue. Although noun-verb formatting seems backwards from a speaking perspective (i.e. nix store copy vs. nix copy store) it allows us to organize commands the same way users think about completing an action (the group first, then the command).

### Naming rules

Rules are there to guide you by limiting your options. But not everything can fit the rules all the time. In those cases document the exceptions in Appendix 1: Commands naming exceptions and provide reason. The rules want to force a Nix developer to look, not just at the command at hand, but also the command in a full context alongside other nix commands. $ nix [<GROUP>] <COMMAND> [<ARGUMENTS>] [<OPTIONS>] GROUP, COMMAND, ARGUMENTS and OPTIONS should be lowercase and in a singular form. GROUP should be a NOUN. COMMAND should be a VERB. ARGUMENTS and OPTIONS are discussed in Input section.

### Classification

Some commands are more important, some less. While we want all of our commands to be perfect we can only spend limited amount of time testing and improving them. This classification tries to separate commands in 3 categories in terms of their importance in regards to the new users. Users who are likely to be impacted the most by bad user experience. Main commands Commands used for our main use cases and most likely used by new users. We expect attention to details, such as: Proper use of colors, emojis and aligning of text. Autocomplete of options. Show next possible steps. Showing some “tips” when running logs running tasks (eg. building / downloading) in order to teach users interesting bits of Nix ecosystem. Help pages to be as good as we can write them pointing to external documentation and tutorials for more. Examples of such commands: nix init, nix develop, nix build, nix run, ... Infrequently used commands From infrequently used commands we expect less attention to details, but still some: Proper use of colors, emojis and aligning of text. Autocomplete of options. Examples of such commands: nix edit, nix eval, ... Utility and scripting commands Commands that expose certain internal functionality of nix, mostly used by other scripts. Autocomplete of options. Examples of such commands: nix store copy, nix hash base16, nix store ping, ...

## Help is essential

Help should be built into your command line so that new users can gradually discover new features when they need them.

### Looking for help

Since there is no standard way how user will look for help we rely on ways help is provided by commonly used tools. As a guide for this we took git and whenever in doubt look at it as a preferred direction. The rules are: Help is shown by using --help or help command (eg nix --``help or nix help). For non-COMMANDs (eg. nix --``help and nix store --``help) we show a summary of most common use cases. Summary is presented on the STDOUT without any use of PAGER. For COMMANDs (eg. nix init --``help or nix help init) we display the man page of that command. By default the PAGER is used (as in git). At the end of either summary or man page there should be an URL pointing to an online version of more detailed documentation. The structure of summaries and man pages should be the same as in git.

### Anticipate where help is needed

Even better then requiring the user to search for help is to anticipate and predict when user might need it. Either because the lack of discoverability, typo in the input or simply taking the opportunity to teach the user of interesting - but less visible - details.

#### Shell completion

This type of help is most common and almost expected by users. We need to provide the best shell completion for bash, zsh and fish. Completion needs to be context aware, this mean when a user types: $ nix build n<TAB> we need to display a list of flakes starting with n.

#### Wrong input

As we all know we humans make mistakes, all the time. When a typo - intentional or unintentional - is made, we should prompt for closest possible options or point to the documentation which would educate user to not make the same errors. Here are few examples: In first example we prompt the user for typing wrong command name: $ nix int ------------------------------------------------------------------------ Error! Command `int` not found. ------------------------------------------------------------------------ Did you mean: |> nix init |> nix input Sometimes users will make mistake either because of a typo or simply because of lack of discoverability. Our handling of this cases needs to be context sensitive. $ nix init --template=template#python ------------------------------------------------------------------------ Error! Template `template#python` not found. ------------------------------------------------------------------------ Initializing Nix project at `/path/to/here`. Select a template for you new project: |> template#python template#python-pip template#python-poetry

#### Next steps

It can be invaluable to newcomers to show what a possible next steps and what is the usual development workflow with Nix. For example: $ nix init --template=template#python Initializing project `template#python` in `/home/USER/dev/new-project` Next steps |> nix develop -- to enter development environment |> nix build -- to build your project

#### Educate the user

We should take any opportunity to educate users, but at the same time we must be very very careful to not annoy users. There is a thin line between being helpful and being annoying. An example of educating users might be to provide Tips in places where they are waiting. $ nix build Started building my-project 1.2.3 Downloaded python3.8-poetry 1.2.3 in 5.3 seconds Downloaded python3.8-requests 1.2.3 in 5.3 seconds ------------------------------------------------------------------------ Press `v` to increase logs verbosity |> `?` to see other options ------------------------------------------------------------------------ Learn something new with every build... |> See last logs of a build with `nix log --last` command. ------------------------------------------------------------------------ Evaluated my-project 1.2.3 in 14.43 seconds Downloading [12 / 200] |> firefox 1.2.3 [#########> ] 10Mb/s | 2min left Building [2 / 20] |> glibc 1.2.3 -> buildPhase: <last log line> ------------------------------------------------------------------------ Now Learn part of the output is where you educate users. You should only show it when you know that a build will take some time and not annoy users of the builds that take only few seconds. Every feature like this should go through an intensive review and testing to collect as much feedback as possible and to fine tune every little detail. If done right this can be an awesome features beginners and advance users will love, but if not done perfectly it will annoy users and leave bad impression.

## Input

Input to a command is provided via ARGUMENTS and OPTIONS. ARGUMENTS represent a required input for a function. When choosing to use ARGUMENTS over OPTIONS please be aware of the downsides that come with it: User will need to remember the order of ARGUMENTS. This is not a problem if there is only one ARGUMENT. With OPTIONS it is possible to provide much better auto completion. With OPTIONS it is possible to provide much better error message. Using OPTIONS it will mean there is a little bit more typing. We don’t discourage the use of ARGUMENTS, but simply want to make every developer consider the downsides and choose wisely.

### Naming the OPTIONS

The only naming convention - apart from the ones mentioned in Naming the COMMANDS section is how flags are named. Flags are a type of OPTION that represent an option that can be turned ON of OFF. We can say flags are boolean type of **OPTION**. Here are few examples of flag OPTIONS: --colors vs. --no-colors (showing colors in the output) --emojis vs. --no-emojis (showing emojis in the output)

### Prompt when input not provided

For main commands (as per classification) we want command to improve the discoverability of possible input. A new user will most likely not know which ARGUMENTS and OPTIONS are required or which values are possible for those options. In case the user does not provide the input or they provide wrong input, rather than show the error, prompt a user with an option to find and select correct input (see examples). Prompting is of course not required when TTY is not attached to STDIN. This would mean that scripts won't need to handle prompt, but rather handle errors. A place to use prompt and provide user with interactive select $ nix init Initializing Nix project at `/path/to/here`. Select a template for you new project: |> py template#python-pip template#python-poetry [ Showing 2 templates from 1345 templates ] Another great place to add prompts are confirmation dialogues for dangerous actions. For example when adding new substitutor via OPTIONS or via flake.nix we should prompt - for the first time - and let user review what is going to happen. $ nix build --option substitutors https://cache.example.org ------------------------------------------------------------------------ Warning! A security related question needs to be answered. ------------------------------------------------------------------------ The following substitutors will be used to in `my-project`: - https://cache.example.org Do you allow `my-project` to use above mentioned substitutors? [y/N] |> y

## Output

Terminal output can be quite limiting in many ways. Which should force us to think about the experience even more. As with every design the output is a compromise between being terse and being verbose, between showing help to beginners and annoying advance users. For this it is important that we know what are the priorities. Nix command line should be first and foremost written with beginners in mind. But users won't stay beginners for long and what was once useful might quickly become annoying. There is no golden rule that we can give in this guideline that would make it easier how to draw a line and find best compromise. What we would encourage is to build prototypes, do some user testing and collect feedback. Then repeat the cycle few times. First design the happy path and only after your iron it out, continue to work on edge cases (handling and displaying errors, changes of the output by certain OPTIONS, etc…)

### Follow best practices

Needless to say we Nix must be a good citizen and follow best practices in command line. In short: STDOUT is for output, STDERR is for (human) messaging. STDOUT and STDERR provide a way for you to output messages to the user while also allowing them to redirect content to a file. For example: $ nix build > build.txt ------------------------------------------------------------------------ Error! Attribute `bin` missing at (1:94) from string. ------------------------------------------------------------------------ 1| with import <nixpkgs> { }; (pkgs.runCommandCC or pkgs.runCommand) "shell" { buildInputs = [ (surge.bin) ]; } "" Because this warning is on STDERR, it doesn’t end up in the file. But not everything on STDERR is an error though. For example, you can run nix build and collect logs in a file while still seeing the progress. $ nix build > build.txt Evaluated 1234 files in 1.2 seconds Downloaded python3.8-poetry 1.2.3 in 5.3 seconds Downloaded python3.8-requests 1.2.3 in 5.3 seconds ------------------------------------------------------------------------ Press `v` to increase logs verbosity |> `?` to see other options ------------------------------------------------------------------------ Learn something new with every build... |> See last logs of a build with `nix log --last` command. ------------------------------------------------------------------------ Evaluated my-project 1.2.3 in 14.43 seconds Downloading [12 / 200] |> firefox 1.2.3 [#########> ] 10Mb/s | 2min left Building [2 / 20] |> glibc 1.2.3 -> buildPhase: <last log line> ------------------------------------------------------------------------

### Errors (WIP)

TODO: Once we have implementation for the happy path then we will think how to present errors.

### Not only for humans

Terse, machine-readable output formats can also be useful but shouldn’t get in the way of making beautiful CLI output. When needed, commands should offer a --json flag to allow users to easily parse and script the CLI. When TTY is not detected on STDOUT we should remove all design elements (no colors, no emojis and using ASCII instead of Unicode symbols). The same should happen when TTY is not detected on STDERR. We should not display progress / status section, but only print warnings and errors.

### Dialog with the user

CLIs don't always make it clear when an action has taken place. For every action a user performs, your CLI should provide an equal and appropriate reaction, clearly highlighting the what just happened. For example: $ nix build Downloaded python3.8-poetry 1.2.3 in 5.3 seconds Downloaded python3.8-requests 1.2.3 in 5.3 seconds ... Success! You have successfully built my-project. $ Above command clearly states that command successfully completed. And in case of nix build, which is a command that might take some time to complete, it is equally important to also show that a command started.

### Text alignment

Text alignment is the number one design element that will present all of the Nix commands as a family and not as separate tools glued together. The format we should follow is: $ nix COMMAND VERB_1 NOUN and other words VERB__1 NOUN and other words |> Some details Few rules that we can extract from above example: Each line should start at least with one space. First word should be a VERB and must be aligned to the right. Second word should be a NOUN and must be aligned to the left. If you can not find a good VERB / NOUN pair, don’t worry make it as understandable to the user as possible. More details of each line can be provided by |> character which is serving as the first word when aligning the text Don’t forget you should also test your terminal output with colors and emojis off (--no-colors --no-emojis).

### Dim / Bright

After comparing few terminals with different color schemes we would recommend to avoid using dimmed text. The difference from the rest of the text is very little in many terminal and color scheme combinations. Sometimes the difference is not even notable, therefore relying on it wouldn’t make much sense. The bright text is much better supported across terminals and color schemes. Most of the time the difference is perceived as if the bright text would be bold.

### Colors

Humans are already conditioned by society to attach certain meaning to certain colors. While the meaning is not universal, a simple collection of colors is used to represent basic emotions. Colors that can be used in output Red = error, danger, stop Green = success, good Yellow/Orange = proceed with caution, warning, in progress Blue/Magenta = stability, calm While colors are nice, when command line is used by machines (in automation scripts) you want to remove the colors. There should be a global --no-colors option that would remove the colors.

### Special (Unicode) characters

Most of the terminal have good support for Unicode characters and you should use them in your output by default. But always have a backup solution that is implemented only with ASCII characters and will be used when --ascii option is going to be passed in. Please make sure that you test your output also without Unicode characters More they showing all the different Unicode characters it is important to establish common set of characters that we use for certain situations.

### Emojis

Emojis help channel emotions even better than text, colors and special characters. We recommend keeping the set of emojis to a minimum. This will enable each emoji to stand out more. As not everybody is happy about emojis we should provide an --no-emojis option to disable them. Please make sure that you test your output also without emojis.

### Tables

All commands that are listing certain data can be implemented in some sort of a table. It’s important that each row of your output is a single ‘entry’ of data. Never output table borders. It’s noisy and a huge pain for parsing using other tools such as grep. Be mindful of the screen width. Only show a few columns by default with the table header, for more the table can be manipulated by the following options: --no-headers: Show column headers by default but allow to hide them. --columns: Comma-separated list of column names to add. --sort: Allow sorting by column. Allow inverse and multi-column sort as well.

### Interactive output

Interactive output was selected to be able to strike the balance between beginners and advance users. While the default output will target beginners it can, with a few key strokes, be changed into and advance introspection tool.

#### Progress

For longer running commands we should provide and overview the progress. This is shown best in nix build example: $ nix build Started building my-project 1.2.3 Downloaded python3.8-poetry 1.2.3 in 5.3 seconds Downloaded python3.8-requests 1.2.3 in 5.3 seconds ------------------------------------------------------------------------ Press `v` to increase logs verbosity |> `?` to see other options ------------------------------------------------------------------------ Learn something new with every build... |> See last logs of a build with `nix log --last` command. ------------------------------------------------------------------------ Evaluated my-project 1.2.3 in 14.43 seconds Downloading [12 / 200] |> firefox 1.2.3 [#########> ] 10Mb/s | 2min left Building [2 / 20] |> glibc 1.2.3 -> buildPhase: <last log line> ------------------------------------------------------------------------

#### Search

Use a fzf like fuzzy search when there are multiple options to choose from. $ nix init Initializing Nix project at `/path/to/here`. Select a template for you new project: |> py template#python-pip template#python-poetry [ Showing 2 templates from 1345 templates ]

#### Prompt

In some situations we need to prompt the user and inform the user about what is going to happen. $ nix build --option substitutors https://cache.example.org ------------------------------------------------------------------------ Warning! A security related question needs to be answered. ------------------------------------------------------------------------ The following substitutors will be used to in `my-project`: - https://cache.example.org Do you allow `my-project` to use above mentioned substitutors? [y/N] |> y

### Verbosity

There are many ways that you can control verbosity. Verbosity levels are: ERROR (level 0) WARN (level 1) NOTICE (level 2) INFO (level 3) TALKATIVE (level 4) CHATTY (level 5) DEBUG (level 6) VOMIT (level 7) The default level that the command starts is ERROR. The simplest way to increase the verbosity by stacking -v option (eg: -vvv == level 3 == INFO). There are also two shortcuts, --debug to run in DEBUG verbosity level and --quiet to run in ERROR verbosity level.
