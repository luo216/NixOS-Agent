# Awesome Nix [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<a href="https://nixos.org">
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/NixOS/nixos-artwork/master/logo/nixos.svg">
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/NixOS/nixos-artwork/master/logo/nixos-white.png">
    <img src="https://raw.githubusercontent.com/NixOS/nixos-artwork/master/logo/nixos.svg" align="right" width="250" alt="NixOS logo">
  </picture>
</a>

A curated list of the best resources in the Nix community.

<br>

[Nix](https://github.com/nixos/nix) is a powerful package manager for Linux and other Unix systems that makes package management reliable and reproducible.

*Please read the [contribution guidelines](CONTRIBUTING.md) before contributing.*

## Contents

* [Resources](#resources)
    * [Learning](#learning)
    * [Discovery](#discovery)
* [Installation Media](#installation-media)
* [Channel History](#channel-history)
* [Deployment Tools](#deployment-tools)
* [Virtualisation](#virtualisation)
* [Command-Line Tools](#command-line-tools)
* [Development](#development)
* [DevOps](#devops)
* [Programming Languages](#programming-languages)
    * [Arduino](#arduino)
    * [Clojure](#clojure)
    * [Crystal](#crystal)
    * [Elm](#elm)
    * [Gleam](#gleam)
    * [Haskell](#haskell)
    * [Haxe](#haxe)
    * [Julia](#julia)
    * [Lean](#lean)
    * [Node.js](#nodejs)
    * [OCaml](#ocaml)
    * [PHP](#php)
    * [PureScript](#purescript)
    * [Python](#python)
    * [Ruby](#ruby)
    * [Rust](#rust)
    * [Scala](#scala)
    * [Zig](#zig)
* [NixOS Modules](#nixos-modules)
* [NixOS Configuration Editors](#nixos-configuration-editors)
* [Overlays](#overlays)
* [Distributions](#distributions)
* [Community](#community)

## Resources

### Learning

* [Building a Rust service with Nix](https://fasterthanli.me/series/building-a-rust-service-with-nix) - An in-depth blog series about creating a Rust application with Nix.
* [Explainix](https://zaynetro.com/explainix) - Explain Nix syntax visually.
* [How to Learn Nix](https://ianthehenry.com/posts/how-to-learn-nix/) - It's like a Let's Play, but for obscure software documentation.
* [Nix - A One Pager](https://code.tvl.fyi/about/nix/nix-1p) - A one page introduction to the Nix language.
* [nix-book](https://saylesss88.github.io) - A comprehensive guide to NixOS
  hardening and configuration.
* [Nix from First Principles: Flake Edition](https://tonyfinn.com/blog/nix-from-first-principles-flake-edition/) - A modern crash-course to using Nix features, Flakes, and developing with Nix.
* [Nix in 100 Seconds](https://www.youtube.com/watch?v=FJVFXsNzYZQ) - A YouTube video from Fireship presenting Nix in 100 seconds.
* [Nix Notes](https://github.com/noteed/nix-notes) - A collection of short notes about Nix, each contributing to the same virtual machine image.
* [Nix Pills](https://nixos.org/guides/nix-pills/) - The best way to learn, with examples.
* [Nix Shorts](https://github.com/alper/nix-shorts) - A collection of short notes about how to use Nix, updated for Nix Flakes.
* [Nix Starter Config](https://github.com/Misterio77/nix-starter-configs) - A few simple Nix Flake templates for getting started with NixOS + home-manager.
* [nix.dev](https://nix.dev/) - An opinionated guide for developers about getting things done using the Nix ecosystem.
* [NixOS & Flakes Book](https://github.com/ryan4yin/nixos-and-flakes-book) - An unofficial and opinionated NixOS & Flakes book for beginners.
* [NixOS Asia Tutorial Series](https://nixos.asia/en/tutorial) - A series of high-level tutorials on using Nix Flakes, NixOS, home-manager, etc.
* [NixOS in Production](https://leanpub.com/nixos-in-production) - Free (pay-what-you-want) book in pdf format.
* [Official Nix manual](https://nixos.org/manual/nix/stable) - Latest stable version of the official Nix manual, best used as reference guide. Receives updates when available.
* [Official NixOS manual](https://nixos.org/manual/nixos/stable) - Latest stable version of the official NixOS manual, mix of tutorial and reference guide. Receives updates when available.
* [Official Nixpkgs manual](https://nixos.org/manual/nixpkgs/stable) - Latest stable version of the official Nixpkgs reference manual. Receives updates when available.
* [Tour of Nix](https://nixcloud.io/tour/) - An online interactive tutorial on Nix language constructs.
* [Wombat's Book of Nix](https://mhwombat.codeberg.page/nix-book/) - A book-length introduction to Nix and flakes.
* [Zero to Nix](https://zero-to-nix.com/) - A flake-centric guide to Nix and its concepts created by Determinate Systems to quickly onboard beginners.

### Discovery

* [Home Manager Option Search](https://home-manager-options.extranix.com/) - Search through all 2000+ Home Manager options and read how to use them.
<!-- * [Hound](https://search.nix.gsc.io) - Handily search across all or selected Nix-related repositories. -->
* [Nix Package Versions](https://lazamar.co.uk/nix-versions/) - Find all versions of a package that were available in a channel and the revision you can download it from.
* [nix-search-tv](https://github.com/3timeslazy/nix-search-tv) - CLI fuzzy finder for packages and options from Nixpkgs, Home Manager, and more.
* [Noogle](https://noogle.dev/) - Nix API search engine allowing to search functions based on their types and other attributes.
* [NüschtOS Search](https://github.com/NuschtOS/search) - Simple and fast static-page NixOS option search.
* [Searchix](https://searchix.ovh/) - Search Nix packages and options from NixOS, Darwin and Home Manager.

## Installation Media

* [nix-installer-scripts](https://github.com/dnkmmr69420/nix-installer-scripts) - Runs the official installer but does some tweaking as well such as adding fcontext for selinux and installing nix outside of the default profile so you don't accidently uninstall it.
* [nix-installer](https://github.com/DeterminateSystems/nix-installer) - Opinionated alternative to the official Nix install scripts.
* [nixos-anywhere](https://github.com/nix-community/nixos-anywhere) - Install NixOS everywhere via SSH.
* [nixos-generators](https://github.com/nix-community/nixos-generators) -  Take a NixOS config and build multiple different images types including VirtualBox VMs, Azure images, and installation ISOs.
* [nixos-infect](https://github.com/elitak/nixos-infect) - Replace a running non-NixOS Linux host with NixOS.
* [nixos-up](https://github.com/samuela/nixos-up) - Super easy NixOS installer that can be used from the installation ISO.

## Channel History

* [`npc`](https://github.com/samestep/npc) - CLI to view and bisect Nixpkgs channel history.
* [Nix Infra Status](https://status.nixos.org) - Get the age and current Git commit of each Nix channel.
* [Nix Review Tools Reports](https://malob.github.io/nix-review-tools-reports/) - Reports showing problematic dependencies (dependencies causing the most failed builds) for major Hydra jobsets.
<!-- * [Nixpkgs Bot](https://git.maralorn.de/nixos-config/tree/packages/nixpkgs-bot) - A Matrix bot to track when a Nixpkgs pull request reaches a relevant branch. -->
* [nixpkgs PR tracker](https://nixpk.gs/pr-tracker.html) - A tracker for whether a PR has made it into a channel yet.

## Deployment Tools

* [bento](https://github.com/rapenne-s/bento/) - A KISS deployment tool to keep your NixOS fleet (servers & workstations) up to date.
* [Clan](https://clan.lol) - A peer-to-peer deployment tool with inbuilt support for secrets and a module system to manage distributed networks.
* [Colmena](https://github.com/zhaofengli/colmena) - A simple, stateless NixOS deployment tool modeled after NixOps and morph.
* [comin](https://github.com/nlewo/comin) - A deployment tool to continuously pull from Git repositories.
* [deploy-rs](https://github.com/serokell/deploy-rs) - A simple multi-profile Nix-flake deploy tool.
* [krops](https://cgit.krebsco.de/krops/about/) - A lightweight toolkit to deploy NixOS systems, remotely or locally.
* [KubeNix](https://github.com/hall/kubenix) - A Kubernetes resource builder using Nix.
* [KuberNix](https://github.com/saschagrunert/kubernix) - Single-dependency Kubernetes clusters via Nix packages.
* [morph](https://github.com/DBCDK/morph) - A tool for managing existing NixOS hosts.
* [Nixery](https://github.com/tazjin/nixery) - A Docker-compatible container registry which builds images ad-hoc via Nix.
* [Nixinate](https://github.com/MatthewCroughan/nixinate) - A Nix flake library to provide app outputs for managing existing NixOS hosts over SSH.
* [Nixlets](https://gitlab.com/TECHNOFAB/nixlets) - Like Helm but using only Nix, uses Kubenix under the hood.
* [NixOps](https://github.com/NixOS/nixops) - The official Nix deployment tool, compatible with AWS, Hetzner, and more.
* [pushnix](https://github.com/arnarg/pushnix) - Simple cli utility that pushes NixOS configuration and triggers a rebuild using ssh.
* [terraform-nixos](https://github.com/nix-community/terraform-nixos) - A set of Terraform modules designed to deploy NixOS.
* [terranix](https://terranix.org) - Use Nix and the NixOS module system to write your Terraform code.

## Virtualisation

* [extra-container](https://github.com/erikarvstedt/extra-container) - Run declarative NixOS containers from the command line.
* [microvm](https://github.com/microvm-nix/microvm.nix) - NixOS-based MicroVMs.
* [nixos-shell](https://github.com/Mic92/nixos-shell) - Simple headless VM configuration using Nix (similar to Vagrant).

## Command-Line Tools

* [alejandra](https://github.com/kamadorueda/alejandra) - An opinionated Nix code formatter optimized for speed and consistency.
* [angrr](https://github.com/linyinfeng/angrr) - Auto Nix GC Roots Retention. This tool simply deletes auto GC roots based on the modified time of their symbolic link target.
* [comma](https://github.com/nix-community/comma) - Quickly run any binary; wraps together `nix run` and `nix-index`.
* [deadnix](https://github.com/astro/deadnix) - Scan Nix files for dead code.
* [devenv](https://github.com/cachix/devenv) - A Nix-based tool for creating developer shell environments quickly and reproducibly.
* [dix](https://github.com/faukah/dix) - Diff Nix; a super-fast tool to diff Nix related things.
* [manix](https://github.com/mlvzk/manix) - Find configuration options and function documentation for Nixpkgs, NixOS, and Home Manager.
* [nh](https://github.com/nix-community/nh) - Better output for `nix`, `nixos-rebuild`, `home-manager` and nix-darwin CLI leveraging `dix` and `nix-output-monitor`.
* [nix-alien](https://github.com/thiagokokada/nix-alien) - Run unpatched binaries on Nix/NixOS easily.
* [nix-diff](https://github.com/Gabriella439/nix-diff) - A tool to explain why two Nix derivations differ.
* [nix-du](https://github.com/symphorien/nix-du) - Visualise which gc-roots to delete to free some space in your Nix store.
* [nix-index](https://github.com/nix-community/nix-index) - Quickly locate Nix packages with specific files.
* [nix-init](https://github.com/nix-community/nix-init) - Generate Nix packages from URLs with hash prefetching, dependency inference, license detection, and more.
* [nix-melt](https://github.com/nix-community/nix-melt) - A ranger-like flake.lock viewer.
* [nix-output-monitor](https://github.com/maralorn/nix-output-monitor) - A tool to produce useful graphs and statistics when building derivations.
* [nix-prefetch](https://github.com/msteen/nix-prefetch) - A universal tool for updating source checksums.
* [nix-tree](https://github.com/utdemir/nix-tree) - Interactively browse the dependency graph of Nix derivations.
* [nixfmt](https://github.com/NixOS/nixfmt) - A formatter for Nix code, intended to easily apply a uniform style.
* [nixos-cli](https://github.com/nix-community/nixos-cli) - Configurable all-in-one CLI for common NixOS tools with an emphasis on improved user experience.
* [nixpkgs-hammering](https://github.com/jtojnar/nixpkgs-hammering) - An opinionated linter for Nixpkgs package expressions.
* [nurl](https://github.com/nix-community/nurl) - Generate Nix fetcher calls from repository URLs.
* [nvd](https://git.sr.ht/~khumba/nvd) - Diff package versions between two store paths; it's especially useful for comparing NixOS generations on rebuild.
* [optnix](https://git.sr.ht/~watersucks/optnix) - A terminal-based options searcher for Nix module systems.
* [statix](https://github.com/oppiliappan/statix) - A linter/fixer to check for and fix antipatterns in Nix code.

## Development

* [Arion](https://github.com/hercules-ci/arion) - Run `docker-compose` with help from Nix/NixOS.
* [attic](https://github.com/zhaofengli/attic) - Multi-tenant Nix Binary Cache.
* [cached-nix-shell](https://github.com/xzfc/cached-nix-shell) - A `nix-shell` replacement that uses caching to open subsequent shells quickly.
* [Cachix](https://www.cachix.org) - Hosted binary cache service; free for open-source projects.
* [compose2nix](https://github.com/aksiksi/compose2nix) - Generate a NixOS config from a Docker Compose project.
* [Conflake](https://ratson.github.io/conflake/) - A batteries included, autoload files, convention-based configuration framework for `flake.nix`.
* [Devbox](https://github.com/jetify-com/devbox) - Instant, portable, and predictable development environments.
* [devshell](https://github.com/numtide/devshell) - `mkShell` with extra bits and a toml config option to be able to onboard non-nix users.
* [dream2nix](https://github.com/nix-community/dream2nix) - A framework for automatically converting packages from other build systems to Nix.
* [flake-utils-plus](https://github.com/gytis-ivaskevicius/flake-utils-plus) - A lightweight Nix library flake for painless NixOS flake configuration.
* [flake-utils](https://github.com/numtide/flake-utils) - Pure Nix flake utility functions to help with writing flakes.
* [flake.parts](https://github.com/hercules-ci/flake-parts) - Minimal Nix modules framework for Flakes: split your flakes into modules and get things done with community modules.
* [flakelight](https://github.com/nix-community/flakelight) - A modular flake framework aiming to minimize boilerplate.
* [flox](https://github.com/flox/flox) - Manage and share development environments, package projects, and publish artifacts anywhere.
* [gitignore.nix](https://github.com/hercules-ci/gitignore.nix) - The most feature-complete and easy-to-use `.gitignore` integration.
* [haumea](https://github.com/nix-community/haumea) - Filesystem-based module system for the Nix language similar to traditional programming languages, with support for file hierarchy and visibility.
* [lorri](https://github.com/nix-community/lorri/) - A much better `nix-shell` for development that augments direnv.
* [make-shell](https://github.com/nicknovitski/make-shell) - `mkShell` meets modules, a modular almost-drop-in replacement for `pkgs.mkShell` function.
* [MCP-NixOS](https://github.com/utensils/mcp-nixos) - An MCP server that provides AI assistants with accurate information about NixOS packages, options, Home Manager, and nix-darwin configurations.
* [namaka](https://github.com/nix-community/namaka) - Snapshot testing for Nix based on haumea.
* [nil](https://github.com/oxalica/nil) - NIx Language server, an incremental analysis assistent for writing in Nix.
* [niv](https://github.com/nmattia/niv/) - Easy dependency management for Nix projects with package pinning.
* [nix2container](https://github.com/nlewo/nix2container) - An efficient container building workflow with Nix.
* [nix-direnv](https://github.com/nix-community/nix-direnv) - A fast loader and flake-compliant configuration for the direnv environment auto-loader.
* [nix-health](https://github.com/juspay/nix-health) - A program to check the health of your Nix install. Furthermore, individual projects can configure their own health checks in their `flake.nix`.
* [nix-oci](https://github.com/Dauliac/nix-oci) - A flake-parts module for building minimal, reproducible OCI containers using nix2container.
* [nix-update](https://github.com/Mic92/nix-update) - Update versions/source hashes of nix packages.
* [nixd](https://github.com/nix-community/nixd) - Nix language server, based on Nix libraries.
* [nixpkgs-review](https://github.com/Mic92/nixpkgs-review) - The best tool to verify that a pull-request in Nixpkgs is building properly.
* [Nixtest](https://gitlab.com/TECHNOFAB/nixtest) - Testing framework for Nix, with snapshot and unit test support, JUnit generation etc.
* [npins](https://github.com/andir/npins) - A simple tool for handling different types of dependencies in a Nix project. It is inspired by and comparable to Niv.
* [pog](https://github.com/jpetrucciani/pog) - A new, powerful way to do bash scripts. Pog is a powerful Nix library that transforms the way developers create command-line interfaces (CLIs).
* [pre-commit-hooks.nix](https://github.com/cachix/git-hooks.nix) - Run linters/formatters at commit time and on your CI.
* [rnix-lsp](https://github.com/nix-community/rnix-lsp) - A syntax-checking language server for Nix.
* [robotnix](https://github.com/nix-community/robotnix) - A declarative and reproducible build system for Android (AOSP) images.
* [services-flake](https://github.com/juspay/services-flake) - A NixOS-like service configuration framework for Nix flakes.
* [Snowfall Lib](https://github.com/snowfallorg/lib) - A library that makes it easy to manage your Nix flake by imposing an opinionated file structure.
* [templates](https://github.com/nix-community/templates) - Project templates for many languages using Nix flakes.
* [treefmt-nix](https://github.com/numtide/treefmt-nix) - A formatter that allows formatting all your project files with a single command, all via a single `.nix` file.

## DevOps

* [Makes](https://github.com/fluidattacks/makes) - A Nix-based CI/CD pipeline framework for building, testing, and releasing projects in any language, from anywhere.
* [Nix GitLab CI](https://gitlab.com/TECHNOFAB/nix-gitlab-ci) - Define GitLab CI pipelines in pure Nix with full access to all Nix packages (incl. caching).
* [nixidy](https://github.com/arnarg/nixidy) - Kubernetes GitOps with Nix and Argo CD.
* [Standard](https://github.com/divnix/std) - An opinionated Nix Flakes framework to keep Nix code in large projects organized, accompanied by a friendly CLI/TUI optized for DevOps scenarios.
