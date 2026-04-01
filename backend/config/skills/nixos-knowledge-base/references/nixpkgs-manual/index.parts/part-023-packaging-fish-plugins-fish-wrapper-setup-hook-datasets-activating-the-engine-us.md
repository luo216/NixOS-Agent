---
title: "Nixpkgs Reference Manual"
source: index.html
---
#### Packaging Fish plugins

While packages providing standalone executables belong to the top level, packages which have the sole purpose of extending Fish belong to the fishPlugins scope and should be registered in pkgs/shells/fish/plugins/default.nix. The buildFishPlugin utility function can be used to automatically copy Fish scripts from $src/{completions,conf,conf.d,functions} to the standard vendor installation paths. It also sets up the test environment so that the optional checkPhase is executed in a Fish shell with other already packaged plugins and package-local Fish functions specified in checkPlugins and checkFunctionDirs respectively. See pkgs/shells/fish/plugins/pure.nix for an example of Fish plugin package using buildFishPlugin and running unit tests with the fishtape test runner.

#### Fish wrapper

The wrapFish package is a wrapper around Fish which can be used to create Fish shells initialized with some plugins as well as completions, configuration snippets and functions sourced from the given paths. This provides a convenient way to test Fish plugins and scripts without having to alter the environment. wrapFish { pluginPkgs = with fishPlugins; [ pure foreign-env ]; completionDirs = [ ]; functionDirs = [ ]; confDirs = [ "/path/to/some/fish/init/dir/" ]; }

### FUSE

Some packages rely on FUSE to provide support for additional filesystems not supported by the kernel. In general, FUSE software is primarily developed for Linux but many of them can also run on macOS. Nixpkgs supports FUSE packages on macOS, but it requires macFUSE to be installed outside of Nix. macFUSE currently isn’t packaged in Nixpkgs, mainly because it includes a kernel extension, which isn’t supported by Nix outside of NixOS. If a package fails to run on macOS with an error message similar to the following, it’s a likely sign that you need to have macFUSE installed. dyld: Library not loaded: /usr/local/lib/libfuse.2.dylib Referenced from: /nix/store/w8bi72bssv0bnxhwfw3xr1mvn7myf37x-sshfs-fuse-2.10/bin/sshfs Reason: image not found [1] 92299 abort /nix/store/w8bi72bssv0bnxhwfw3xr1mvn7myf37x-sshfs-fuse-2.10/bin/sshfs Package maintainers may often encounter the following error when building FUSE packages on macOS: checking for fuse.h... no configure: error: No fuse.h found. This happens on autoconf-based projects that use AC_CHECK_HEADERS or AC_CHECK_LIBS to detect libfuse, and will occur even when the fuse package is included in buildInputs. It happens because libfuse headers throw an error on macOS if the FUSE_USE_VERSION macro is undefined. Many projects do define FUSE_USE_VERSION, but only inside C source files. This results in the above error at configure time because the configure script would attempt to compile sample FUSE programs without defining FUSE_USE_VERSION. There are two possible solutions for this problem in Nixpkgs: Pass FUSE_USE_VERSION to the configure script by adding CFLAGS=-DFUSE_USE_VERSION=25 in configureFlags. The actual value would have to match the definition used in the upstream source code. Remove AC_CHECK_HEADERS / AC_CHECK_LIBS for libfuse. However, a better solution might be to fix the build script upstream to use PKG_CHECK_MODULES instead. This approach wouldn’t suffer from the problem that AC_CHECK_HEADERS/AC_CHECK_LIBS has at the price of introducing a dependency on pkg-config.

### Geant4

Setup hook Datasets Geant4 is a toolkit for simulating how particles pass through matter. It is available through the geant4 package.

#### Setup hook

The setup hook included in the package applies the environment variables set by the geant4.sh script, which is typically necessary for compiling make-based programs that depend on Geant4.

#### Datasets

All of the Geant4 datasets provided by CERN are available through the geant4.data attrset.

##### Setup hook

The hook provided by the packages in geant4.data will set an appropriate environment variable in the form of G4[...]DATA. For example, for the G4RadioactiveDecay dataset, the G4RADIOACTIVEDATA environment variable is set to the value expected by Geant4.

### ibus-engines.typing-booster

Activating the engine Using custom hunspell dictionaries Built-in emoji picker This package is an ibus-based completion method to speed up typing.

#### Activating the engine

IBus needs to be configured accordingly to activate typing-booster. The configuration depends on the desktop manager in use. For detailed instructions, please refer to the upstream docs. On NixOS, you need to explicitly enable ibus with given engines before customizing your desktop to use typing-booster. This can be achieved using the ibus module: { pkgs, ... }: { i18n.inputMethod = { enable = true; type = "ibus"; ibus.engines = with pkgs.ibus-engines; [ typing-booster ]; }; }

