---
module: services.pretalx
option_count: 8
source: options.html
---

# services.pretalx

## services.pretalx.enable

Whether to enable pretalx. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>

## services.pretalx.package

The pretalx package to use. Type: package Default: pkgs.pretalx Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>

## services.pretalx.environmentFiles

Environment files that allow passing secret configuration values. Each line must follow the PRETALX_SECTION_KEY=value pattern. Type: list of absolute path Default: [ ] Example: [ "/run/secrets/pretalx/env" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>

## services.pretalx.finalPackage

The effective pretalx package used. This is the base package with the selected plugins applied. Type: package (read only) Default: '' config.services.package.override { inherit (config.services.pretalx) plugins; } '' Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>

## services.pretalx.group

Group under which pretalx should run. Type: string Default: "pretalx" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>

## services.pretalx.plugins

Pretalx plugins to install into the Python environment. Type: list of package Default: [ ] Example: with config.services.pretalx.package.plugins; [ pages youtube ]; Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>

## services.pretalx.settings

pretalx configuration as a Nix attribute set. All settings can also be passed from the environment. See https://docs.pretalx.org/administrator/configure.html for possible options. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>

## services.pretalx.user

User under which pretalx should run. Type: string Default: "pretalx" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>
