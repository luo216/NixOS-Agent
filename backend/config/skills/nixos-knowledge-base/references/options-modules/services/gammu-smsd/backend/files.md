---
module: services.gammu-smsd.backend.files
option_count: 4
source: options.html
---

# services.gammu-smsd.backend.files

## services.gammu-smsd.backend.files.errorSMSPath

Where SMSes with error in transmission is placed Type: absolute path Default: "/var/spool/sms/error/" Declared by: <nixpkgs/nixos/modules/services/misc/gammu-smsd.nix>

## services.gammu-smsd.backend.files.inboxPath

Where the received SMSes are stored Type: absolute path Default: "/var/spool/sms/inbox/" Declared by: <nixpkgs/nixos/modules/services/misc/gammu-smsd.nix>

## services.gammu-smsd.backend.files.outboxPath

Where SMSes to be sent should be placed Type: absolute path Default: "/var/spool/sms/outbox/" Declared by: <nixpkgs/nixos/modules/services/misc/gammu-smsd.nix>

## services.gammu-smsd.backend.files.sentSMSPath

Where the transmitted SMSes are placed Type: absolute path Default: "/var/spool/sms/sent/" Declared by: <nixpkgs/nixos/modules/services/misc/gammu-smsd.nix>