#### Using custom hunspell dictionaries

The IBus engine is based on hunspell to support completion in many languages. By default, the dictionaries de-de, en-us, fr-moderne es-es, it-it, sv-se and sv-fi are in use. To add another dictionary, the package can be overridden like this: ibus-engines.typing-booster.override { langs = [ "de-at" "en-gb" ]; } Note: each language passed to langs must be an attribute name in pkgs.hunspellDicts.

#### Built-in emoji picker

The ibus-engines.typing-booster package contains a program named emoji-picker. To display all emojis correctly, a special font such as noto-fonts-color-emoji is needed: On NixOS, it can be installed using the following expression: { pkgs, ... }: { fonts.packages = with pkgs; [ noto-fonts-color-emoji ]; }

### Inkscape

Plugins Inkscape is a powerful vector graphics editor.

#### Plugins

Inkscape plugins are collected in the inkscape-extensions package set. To enable them, use an override on inkscape-with-extensions: inkscape-with-extensions.override { inkscapeExtensions = with inkscape-extensions; [ inkstitch ]; } Similarly, this works in the shell: $ nix-shell -p 'inkscape-with-extensions.override { inkscapeExtensions = with inkscape-extensions; [inkstitch]; }' [nix-shell:~]$ # Ink/Stitch is now available via the extension menu [nix-shell:~]$ inkscape All available extensions can be enabled by passing inkscapeExtensions = null;.

#### Note

Loading the Inkscape extensions stand-alone (without using override) does not affect Inkscape at all.

### Kakoune

Kakoune can be built to autoload plugins: (kakoune.override { plugins = with pkgs.kakounePlugins; [ parinfer-rust ]; })

### Krita

Python plugins Binary plugins

#### Python plugins

“pykrita” plugins should be installed following Krita’s manual. This generally involves extracting the extension to ~/.local/share/krita/pykrita/.

#### Binary plugins

Binary plugins are Dynamically Linked Libraries to be loaded by Krita. Note: You most likely won’t need to deal with binary plugins, all known plugins are bundled and enabled by default.

##### Installing binary plugins

You can choose what plugins are added to Krita by overriding the binaryPlugins attribute. If you want to add plugins instead of replacing, you can read the list of previous plugins via pkgs.krita.binaryPlugins: (pkgs.krita.override (old: { binaryPlugins = old.binaryPlugins ++ [ your-plugin ]; }))

##### Example structure of a binary plugin

/nix/store/00000000000000000000000000000000-krita-plugin-example-1.2.3 └── lib └── kritaplugins └── krita_example.so

### Linux kernel

Manual kernel configuration Developing kernel modules Maintainer information The Nix expressions to build the Linux kernel are in pkgs/os-specific/linux/kernel. The function pkgs.buildLinux builds a kernel with common configuration values. This is the preferred option unless you have a very specific use case. Most kernels packaged in Nixpkgs are built that way, and it will also generate kernels suitable for NixOS. pkgs.linuxManualConfig requires a complete configuration to be passed. It has fewer additional features than pkgs.buildLinux, which provides common configuration values and exposes the features attribute, as explained below. Both functions have an argument kernelPatches which should be a list of {name, patch, extraConfig} attribute sets, where name is the name of the patch (which is included in the kernel’s meta.description attribute), patch is the patch itself (possibly compressed), and extraConfig (optional) is a string specifying extra options to be concatenated to the kernel configuration file (.config). The kernel derivation created with pkgs.buildLinux exports an attribute features specifying whether optional functionality is or isn’t enabled. This is used in NixOS to implement kernel-specific behaviour. If you are using a kernel packaged in Nixpkgs, you can customize it by overriding its arguments. For details on how each argument affects the generated kernel, refer to the pkgs.buildLinux source code. Example 378. Overriding the kernel derivation Assuming you are using the kernel from pkgs.linux_latest: pkgs.linux_latest.override { ignoreConfigErrors = true; autoModules = false; kernelPreferBuiltin = true; structuredExtraConfig = with lib.kernel; { DEBUG_KERNEL = yes; FRAME_POINTER = yes; KGDB = yes; KGDB_SERIAL_CONSOLE = yes; DEBUG_INFO = yes; }; }

#### Manual kernel configuration

