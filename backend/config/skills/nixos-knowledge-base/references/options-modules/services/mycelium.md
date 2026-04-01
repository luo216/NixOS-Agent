---
module: services.mycelium
option_count: 7
source: options.html
---

# services.mycelium

## services.mycelium.enable

Whether to enable mycelium network. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/mycelium.nix>

## services.mycelium.package

The mycelium package to use. Type: package Default: pkgs.mycelium Declared by: <nixpkgs/nixos/modules/services/networking/mycelium.nix>

## services.mycelium.addHostedPublicNodes

Adds the hosted peers from https://github.com/threefoldtech/mycelium#hosted-public-nodes. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/mycelium.nix>

## services.mycelium.extraArgs

Extra command-line arguments to pass to mycelium. See mycelium --help for all available options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/mycelium.nix>

## services.mycelium.keyFile

Optional path to a file containing the mycelium key material. If unset, the default location (/var/lib/mycelium/key.bin) will be used. If no key exist at this location, it will be generated on startup. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/mycelium.nix>

## services.mycelium.openFirewall

Open the firewall for mycelium Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/mycelium.nix>

## services.mycelium.peers

List of peers to connect to, in the formats: quic://[2001:0db8::1]:9651 quic://192.0.2.1:9651 tcp://[2001:0db8::1]:9651 tcp://192.0.2.1:9651 If addHostedPublicNodes is set to true, the hosted public nodes will also be added. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/mycelium.nix>
