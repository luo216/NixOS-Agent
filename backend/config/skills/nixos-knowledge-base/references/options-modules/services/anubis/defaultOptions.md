---
module: services.anubis.defaultOptions
option_count: 6
source: options.html
---

# services.anubis.defaultOptions

## services.anubis.defaultOptions.enable

Whether to enable this instance of Anubis. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.defaultOptions.botPolicy

Anubis policy configuration in Nix syntax. Set to null to use the baked-in policy which should be sufficient for most use-cases. This option has no effect if settings.POLICY_FNAME is set to a different value, which is useful for importing an existing configuration. See the documentation for details. Type: null or JSON value Default: null Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.defaultOptions.extraFlags

A list of extra flags to be passed to Anubis. Type: list of string Default: [ ] Example: [ "-metrics-bind \"\"" ] Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.defaultOptions.group

The group under which Anubis is run. This module utilizes systemd’s DynamicUser feature. See the corresponding section in systemd.exec(5) for more details. Type: string Default: "anubis" Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.defaultOptions.settings

Freeform configuration via environment variables for Anubis. See the documentation for a complete list of available environment variables. Type: open submodule of attribute set of (null or string or signed integer or boolean) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.defaultOptions.user

The user under which Anubis is run. This module utilizes systemd’s DynamicUser feature. See the corresponding section in systemd.exec(5) for more details. Type: string Default: "anubis" Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>
