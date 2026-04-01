---
title: "Build helpers"
source: index.html
---
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
