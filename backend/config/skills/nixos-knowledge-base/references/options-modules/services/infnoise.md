---
module: services.infnoise
option_count: 2
source: options.html
---

# services.infnoise

## services.infnoise.enable

Whether to enable the Infinite Noise TRNG driver. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/infnoise.nix>

## services.infnoise.fillDevRandom

Whether to run the infnoise driver as a daemon to refill /dev/random. If disabled, you can use the infnoise command-line tool to manually obtain randomness. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/security/infnoise.nix>
