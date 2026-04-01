---
module: services.clight
option_count: 2
source: options.html
---

# services.clight

## services.clight.enable

Whether to enable clight. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/clight.nix>

## services.clight.settings

Additional configuration to extend clight.conf. See https://github.com/FedeDP/Clight/blob/master/Extra/clight.conf for a sample configuration file. Type: attribute set of (null or signed integer or string or boolean or floating point number or list of (signed integer or string or boolean or floating point number) or attribute set of (signed integer or string or boolean or floating point number or list of (signed integer or string or boolean or floating point number))) Default: { } Example: { ac_capture_timeouts = [ 120 300 60 ]; captures = 20; gamma_long_transition = true; } Declared by: <nixpkgs/nixos/modules/services/x11/clight.nix>
