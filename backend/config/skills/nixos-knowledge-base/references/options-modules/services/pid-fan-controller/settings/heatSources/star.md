---
module: services.pid-fan-controller.settings.heatSources.*
option_count: 2
source: options.html
---

# services.pid-fan-controller.settings.heatSources.*

## services.pid-fan-controller.settings.heatSources.*.name

Name of the heat source. Type: non-empty string Declared by: <nixpkgs/nixos/modules/services/hardware/pid-fan-controller.nix>

## services.pid-fan-controller.settings.heatSources.*.wildcardPath

Path of the heat source’s hwmon temp_input file. This path can contain multiple wildcards, but has to resolve to exactly one result. Type: non-empty string Declared by: <nixpkgs/nixos/modules/services/hardware/pid-fan-controller.nix>
