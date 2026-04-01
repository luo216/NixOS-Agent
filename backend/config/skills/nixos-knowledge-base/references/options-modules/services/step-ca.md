---
module: services.step-ca
option_count: 7
source: options.html
---

# services.step-ca

## services.step-ca.enable

Whether to enable the smallstep certificate authority server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/step-ca.nix>

## services.step-ca.package

The step-ca package to use. Type: package Default: pkgs.step-ca Declared by: <nixpkgs/nixos/modules/services/security/step-ca.nix>

## services.step-ca.address

The address (without port) the certificate authority should listen at. This combined with services.step-ca.port overrides services.step-ca.settings.address. Type: string Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/security/step-ca.nix>

## services.step-ca.intermediatePasswordFile

Path to the file containing the password for the intermediate certificate private key. Warning Make sure to use a quoted absolute path instead of a path literal to prevent it from being copied to the globally readable Nix store. Type: null or absolute path not in the Nix store Default: null Example: "/run/keys/smallstep-password" Declared by: <nixpkgs/nixos/modules/services/security/step-ca.nix>

## services.step-ca.openFirewall

Whether to enable opening the certificate authority server port. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/step-ca.nix>

## services.step-ca.port

The port the certificate authority should listen on. This combined with services.step-ca.address overrides services.step-ca.settings.address. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Example: 8443 Declared by: <nixpkgs/nixos/modules/services/security/step-ca.nix>

## services.step-ca.settings

Settings that go into ca.json. See the step-ca manual for more information. The easiest way to configure this module would be to run step ca init to generate ca.json and then import it using builtins.fromJSON. This article may also be useful if you want to customize certain aspects of certificate generation for your CA. You need to change the database storage path to /var/lib/step-ca/db. Warning The services.step-ca.settings.address option will be ignored and overwritten by services.step-ca.address and services.step-ca.port. Type: attribute set of anything Declared by: <nixpkgs/nixos/modules/services/security/step-ca.nix>
