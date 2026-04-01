---
module: boot.bootspec
option_count: 3
source: options.html
---

# boot.bootspec

## boot.bootspec.enableValidation

Whether to enable the validation of bootspec documents for each build. This will introduce Go in the build-time closure as we are relying on Cuelang for schema validation. Enable this option if you want to ascertain that your documents are correct . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/activation/bootspec.nix>

## boot.bootspec.package

The bootspec package to use. Type: package Default: pkgs.bootspec Declared by: <nixpkgs/nixos/modules/system/activation/bootspec.nix>

## boot.bootspec.extensions

User-defined data that extends the bootspec document. To reduce incompatibility and prevent names from clashing between applications, it is highly recommended to use a unique namespace for your extensions. Type: attribute set of anything Default: { } Declared by: <nixpkgs/nixos/modules/system/activation/bootspec.nix>
