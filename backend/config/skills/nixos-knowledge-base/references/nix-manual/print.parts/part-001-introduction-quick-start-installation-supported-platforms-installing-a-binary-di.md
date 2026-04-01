---
title: "Nix 2.28.6 Reference Manual"
source: print.html
---

# Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Introduction

Nix is a purely functional package manager. This means that it treats packages like values in purely functional programming languages such as Haskell — they are built by functions that don’t have side-effects, and they never change after they have been built. Nix stores packages in the Nix store, usually the directory /nix/store, where each package has its own unique subdirectory such as /nix/store/b6gvzjyb2pg0kjfwrjmg1vfhh54ad73z-firefox-33.1/ where b6gvzjyb2pg0… is a unique identifier for the package that captures all its dependencies (it’s a cryptographic hash of the package’s build dependency graph). This enables many powerful features.

### Multiple versions

You can have multiple versions or variants of a package installed at the same time. This is especially important when different applications have dependencies on different versions of the same package — it prevents the “DLL hell”. Because of the hashing scheme, different versions of a package end up in different paths in the Nix store, so they don’t interfere with each other. An important consequence is that operations like upgrading or uninstalling an application cannot break other applications, since these operations never “destructively” update or delete files that are used by other packages.

### Complete dependencies

Nix helps you make sure that package dependency specifications are complete. In general, when you’re making a package for a package management system like RPM, you have to specify for each package what its dependencies are, but there are no guarantees that this specification is complete. If you forget a dependency, then the package will build and work correctly on your machine if you have the dependency installed, but not on the end user's machine if it's not there. Since Nix on the other hand doesn’t install packages in “global” locations like /usr/bin but in package-specific directories, the risk of incomplete dependencies is greatly reduced. This is because tools such as compilers don’t search in per-packages directories such as /nix/store/5lbfaxb722zp…-openssl-0.9.8d/include, so if a package builds correctly on your system, this is because you specified the dependency explicitly. This takes care of the build-time dependencies. Once a package is built, runtime dependencies are found by scanning binaries for the hash parts of Nix store paths (such as r8vvq9kq…). This sounds risky, but it works extremely well.

### Multi-user support

Nix has multi-user support. This means that non-privileged users can securely install software. Each user can have a different profile, a set of packages in the Nix store that appear in the user’s PATH. If a user installs a package that another user has already installed previously, the package won’t be built or downloaded a second time. At the same time, it is not possible for one user to inject a Trojan horse into a package that might be used by another user.

### Atomic upgrades and rollbacks

Since package management operations never overwrite packages in the Nix store but just add new versions in different paths, they are atomic. So during a package upgrade, there is no time window in which the package has some files from the old version and some files from the new version — which would be bad because a program might well crash if it’s started during that period. And since packages aren’t overwritten, the old versions are still there after an upgrade. This means that you can roll back to the old version: $ nix-env --upgrade --attr nixpkgs.some-package $ nix-env --rollback

### Garbage collection

When you uninstall a package like this… $ nix-env --uninstall firefox the package isn’t deleted from the system right away (after all, you might want to do a rollback, or it might be in the profiles of other users). Instead, unused packages can be deleted safely by running the garbage collector: $ nix-collect-garbage This deletes all packages that aren’t in use by any user profile or by a currently running program.

### Functional package language

Packages are built from Nix expressions, which is a simple functional language. A Nix expression describes everything that goes into a package build task (a “derivation”): other packages, sources, the build script, environment variables for the build script, etc. Nix tries very hard to ensure that Nix expressions are deterministic: building a Nix expression twice should yield the same result. Because it’s a functional language, it’s easy to support building variants of a package: turn the Nix expression into a function and call it any number of times with the appropriate arguments. Due to the hashing scheme, variants don’t conflict with each other in the Nix store.

### Transparent source/binary deployment

Nix expressions generally describe how to build a package from source, so an installation action like $ nix-env --install --attr nixpkgs.firefox could cause quite a bit of build activity, as not only Firefox but also all its dependencies (all the way up to the C library and the compiler) would have to be built, at least if they are not already in the Nix store. This is a source deployment model. For most users, building from source is not very pleasant as it takes far too long. However, Nix can automatically skip building from source and instead use a binary cache, a web server that provides pre-built binaries. For instance, when asked to build /nix/store/b6gvzjyb2pg0…-firefox-33.1 from source, Nix would first check if the file https://cache.nixos.org/b6gvzjyb2pg0….narinfo exists, and if so, fetch the pre-built binary referenced from there; otherwise, it would fall back to building from source.

