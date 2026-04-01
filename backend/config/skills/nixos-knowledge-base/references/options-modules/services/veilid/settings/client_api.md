---
module: services.veilid.settings.client_api
option_count: 2
source: options.html
---

# services.veilid.settings.client_api

## services.veilid.settings.client_api.ipc_directory

IPC directory where file sockets are stored. Type: string Default: "/var/db/veilid-server/ipc" Declared by: <nixpkgs/nixos/modules/services/networking/veilid.nix>

## services.veilid.settings.client_api.ipc_enabled

veilid-server will respond to Python and other JSON client requests. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/veilid.nix>
