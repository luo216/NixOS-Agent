---
module: services.x2goserver.superenicer
option_count: 1
source: options.html
---

# services.x2goserver.superenicer

## services.x2goserver.superenicer.enable

Enables the SupeReNicer code in x2gocleansessions, this will renice suspended sessions to nice level 19 and renice them to level 0 if the session becomes marked as running again Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/x2goserver.nix>
