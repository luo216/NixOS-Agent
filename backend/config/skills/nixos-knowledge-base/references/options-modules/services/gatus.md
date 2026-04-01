---
module: services.gatus
option_count: 6
source: options.html
---

# services.gatus

## services.gatus.enable

Whether to enable Gatus. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/gatus.nix>

## services.gatus.package

The gatus package to use. Type: package Default: pkgs.gatus Declared by: <nixpkgs/nixos/modules/services/monitoring/gatus.nix>

## services.gatus.configFile

Path to the Gatus configuration file. Overrides any configuration made using the settings option. Type: absolute path Default: let settingsFormat = pkgs.formats.yaml { }; in settingsFormat.generate "gatus.yaml" cfg.settings; Declared by: <nixpkgs/nixos/modules/services/monitoring/gatus.nix>

## services.gatus.environmentFile

File to load as environment file. Environmental variables from this file can be interpolated in the configuration file using ${VARIABLE}. This is useful to avoid putting secrets into the nix store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/gatus.nix>

## services.gatus.openFirewall

Whether to open the firewall for the Gatus web interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/gatus.nix>

## services.gatus.settings

Configuration for Gatus. Supported options can be found at the docs. Type: open submodule of (YAML 1.1 value) Default: { } Example: { web.port = 8080; endpoints = [{ name = "website"; url = "https://twin.sh/health"; interval = "5m"; conditions = [ "[STATUS] == 200" "[BODY].status == UP" "[RESPONSE_TIME] < 300" ]; }]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/gatus.nix>
