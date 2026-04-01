---
module: services.auto-cpufreq
option_count: 2
source: options.html
---

# services.auto-cpufreq

## services.auto-cpufreq.enable

Whether to enable auto-cpufreq daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/auto-cpufreq.nix>

## services.auto-cpufreq.settings

Configuration for auto-cpufreq. The available options can be found in the example configuration file. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/hardware/auto-cpufreq.nix>
