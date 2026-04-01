---
module: services.scion.scion-control
option_count: 2
source: options.html
---

# services.scion.scion-control

## services.scion.scion-control.enable

Whether to enable the scion-control service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/scion/scion-control.nix>

## services.scion.scion-control.settings

scion-control configuration. Refer to https://docs.scion.org/en/latest/manuals/common.html for details on supported values. Type: TOML value Default: { } Example: { path_db = { connection = "/run/scion-control/control.path.db"; }; log.console = { level = "info"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/scion/scion-control.nix>
