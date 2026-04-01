---
module: services.parsedmarc.settings.mailbox
option_count: 2
source: options.html
---

# services.parsedmarc.settings.mailbox

## services.parsedmarc.settings.mailbox.delete

Delete messages after processing them, instead of archiving them. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.settings.mailbox.watch

Use the IMAP IDLE command to process messages as they arrive. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>
