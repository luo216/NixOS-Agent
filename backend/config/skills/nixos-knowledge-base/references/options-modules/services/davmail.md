---
module: services.davmail
option_count: 3
source: options.html
---

# services.davmail

## services.davmail.enable

Whether to enable davmail, an MS Exchange gateway. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/davmail.nix>

## services.davmail.config

Davmail configuration. Refer to http://davmail.sourceforge.net/serversetup.html and http://davmail.sourceforge.net/advanced.html for details on supported values. Type: davmail config type (str, int, bool or attribute set thereof) Default: { } Example: { davmail.allowRemote = true; davmail.imapPort = 55555; davmail.bindAddress = "10.0.1.2"; davmail.smtpSaveInSent = true; davmail.folderSizeLimit = 10; davmail.caldavAutoSchedule = false; log4j.logger.rootLogger = "DEBUG"; } Declared by: <nixpkgs/nixos/modules/services/mail/davmail.nix>

## services.davmail.url

Outlook Web Access URL to access the exchange server, i.e. the base webmail URL. Type: string Example: "https://outlook.office365.com/EWS/Exchange.asmx" Declared by: <nixpkgs/nixos/modules/services/mail/davmail.nix>