Sometimes it may not be desirable to use kernels built with pkgs.buildLinux, especially if most of the common configuration has to be altered or disabled to achieve a kernel as expected by the target use case. An example of this is building a kernel for use in a VM or micro VM. You can use pkgs.linuxPackages_custom in these cases. It requires the src, version, and configfile attributes to be specified. Example 379. Using pkgs.linuxPackages_custom with a specific source, version, and config file { pkgs, ... }: pkgs.linuxPackages_custom { version = "6.1.55"; src = pkgs.fetchurl { url = "https://cdn.kernel.org/pub/linux/kernel/v6.x/linux-${version}.tar.xz"; hash = "sha256-qH4kHsFdU0UsTv4hlxOjdp2IzENrW5jPbvsmLEr/FcA="; }; configfile = ./path_to_config_file; } If necessary, the version string can be slightly modified to explicitly mark it as a custom version. If you do so, ensure the modDirVersion attribute matches the source’s version, otherwise the build will fail. { pkgs, ... }: pkgs.linuxPackages_custom { version = "6.1.55-custom"; modDirVersion = "6.1.55"; src = pkgs.fetchurl { url = "https://cdn.kernel.org/pub/linux/kernel/v6.x/linux-${modDirVersion}.tar.xz"; hash = "sha256-qH4kHsFdU0UsTv4hlxOjdp2IzENrW5jPbvsmLEr/FcA="; }; configfile = ./path_to_config_file; } Additional attributes can be used with linuxManualConfig for further customisation instead of linuxPackages_custom. You’re encouraged to read the pkgs.linuxManualConfig source code to understand how to use them. To edit the .config file for Linux X.Y from within Nix, proceed as follows: $ nix-shell '<nixpkgs>' -A linuxKernel.kernels.linux_X_Y.configEnv $ unpackPhase $ cd linux-* $ make nconfig

#### Developing kernel modules

