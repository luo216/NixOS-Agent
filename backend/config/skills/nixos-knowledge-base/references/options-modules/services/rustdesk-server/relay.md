---
module: services.rustdesk-server.relay
option_count: 2
source: options.html
---

# services.rustdesk-server.relay

## services.rustdesk-server.relay.enable

Whether to enable the RustDesk relay server. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/rustdesk-server.nix>

## services.rustdesk-server.relay.extraArgs

A list of extra command line arguments to pass to the hbbr process. Type: list of string Default: [ ] Example: [ "-k" "_" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/rustdesk-server.nix>
