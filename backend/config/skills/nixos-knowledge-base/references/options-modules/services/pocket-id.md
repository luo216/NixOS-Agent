---
module: services.pocket-id
option_count: 7
source: options.html
---

# services.pocket-id

## services.pocket-id.enable

Whether to enable Pocket ID server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/pocket-id.nix>

## services.pocket-id.package

The pocket-id package to use. Type: package Default: pkgs.pocket-id Declared by: <nixpkgs/nixos/modules/services/security/pocket-id.nix>

## services.pocket-id.dataDir

The directory where Pocket ID will store its data, such as the database. Type: absolute path Default: "/var/lib/pocket-id" Declared by: <nixpkgs/nixos/modules/services/security/pocket-id.nix>

## services.pocket-id.environmentFile

Path to an environment file loaded for the Pocket ID service. This can be used to securely store tokens and secrets outside of the world-readable Nix store. Example contents of the file: MAXMIND_LICENSE_KEY=your-license-key Type: absolute path Default: "/dev/null" Example: "/var/lib/secrets/pocket-id" Declared by: <nixpkgs/nixos/modules/services/security/pocket-id.nix>

## services.pocket-id.group

Group account under which Pocket ID runs. Type: string Default: "pocket-id" Declared by: <nixpkgs/nixos/modules/services/security/pocket-id.nix>

## services.pocket-id.settings

Environment variables that will be passed to Pocket ID, see configuration options for supported values. Type: open submodule of attribute set of (atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/security/pocket-id.nix>

## services.pocket-id.user

User account under which Pocket ID runs. Type: string Default: "pocket-id" Declared by: <nixpkgs/nixos/modules/services/security/pocket-id.nix>
