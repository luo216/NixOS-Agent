---
module: services.schleuder
option_count: 6
source: options.html
---

# services.schleuder

## services.schleuder.enable

Whether to enable Schleuder secure remailer. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/schleuder.nix>

## services.schleuder.enablePostfix

Whether to enable automatic postfix integration. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/mail/schleuder.nix>

## services.schleuder.extraSettingsFile

YAML file to merge into the schleuder config at runtime. This can be used for secrets such as API keys. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/mail/schleuder.nix>

## services.schleuder.listDefaults

Default settings for lists (list-defaults.yml). Check the example configuration for possible values. Type: YAML 1.1 value Default: { } Declared by: <nixpkgs/nixos/modules/services/mail/schleuder.nix>

## services.schleuder.lists

List of list addresses that should be handled by Schleuder. Note that this is only handled by the postfix integration, and the setup of the lists, their members and their keys has to be performed separately via schleuder’s API, using a tool such as schleuder-cli. Type: list of string Default: [ ] Example: [ "widget-team@example.com" "security@example.com" ] Declared by: <nixpkgs/nixos/modules/services/mail/schleuder.nix>

## services.schleuder.settings

Settings for schleuder.yml. Check the example configuration for possible values. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/mail/schleuder.nix>
