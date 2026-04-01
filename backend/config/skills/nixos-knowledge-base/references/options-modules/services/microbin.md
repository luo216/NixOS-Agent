---
module: services.microbin
option_count: 5
source: options.html
---

# services.microbin

## services.microbin.enable

Whether to enable MicroBin is a super tiny, feature rich, configurable paste bin web application. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/microbin.nix>

## services.microbin.package

The microbin package to use. Type: package Default: pkgs.microbin Declared by: <nixpkgs/nixos/modules/services/web-apps/microbin.nix>

## services.microbin.dataDir

Default data folder for MicroBin. Type: string Default: "/var/lib/microbin" Declared by: <nixpkgs/nixos/modules/services/web-apps/microbin.nix>

## services.microbin.passwordFile

Path to file containing environment variables. Useful for passing down secrets. Variables that can be considered secrets are: MICROBIN_BASIC_AUTH_USERNAME MICROBIN_BASIC_AUTH_PASSWORD MICROBIN_ADMIN_USERNAME MICROBIN_ADMIN_PASSWORD MICROBIN_UPLOADER_PASSWORD Type: null or absolute path Default: null Example: "/run/secrets/microbin.env" Declared by: <nixpkgs/nixos/modules/services/web-apps/microbin.nix>

## services.microbin.settings

Additional configuration for MicroBin, see https://microbin.eu/docs/installation-and-configuration/configuration/ for supported values. For secrets use passwordFile option instead. Type: open submodule of attribute set of (boolean or signed integer or string) Default: { } Example: { MICROBIN_HIDE_LOGO = false; MICROBIN_PORT = 8080; } Declared by: <nixpkgs/nixos/modules/services/web-apps/microbin.nix>
