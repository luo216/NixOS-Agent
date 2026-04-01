---
module: services.prometheus.exporters.dmarc.folders
option_count: 3
source: options.html
---

# services.prometheus.exporters.dmarc.folders

## services.prometheus.exporters.dmarc.folders.done

IMAP mailbox that successfully processed reports are moved to. Type: string Default: "Archive" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dmarc.folders.error

IMAP mailbox that emails are moved to that could not be processed. Type: string Default: "Invalid" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dmarc.folders.inbox

IMAP mailbox that is checked for incoming DMARC aggregate reports Type: string Default: "INBOX" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
