---
module: services.nix-serve
option_count: 7
source: options.html
---

# services.nix-serve

## services.nix-serve.enable

Whether to enable nix-serve, the standalone Nix binary cache server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nix-serve.nix>

## services.nix-serve.package

The nix-serve package to use. Type: package Default: pkgs.nix-serve Declared by: <nixpkgs/nixos/modules/services/networking/nix-serve.nix>

## services.nix-serve.bindAddress

IP address where nix-serve will bind its listening socket. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/nix-serve.nix>

## services.nix-serve.extraParams

Extra command line parameters for nix-serve. Type: strings concatenated with " " Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/nix-serve.nix>

## services.nix-serve.openFirewall

Open ports in the firewall for nix-serve. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nix-serve.nix>

## services.nix-serve.port

Port number where nix-serve will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5000 Declared by: <nixpkgs/nixos/modules/services/networking/nix-serve.nix>

## services.nix-serve.secretKeyFile

The path to the file used for signing derivation data. Generate with: nix-store --generate-binary-cache-key key-name secret-key-file public-key-file For more details see nix-store(1). Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/nix-serve.nix>
