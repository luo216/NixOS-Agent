---
module: services.offlineimap
option_count: 6
source: options.html
---

# services.offlineimap

## services.offlineimap.enable

Whether to enable OfflineIMAP, a software to dispose your mailbox(es) as a local Maildir(s). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/offlineimap.nix>

## services.offlineimap.package

The offlineimap package to use. Type: package Default: pkgs.offlineimap Declared by: <nixpkgs/nixos/modules/services/mail/offlineimap.nix>

## services.offlineimap.install

Whether to install a user service for Offlineimap. Once the service is started, emails will be fetched automatically. The service must be manually started for each user with “systemctl --user start offlineimap” or globally through services.offlineimap.enable. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/offlineimap.nix>

## services.offlineimap.onCalendar

How often is offlineimap started. Default is ‘*:0/3’ meaning every 3 minutes. See systemd.time(7) for more information about the format. Type: string Default: "*:0/3" Declared by: <nixpkgs/nixos/modules/services/mail/offlineimap.nix>

## services.offlineimap.path

List of derivations to put in Offlineimap’s path. Type: list of absolute path Default: [ ] Example: [ pkgs.pass pkgs.bash pkgs.notmuch ] Declared by: <nixpkgs/nixos/modules/services/mail/offlineimap.nix>

## services.offlineimap.timeoutStartSec

How long waiting for offlineimap before killing it. Default is ‘120sec’ meaning every 2 minutes. See systemd.time(7) for more information about the format. Type: string Default: "120sec" Declared by: <nixpkgs/nixos/modules/services/mail/offlineimap.nix>
