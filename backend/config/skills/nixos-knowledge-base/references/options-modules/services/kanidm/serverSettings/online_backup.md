---
module: services.kanidm.serverSettings.online_backup
option_count: 3
source: options.html
---

# services.kanidm.serverSettings.online_backup

## services.kanidm.serverSettings.online_backup.path

Path to the output directory for backups. Type: absolute path Default: "/var/lib/kanidm/backups" Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.serverSettings.online_backup.schedule

The schedule for backups in cron format. Type: string Default: "00 22 * * *" Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.serverSettings.online_backup.versions

Number of backups to keep. The default is set to 0, in order to disable backups by default. Type: unsigned integer, meaning >=0 Default: 0 Example: 7 Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>
