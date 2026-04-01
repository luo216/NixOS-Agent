---
module: system.autoUpgrade.rebootWindow
option_count: 2
source: options.html
---

# system.autoUpgrade.rebootWindow

## system.autoUpgrade.rebootWindow.lower

Lower limit of the reboot window Type: string matching the pattern [[:digit:]]{2}:[[:digit:]]{2} Example: "01:00" Declared by: <nixpkgs/nixos/modules/tasks/auto-upgrade.nix>

## system.autoUpgrade.rebootWindow.upper

Upper limit of the reboot window Type: string matching the pattern [[:digit:]]{2}:[[:digit:]]{2} Example: "05:00" Declared by: <nixpkgs/nixos/modules/tasks/auto-upgrade.nix>
