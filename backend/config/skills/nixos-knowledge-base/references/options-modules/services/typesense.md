---
module: services.typesense
option_count: 4
source: options.html
---

# services.typesense

## services.typesense.enable

Whether to enable typesense. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/search/typesense.nix>

## services.typesense.package

The typesense package to use. Type: package Default: pkgs.typesense Declared by: <nixpkgs/nixos/modules/services/search/typesense.nix>

## services.typesense.apiKeyFile

Sets the admin api key for typesense. Always use this option instead of settings.server.api-key to prevent the key from being written to the world-readable nix store. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/search/typesense.nix>

## services.typesense.settings

Typesense configuration. Refer to the documentation for supported values. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string) or a non-empty list of them) Default: { } Declared by: <nixpkgs/nixos/modules/services/search/typesense.nix>
