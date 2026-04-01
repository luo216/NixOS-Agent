---
module: services.roon-server
option_count: 5
source: options.html
---

# services.roon-server

## services.roon-server.enable

Whether to enable Roon Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/roon-server.nix>

## services.roon-server.package

The roon-server package to use. Type: package Default: pkgs.roon-server Declared by: <nixpkgs/nixos/modules/services/audio/roon-server.nix>

## services.roon-server.group

Group to run the Roon Server as. Type: string Default: "roon-server" Declared by: <nixpkgs/nixos/modules/services/audio/roon-server.nix>

## services.roon-server.openFirewall

Open ports in the firewall for the server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/audio/roon-server.nix>

## services.roon-server.user

User to run the Roon Server as. Type: string Default: "roon-server" Declared by: <nixpkgs/nixos/modules/services/audio/roon-server.nix>
