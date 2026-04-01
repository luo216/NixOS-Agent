---
module: services.displayManager.sddm.autoLogin
option_count: 2
source: options.html
---

# services.displayManager.sddm.autoLogin

## services.displayManager.sddm.autoLogin.minimumUid

Minimum user ID for auto-login user. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1000 Declared by: <nixpkgs/nixos/modules/services/display-managers/sddm.nix>

## services.displayManager.sddm.autoLogin.relogin

If true automatic login will kick in again on session exit (logout), otherwise it will only log in automatically when the display-manager is started. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/display-managers/sddm.nix>
