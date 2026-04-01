---
module: services.renovate
option_count: 8
source: options.html
---

# services.renovate

## services.renovate.enable

Whether to enable renovate. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/renovate.nix>

## services.renovate.package

The renovate package to use. Type: package Default: pkgs.renovate Declared by: <nixpkgs/nixos/modules/services/misc/renovate.nix>

## services.renovate.credentials

Allows configuring environment variable credentials for renovate, read from files. This should always be used for passing confidential data to renovate. Type: attribute set of absolute path Default: { } Example: { RENOVATE_TOKEN = "/etc/renovate/token"; } Declared by: <nixpkgs/nixos/modules/services/misc/renovate.nix>

## services.renovate.environment

Extra environment variables to export to the Renovate process from the systemd unit configuration. See https://docs.renovatebot.com/config-overview for available environment variables. Type: attribute set of (null or string or absolute path or package) Default: { } Example: { LOG_LEVEL = "debug"; } Declared by: <nixpkgs/nixos/modules/services/misc/renovate.nix>

## services.renovate.runtimePackages

Packages available to renovate. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/renovate.nix>

## services.renovate.schedule

How often to run renovate. See systemd.time(7) for the format. Type: null or string Default: null Example: "*:0/10" Declared by: <nixpkgs/nixos/modules/services/misc/renovate.nix>

## services.renovate.settings

Renovate’s global configuration. If you want to pass secrets to renovate, please use services.renovate.credentials for that. See https://docs.renovatebot.com/config-overview for available settings. Type: JSON value Default: { } Example: { endpoint = "https://git.example.com"; gitAuthor = "Renovate <renovate@example.com>"; platform = "gitea"; } Declared by: <nixpkgs/nixos/modules/services/misc/renovate.nix>

## services.renovate.validateSettings

Whether to run renovate’s config validator on the built configuration. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/renovate.nix>
