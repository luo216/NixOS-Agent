---
module: services.ersatztv
option_count: 7
source: options.html
---

# services.ersatztv

## services.ersatztv.enable

Whether to enable ErsatzTV. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/ersatztv.nix>

## services.ersatztv.package

The ersatztv package to use. Type: package Default: pkgs.ersatztv Declared by: <nixpkgs/nixos/modules/services/misc/ersatztv.nix>

## services.ersatztv.baseUrl

Base URL to support reverse proxies that use paths (e.g. /ersatztv) Type: string Default: "/" Declared by: <nixpkgs/nixos/modules/services/misc/ersatztv.nix>

## services.ersatztv.environment

Environment variables to set for the ErsatzTV service. Type: attribute set of (string or signed integer or floating point number or boolean or absolute path or package) Default: { ETV_BASE_URL = "/"; ETV_UI_PORT = 8409; } Example: { ETV_STREAMING_PORT = 8001; ETV_UI_PORT = 8000; } Declared by: <nixpkgs/nixos/modules/services/misc/ersatztv.nix>

## services.ersatztv.group

Group under which ErsatzTV runs. Type: string Default: "ersatztv" Declared by: <nixpkgs/nixos/modules/services/misc/ersatztv.nix>

## services.ersatztv.openFirewall

Open the default ports in the firewall for the server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/ersatztv.nix>

## services.ersatztv.user

User account under which ErsatzTV runs. Type: string Default: "ersatztv" Declared by: <nixpkgs/nixos/modules/services/misc/ersatztv.nix>