### Nix Packages collection

We provide a large set of Nix expressions containing hundreds of existing Unix packages, the Nix Packages collection (Nixpkgs).

### Managing build environments

Nix is extremely useful for developers as it makes it easy to automatically set up the build environment for a package. Given a Nix expression that describes the dependencies of your package, the command nix-shell will build or download those dependencies if they’re not already in your Nix store, and then start a Bash shell in which all necessary environment variables (such as compiler search paths) are set. For example, the following command gets all dependencies of the Pan newsreader, as described by its Nix expression: $ nix-shell '<nixpkgs>' --attr pan You’re then dropped into a shell where you can edit, build and test the package: [nix-shell]$ unpackPhase [nix-shell]$ cd pan-* [nix-shell]$ configurePhase [nix-shell]$ buildPhase [nix-shell]$ ./pan/gui/pan

### Portability

Nix runs on Linux and macOS.

### NixOS

NixOS is a Linux distribution based on Nix. It uses Nix not just for package management but also to manage the system configuration (e.g., to build configuration files in /etc). This means, among other things, that it is easy to roll back the entire configuration of the system to an earlier state. Also, users can install software without root privileges. For more information and downloads, see the NixOS homepage.

### License

Nix is released under the terms of the GNU LGPLv2.1 or (at your option) any later version.

## Quick Start

This chapter is for impatient people who don't like reading documentation. For more in-depth information you are kindly referred to subsequent chapters. Install Nix: $ curl -L https://nixos.org/nix/install | sh The install script will use sudo, so make sure you have sufficient rights. For other installation methods, see the detailed installation instructions. Run software without installing it permanently: $ nix-shell --packages cowsay lolcat This downloads the specified packages with all their dependencies, and drops you into a Bash shell where the commands provided by those packages are present. This will not affect your normal environment: [nix-shell:~]$ cowsay Hello, Nix! | lolcat Exiting the shell will make the programs disappear again: [nix-shell:~]$ exit $ lolcat lolcat: command not found Search for more packages on search.nixos.org to try them out. Free up storage space: $ nix-collect-garbage

## Installation

This section describes how to install and configure Nix for first-time use. The current recommended option on Linux and MacOS is multi-user.

### Multi-user

This installation offers better sharing, improved isolation, and more security over a single user installation. This option requires either: Linux running systemd, with SELinux disabled MacOS Updating to macOS 15 Sequoia If you recently updated to macOS 15 Sequoia and are getting error: the user '_nixbld1' in the group 'nixbld' does not exist when running Nix commands, refer to GitHub issue NixOS/nix#10892 for instructions to fix your installation without reinstalling. $ curl -L https://nixos.org/nix/install | sh -s -- --daemon

### Single-user

Single-user is not supported on Mac. This installation has less requirements than the multi-user install, however it cannot offer equivalent sharing, isolation, or security. This option is suitable for systems without systemd. $ curl -L https://nixos.org/nix/install | sh -s -- --no-daemon

### Distributions

The Nix community maintains installers for several distributions. They can be found in the nix-community/nix-installers repository.

## Supported Platforms

Nix is currently supported on the following platforms: Linux (i686, x86_64, aarch64). macOS (x86_64, aarch64).

## Installing a Binary Distribution

Updating to macOS 15 Sequoia If you recently updated to macOS 15 Sequoia and are getting error: the user '_nixbld1' in the group 'nixbld' does not exist when running Nix commands, refer to GitHub issue NixOS/nix#10892 for instructions to fix your installation without reinstalling. To install the latest version Nix, run the following command: $ curl -L https://nixos.org/nix/install | sh This performs the default type of installation for your platform: Multi-user: Linux with systemd and without SELinux macOS Single-user: Linux without systemd Linux with SELinux We recommend the multi-user installation if it supports your platform and you can authenticate with sudo. The installer can be configured with various command line arguments and environment variables. To show available command line flags: $ curl -L https://nixos.org/nix/install | sh -s -- --help To check what it does and how it can be customised further, download and edit the second-stage installation script.

## Installing a pinned Nix version from a URL

