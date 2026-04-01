---
module: services.pretix
option_count: 7
source: options.html
---

# services.pretix

## services.pretix.enable

Whether to enable Pretix, a ticket shop application for conferences, festivals, concerts, etc. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.package

The pretix package to use. Type: package Default: pkgs.pretix Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.environmentFile

Environment file to pass secret configuration values. Each line must follow the PRETIX_SECTION_KEY=value pattern. Type: null or absolute path Default: null Example: "/run/keys/pretix-secrets.env" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.group

Group under which pretix should run. Type: string Default: "pretix" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.plugins

Pretix plugins to install into the Python environment. Type: list of package Default: [ ] Example: with config.services.pretix.package.plugins; [ passbook pages ]; Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.settings

pretix configuration as a Nix attribute set. All settings can also be passed from the environment. See https://docs.pretix.eu/en/latest/admin/config.html for possible options. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.user

User under which pretix should run. Type: string Default: "pretix" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>
