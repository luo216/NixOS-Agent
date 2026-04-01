---
module: services.artalk
option_count: 8
source: options.html
---

# services.artalk

## services.artalk.enable

Whether to enable artalk, a comment system. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/artalk.nix>

## services.artalk.package

The artalk package to use. Type: package Default: pkgs.artalk Declared by: <nixpkgs/nixos/modules/services/web-apps/artalk.nix>

## services.artalk.allowModify

allow Artalk store the settings to config file persistently Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/artalk.nix>

## services.artalk.configFile

Artalk config file path. If it is not exist, Artalk will generate one. Type: string Default: "/etc/artalk/config.yml" Declared by: <nixpkgs/nixos/modules/services/web-apps/artalk.nix>

## services.artalk.group

Artalk group name. Type: string Default: "artalk" Declared by: <nixpkgs/nixos/modules/services/web-apps/artalk.nix>

## services.artalk.settings

The artalk configuration. If you set allowModify to true, Artalk will be able to store the settings in the config file persistently. This section’s content will update in the config file after the service restarts. Options containing secret data should be set to an attribute set containing the attribute _secret - a string pointing to a file containing the value the option should be set to. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/artalk.nix>

## services.artalk.user

Artalk user name. Type: string Default: "artalk" Declared by: <nixpkgs/nixos/modules/services/web-apps/artalk.nix>

## services.artalk.workdir

Artalk working directory Type: string Default: "/var/lib/artalk" Declared by: <nixpkgs/nixos/modules/services/web-apps/artalk.nix>
