---
module: services.cyrus-imap.imapdSettings
option_count: 4
source: options.html
---

# services.cyrus-imap.imapdSettings

## services.cyrus-imap.imapdSettings.configdirectory

The pathname of the IMAP configuration directory. Type: absolute path Default: "/var/lib/cyrus" Declared by: <nixpkgs/nixos/modules/services/mail/cyrus-imap.nix>

## services.cyrus-imap.imapdSettings.idlesocket

Unix socket that idled listens on. Type: absolute path Default: "/run/cyrus/idle" Declared by: <nixpkgs/nixos/modules/services/mail/cyrus-imap.nix>

## services.cyrus-imap.imapdSettings.lmtpsocket

Unix socket that lmtpd listens on, used by deliver(8). This should match the path specified in cyrus.conf(5). Type: absolute path Default: "/run/cyrus/lmtp" Declared by: <nixpkgs/nixos/modules/services/mail/cyrus-imap.nix>

## services.cyrus-imap.imapdSettings.notifysocket

Unix domain socket that the mail notification daemon listens on. Type: absolute path Default: "/run/cyrus/notify" Declared by: <nixpkgs/nixos/modules/services/mail/cyrus-imap.nix>
