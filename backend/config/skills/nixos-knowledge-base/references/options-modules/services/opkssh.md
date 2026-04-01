---
module: services.opkssh
option_count: 6
source: options.html
---

# services.opkssh

## services.opkssh.enable

Whether to enable OpenID Connect SSH authentication. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/opkssh/opkssh.nix>

## services.opkssh.package

The opkssh package to use. Type: package Default: pkgs.opkssh Declared by: <nixpkgs/nixos/modules/services/networking/opkssh/opkssh.nix>

## services.opkssh.authorizations

User authorization mappings Type: list of (submodule) Default: [ ] Example: # This example refers to values in the providers example # adjust your expressions as necessary [ { user = "alice"; principal = "alice@gmail.com"; inherit (config.services.opkssh.providers.google) issuer; } { user = "bob"; principal = "repo:NixOs/nixpkgs:environment:production"; inherit (config.services.opkssh.providers.github) issuer; } ]; Declared by: <nixpkgs/nixos/modules/services/networking/opkssh/opkssh.nix>

## services.opkssh.group

System group for opkssh Type: string Default: "opksshuser" Declared by: <nixpkgs/nixos/modules/services/networking/opkssh/opkssh.nix>

## services.opkssh.providers

OpenID Connect providers configuration Type: attribute set of (submodule) Default: { github = { clientId = "github"; issuer = "https://token.actions.githubusercontent.com"; lifetime = "oidc"; }; google = { clientId = "206584157355-7cbe4s640tvm7naoludob4ut1emii7sf.apps.googleusercontent.com"; issuer = "https://accounts.google.com"; lifetime = "24h"; }; microsoft = { clientId = "096ce0a3-5e72-4da8-9c86-12924b294a01"; issuer = "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0"; lifetime = "24h"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/opkssh/opkssh.nix>

## services.opkssh.user

System user for running opkssh Type: string Default: "opksshuser" Declared by: <nixpkgs/nixos/modules/services/networking/opkssh/opkssh.nix>
