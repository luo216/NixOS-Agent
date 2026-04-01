---
module: services.kavita
option_count: 6
source: options.html
---

# services.kavita

## services.kavita.enable

Whether to enable Kavita reading server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/kavita.nix>

## services.kavita.package

The kavita package to use. Type: package Default: pkgs.kavita Declared by: <nixpkgs/nixos/modules/services/web-apps/kavita.nix>

## services.kavita.dataDir

The directory where Kavita stores its state. Type: string Default: "/var/lib/kavita" Declared by: <nixpkgs/nixos/modules/services/web-apps/kavita.nix>

## services.kavita.settings

Kavita configuration options, as configured in appsettings.json. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/kavita.nix>

## services.kavita.tokenKeyFile

A file containing the TokenKey, a secret with at 512+ bits. It can be generated with head -c 64 /dev/urandom | base64 --wrap=0. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-apps/kavita.nix>

## services.kavita.user

User account under which Kavita runs. Type: string Default: "kavita" Declared by: <nixpkgs/nixos/modules/services/web-apps/kavita.nix>
