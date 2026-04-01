---
module: services.orthanc
option_count: 7
source: options.html
---

# services.orthanc

## services.orthanc.enable

Whether to enable Orthanc server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/orthanc.nix>

## services.orthanc.package

The orthanc package to use. Type: package Default: pkgs.orthanc Declared by: <nixpkgs/nixos/modules/services/misc/orthanc.nix>

## services.orthanc.environment

Extra environment variables For more details see https://orthanc.uclouvain.be/book/users/configuration.html Type: attribute set of string Default: { } Example: '' { ORTHANC_NAME = "Orthanc server"; } '' Declared by: <nixpkgs/nixos/modules/services/misc/orthanc.nix>

## services.orthanc.environmentFile

Environment file to be passed to the systemd service. Useful for passing secrets to the service to prevent them from being world-readable in the Nix store. Type: null or absolute path Default: null Example: "/var/lib/secrets/orthancSecrets" Declared by: <nixpkgs/nixos/modules/services/misc/orthanc.nix>

## services.orthanc.openFirewall

Whether to open the firewall for Orthanc. This adds services.orthanc.settings.HttpPort to networking.firewall.allowedTCPPorts. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/orthanc.nix>

## services.orthanc.settings

Configuration written to a json file that is read by orthanc. See https://orthanc.uclouvain.be/book/index.html for more. Type: open submodule of (JSON value) Default: { HttpPort = { _type = "override"; content = 8042; priority = 1000; }; IndexDirectory = { _type = "override"; content = "/var/lib/orthanc/"; priority = 1000; }; StorageDirectory = { _type = "override"; content = "/var/lib/orthanc/"; priority = 1000; }; } Example: { HttpPort = 12345; Name = "My Orthanc Server"; } Declared by: <nixpkgs/nixos/modules/services/misc/orthanc.nix>

## services.orthanc.stateDir

State directory of Orthanc. Type: absolute path Default: "/var/lib/orthanc" Example: "/home/foo" Declared by: <nixpkgs/nixos/modules/services/misc/orthanc.nix>
