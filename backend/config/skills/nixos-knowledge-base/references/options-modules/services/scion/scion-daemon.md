---
module: services.scion.scion-daemon
option_count: 2
source: options.html
---

# services.scion.scion-daemon

## services.scion.scion-daemon.enable

Whether to enable the scion-daemon service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/scion/scion-daemon.nix>

## services.scion.scion-daemon.settings

scion-daemon configuration. Refer to https://docs.scion.org/en/latest/manuals/common.html for details on supported values. Type: TOML value Default: { } Example: { path_db = { connection = "/run/scion-daemon/sd.path.db"; }; log.console = { level = "info"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/scion/scion-daemon.nix>
