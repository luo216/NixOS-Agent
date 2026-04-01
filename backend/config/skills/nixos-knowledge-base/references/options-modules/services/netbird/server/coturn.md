---
module: services.netbird.server.coturn
option_count: 7
source: options.html
---

# services.netbird.server.coturn

## services.netbird.server.coturn.enable

Whether to enable a Coturn server for Netbird, will also open the firewall on the configured range. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/netbird/coturn.nix>

## services.netbird.server.coturn.domain

The domain under which the coturn server runs. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/netbird/coturn.nix>

## services.netbird.server.coturn.openPorts

The list of ports used by coturn for listening to open in the firewall. Type: list of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: with config.services.coturn; [ listening-port alt-listening-port tls-listening-port alt-tls-listening-port ]; Declared by: <nixpkgs/nixos/modules/services/networking/netbird/coturn.nix>

## services.netbird.server.coturn.password

The password of the user used by netbird to connect to the coturn server. Be advised this will be world readable in the nix store. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/netbird/coturn.nix>

## services.netbird.server.coturn.passwordFile

The path to a file containing the password of the user used by netbird to connect to the coturn server. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/netbird/coturn.nix>

## services.netbird.server.coturn.useAcmeCertificates

Whether to use ACME certificates corresponding to the given domain for the server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/netbird/coturn.nix>

## services.netbird.server.coturn.user

The username used by netbird to connect to the coturn server. Type: string Default: "netbird" Declared by: <nixpkgs/nixos/modules/services/networking/netbird/coturn.nix>
