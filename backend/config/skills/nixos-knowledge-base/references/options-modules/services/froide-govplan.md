---
module: services.froide-govplan
option_count: 6
source: options.html
---

# services.froide-govplan

## services.froide-govplan.enable

Whether to enable Gouvernment planer web app Govplan. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/froide-govplan.nix>

## services.froide-govplan.package

The froide-govplan package to use. Type: package Default: pkgs.froide-govplan Declared by: <nixpkgs/nixos/modules/services/web-apps/froide-govplan.nix>

## services.froide-govplan.dataDir

Directory to store the Froide-Govplan server data. Type: string Default: "/var/lib/froide-govplan" Declared by: <nixpkgs/nixos/modules/services/web-apps/froide-govplan.nix>

## services.froide-govplan.hostName

FQDN for the froide-govplan instance. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/froide-govplan.nix>

## services.froide-govplan.secretKeyFile

Path to a file containing the secret key. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/froide-govplan.nix>

## services.froide-govplan.settings

Configuration options to set in extra_settings.py. Type: open submodule of attribute set of (Python value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/froide-govplan.nix>