When developing kernel modules it’s often convenient to run the edit-compile-run loop as quickly as possible. See the snippet below as an example. Example 380. Edit-compile-run loop when developing mellanox drivers $ nix-build '<nixpkgs>' -A linuxPackages.kernel.dev $ nix-shell '<nixpkgs>' -A linuxPackages.kernel $ unpackPhase $ cd linux-* $ make -C $dev/lib/modules/*/build M=$(pwd)/drivers/net/ethernet/mellanox modules # insmod ./drivers/net/ethernet/mellanox/mlx5/core/mlx5_core.ko

##### Updating kernels

Updating all kernels can be done with the following script: $ pkgs/os-specific/linux/kernel/update.sh The change gets submitted like this: File a PR against staging-nixos. Add a backport release-XX.XX label for an automated backport. We don’t expect many other changes on that branch to require a backport, hence there’s no such branch for stable. By using an additional PR, we get the automatic backport against stable without manual cherry-picks. Merge into staging-nixos. File as PR from staging-nixos against master. When all status checks are green, merge.

##### Add a new (major) version of the Linux kernel

When running ./pkgs/os-specific/linux/kernel/update.sh, new kernel majors get discovered automatically. Prepare all Nix expressions for the new kernel Instantiate the new kernel in pkgs/top-level/linux-kernels.nix in the kernels-section. { linux_X_Y = callPackage ../os-specific/linux/kernel/mainline.nix { branch = "X.Y"; kernelPatches = [ # any new patches required (it makes to look which patches are used by its predecessor) ]; }; } Instantiate the package-set in vanillaPackages: { linux_X_Y = recurseIntoAttrs (packagesFor kernels.linux_X_Y); } Update linux_latest to the new attribute. SQUASH the changes into the linux: init at … commit. If a new hardened is available: Instantiate a linux_X_Y_hardened = hardenedKernelsFor kernels.linux_X_Y { }; in kernels and linux_X_Y_hardened = hardenedKernelFor kernels.linux_X_Y { }; in the packages-section. Make sure to remove the hardened variant of the previous kernel version unless it’s LTS. We only support the latest and latest LTS version of hardened. If no new hardened kernel is available: Keep the previously latest kernel until its mainline counterpart gets removed. After that linux_hardened points to the latest LTS supported by hardened. SQUASH the changes into the linux_X_Y_hardened: init at … commit.

### LHAPDF

PDF sets LHAPDF is a tool for evaluating parton distribution functions (PDFs) in high-energy physics. LHAPDF is available in the lhapdf package.

#### PDF sets

All of the PDF sets made available by the LHAPDF project are available through the lhapdf.pdf_sets attrset.

##### Setup hook

Each package provided in the lhapdf.pdf_sets attrset contains a setup hook which adds itself to the LHAPDF_DATA_PATH environment variable.

### Locales

To allow simultaneous use of packages linked against different versions of glibc with different locale archive formats, Nixpkgs patches glibc to rely on the LOCALE_ARCHIVE environment variable. On non-NixOS distributions, this variable is obviously not set. This can cause regressions in language support or even crashes in some Nixpkgs-provided programs. The simplest way to mitigate this problem is exporting the LOCALE_ARCHIVE variable pointing to ${glibcLocales}/lib/locale/locale-archive. The drawback (and the reason this is not the default) is the relatively large (a hundred MiB) size of the full set of locales. It is possible to build a custom set of locales by overriding parameters allLocales and locales of the package.

### /etc files

Certain calls in glibc require access to runtime files found in /etc such as /etc/protocols or /etc/services – getprotobyname is one such function. On non-NixOS distributions, these files are typically provided by packages (i.e., netbase) if not already pre-installed in your distribution. This can cause non-reproducibility for code if they rely on these files being present. If iana-etc is part of your buildInputs, then it will set the environment variables NIX_ETC_PROTOCOLS and NIX_ETC_SERVICES to the corresponding files in the package through a setup hook. > nix-shell -p iana-etc [nix-shell:~]$ env | grep NIX_ETC NIX_ETC_SERVICES=/nix/store/aj866hr8fad8flnggwdhrldm0g799ccz-iana-etc-20210225/etc/services NIX_ETC_PROTOCOLS=/nix/store/aj866hr8fad8flnggwdhrldm0g799ccz-iana-etc-20210225/etc/protocols Nixpkgs’s version of glibc has been patched to check for the existence of these environment variables. If the environment variables are not set, then it will attempt to find the files at the default location within /etc.

### Nginx

ETags on static files served from the Nix store Nginx is a reverse proxy and lightweight webserver.

#### ETags on static files served from the Nix store

HTTP has a couple of different mechanisms for caching to prevent clients from having to download the same content repeatedly if a resource has not changed since the last time it was requested. When nginx is used as a server for static files, it implements the caching mechanism based on the Last-Modified response header automatically; unfortunately, it works by using filesystem timestamps to determine the value of the Last-Modified header. This doesn’t give the desired behavior when the file is in the Nix store because all file timestamps are set to 0 (for reasons related to build reproducibility). Fortunately, HTTP supports an alternative (and more effective) caching mechanism: the ETag response header. The value of the ETag header specifies some identifier for the particular content that the server is sending (e.g., a hash). When a client makes a second request for the same resource, it sends that value back in an If-None-Match header. If the ETag value is unchanged, then the server does not need to resend the content. The nginx package in Nixpkgs is patched such that when nginx serves a file out of /nix/store, the hash in the store path is used as the ETag header in the HTTP response, thus providing proper caching functionality. With NixOS 24.05 and later, the ETag additionally includes the response content length, to ensure files served with static compression do not share ETags with their uncompressed version. This ETag functionality is enabled automatically; you do not need to modify any configuration to get this behavior.

### nrfutil

nrfutil can be built with its installables as following: (nrfutil.withExtensions [ "nrfutil-completion" "nrfutil-device" "nrfutil-trace" ]) Keep in mind that all installables might not be available for every supported platform.

### OpenGL

NixOS Desktop Nix on GNU/Linux OpenGL support varies depending on which hardware is used and which drivers are available and loaded. Broadly, we support both GL vendors: Mesa and NVIDIA.

#### NixOS Desktop

The NixOS desktop or other non-headless configurations are the primary target for OpenGL libraries and applications. The current solution for discovering which drivers are available is based on libglvnd. libglvnd performs “vendor-neutral dispatch”, trying a variety of techniques to find the system’s GL implementation. In practice, this will be either via standard GLX for X11 users or EGL for Wayland users, and supporting either NVIDIA or Mesa extensions.

#### Nix on GNU/Linux

If you are using a non-NixOS GNU/Linux/X11 desktop with free software video drivers, consider launching OpenGL-dependent programs from Nixpkgs with Nixpkgs versions of libglvnd and mesa in LD_LIBRARY_PATH. For Mesa drivers, the Linux kernel version doesn’t have to match nixpkgs. For proprietary video drivers, you might have luck with also adding the corresponding video driver package.

### Interactive shell helpers

Some packages provide shell integration to be more useful. But unlike other systems, nix doesn’t have a standard share directory location. This is why a bunch of PACKAGE-share scripts are shipped that print the location of the corresponding shared folder. The current list of such packages is as follows: fzf : fzf-share E.g. fzf can then be used in the .bashrc like this: source "$(fzf-share)/completion.bash" source "$(fzf-share)/key-bindings.bash"

### Python Tree Sitter

Tree Sitter is a framework for building grammars for programming languages. It generates and uses syntax trees from source files, which are useful for code analysis, tooling, and syntax highlighting. Python bindings for Tree Sitter grammars are provided through the py-tree-sitter module. The Nix package python3Packages.tree-sitter-grammars provides pre-built grammars for various languages. For example, to experiment with the Rust grammar, you can create a shell environment with the following configuration: { pkgs ? import <nixpkgs> { }, }: pkgs.mkShell { name = "py-tree-sitter-dev-shell"; buildInputs = with pkgs; [ (python3.withPackages ( ps: with ps; [ tree-sitter tree-sitter-grammars.tree-sitter-rust ] )) ]; } Once inside the shell, the following Python code demonstrates how to parse a Rust code snippet: # Import the Tree Sitter library and Rust grammar import tree_sitter import tree_sitter_rust # Load the Rust grammar and initialize the parser rust = tree_sitter.Language(tree_sitter_rust.language()) parser = tree_sitter.Parser(rust) # Parse a Rust snippet tree = parser.parse( bytes( """ fn main() { println!("Hello, world!"); } """, "utf8" ) ) # Display the resulting syntax tree print(tree.root_node) The tree_sitter_rust.language() function references the Rust grammar loaded in the Nix shell. The resulting tree allows you to programmatically inspect the structure of the code.

### treefmt

Functions Reference Options Reference treefmt streamlines the process of applying formatters to your project, making it a breeze with just one command line. The treefmt package provides functions for configuring treefmt using the module system, which are documented below, along with their options. Alternatively, treefmt can be configured using treefmt-nix.

##### pkgs.treefmt.evalConfig

Evaluate a treefmt configuration. Type Module -> Configuration Inputs module A treefmt module. See options reference. Located at pkgs/by-name/tr/treefmt/lib.nix:21 in <nixpkgs>.

##### pkgs.treefmt.withConfig

Wrap treefmt, configured using structured settings. Type Module -> Derivation Inputs module A treefmt module. See options reference. Located at pkgs/by-name/tr/treefmt/lib.nix:54 in <nixpkgs>.

##### pkgs.treefmt.buildConfig

Build a treefmt config file from structured settings. Type Module -> Derivation Inputs settings A settings module, used to build a treefmt config file. See settings option reference. Located at pkgs/by-name/tr/treefmt/lib.nix:79 in <nixpkgs>.

#### Options Reference

The following attributes can be passed to withConfig or evalConfig: configFile The treefmt config file. Type: absolute path Default: generated from settings Declared by: pkgs/by-name/tr/treefmt/modules/options.nix name Name to use for the wrapped treefmt package. Type: string Default: "${getName package}-with-config" Declared by: pkgs/by-name/tr/treefmt/modules/options.nix runtimeInputs Packages to include on treefmt’s PATH. Type: list of package Default: [ ] Declared by: pkgs/by-name/tr/treefmt/modules/options.nix settings Settings used to build a treefmt config file. Type: open submodule of (TOML value) Default: { } Declared by: pkgs/by-name/tr/treefmt/modules/settings.nix

### Steam

Steam in Nix How to play Troubleshooting steam-run

#### Steam in Nix

Steam is distributed as a .deb file, for now only as an i686 package (the amd64 package only has documentation). When unpacked, it has a script called steam that in Ubuntu (their target distro) would go to /usr/bin. When run for the first time, this script copies some files to the user’s home, which include another script that is ultimately responsible for launching the steam binary, which is also in $HOME. Nix problems and constraints: We don’t have /bin/bash and many scripts point there. Same thing for /usr/bin/python. We don’t have the dynamic loader in /lib. The steam.sh script in $HOME cannot be patched, as it is checked and rewritten by steam. The steam binary cannot be patched, it’s also checked. The current approach to deploy Steam in NixOS is composing a FHS-compatible chroot environment, as documented here. This allows us to have binaries in the expected paths without disrupting the system and to avoid patching them to work in a non-FHS environment.

#### How to play

Use programs.steam.enable = true; if you want to add steam to systemPackages and also enable a few workarounds as well as Steam controller support or other Steam supported controllers such as the DualShock 4 or Nintendo Switch Pro Controller.

#### Troubleshooting

Steam fails to start. What do I do? Try to run strace steam to see what is causing steam to fail. Using the FOSS Radeon or nouveau (nvidia) drivers Steam ships statically linked with a version of libcrypto that conflicts with the one dynamically loaded by radeonsi_dri.so. If you get the error: steam.sh: line 713: 7842 Segmentation fault (core dumped) have a look at this pull request.

#### steam-run

The FHS-compatible chroot used for Steam can also be used to run other Linux games that expect a FHS environment. To use it, install the steam-run package and run the game with: steam-run ./foo

### Cataclysm: Dark Days Ahead

How to install Cataclysm DDA Important note for overriding packages Customizing with mods

#### How to install Cataclysm DDA

To install the latest stable release of Cataclysm DDA to your profile, execute nix-env -f "<nixpkgs>" -iA cataclysm-dda. For the curses build (build without tiles), install cataclysmDDA.stable.curses. Note: cataclysm-dda is an alias to cataclysmDDA.stable.tiles. If you like access to a development build of your favorite git revision, override cataclysm-dda-git (or cataclysmDDA.git.curses if you like the curses build): cataclysm-dda-git.override { version = "YYYY-MM-DD"; rev = "YOUR_FAVORITE_REVISION"; sha256 = "CHECKSUM_OF_THE_REVISION"; } The sha256 checksum can be obtained by nix-prefetch-url --unpack "https://github.com/CleverRaven/Cataclysm-DDA/archive/${YOUR_FAVORITE_REVISION}.tar.gz" The default configuration directory is ~/.cataclysm-dda. If you prefer $XDG_CONFIG_HOME/cataclysm-dda, override the derivation: cataclysm-dda.override { useXdgDir = true; }

#### Important note for overriding packages

After applying overrideAttrs, you need to fix passthru.pkgs and passthru.withMods attributes either manually or by using attachPkgs: let # You enabled parallel building. myCDDA = cataclysm-dda-git.overrideAttrs (_: { enableParallelBuilding = true; }); # Unfortunately, this refers to the package before overriding and # parallel building is still disabled. badExample = myCDDA.withMods (_: [ ]); inherit (cataclysmDDA) attachPkgs pkgs wrapCDDA; # You can fix it by hand goodExample1 = myCDDA.overrideAttrs (old: { passthru = old.passthru // { pkgs = pkgs.override { build = goodExample1; }; withMods = wrapCDDA goodExample1; }; }); # or by using a helper function `attachPkgs`. goodExample2 = attachPkgs pkgs myCDDA; # badExample # parallel building disabled # goodExample1.withMods (_: []) # parallel building enabled in goodExample2.withMods (_: [ ]) # parallel building enabled

#### Customizing with mods

To install Cataclysm DDA with mods of your choice, you can use withMods attribute: cataclysm-dda.withMods (mods: with mods; [ tileset.UndeadPeople ]) All mods, soundpacks, and tilesets available in nixpkgs are found in cataclysmDDA.pkgs. Here is an example to modify existing mods and/or add more mods not available in nixpkgs: let customMods = self: super: lib.recursiveUpdate super { # Modify existing mod tileset.UndeadPeople = super.tileset.UndeadPeople.overrideAttrs (old: { # If you like to apply a patch to the tileset for example patches = [ ./path/to/your.patch ]; }); # Add another mod mod.Awesome = cataclysmDDA.buildMod { modName = "Awesome"; version = "0.x"; src = fetchFromGitHub { owner = "Someone"; repo = "AwesomeMod"; rev = "..."; hash = "..."; }; # Path to be installed in the unpacked source (default: ".") modRoot = "contents/under/this/path/will/be/installed"; }; # Add another soundpack soundpack.Fantastic = cataclysmDDA.buildSoundPack { # ditto }; # Add another tileset tileset.SuperDuper = cataclysmDDA.buildTileSet { # ditto }; }; in cataclysm-dda.withMods ( mods: with mods.extend customMods; [ tileset.UndeadPeople mod.Awesome soundpack.Fantastic tileset.SuperDuper ] )

### Urxvt

Configuring urxvt Packaging urxvt plugins Urxvt, also known as rxvt-unicode, is a highly customizable terminal emulator.

#### Configuring urxvt

In nixpkgs, urxvt is provided by the package rxvt-unicode. It can be configured to include your choice of plugins, reducing its closure size from the default configuration which includes all available plugins. To make use of this functionality, use an overlay or directly install an expression that overrides its configuration, such as: rxvt-unicode.override { configure = { availablePlugins, ... }: { plugins = with availablePlugins; [ perls resize-font vtwheel ]; }; } If the configure function returns an attrset without the plugins attribute, availablePlugins will be used automatically. In order to add plugins but also keep all default plugins installed, it is possible to use the following method: rxvt-unicode.override { configure = { availablePlugins, ... }: { plugins = (builtins.attrValues availablePlugins) ++ [ custom-plugin ]; }; } To get a list of all the plugins available, open the Nix REPL and run $ nix repl :l <nixpkgs> map (p: p.name) pkgs.rxvt-unicode.plugins Alternatively, if your shell is bash or zsh and have completion enabled, type nixpkgs.rxvt-unicode.plugins.<tab>. In addition to plugins the options extraDeps and perlDeps can be used to install extra packages. extraDeps can be used, for example, to provide xsel (a clipboard manager) to the clipboard plugin, without installing it globally: rxvt-unicode.override { configure = { availablePlugins, ... }: { pluginsDeps = [ xsel ]; }; } perlDeps is a handy way to provide Perl packages to your custom plugins (in $HOME/.urxvt/ext). For example, if you need AnyEvent you can do: rxvt-unicode.override { configure = { availablePlugins, ... }: { perlDeps = with perlPackages; [ AnyEvent ]; }; }

#### Packaging urxvt plugins

Urxvt plugins reside in pkgs/applications/misc/rxvt-unicode-plugins. To add a new plugin, create an expression in a subdirectory and add the package to the set in pkgs/applications/misc/rxvt-unicode-plugins/default.nix. A plugin can be any kind of derivation; the only requirement is that it should always install perl scripts in $out/lib/urxvt/perl. Look for existing plugins for examples. If the plugin is itself a Perl package that needs to be imported from other plugins or scripts, add the following passthrough: { passthru.perlPackages = [ "self" ]; } This will make the urxvt wrapper pick up the dependency and set up the Perl path accordingly.

### VCPKG

Nix specific environment variables The vcpkg-tool package has a wrapper around the vcpkg executable to avoid writing to the nix store. The wrapper will also be present in vcpkg, unless you specify vcpkg.override { vcpkg-tool = vcpkg-tool-unwrapped; } The wrapper has been made in a way so that it will provide default cli arguments but tries not to interfere if the user provides the same arguments. The arguments also have corresponding environment variables that can be used as an alternative way of overriding these paths. Run the wrapper with the environment variable NIX_VCPKG_DEBUG_PRINT_ENVVARS=true to get a full list of corresponding environment variables.

#### Nix specific environment variables

The wrapper also provides some new nix-specific environment variables that let you control some of the wrapper functionality. NIX_VCPKG_WRITABLE_PATH = <path> Set this environment variable to specify the path where vcpkg will store buildtime artifacts. This will become the base path for all of the other paths. NIX_VCPKG_DEBUG_PRINT_ENVVARS = true | false Set this to true for the wrapper to print the corresponding environment variables for the arguments that will be provided to the unwrapped executable. The list of variables will be printed right before invoking vcpkg. This can be useful if you suspect that the wrapper for some reason was unable to prioritize user-provided cli args over its default ones, or for fixing other issues like typos or unexpanded environment variables.

### WeeChat

WeeChat can be configured to include your choice of plugins, reducing its closure size from the default configuration which includes all available plugins. To make use of this functionality, install an expression that overrides its configuration, such as: weechat.override { configure = ( { availablePlugins, ... }: { plugins = with availablePlugins; [ python perl ]; } ); } If the configure function returns an attrset without the plugins attribute, availablePlugins will be used automatically. The plugins currently available are python, perl, ruby, guile, tcl and lua. The Python and Perl plugins allow the addition of extra libraries. For instance, the inotify.py script in weechat-scripts requires D-Bus or libnotify, and the fish.py script requires pycrypto. To use these scripts, use the plugin’s withPackages attribute: weechat.override { configure = { availablePlugins, ... }: { plugins = with availablePlugins; [ (python.withPackages ( ps: with ps; [ pycrypto python-dbus ] )) ]; }; } In order to also keep all default plugins installed, it is possible to use the following method: weechat.override { configure = { availablePlugins, ... }: { plugins = builtins.attrValues ( availablePlugins // { python = availablePlugins.python.withPackages ( ps: with ps; [ pycrypto python-dbus ] ); } ); }; } WeeChat allows to set defaults on startup using the --run-command. The configure method can be used to pass commands to the program: weechat.override { configure = { availablePlugins, ... }: { init = '' /set foo bar /server add libera irc.libera.chat ''; }; } Further values can be added to the list of commands when running weechat --run-command "your-commands". Additionally, it’s possible to specify scripts to be loaded when starting weechat. These will be loaded before the commands from init: weechat.override { configure = { availablePlugins, ... }: { scripts = with pkgs.weechatScripts; [ weechat-xmpp weechat-matrix-bridge wee-slack ]; init = '' /set plugins.var.python.jabber.key "val" ''; }; } In nixpkgs there’s a subpackage which contains derivations for WeeChat scripts. Such derivations expect a passthru.scripts attribute, which contains a list of all scripts inside the store path. Furthermore, all scripts have to live in $out/share. An exemplary derivation looks like this: { stdenv, fetchurl }: stdenv.mkDerivation { name = "exemplary-weechat-script"; src = fetchurl { url = "https://scripts.tld/your-scripts.tar.gz"; hash = "..."; }; passthru.scripts = [ "foo.py" "bar.lua" ]; installPhase = '' runHook preInstall mkdir $out/share cp foo.py $out/share cp bar.lua $out/share runHook postInstall ''; }

### X.org

Katamari Tarballs Individual Tarballs Generating Nix Expressions Overriding the Generator The Nix expressions for the X.org packages reside in pkgs/servers/x11/xorg/default.nix. This file is automatically generated from lists of tarballs in an X.org release. As such, it should not be modified directly; rather, you should modify the lists, the generator script, or the file pkgs/servers/x11/xorg/overrides.nix, in which you can override or add to the derivations produced by the generator.

#### Katamari Tarballs

X.org upstream releases used to include katamari releases, which included a holistic recommended version for each tarball, up until 7.7. To create a list of tarballs in a katamari release: export release="X11R7.7" export url="mirror://xorg/$release/src/everything/" cat $(PRINT_PATH=1 nix-prefetch-url $url | tail -n 1) \ | perl -e 'while (<>) { if (/(href|HREF)="([^"]*.bz2)"/) { print "$ENV{'url'}$2\n"; }; }' \ | sort > "tarballs-$release.list"

#### Individual Tarballs

The upstream release process for X11R7.8 does not include a planned katamari. Instead, each component of X.org is released as its own tarball. We maintain pkgs/servers/x11/xorg/tarballs.list as a list of tarballs for each individual package. This list includes X.org core libraries and protocol descriptions, extra newer X11 interface libraries, like xorg.libxcb, and classic utilities which are largely unused but still available if needed, like xorg.imake.

#### Generating Nix Expressions

The generator is invoked as follows: cd pkgs/servers/x11/xorg <tarballs.list perl ./generate-expr-from-tarballs.pl For each of the tarballs in the .list files, the script downloads it, unpacks it, and searches its configure.ac and *.pc.in files for dependencies. This information is used to generate default.nix. The generator caches downloaded tarballs between runs. Pay close attention to the NOT FOUND: $NAME messages at the end of the run, since they may indicate missing dependencies. (Some might be optional dependencies, however.)

#### Overriding the Generator

If the expression for a package requires derivation attributes that the generator cannot figure out automatically (say, patches or a postInstall hook), you should modify pkgs/servers/x11/xorg/overrides.nix.

### uv

uv is an extremely fast Python package installer and resolver, written in Rust. It manages project dependencies and environments, with support for lockfiles, workspaces, and more. Due to uv being unaware that it is running on a NixOS system, by default, it will fetch dynamically-linked Python executables that will fail to run, as NixOS cannot run executables intended for generic Linux environments out of the box. To learn more on this, please visit https://nix.dev/guides/faq.html#how-to-run-non-nix-executables There are two ways to mitigate this: Provide uv with a statically-linked Python executable (ideally from nixpkgs) via the UV_PYTHON environment variable. Alternatively, the --python flag can also be used, but this is easy to forget. It is also helpful to forbid uv from downloading any Python binaries via the UV_PYTHON_DOWNLOADS environment variable by setting it to never. These variables can be set in shell.nix and .env files, which can be redistributed with the project to ensure other NixOS machines can execute the project. Add programs.nix-ld.enable = true to your NixOS config. While functional, the previous option is to be preferred, as this is the “works on my machine” option, because redistributing Python projects that use uv to another NixOS machine that does not have nix-ld enabled will cause the same errors to occur. Additionally, there is the issue of modules from PyPI vendoring dynamically-linked libraries, such as numpy, which will also fail to work. This topic is not local to uv, but is deserving of documentation nonetheless. Setting LD_LIBRARY_PATH should be the solution of choice here. Either: Use lib.makeLibraryPath to set LD_LIBRARY_PATH from a shell.nix, e.g. LD_LIBRARY_PATH = lib.makeLibraryPath [ pkgs.openssl pkgs.zlib pkgs.curl ] (If you have already enabled nix-ld) set LD_LIBRARY_PATH to NIX_LD_LIBRARY_PATH. Be aware this is not a silver bullet solution, as this simply provides a list of commonly used libraries, as is shown in nixos/modules/programs/nix-ld.nix.

### Build Support

pkgs.substitute pkgs.replaceVars pkgs.replaceVarsWith

#### pkgs.substitute

pkgs.substitute is a wrapper around the substitute Bash function in the standard environment. It replaces strings in src as specified by the substitutions argument. Example 381. Usage of pkgs.substitute In a build script, the line: substitute $infile $outfile --replace-fail @foo@ ${foopkg}/bin/foo is equivalent to: { substitute, foopkg }: substitute { src = ./sourcefile.txt; substitutions = [ "--replace" "@foo@" "${foopkg}/bin/foo" ]; }

#### pkgs.replaceVars

pkgs.replaceVars <src> <replacements> replaces all instances of @varName@ (@s included) in file src with the respective value in the attribute set replacements. Example 382. Usage of pkgs.replaceVars If say-goodbye.sh contains the following: #! @bash@/bin/bash echo @unchanged@ @hello@/bin/hello --greeting @greeting@ the following derivation will make substitutions to @bash@, @hello@, and @greeting@: { replaceVars, bash, hello, }: replaceVars ./say-goodbye.sh { inherit bash hello; greeting = "goodbye"; unchanged = null; } such that $out will result in something like the following: #! /nix/store/s30jrpgav677fpc9yvkqsib70xfmx7xi-bash-5.2p26/bin/bash echo @unchanged@ /nix/store/566f5isbvw014h7knmzmxa5l6hshx43k-hello-2.12.1/bin/hello --greeting goodbye Note that, in contrast to the old substituteAll, unchanged = null must explicitly be set. Any unreferenced @...@ pattern in the source file will throw an error.
