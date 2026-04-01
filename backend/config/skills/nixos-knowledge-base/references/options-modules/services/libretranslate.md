---
module: services.libretranslate
option_count: 14
source: options.html
---

# services.libretranslate

## services.libretranslate.enable

Whether to enable LibreTranslate service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/libretranslate.nix>

## services.libretranslate.enableApiKeys

Whether to enable the API keys database. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/libretranslate.nix>

## services.libretranslate.package

The libretranslate package to use. Type: package Default: pkgs.libretranslate Declared by: <nixpkgs/nixos/modules/services/web-apps/libretranslate.nix>

## services.libretranslate.configureNginx

Configure nginx as a reverse proxy for LibreTranslate. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/libretranslate.nix>

## services.libretranslate.dataDir

The data directory. Type: absolute path Default: "/var/lib/libretranslate" Example: "/srv/data/libretranslate" Declared by: <nixpkgs/nixos/modules/services/web-apps/libretranslate.nix>

## services.libretranslate.disableWebUI

Whether to disable the Web UI. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/libretranslate.nix>

## services.libretranslate.domain

The domain serving your LibreTranslate instance. Required for configure nginx as a reverse proxy. Type: string Default: "" Example: "libretranslate.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/libretranslate.nix>

## services.libretranslate.extraArgs

Extra arguments passed to the LibreTranslate. Type: attribute set of (null or boolean or string or signed integer or list of (boolean or string or signed integer)) Default: { } Example: { debug = true; disable-files-translation = true; url-prefix = "translate"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/libretranslate.nix>

## services.libretranslate.group

Group account under which libretranslate runs. Type: string Default: "libretranslate" Declared by: <nixpkgs/nixos/modules/services/web-apps/libretranslate.nix>

## services.libretranslate.host

The address the application should listen on. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/libretranslate.nix>

## services.libretranslate.port

The the application should listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5000 Declared by: <nixpkgs/nixos/modules/services/web-apps/libretranslate.nix>

## services.libretranslate.threads

Set number of threads. Type: null or (positive integer, meaning >0) Default: null Example: 8 Declared by: <nixpkgs/nixos/modules/services/web-apps/libretranslate.nix>

## services.libretranslate.updateModels

Update language models at startup Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/libretranslate.nix>

## services.libretranslate.user

User account under which libretranslate runs. Type: string Default: "libretranslate" Declared by: <nixpkgs/nixos/modules/services/web-apps/libretranslate.nix>
