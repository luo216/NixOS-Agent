## Programming Languages

### Arduino

* [nixduino](https://github.com/boredom101/nixduino) - Nix-based tool to help build Arduino sketches.

### Clojure

* [clj-nix](https://github.com/jlesquembre/clj-nix) - Nix helper functions for Clojure projects.

### Crystal

* [crystal2nix](https://github.com/nix-community/crystal2nix) - Convert `shard.lock` into Nix expressions.

### Elm

* [elm2nix](https://github.com/cachix/elm2nix) - Convert `elm.json` into Nix expressions.

### Gleam

* [nix-gleam](https://github.com/arnarg/nix-gleam) - Generic Nix builder for Gleam applications.

### Haskell

* [cabal2nix](https://github.com/NixOS/cabal2nix) - Converts a Cabal file into a Nix build expression.
* [haskell-flake](https://github.com/srid/haskell-flake) - A `flake-parts` Nix module for Haskell development.
* [haskell.nix](https://github.com/input-output-hk/haskell.nix) - Alternative Haskell Infrastructure for Nixpkgs.
* [nix-haskell-mode](https://github.com/matthewbauer/nix-haskell-mode) - Automatic Haskell setup in Emacs.
* [nixkell](https://github.com/pwm/nixkell) - A Haskell project template using Nix and direnv.

### Haxe
* [haxix](https://github.com/MadMcCrow/haxix) - Nix flake to build haxe/Heaps.io projects.
* [kebab](https://github.com/bwkam/kebab) - Haxe packages for Nix.

### Julia

* [Manifest2Nix.jl](https://codeberg.org/aniva/Manifest2Nix.jl) - A Nix library for creating reproducible Julia builds and experiments via precompilation.

### Lean

* [lean4-nix](https://github.com/lenianiva/lean4-nix) -  Nix flake build for Lean 4, and `lake2nix`.

### Node.js

* [Napalm](https://github.com/nix-community/napalm) - Support for building npm packages in Nix with a lightweight npm registry.
* [node2nix](https://github.com/svanderburg/node2nix) - Generate Nix expression from a `package.json` (or `package-lock.json`) (to be stored as files).
* [npmlock2nix](https://github.com/nix-community/npmlock2nix) - Generate Nix expressions from a `package-lock.json` (in-memory), primarily for web projects.

### OCaml

* [opam2nix](https://github.com/timbertson/opam2nix) - Generate Nix expressions from opam packages.

### PHP

* [composer-plugin-nixify](https://github.com/stephank/composer-plugin-nixify) - Composer plugin to help with Nix packaging.
* [composer2nix](https://github.com/svanderburg/composer2nix) - Generate Nix expressions to build composer packages.
* [composition-c4](https://github.com/fossar/composition-c4) - Support for building composer packages from a `composer.lock` (using IFD).
* [nix-phps](https://github.com/fossar/nix-phps) - Flake containing old and unmaintained PHP versions (intended for CI use).
* [nix-shell](https://github.com/loophp/nix-shell/) - Nix shells for PHP development.

### PureScript

* [Easy PureScript Nix](https://github.com/justinwoo/easy-purescript-nix) - A project to easily use PureScript and other tools with Nix.
* [purs-nix](https://github.com/purs-nix/purs-nix) - CLI and library combo designed for managing PureScript projects using Nix. It provides a Nix API that can be used within your projects, as well as a command-line interface for managing your development process.

### Python

* [poetry2nix](https://github.com/nix-community/poetry2nix) - Build Python packages directly from [Poetry's](https://python-poetry.org/) `poetry.lock`. No conversion step needed.
* [uv2nix](https://github.com/pyproject-nix/uv2nix) - Convert [`uv` workspaces](https://docs.astral.sh/uv/concepts/projects/workspaces/) into pure Nix derivations.

### Ruby

* [Bundix](https://github.com/nix-community/bundix) - Generates a Nix expression for your Bundler-managed application.
* [ruby-nix](https://github.com/inscapist/ruby-nix) - Generates reproducible ruby/bundler app environment with Nix.

### Rust

* [cargo2nix](https://github.com/cargo2nix/cargo2nix) - Granular caching, development shell, Nix & Rust integration.
* [crane](https://github.com/ipetkov/crane) - A Nix library for building Cargo projects with incremental artifact caching.
* [fenix](https://github.com/nix-community/fenix) - Rust toolchains and Rust analyzer nightly for nix.
* [naersk](https://github.com/nix-community/naersk) - Build Rust packages directly from `Cargo.lock`. No conversion step needed.
* [nix-cargo-integration](https://github.com/90-008/nix-cargo-integration) - A library that allows easy and effortless integration for Cargo projects.
* [nixpkgs-mozilla](https://github.com/mozilla/nixpkgs-mozilla) - Mozilla's overlay with Rust toolchains and Firefox.
* [rust-nix-templater](https://github.com/90-008/rust-nix-templater) - Generates Nix build and development files for Rust projects.
* [rust-overlay](https://github.com/oxalica/rust-overlay) - Pure and reproducible nix overlay of binary distributed Rust toolchains.

### Scala

* [sbt-derivation](https://github.com/zaninime/sbt-derivation) - mkDerivation for sbt, similar to buildGoModule.

### Zig

* [zig2nix](https://github.com/Cloudef/zig2nix) - Flake for packaging, building and running Zig projects.
* [zon2nix](https://github.com/nix-community/zon2nix) - Convert the dependencies in `build.zig.zon` to a Nix expression.

## NixOS Modules

* [base16.nix](https://github.com/SenchoPens/base16.nix) - Flake way to theme programs in [base16](https://github.com/chriskempson/base16) colorschemes, mustache template support included.
* [Home Manager](https://github.com/nix-community/home-manager) - Manage your user configuration just like NixOS.
* [impermanence](https://github.com/nix-community/impermanence) - Lets you choose what files and directories you want to keep between reboots.
* [musnix](https://github.com/musnix/musnix) - Do real-time audio work in NixOS.
* [nix-bitcoin](https://github.com/fort-nix/nix-bitcoin) - Modules and packages for Bitcoin nodes with higher-layer protocols with an emphasis on security.
* [nix-darwin](https://github.com/nix-darwin/nix-darwin) - Manage macOS configuration just like on NixOS.
* [nix-mineral](https://github.com/cynicsketch/nix-mineral) - Conveniently and reasonably harden NixOS.
* [nix-topology](https://github.com/oddlama/nix-topology) - Generate infrastructure and network diagrams directly from your NixOS configuration.
* [NixOS hardware](https://github.com/NixOS/nixos-hardware) - NixOS profiles to optimize settings for different hardware.
* [NixOS-WSL](https://github.com/nix-community/NixOS-WSL) - Modules for running NixOS on the Windows Subsystem for Linux.
* [NixVim](https://github.com/nix-community/nixvim) - A Neovim distribution built with Nix modules and Nixpkgs.
* [Self Host Blocks](https://github.com/ibizaman/selfhostblocks) - Modular server management based on NixOS modules and focused on best practices.
* [Simple Nixos Mailserver](https://gitlab.com/simple-nixos-mailserver/nixos-mailserver) - A complete mailserver, managed with NixOS modules.
* [Stylix](https://github.com/nix-community/stylix) - System-wide colorscheming and typography for NixOS.

## NixOS Configuration Editors

### Desktop apps

* [Nix Software Center](https://github.com/snowfallorg/nix-software-center) - Install and manage Nix packages. Desktop app in Rust and GTK.
* [NixOS Configuration Editor](https://github.com/snowfallorg/nixos-conf-editor) - Graphical editor for NixOS configuration. Desktop app in Rust and GTK.

### Webinterface

* [MyNixOS](https://mynixos.com/) - Graphical editor for Nix flakes. Create and manage configurations and modules for NixOS and Nix home-manager. Rather a Nix generator than a Nix editor, because it does not allow to import Nix files.

## Overlays

* [awesome-nix-hpc](https://github.com/freuk/awesome-nix-hpc) - High Performance Computing package sets.
* [chaotic-nyx](https://github.com/chaotic-cx/nyx) - Daily bumped bleeding edge packages like `mesa_git` & others that aren't yet in Nixpkgs. Created by the makers of [Chaotic-AUR](https://github.com/chaotic-aur/).
* [neovim-nightly-overlay](https://github.com/nix-community/neovim-nightly-overlay) - Daily bumped Neovim nightly package.
* [nixpkgs-firefox-darwin](https://github.com/bandithedoge/nixpkgs-firefox-darwin) - Automatically updated Firefox binary packages for macOS.
* [nixpkgs-wayland](https://github.com/nix-community/nixpkgs-wayland) - Bleeding-edge Wayland packages.
* [NUR](https://github.com/nix-community/NUR/) - Nix User Repositories. The mother of all overlays, allowing access to user repositories and installing packages via attributes.
* [System Manager](https://github.com/numtide/system-manager) - A non-NixOS Linux system configuration tool built on Nix.
* [zig-overlay](https://github.com/mitchellh/zig-overlay) - A Nix flake packaging the Zig compiler. The flake mirrors the binaries built officially by Zig and does not build them from source.

## Distributions

* [nixbsd](https://github.com/nixos-bsd/nixbsd) - A NixOS fork with a FreeBSD kernel.
* [NixNG](https://github.com/nix-community/NixNG) - A GNU/Linux distribution similar to NixOS, defining difference is a focus on containers and lightweightness.
* [SnowflakeOS](https://snowflakeos.org/) - A NixOS-based Linux distribution focused on beginner friendliness and ease of use.

## Community

* [#nix:nixos.org](https://matrix.to/#/#nix:nixos.org)
* [#nixos on Libera.Chat](https://web.libera.chat/?nick=Guest?#nixos)
* [Discord - Nix/Nixos (Unofficial)](https://discord.gg/BMUCQx6)
* [Discourse](https://discourse.nixos.org/) - The best place to get help and discuss Nix-related topics.
* [NixCon](https://nixcon.org/) - The annual community conference for contributors and users of Nix and NixOS.
* [Wiki (Official)](https://wiki.nixos.org)
* [Wiki (Unofficial)](https://nixos.wiki)
