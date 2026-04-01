---
module: services.postfix-tlspol
option_count: 4
source: options.html
---

# services.postfix-tlspol

## services.postfix-tlspol.enable

Whether to enable postfix-tlspol. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/postfix-tlspol.nix>

## services.postfix-tlspol.package

The postfix-tlspol package to use. Type: package Default: pkgs.postfix-tlspol Declared by: <nixpkgs/nixos/modules/services/mail/postfix-tlspol.nix>

## services.postfix-tlspol.configurePostfix

Whether to configure the required settings to use postfix-tlspol in the local Postfix instance. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/mail/postfix-tlspol.nix>

## services.postfix-tlspol.settings

The postfix-tlspol configuration file as a Nix attribute set. See the reference documentation for possible options. https://github.com/Zuplu/postfix-tlspol/blob/main/configs/config.default.yaml Type: open submodule of (YAML 1.2 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/mail/postfix-tlspol.nix>
