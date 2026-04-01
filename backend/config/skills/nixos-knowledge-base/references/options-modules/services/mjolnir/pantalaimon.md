---
module: services.mjolnir.pantalaimon
option_count: 4
source: options.html
---

# services.mjolnir.pantalaimon

## services.mjolnir.pantalaimon.enable

Whether to enable ignoring the accessToken. If true, accessToken is ignored and the username/password below will be used instead. The access token of the bot will be stored in the dataPath . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/mjolnir.nix>

## services.mjolnir.pantalaimon.options

passthrough additional options to the pantalaimon service. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/matrix/mjolnir.nix>

## services.mjolnir.pantalaimon.passwordFile

File containing the matrix password for the mjolnir user. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/matrix/mjolnir.nix>

## services.mjolnir.pantalaimon.username

The username to login with. Type: string Declared by: <nixpkgs/nixos/modules/services/matrix/mjolnir.nix>
