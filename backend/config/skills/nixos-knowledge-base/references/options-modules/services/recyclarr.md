---
module: services.recyclarr
option_count: 7
source: options.html
---

# services.recyclarr

## services.recyclarr.enable

Whether to enable recyclarr service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/recyclarr.nix>

## services.recyclarr.package

The recyclarr package to use. Type: package Default: pkgs.recyclarr Declared by: <nixpkgs/nixos/modules/services/misc/recyclarr.nix>

## services.recyclarr.command

The recyclarr command to run (e.g., sync). Type: string Default: "sync" Declared by: <nixpkgs/nixos/modules/services/misc/recyclarr.nix>

## services.recyclarr.configuration

Recyclarr YAML configuration as a Nix attribute set. For detailed configuration options and examples, see the official configuration reference. The configuration is processed using utils.genJqSecretsReplacement to handle secret substitution. Type: YAML 1.1 value Default: { } Example: { radarr = [ { api_key = { _secret = "/run/credentials/recyclarr.service/radarr-api_key"; }; base_url = "http://localhost:7878"; instance_name = "main"; } ]; sonarr = [ { api_key = { _secret = "/run/credentials/recyclarr.service/sonarr-api_key"; }; base_url = "http://localhost:8989"; instance_name = "main"; } ]; } Declared by: <nixpkgs/nixos/modules/services/misc/recyclarr.nix>

## services.recyclarr.group

Group under which recyclarr runs. Type: string Default: "recyclarr" Declared by: <nixpkgs/nixos/modules/services/misc/recyclarr.nix>

## services.recyclarr.schedule

When to run recyclarr in systemd calendar format. Type: string Default: "daily" Declared by: <nixpkgs/nixos/modules/services/misc/recyclarr.nix>

## services.recyclarr.user

User account under which recyclarr runs. Type: string Default: "recyclarr" Declared by: <nixpkgs/nixos/modules/services/misc/recyclarr.nix>
