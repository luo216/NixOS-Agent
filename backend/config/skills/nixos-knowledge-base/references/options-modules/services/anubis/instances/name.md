---
module: services.anubis.instances.<name>
option_count: 6
source: options.html
---

# services.anubis.instances.<name>

## services.anubis.instances.<name>.enable

Whether to enable this instance of Anubis. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.instances.<name>.botPolicy

Anubis policy configuration in Nix syntax. Set to null to use the baked-in policy which should be sufficient for most use-cases. This option has no effect if settings.POLICY_FNAME is set to a different value, which is useful for importing an existing configuration. See the documentation for details. Type: null or JSON value Default: config.services.anubis.defaultOptions.botPolicy Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.instances.<name>.extraFlags

A list of extra flags to be passed to Anubis. Type: list of string Default: config.services.anubis.defaultOptions.extraFlags Example: [ "-metrics-bind \"\"" ] Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.instances.<name>.group

The group under which Anubis is run. This module utilizes systemd’s DynamicUser feature. See the corresponding section in systemd.exec(5) for more details. Type: string Default: config.services.anubis.defaultOptions.group Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.instances.<name>.settings

Freeform configuration via environment variables for Anubis. See the documentation for a complete list of available environment variables. Type: open submodule of attribute set of (null or string or signed integer or boolean) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.instances.<name>.user

The user under which Anubis is run. This module utilizes systemd’s DynamicUser feature. See the corresponding section in systemd.exec(5) for more details. Type: string Default: config.services.anubis.defaultOptions.user Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>
