---
module: meta
option_count: 1
source: options.html
---

# meta

## meta.maintainers

List of maintainers of each module. This option should be defined at most once per module. The option value is not a list of maintainers, but an attribute set that maps module file names to lists of maintainers. Type: list of (maintainer) Default: [ ] Example: [ lib.maintainers.alice lib.maintainers.bob ] Declared by: <nixpkgs/modules/generic/meta-maintainers.nix>
