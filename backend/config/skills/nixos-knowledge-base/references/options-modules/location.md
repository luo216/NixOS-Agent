---
module: location
option_count: 3
source: options.html
---

# location

## location.latitude

Your current latitude, between -90.0 and 90.0. Must be provided along with longitude. Type: floating point number Declared by: <nixpkgs/nixos/modules/config/locale.nix>

## location.longitude

Your current longitude, between between -180.0 and 180.0. Must be provided along with latitude. Type: floating point number Declared by: <nixpkgs/nixos/modules/config/locale.nix>

## location.provider

The location provider to use for determining your location. If set to manual you must also provide latitude/longitude. Type: one of “manual”, “geoclue2” Default: "manual" Declared by: <nixpkgs/nixos/modules/config/locale.nix>
