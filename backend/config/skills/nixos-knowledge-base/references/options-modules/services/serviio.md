---
module: services.serviio
option_count: 3
source: options.html
---

# services.serviio

## services.serviio.enable

Whether to enable the Serviio Media Server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/serviio.nix>

## services.serviio.dataDir

The directory where serviio stores its state, data, etc. Type: absolute path Default: "/var/lib/serviio" Declared by: <nixpkgs/nixos/modules/services/misc/serviio.nix>

## services.serviio.openFirewall

Open ports in the firewall for the Serviio Media Server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/serviio.nix>
