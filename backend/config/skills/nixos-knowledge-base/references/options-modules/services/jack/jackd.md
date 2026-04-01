---
module: services.jack.jackd
option_count: 3
source: options.html
---

# services.jack.jackd

## services.jack.jackd.enable

Whether to enable JACK Audio Connection Kit. You need to add yourself to the “jackaudio” group . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/jack.nix>

## services.jack.jackd.extraOptions

Specifies startup command line arguments to pass to JACK server. Type: list of string Default: [ "-dalsa" ] Example: [ "-dalsa" "--device" "hw:1" ]; Declared by: <nixpkgs/nixos/modules/services/audio/jack.nix>

## services.jack.jackd.session

Commands to run after JACK is started. Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/audio/jack.nix>
