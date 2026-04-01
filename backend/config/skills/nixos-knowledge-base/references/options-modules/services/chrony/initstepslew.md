---
module: services.chrony.initstepslew
option_count: 2
source: options.html
---

# services.chrony.initstepslew

## services.chrony.initstepslew.enabled

Allow chronyd to make a rapid measurement of the system clock error at boot time, and to correct the system clock by stepping before normal operation begins. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/ntp/chrony.nix>

## services.chrony.initstepslew.threshold

The threshold of system clock error (in seconds) above which the clock will be stepped. If the correction required is less than the threshold, a slew is used instead. Type: floating point number or signed integer Default: 1000 Declared by: <nixpkgs/nixos/modules/services/networking/ntp/chrony.nix>