Version-specific installation URLs for all Nix versions since 1.11.16 can be found at releases.nixos.org. The directory for each version contains the corresponding SHA-256 hash. All installation scripts are invoked the same way: $ export VERSION=2.19.2 $ curl -L https://releases.nixos.org/nix/nix-$VERSION/install | sh

## Multi User Installation

The multi-user Nix installation creates system users and a system service for the Nix daemon. Supported systems: Linux running systemd, with SELinux disabled macOS To explicitly instruct the installer to perform a multi-user installation on your system: $ bash <(curl -L https://nixos.org/nix/install) --daemon You can run this under your usual user account or root. The script will invoke sudo as needed.

## Single User Installation

To explicitly select a single-user installation on your system: $ bash <(curl -L https://nixos.org/nix/install) --no-daemon In a single-user installation, /nix is owned by the invoking user. The script will invoke sudo to create /nix if it doesn’t already exist. If you don’t have sudo, manually create /nix as root: $ su root # mkdir /nix # chown alice /nix

## Installing from a binary tarball

You can also download a binary tarball that contains Nix and all its dependencies: Choose a version and system type Download and unpack the tarball Run the installer Example $ pushd $(mktemp -d) $ export VERSION=2.19.2 $ export SYSTEM=x86_64-linux $ curl -LO https://releases.nixos.org/nix/nix-$VERSION/nix-$VERSION-$SYSTEM.tar.xz $ tar xfj nix-$VERSION-$SYSTEM.tar.xz $ cd nix-$VERSION-$SYSTEM $ ./install $ popd The installer can be customised with the environment variables declared in the file named install-multi-user.

### Native packages for Linux distributions

The Nix community maintains installers for some Linux distributions in their native packaging format(https://nix-community.github.io/nix-installers/).

## macOS Installation

We believe we have ironed out how to cleanly support the read-only root file system on modern macOS. New installs will do this automatically. This section previously detailed the situation, options, and trade-offs, but it now only outlines what the installer does. You don't need to know this to run the installer, but it may help if you run into trouble: create a new APFS volume for your Nix store update /etc/synthetic.conf to direct macOS to create a "synthetic" empty root directory to mount your volume specify mount options for the volume in /etc/fstab rw: read-write noauto: prevent the system from auto-mounting the volume (so the LaunchDaemon mentioned below can control mounting it, and to avoid masking problems with that mounting service). nobrowse: prevent the Nix Store volume from showing up on your desktop; also keeps Spotlight from spending resources to index this volume if you have FileVault enabled generate an encryption password put it in your system Keychain use it to encrypt the volume create a system LaunchDaemon to mount this volume early enough in the boot process to avoid problems loading or restoring any programs that need access to your Nix store

## Installing Nix from Source

If no binary package is available or if you want to hack on Nix, you can build Nix from its Git repository.

## Prerequisites

GNU Autoconf (https://www.gnu.org/software/autoconf/) and the autoconf-archive macro collection (https://www.gnu.org/software/autoconf-archive/). These are needed to run the bootstrap script. GNU Make. Bash Shell. The ./configure script relies on bashisms, so Bash is required. A version of GCC or Clang that supports C++20. pkg-config to locate dependencies. If your distribution does not provide it, you can get it from http://www.freedesktop.org/wiki/Software/pkg-config. The OpenSSL library to calculate cryptographic hashes. If your distribution does not provide it, you can get it from https://www.openssl.org. The libbrotlienc and libbrotlidec libraries to provide implementation of the Brotli compression algorithm. They are available for download from the official repository https://github.com/google/brotli. cURL and its library. If your distribution does not provide it, you can get it from https://curl.haxx.se/. The SQLite embedded database library, version 3.6.19 or higher. If your distribution does not provide it, please install it from http://www.sqlite.org/. The Boehm garbage collector (bdw-gc) to reduce the evaluator’s memory consumption (optional). To enable it, install pkgconfig and the Boehm garbage collector, and pass the flag --enable-gc to configure. The boost library of version 1.66.0 or higher. It can be obtained from the official web site https://www.boost.org/. The editline library of version 1.14.0 or higher. It can be obtained from the its repository https://github.com/troglobit/editline. The libsodium library for verifying cryptographic signatures of contents fetched from binary caches. It can be obtained from the official web site https://libsodium.org. Recent versions of Bison and Flex to build the parser. (This is because Nix needs GLR support in Bison and reentrancy support in Flex.) For Bison, you need version 2.6, which can be obtained from the GNU FTP server. For Flex, you need version 2.5.35, which is available on SourceForge. Slightly older versions may also work, but ancient versions like the ubiquitous 2.5.4a won't. The libseccomp is used to provide syscall filtering on Linux. This is an optional dependency and can be disabled passing a --disable-seccomp-sandboxing option to the configure script (Not recommended unless your system doesn't support libseccomp). To get the library, visit https://github.com/seccomp/libseccomp. On 64-bit x86 machines only, libcpuid library is used to determine which microarchitecture levels are supported (e.g., as whether to have x86_64-v2-linux among additional system types). The library is available from its homepage http://libcpuid.sourceforge.net. This is an optional dependency and can be disabled by providing a --disable-cpuid to the configure script. Unless ./configure --disable-unit-tests is specified, GoogleTest (GTest) and RapidCheck are required, which are available at https://google.github.io/googletest/ and https://github.com/emil-e/rapidcheck respectively.

## Obtaining the Source

The most recent sources of Nix can be obtained from its Git repository. For example, the following command will check out the latest revision into a directory called nix: $ git clone https://github.com/NixOS/nix Likewise, specific releases can be obtained from the tags of the repository.

## Building Nix from Source

Nix is built with Meson. It is broken up into multiple Meson packages, which are optionally combined in a single project using Meson's subprojects feature. There are no mandatory extra steps to the building process: generic Meson installation instructions like this should work. The installation path can be specified by passing the -Dprefix=prefix to configure. The default installation directory is /usr/local. You can change this to any location you like. You must have write permission to the prefix path. Nix keeps its store (the place where packages are stored) in /nix/store by default. This can be changed using -Dstore-dir=path. Warning It is best not to change the Nix store from its default, since doing so makes it impossible to use pre-built binaries from the standard Nixpkgs channels — that is, all packages will need to be built from source. Nix keeps state (such as its database and log files) in /nix/var by default. This can be changed using -Dlocalstatedir=path.

## Using Nix within Docker

To run the latest stable release of Nix with Docker run the following command: $ docker run -ti ghcr.io/nixos/nix Unable to find image 'ghcr.io/nixos/nix:latest' locally latest: Pulling from ghcr.io/nixos/nix 5843afab3874: Pull complete b52bf13f109c: Pull complete 1e2415612aa3: Pull complete Digest: sha256:27f6e7f60227e959ee7ece361f75d4844a40e1cc6878b6868fe30140420031ff Status: Downloaded newer image for ghcr.io/nixos/nix:latest 35ca4ada6e96:/# nix --version nix (Nix) 2.3.12 35ca4ada6e96:/# exit

## What is included in Nix's Docker image?

The official Docker image is created using pkgs.dockerTools.buildLayeredImage (and not with Dockerfile as it is usual with Docker images). You can still base your custom Docker image on it as you would do with any other Docker image. The Docker image is also not based on any other image and includes minimal set of runtime dependencies that are required to use Nix: pkgs.nix pkgs.bashInteractive pkgs.coreutils-full pkgs.gnutar pkgs.gzip pkgs.gnugrep pkgs.which pkgs.curl pkgs.less pkgs.wget pkgs.man pkgs.cacert.out pkgs.findutils

## Docker image with the latest development version of Nix

To get the latest image that was built by Hydra run the following command: $ curl -L https://hydra.nixos.org/job/nix/master/dockerImage.x86_64-linux/latest/download/1 | docker load $ docker run -ti nix:2.5pre20211105 You can also build a Docker image from source yourself: $ nix build ./\#hydraJobs.dockerImage.x86_64-linux $ docker load -i ./result/image.tar.gz $ docker run -ti nix:2.5pre20211105

## Docker image with non-root Nix

If you would like to run Nix in a container under a user other than root, you can build an image with a non-root single-user installation of Nix by specifying the uid, gid, uname, and gname arguments to docker.nix: $ nix build --file docker.nix \ --arg uid 1000 \ --arg gid 1000 \ --argstr uname user \ --argstr gname user \ --argstr name nix-user \ --out-link nix-user.tar.gz $ docker load -i nix-user.tar.gz $ docker run -ti nix-user

## Security

Nix has two basic security models. First, it can be used in “single-user mode”, which is similar to what most other package management tools do: there is a single user (typically root) who performs all package management operations. All other users can then use the installed packages, but they cannot perform package management operations themselves. Alternatively, you can configure Nix in “multi-user mode”. In this model, all users can perform package management operations — for instance, every user can install software without requiring root privileges. Nix ensures that this is secure. For instance, it’s not possible for one user to overwrite a package used by another user with a Trojan horse.

## Single-User Mode

In single-user mode, all Nix operations that access the database in prefix/var/nix/db or modify the Nix store in prefix/store must be performed under the user ID that owns those directories. This is typically root. (If you install from RPM packages, that’s in fact the default ownership.) However, on single-user machines, it is often convenient to chown those directories to your normal user account so that you don’t have to su to root all the time.

## Multi-User Mode

To allow a Nix store to be shared safely among multiple users, it is important that users are not able to run builders that modify the Nix store or database in arbitrary ways, or that interfere with builds started by other users. If they could do so, they could install a Trojan horse in some package and compromise the accounts of other users. To prevent this, the Nix store and database are owned by some privileged user (usually root) and builders are executed under special user accounts (usually named nixbld1, nixbld2, etc.). When a unprivileged user runs a Nix command, actions that operate on the Nix store (such as builds) are forwarded to a Nix daemon running under the owner of the Nix store/database that performs the operation. Note Multi-user mode has one important limitation: only root and a set of trusted users specified in nix.conf can specify arbitrary binary caches. So while unprivileged users may install packages from arbitrary Nix expressions, they may not get pre-built binaries.

### Setting up the build users

The build users are the special UIDs under which builds are performed. They should all be members of the build users group nixbld. This group should have no other members. The build users should not be members of any other group. On Linux, you can create the group and users as follows: $ groupadd -r nixbld $ for n in $(seq 1 10); do useradd -c "Nix build user $n" \ -d /var/empty -g nixbld -G nixbld -M -N -r -s "$(which nologin)" \ nixbld$n; done This creates 10 build users. There can never be more concurrent builds than the number of build users, so you may want to increase this if you expect to do many builds at the same time.

### Running the daemon

The Nix daemon should be started as follows (as root): $ nix-daemon You’ll want to put that line somewhere in your system’s boot scripts. To let unprivileged users use the daemon, they should set the NIX_REMOTE environment variable to daemon. So you should put a line like export NIX_REMOTE=daemon into the users’ login scripts.

### Restricting access

To limit which users can perform Nix operations, you can use the permissions on the directory /nix/var/nix/daemon-socket. For instance, if you want to restrict the use of Nix to the members of a group called nix-users, do $ chgrp nix-users /nix/var/nix/daemon-socket $ chmod ug=rwx,o= /nix/var/nix/daemon-socket This way, users who are not in the nix-users group cannot connect to the Unix domain socket /nix/var/nix/daemon-socket/socket, so they cannot perform Nix operations.

## Environment Variables

To use Nix, some environment variables should be set. In particular, PATH should contain the directories prefix/bin and ~/.nix-profile/bin. The first directory contains the Nix tools themselves, while ~/.nix-profile is a symbolic link to the current user environment (an automatically generated package consisting of symlinks to installed packages). The simplest way to set the required environment variables is to include the file prefix/etc/profile.d/nix.sh in your ~/.profile (or similar), like this: source prefix/etc/profile.d/nix.sh

## NIX_SSL_CERT_FILE

If you need to specify a custom certificate bundle to account for an HTTPS-intercepting man in the middle proxy, you must specify the path to the certificate bundle in the environment variable NIX_SSL_CERT_FILE. If you don't specify a NIX_SSL_CERT_FILE manually, Nix will install and use its own certificate bundle. Set the environment variable and install Nix $ export NIX_SSL_CERT_FILE=/etc/ssl/my-certificate-bundle.crt $ curl -L https://nixos.org/nix/install | sh In the shell profile and rc files (for example, /etc/bashrc, /etc/zshrc), add the following line: export NIX_SSL_CERT_FILE=/etc/ssl/my-certificate-bundle.crt Note You must not add the export and then do the install, as the Nix installer will detect the presence of Nix configuration, and abort. If you use the Nix daemon, you should also add the following to /etc/nix/nix.conf: ssl-cert-file = /etc/ssl/my-certificate-bundle.crt

### Proxy Environment Variables

The Nix installer has special handling for these proxy-related environment variables: http_proxy, https_proxy, ftp_proxy, all_proxy, no_proxy, HTTP_PROXY, HTTPS_PROXY, FTP_PROXY, ALL_PROXY, NO_PROXY. If any of these variables are set when running the Nix installer, then the installer will create an override file at /etc/systemd/system/nix-daemon.service.d/override.conf so nix-daemon will use them.

## Upgrading Nix

Note These upgrade instructions apply where Nix was installed following the installation instructions in this manual. Check which Nix version will be installed, for example from one of the release channels such as nixpkgs-unstable: $ nix-shell -p nix -I nixpkgs=channel:nixpkgs-unstable --run "nix --version" nix (Nix) 2.18.1 Warning Writing to the local store with a newer version of Nix, for example by building derivations with nix-build or nix-store --realise, may change the database schema! Reverting to an older version of Nix may therefore require purging the store database before it can be used.

### Linux multi-user

$ sudo su # nix-env --install --file '<nixpkgs>' --attr nix cacert -I nixpkgs=channel:nixpkgs-unstable # systemctl daemon-reload # systemctl restart nix-daemon

### macOS multi-user

$ sudo nix-env --install --file '<nixpkgs>' --attr nix cacert -I nixpkgs=channel:nixpkgs-unstable $ sudo launchctl remove org.nixos.nix-daemon $ sudo launchctl load /Library/LaunchDaemons/org.nixos.nix-daemon.plist

### Single-user all platforms

$ nix-env --install --file '<nixpkgs>' --attr nix cacert -I nixpkgs=channel:nixpkgs-unstable

### Multi User

Removing a multi-user installation depends on the operating system.

#### Linux

If you are on Linux with systemd: Remove the Nix daemon service: sudo systemctl stop nix-daemon.service sudo systemctl disable nix-daemon.socket nix-daemon.service sudo systemctl daemon-reload Remove files created by Nix: sudo rm -rf /etc/nix /etc/profile.d/nix.sh /etc/tmpfiles.d/nix-daemon.conf /nix ~root/.nix-channels ~root/.nix-defexpr ~root/.nix-profile ~root/.cache/nix Remove build users and their group: for i in $(seq 1 32); do sudo userdel nixbld$i done sudo groupdel nixbld There may also be references to Nix in /etc/bash.bashrc /etc/bashrc /etc/profile /etc/zsh/zshrc /etc/zshrc which you may remove.

#### macOS

Updating to macOS 15 Sequoia If you recently updated to macOS 15 Sequoia and are getting error: the user '_nixbld1' in the group 'nixbld' does not exist when running Nix commands, refer to GitHub issue NixOS/nix#10892 for instructions to fix your installation without reinstalling. If system-wide shell initialisation files haven't been altered since installing Nix, use the backups made by the installer: sudo mv /etc/zshrc.backup-before-nix /etc/zshrc sudo mv /etc/bashrc.backup-before-nix /etc/bashrc sudo mv /etc/bash.bashrc.backup-before-nix /etc/bash.bashrc Otherwise, edit /etc/zshrc, /etc/bashrc, and /etc/bash.bashrc to remove the lines sourcing nix-daemon.sh, which should look like this: # Nix if [ -e '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh' ]; then . '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh' fi # End Nix Stop and remove the Nix daemon services: sudo launchctl unload /Library/LaunchDaemons/org.nixos.nix-daemon.plist sudo rm /Library/LaunchDaemons/org.nixos.nix-daemon.plist sudo launchctl unload /Library/LaunchDaemons/org.nixos.darwin-store.plist sudo rm /Library/LaunchDaemons/org.nixos.darwin-store.plist This stops the Nix daemon and prevents it from being started next time you boot the system. Remove the nixbld group and the _nixbuildN users: sudo dscl . -delete /Groups/nixbld for u in $(sudo dscl . -list /Users | grep _nixbld); do sudo dscl . -delete /Users/$u; done This will remove all the build users that no longer serve a purpose. Edit fstab using sudo vifs to remove the line mounting the Nix Store volume on /nix, which looks like UUID=<uuid> /nix apfs rw,noauto,nobrowse,suid,owners or LABEL=Nix\040Store /nix apfs rw,nobrowse by setting the cursor on the respective line using the arrow keys, and pressing dd, and then :wq to save the file. This will prevent automatic mounting of the Nix Store volume. Edit /etc/synthetic.conf to remove the nix line. If this is the only line in the file you can remove it entirely: if [ -f /etc/synthetic.conf ]; then if [ "$(cat /etc/synthetic.conf)" = "nix" ]; then sudo rm /etc/synthetic.conf else sudo vi /etc/synthetic.conf fi fi This will prevent the creation of the empty /nix directory. Remove the files Nix added to your system, except for the store: sudo rm -rf /etc/nix /var/root/.nix-profile /var/root/.nix-defexpr /var/root/.nix-channels ~/.nix-profile ~/.nix-defexpr ~/.nix-channels Remove the Nix Store volume: sudo diskutil apfs deleteVolume /nix This will remove the Nix Store volume and everything that was added to the store. If the output indicates that the command couldn't remove the volume, you should make sure you don't have an unmounted Nix Store volume. Look for a "Nix Store" volume in the output of the following command: diskutil list If you do find a "Nix Store" volume, delete it by running diskutil apfs deleteVolume with the store volume's diskXsY identifier. If you get an error that the volume is in use by the kernel, reboot and immediately delete the volume before starting any other process. Note After you complete the steps here, you will still have an empty /nix directory. This is an expected sign of a successful uninstall. The empty /nix directory will disappear the next time you reboot. You do not have to reboot to finish uninstalling Nix. The uninstall is complete. macOS (Catalina+) directly controls root directories, and its read-only root will prevent you from manually deleting the empty /nix mountpoint.

### Single User

To remove a single-user installation of Nix, run: rm -rf /nix ~/.nix-channels ~/.nix-defexpr ~/.nix-profile You might also want to manually remove references to Nix from your ~/.profile.

## Nix Store

The Nix store is an abstraction to store immutable file system data (such as software packages) that can have dependencies on other such data. There are multiple types of Nix stores with different capabilities, such as the default one on the local filesystem (/nix/store) or binary caches.

## File System Object

Nix uses a simplified model of the file system, which consists of file system objects. Every file system object is one of the following: File A possibly empty sequence of bytes for contents A single boolean representing the executable permission Directory Mapping of names to child file system objects Symbolic link An arbitrary string. Nix does not assign any semantics to symbolic links. File system objects and their children form a tree. A bare file or symlink can be a root file system object. Nix does not encode any other file system notions such as hard links, permissions, timestamps, or other metadata.

### Examples of file system objects

A plain file: 50 B, executable: false An executable file: 122 KB, executable: true A symlink: -> /usr/bin/sh A directory with contents: ├── bin │ └── hello: 35 KB, executable: true └── share ├── info │ └── hello.info: 36 KB, executable: false └── man └── man1 └── hello.1.gz: 790 B, executable: false A directory that contains a symlink and other directories: ├── bin -> share/go/bin ├── nix-support/ └── share/

## Content-Addressing File System Objects

For many operations, Nix needs to calculate a content addresses of a file system object (FSO). Usually this is needed as part of content addressing store objects, since store objects always have a root file system object. But some command-line utilities also just work on "raw" file system objects, not part of any store object. Every content addressing scheme Nix uses ultimately involves feeding data into a hash function, and getting back an opaque fixed-size digest which is deemed a content address. The various methods of content addressing thus differ in how abstract data (in this case, a file system object and its descendants) are fed into the hash function.

### Serialising File System Objects

The simplest method is to serialise the entire file system object tree into a single binary string, and then hash that binary string, yielding the content address. In this section we describe the currently-supported methods of serialising file system objects.

#### Flat

A single file object can just be hashed by its contents. This is not enough information to encode the fact that the file system object is a file, but if we already know that the FSO is a single non-executable file by other means, it is sufficient. Because the hashed data is just the raw file, as is, this choice is good for compatibility with other systems. For example, Unix commands like sha256sum or sha1sum will produce hashes for single files that match this.

#### Nix Archive (NAR)

For the other cases of file system objects, especially directories with arbitrary descendants, we need a more complex serialisation format. Examples of such serialisations are the ZIP and TAR file formats. However, for our purposes these formats have two problems: They do not have a canonical serialisation, meaning that given an FSO, there can be many different serialisations. For instance, TAR files can have variable amounts of padding between archive members; and some archive formats leave the order of directory entries undefined. This would be bad because we use serialisation to compute cryptographic hashes over file system objects, and for those hashes to be useful as a content address or for integrity checking, uniqueness is crucial. Otherwise, correct hashes would report false mismatches, and the store would fail to find the content. They store more information than we have in our notion of FSOs, such as time stamps. This can cause FSOs that Nix should consider equal to hash to different values on different machines, just because the dates differ. As a practical consideration, the TAR format is the only truly universal format in the Unix environment. It has many problems, such as an inability to deal with long file names and files larger than 2^33 bytes. Current implementations such as GNU Tar work around these limitations in various ways. For these reasons, Nix has its very own archive format—the Nix Archive (NAR) format, which is carefully designed to avoid the problems described above. The exact specification of the Nix Archive format is in specified here.

### Content addressing File System Objects beyond a single serialisation pass

Serialising the entire tree and then hashing that binary string is not the only option for content addressing, however. Another technique is that of a Merkle graph, where previously computed hashes are included in subsequent byte strings to be hashed. In particular, the Merkle graphs can match the original graph structure of file system objects: we can first hash (serialised) child file system objects, and then hash parent objects using the hashes of their children in the serialisation (to be hashed) of the parent file system objects. Currently, there is one such Merkle DAG content addressing method supported.

#### Git (experimental)

Warning This method is part of the git-hashing experimental feature. Git's file system model is very close to Nix's, and so Git's content addressing method is a pretty good fit. Just as with regular Git, files and symlinks are hashed as git "blobs", and directories are hashed as git "trees". However, one difference between Nix's and Git's file system model needs special treatment. Plain files, executable files, and symlinks are not differentiated as distinctly addressable objects, but by their context: by the directory entry that refers to them. That means so long as the root object is a directory, there is no problem: every non-directory object is owned by a parent directory, and the entry that refers to it provides the missing information. However, if the root object is not a directory, then we have no way of knowing which one of an executable file, non-executable file, or symlink it is supposed to be. In response to this, we have decided to treat a bare file as non-executable file. This is similar to do what we do with flat serialisation, which also lacks this information. To avoid an address collision, attempts to hash a bare executable file or symlink will result in an error (just as would happen for flat serialisation also). Thus, Git can encode some, but not all of Nix's "File System Objects", and this sort of content-addressing is likewise partial. In the future, we may support a Git-like hash for such file system objects, or we may adopt another Merkle DAG format which is capable of representing all Nix file system objects.

### Store Object

A Nix store is a collection of store objects with references between them. A store object consists of A file system object as data A set of store paths as references to store objects

#### References

Store objects can refer to both other store objects and themselves. References from a store object to itself are called self-references. Store objects and their references form a directed graph, where the store objects are the vertices, and the references are the edges. In particular, the edge corresponding to a reference is from the store object that contains the reference, and to the store object that the store path (which is the reference) refers to. References other than a self-reference must not form a cycle. The graph of references excluding self-references thus forms a [directed acyclic graph]. [directed acyclic graph]: ../glossary.md#gloss-directed acyclic graph We can take the transitive closure of the references graph, which any pair of store objects have an edge not if there is a single reference from the first to the second, but a path of one or more references from the first to the second. The requisites of a store object are all store objects reachable by paths of references which start with given store object's references. We can also take the transpose graph ofthe references graph, where we reverse the orientation of all edges. The referrers of a store object are the store objects that reference it. One can also combine both concepts: taking the transitive closure of the tranposed references graph. The referrers closure of a store object are the store objects that can reach the given store object via paths of references. Note Care must be taken to distinguish between the intrinsic and extrinsic properties of store objects. We can create graphs from the store objects in a store, but the contents of the store is not, in general fixed, and may instead change over time. The references of a store object --- the set of store paths called the references --- is a field of a store object, and thus intrinsic by definition. Regardless of what store contains the store object in question, and what else that store may or may not contain, the references are the same. The requisites of a store object are almost intrinsic --- some store paths due not precisely refer to a unique single store object. Exactly what store object is being referenced, and what in turn its references are, depends on the store in question. Different stores that disagree. The referrers of a store object are completely extrinsic, and depends solely on the store which contains that store object, not the store object itself. Other store objects which refer to the store object in question may be added or removed from the store.

#### Immutability

Store objects are immutable: Once created, they do not change nor can any store object they reference be changed. Note Stores which support atomically deleting multiple store objects allow more flexibility while still upholding this property.

#### Closure property

A store can only contain a store object if it also contains all the store objects it refers to. Note The "closure property" isn't meant to prohibit, for example, lazy loading of store objects. However, the "closure property" and immutability in conjunction imply that any such lazy loading ought to be deterministic.
