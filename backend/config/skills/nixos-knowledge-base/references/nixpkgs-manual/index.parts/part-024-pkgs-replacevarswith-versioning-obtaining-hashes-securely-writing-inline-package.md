---
title: "Nixpkgs Reference Manual"
source: index.html
---
#### pkgs.replaceVarsWith

pkgs.replaceVarsWith works the same way as pkgs.replaceVars, but additionally allows more options. Example 383. Usage of pkgs.replaceVarsWith With the example file say-goodbye.sh, consider: { replaceVarsWith }: replaceVarsWith { src = ./say-goodbye.sh; replacements = { inherit bash hello; greeting = "goodbye"; unchanged = null; }; name = "say-goodbye"; dir = "bin"; isExecutable = true; meta.mainProgram = "say-goodbye"; } This will make the resulting file executable, put it in bin/say-goodbye and set meta attributes respectively.

## Modules

The Nixpkgs repository provides Module System modules for various purposes. The following sections are organized by module class. Table of Contents Generic

### Generic

Table of Contents meta-maintainers.nix Generic modules can be imported to extend configurations of any class.

### meta-maintainers.nix

The options below become available when using imports = [ (nixpkgs + "/modules/generic/meta-maintainers.nix") ];. meta.maintainers List of maintainers of each module. This option should be defined at most once per module. The option value is not a list of maintainers, but an attribute set that maps module file names to lists of maintainers. Type: list of (maintainer) Default: [ ] Example: [ lib.maintainers.alice lib.maintainers.bob ] Declared by: nixpkgs/modules/generic/meta-maintainers.nix

## Development of Nixpkgs

This section shows you how Nixpkgs is developed and how you can interact with the contributors and the latest updates. If you are interested in contributing yourself, see CONTRIBUTING.md. Table of Contents Opening issues

### Opening issues

Make sure you have a GitHub account Make sure there is no open issue on the topic Submit a new issue by choosing the kind of topic and fill out the template

## Contributing to Nixpkgs

Table of Contents Quick Start to Adding a Package Coding conventions Submitting changes Vulnerability Roundup Reviewing contributions Contributing to Nixpkgs documentation

### Quick Start to Adding a Package

This section has been moved to pkgs/README.md.

### Coding conventions

Table of Contents Syntax Package naming File naming and organisation Fetching Sources Obtaining source hash Patches Package tests This section has been moved to CONTRIBUTING.md.

### Syntax

This section has been moved to CONTRIBUTING.md.

### Package naming

This section has been moved to pkgs/README.md.

### File naming and organisation

Versioning This section has been moved to CONTRIBUTING.md.

#### Versioning

This section has been moved to pkgs/README.md.

### Fetching Sources

This section has been moved to pkgs/README.md.

### Obtaining source hash

Obtaining hashes securely This section has been moved to pkgs/README.md.

#### Obtaining hashes securely

This section has been moved to pkgs/README.md.

### Patches

This section has been moved to pkgs/README.md.

### Package tests

Writing inline package tests Writing larger package tests Running package tests Examples of package tests Linking NixOS module tests to a package Import From Derivation This section has been moved to pkgs/README.md.

#### Writing inline package tests

This section has been moved to pkgs/README.md.

#### Writing larger package tests

This section has been moved to pkgs/README.md.

#### Running package tests

This section has been moved to pkgs/README.md.

#### Examples of package tests

This section has been moved to pkgs/README.md.

#### Linking NixOS module tests to a package

This section has been moved to pkgs/README.md.

#### Import From Derivation

This section has been moved to pkgs/README.md.

### Submitting changes

Table of Contents Submitting changes Submitting security fixes Deprecating/removing packages Pull Request Template Hotfixing pull requests Commit policy This section has been moved to CONTRIBUTING.md.

### Submitting changes

This section has been moved to CONTRIBUTING.md.

### Submitting security fixes

This section has been moved to pkgs/README.md.

### Deprecating/removing packages

Steps to remove a package from Nixpkgs This section has been moved to pkgs/README.md.

#### Steps to remove a package from Nixpkgs

This section has been moved to pkgs/README.md.

### Pull Request Template

Tested using sandboxing Built on platform(s) Tested via one or more NixOS test(s) if existing and applicable for the change (look inside nixos/tests) Tested compilation of all pkgs that depend on this change using nixpkgs-review Tested execution of all binary files (usually in ./result/bin/) Meets Nixpkgs contribution standards This section has been moved to CONTRIBUTING.md.

#### Tested using sandboxing

This section has been moved to CONTRIBUTING.md.

#### Built on platform(s)

This section has been moved to CONTRIBUTING.md.

#### Tested via one or more NixOS test(s) if existing and applicable for the change (look inside nixos/tests)

This section has been moved to CONTRIBUTING.md.

#### Tested compilation of all pkgs that depend on this change using nixpkgs-review

This section has been moved to CONTRIBUTING.md.

#### Tested execution of all binary files (usually in ./result/bin/)

This section has been moved to CONTRIBUTING.md.

#### Meets Nixpkgs contribution standards

This section has been moved to CONTRIBUTING.md.

### Hotfixing pull requests

This section has been moved to CONTRIBUTING.md.

