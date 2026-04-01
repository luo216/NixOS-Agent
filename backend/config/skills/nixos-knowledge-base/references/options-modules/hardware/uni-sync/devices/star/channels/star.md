---
module: hardware.uni-sync.devices.*.channels.*
option_count: 2
source: options.html
---

# hardware.uni-sync.devices.*.channels.*

## hardware.uni-sync.devices.*.channels.*.mode

“PWM” to enable PWM sync. “Manual” to set speed. Type: one of “Manual”, “PWM” Default: "Manual" Example: "PWM" Declared by: <nixpkgs/nixos/modules/hardware/uni-sync.nix>

## hardware.uni-sync.devices.*.channels.*.speed

Fan speed as percentage (clamped between 0 and 100). Type: signed integer Default: "50" Example: "100" Declared by: <nixpkgs/nixos/modules/hardware/uni-sync.nix>
