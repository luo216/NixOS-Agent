---
module: services.automysqlbackup
option_count: 3
source: options.html
---

# services.automysqlbackup

## services.automysqlbackup.enable

Whether to enable AutoMySQLBackup. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/automysqlbackup.nix>

## services.automysqlbackup.calendar

Configured when to run the backup service systemd unit (DayOfWeek Year-Month-Day Hour:Minute:Second). Type: string Default: "01:15:00" Declared by: <nixpkgs/nixos/modules/services/backup/automysqlbackup.nix>

## services.automysqlbackup.settings

automysqlbackup configuration. Refer to ${pkgs.automysqlbackup}/etc/automysqlbackup.conf for details on supported values. Type: attribute set of (string or signed integer or boolean or list of string) Default: { } Example: { db_names = [ "nextcloud" "matomo" ]; table_exclude = [ "nextcloud.oc_users" "nextcloud.oc_whats_new" ]; mailcontent = "log"; mail_address = "admin@example.org"; } Declared by: <nixpkgs/nixos/modules/services/backup/automysqlbackup.nix>
