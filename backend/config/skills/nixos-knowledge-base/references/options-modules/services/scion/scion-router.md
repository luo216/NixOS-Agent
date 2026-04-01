---
module: services.scion.scion-router
option_count: 2
source: options.html
---

# services.scion.scion-router

## services.scion.scion-router.enable

Whether to enable the scion-router service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/scion/scion-router.nix>

## services.scion.scion-router.settings

scion-router configuration. Refer to https://docs.scion.org/en/latest/manuals/common.html for details on supported values. Type: TOML value Default: { } Example: { general.id = "br"; } Declared by: <nixpkgs/nixos/modules/services/networking/scion/scion-router.nix>
