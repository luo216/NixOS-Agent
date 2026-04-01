---
module: services.clamav.fangfrisch
option_count: 3
source: options.html
---

# services.clamav.fangfrisch

## services.clamav.fangfrisch.enable

Whether to enable ClamAV fangfrisch updater. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/clamav.nix>

## services.clamav.fangfrisch.interval

How often freshclam is invoked. See systemd.time(7) for more information about the format. Type: string Default: "hourly" Declared by: <nixpkgs/nixos/modules/services/security/clamav.nix>

## services.clamav.fangfrisch.settings

fangfrisch configuration. Refer to https://rseichter.github.io/fangfrisch/#_configuration, for details on supported values. Note that by default urlhaus and sanesecurity are enabled. Type: open submodule of attribute set of attribute set of (string or signed integer or boolean) Default: { } Example: { securiteinfo = { customer_id = "your customer_id"; enabled = "yes"; }; } Declared by: <nixpkgs/nixos/modules/services/security/clamav.nix>
