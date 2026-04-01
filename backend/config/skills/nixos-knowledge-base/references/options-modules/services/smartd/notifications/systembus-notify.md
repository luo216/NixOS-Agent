---
module: services.smartd.notifications.systembus-notify
option_count: 1
source: options.html
---

# services.smartd.notifications.systembus-notify

## services.smartd.notifications.systembus-notify.enable

Whenever to send systembus-notify notifications. WARNING: enabling this option (while convenient) should not be done on a machine where you do not trust the other users as it allows any other local user to DoS your session by spamming notifications. To actually see the notifications in your GUI session, you need to have systembus-notify running as your user, which this option handles by enabling services.systembus-notify. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/smartd.nix>
