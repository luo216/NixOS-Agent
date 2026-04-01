---
module: services.tailscale.derper
option_count: 8
source: options.html
---

# services.tailscale.derper

## services.tailscale.derper.enable

Whether to enable Tailscale Derper. See upstream doc https://tailscale.com/kb/1118/custom-derp-servers how to configure it on clients. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/tailscale-derper.nix>

## services.tailscale.derper.package

The derper package to use. Type: package Default: pkgs.tailscale.derper Declared by: <nixpkgs/nixos/modules/services/networking/tailscale-derper.nix>

## services.tailscale.derper.configureNginx

Whether to enable nginx reverse proxy for derper. When enabled, nginx will proxy requests to the derper service. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/tailscale-derper.nix>

## services.tailscale.derper.domain

Domain name under which the derper server is reachable. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/tailscale-derper.nix>

## services.tailscale.derper.openFirewall

Whether to open the firewall for the specified port. Derper requires the used ports to be opened, otherwise it doesn’t work as expected. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/tailscale-derper.nix>

## services.tailscale.derper.port

The port the derper process will listen on. This is not the port tailscale will connect to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8010 Declared by: <nixpkgs/nixos/modules/services/networking/tailscale-derper.nix>

## services.tailscale.derper.stunPort

STUN port to listen on. See online docs https://tailscale.com/kb/1118/custom-derp-servers#prerequisites on how to configure a different external port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3478 Declared by: <nixpkgs/nixos/modules/services/networking/tailscale-derper.nix>

## services.tailscale.derper.verifyClients

Whether to verify clients against a locally running tailscale daemon if they are allowed to connect to this node or not. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/tailscale-derper.nix>
