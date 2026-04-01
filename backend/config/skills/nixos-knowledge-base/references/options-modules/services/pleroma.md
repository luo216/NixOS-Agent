---
module: services.pleroma
option_count: 7
source: options.html
---

# services.pleroma

## services.pleroma.enable

Whether to enable pleroma. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/pleroma.nix>

## services.pleroma.package

The pleroma package to use. Type: package Default: pkgs.pleroma Declared by: <nixpkgs/nixos/modules/services/networking/pleroma.nix>

## services.pleroma.configs

Pleroma public configuration. This list gets appended from left to right into /etc/pleroma/config.exs. Elixir evaluates its configuration imperatively, meaning you can override a setting by appending a new str to this NixOS option list. DO NOT STORE ANY PLEROMA SECRET HERE, use services.pleroma.secretConfigFile instead. This setting is going to be stored in a file part of the Nix store. The Nix store being world-readable, it’s not the right place to store any secret Have a look to Pleroma section in the NixOS manual for more information. Type: list of string Declared by: <nixpkgs/nixos/modules/services/networking/pleroma.nix>

## services.pleroma.group

Group account under which pleroma runs. Type: string Default: "pleroma" Declared by: <nixpkgs/nixos/modules/services/networking/pleroma.nix>

## services.pleroma.secretConfigFile

Path to the file containing your secret pleroma configuration. DO NOT POINT THIS OPTION TO THE NIX STORE, the store being world-readable, it’ll compromise all your secrets. Type: string Default: "/var/lib/pleroma/secrets.exs" Declared by: <nixpkgs/nixos/modules/services/networking/pleroma.nix>

## services.pleroma.stateDir

Directory where the pleroma service will save the uploads and static files. Type: string (read only) Default: "/var/lib/pleroma" Declared by: <nixpkgs/nixos/modules/services/networking/pleroma.nix>

## services.pleroma.user

User account under which pleroma runs. Type: string Default: "pleroma" Declared by: <nixpkgs/nixos/modules/services/networking/pleroma.nix>