### Commit policy

Branches This section has been moved to CONTRIBUTING.md.

#### Branches

This section has been moved to CONTRIBUTING.md.

##### Master branch

This section has been moved to CONTRIBUTING.md.

##### Staging branch

This section has been moved to CONTRIBUTING.md.

##### Staging-next branch

This section has been moved to CONTRIBUTING.md.

##### Stable release branches

This section has been moved to CONTRIBUTING.md.

##### Automatically backporting a Pull Request

This section has been moved to CONTRIBUTING.md.

##### Manually backporting changes

This section has been moved to CONTRIBUTING.md.

##### Acceptable backport criteria

This section has been moved to CONTRIBUTING.md.

### Vulnerability Roundup

Table of Contents Issues Triaging and Fixing This section has been moved to pkgs/README.md.

### Issues

This section has been moved to pkgs/README.md.

### Triaging and Fixing

This section has been moved to pkgs/README.md.

### Reviewing contributions

Table of Contents Package updates New packages Module updates New modules Individual maintainer list Maintainer teams Other submissions Merging pull requests This section has been moved to CONTRIBUTING.md.

### Package updates

This section has been moved to pkgs/README.md.

### New packages

This section has been moved to pkgs/README.md.

### Module updates

This section has been moved to nixos/README.md.

### New modules

This section has been moved to nixos/README.md.

### Individual maintainer list

This section has been moved to maintainers/README.md.

### Maintainer teams

This section has been moved to maintainers/README.md.

### Other submissions

This section has been moved to CONTRIBUTING.md.

### Merging pull requests

This section has been moved to CONTRIBUTING.md.

### Contributing to Nixpkgs documentation

Table of Contents devmode Syntax This section has been moved to doc/README.md.

### devmode

This section has been moved to doc/README.md.

### Syntax

This section has been moved to doc/README.md.

## Interoperability Standards

Table of Contents CycloneDX

### CycloneDX

Table of Contents nix Namespace Property Taxonomy OWASP CycloneDX is a Software Bill of Materials (SBOM) standard. The standards described here are for including Nix specific information within SBOMs in a way that is interoperable with external SBOM tooling.

### nix Namespace Property Taxonomy

nix:narinfo nix:fod The following tables describe namespaces for properties that can be attached to components within SBOMs. Component properties are lists of name-value-pairs where the values must be strings. Properties with the same name may appear more than once. Names and values are case-sensitive. PropertyDescription nix:store_pathA Nix store path for the given component. This property should be contextualized by additional properties that describe the production of the store path, such as those from the nix:narinfo: and nix:fod namespaces. NamespaceDescription nix:narinfoNamespace for properties that are specific to how a component is stored as a Nix archive (NAR) in a binary cache. nix:fodNamespace for properties that describe a fixed-output derivation.

#### nix:narinfo

Narinfo properties describe component archives that may be available from binary caches. The nix:narinfo properties should be accompanied by a nix:store_path property within the same property list. PropertyDescription nix:narinfo:store_pathStore path for the given store component. nix:narinfo:urlURL path component. nix:narinfo:nar_hashHash of the file system object part of the component when serialized as a Nix Archive. nix:narinfo:nar_sizeSize of the component when serialized as a Nix Archive. nix:narinfo:compressionThe compression format that component archive is in. nix:narinfo:file_hashA digest for the compressed component archive itself, as opposed to the data contained within. nix:narinfo:file_sizeThe size of the compressed component archive itself. nix:narinfo:deriverThe path to the derivation from which this component is produced. nix:narinfo:systemThe hardware and software platform on which this component is produced. nix:narinfo:sigSignatures claiming that this component is what it claims to be. nix:narinfo:caContent address of this store object’s file system object, used to compute its store path. nix:narinfo:referencesA whitespace separated array of store paths that this component references.

#### nix:fod

FOD properties describe a fixed-output derivation. The nix:fod:method property is required and must be accompanied by a nix:store_path property within the same property list. All other properties in this namespace are method-specific. To reproduce the build of a component the nix:fod:method value is resolved to an appropriate function within Nixpkgs whose arguments intersect with the given properties. When generating nix:fod properties the method selected should be a stable function with a minimal number of arguments. For example, the fetchFromGitHub is commonly used within Nixpkgs but should be reduced to a call to the function by which it is implemented, fetchzip. PropertyDescription nix:fod:methodNixpkgs function that produces this FOD. Required. Examples: "fetchzip", "fetchgit" nix:fod:nameDerivation name, present when method is "fetchzip" nix:fod:refGit ref, present when method is "fetchgit" nix:fod:revGit rev, present when method is "fetchgit" nix:fod:sha256FOD hash nix:fod:urlURL to fetch nix:fod properties may be extracted and evaluated to a derivation using code similar to the following, assuming a fictitious function filterPropertiesToAttrs: { pkgs, filterPropertiesToAttrs, properties, }: let fodProps = filterPropertiesToAttrs "nix:fod:" properties; methods = { fetchzip = { name, url, sha256, ... }: pkgs.fetchzip { inherit name url sha256; }; }; in methods.${fodProps.method} fodProps Next Appendix A. Release Notes
