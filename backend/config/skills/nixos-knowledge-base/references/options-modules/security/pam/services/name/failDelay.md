---
module: security.pam.services.<name>.failDelay
option_count: 2
source: options.html
---

# security.pam.services.<name>.failDelay

## security.pam.services.<name>.failDelay.enable

If enabled, this will replace the FAIL_DELAY setting from login.defs. Change the delay on failure per-application. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.failDelay.delay

The delay time (in microseconds) on failure. Type: signed integer Default: 3000000 Example: 1000000 Declared by: <nixpkgs/nixos/modules/security/pam.nix>
