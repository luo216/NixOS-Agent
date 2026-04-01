---
module: services.rustdesk-server.signal
option_count: 3
source: options.html
---

# services.rustdesk-server.signal

## services.rustdesk-server.signal.enable

Whether to enable the RustDesk signal server. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/rustdesk-server.nix>

## services.rustdesk-server.signal.extraArgs

A list of extra command line arguments to pass to the hbbs process. Type: list of string Default: [ ] Example: [ "-k" "_" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/rustdesk-server.nix>

## services.rustdesk-server.signal.relayHosts

The relay server IP addresses or DNS names of the RustDesk relay. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/rustdesk-server.nix>
