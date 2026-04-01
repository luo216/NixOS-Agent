---
module: services.systembus-notify
option_count: 1
source: options.html
---

# services.systembus-notify

## services.systembus-notify.enable

Whether to enable System bus notification support WARNING: enabling this option (while convenient) should not be done on a machine where you do not trust the other users as it allows any other local user to DoS your session by spamming notifications . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/system/systembus-notify.nix>
