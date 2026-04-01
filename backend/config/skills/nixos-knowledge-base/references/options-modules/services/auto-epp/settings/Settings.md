---
module: services.auto-epp.settings.Settings
option_count: 2
source: options.html
---

# services.auto-epp.settings.Settings

## services.auto-epp.settings.Settings.epp_state_for_AC

energy_performance_preference when on plugged in Note See available epp states by running: cat /sys/devices/system/cpu/cpu0/cpufreq/energy_performance_available_preferences Type: string Default: "balance_performance" Declared by: <nixpkgs/nixos/modules/services/hardware/auto-epp.nix>

## services.auto-epp.settings.Settings.epp_state_for_BAT

energy_performance_preference when on battery Note See available epp states by running: cat /sys/devices/system/cpu/cpu0/cpufreq/energy_performance_available_preferences Type: string Default: "power" Declared by: <nixpkgs/nixos/modules/services/hardware/auto-epp.nix>
