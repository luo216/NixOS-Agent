---
module: services.tuned.ppdSettings
option_count: 3
source: options.html
---

# services.tuned.ppdSettings

## services.tuned.ppdSettings.battery

Map of PPD battery states to TuneD profiles. Type: attribute set of string Default: { balanced = "balanced-battery"; } Declared by: <nixpkgs/nixos/modules/services/hardware/tuned.nix>

## services.tuned.ppdSettings.main

Core configuration for power-profiles-daemon support. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/hardware/tuned.nix>

## services.tuned.ppdSettings.profiles

Map of PPD profiles to native TuneD profiles. Type: attribute set of string Default: { balanced = "balanced"; performance = "throughput-performance"; power-saver = "powersave"; } Declared by: <nixpkgs/nixos/modules/services/hardware/tuned.nix>
