---
title: "Modules"
source: index.html
---

# Modules

The Nixpkgs repository provides Module System modules for various purposes. The following sections are organized by module class. Table of Contents Generic

### Generic

Table of Contents meta-maintainers.nix Generic modules can be imported to extend configurations of any class.

### meta-maintainers.nix

The options below become available when using imports = [ (nixpkgs + "/modules/generic/meta-maintainers.nix") ];. meta.maintainers List of maintainers of each module. This option should be defined at most once per module. The option value is not a list of maintainers, but an attribute set that maps module file names to lists of maintainers. Type: list of (maintainer) Default: [ ] Example: [ lib.maintainers.alice lib.maintainers.bob ] Declared by: nixpkgs/modules/generic/meta-maintainers.nix
