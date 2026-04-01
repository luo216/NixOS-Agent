---
module: services.scion.scion-dispatcher
option_count: 2
source: options.html
---

# services.scion.scion-dispatcher

## services.scion.scion-dispatcher.enable

Whether to enable the scion-dispatcher service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/scion/scion-dispatcher.nix>

## services.scion.scion-dispatcher.settings

scion-dispatcher configuration. Refer to https://docs.scion.org/en/latest/manuals/common.html for details on supported values. Type: TOML value Default: { } Example: { dispatcher = { id = "dispatcher"; socket_file_mode = "0770"; application_socket = "/dev/shm/dispatcher/default.sock"; }; log.console = { level = "info"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/scion/scion-dispatcher.nix>
