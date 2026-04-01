---
module: security.auditd.settings
option_count: 2
source: options.html
---

# security.auditd.settings

## security.auditd.settings.admin_space_left

This is a numeric value in mebibytes (MiB) that tells the audit daemon when to perform a configurable action because the system is running low on disk space. This should be considered the last chance to do something before running out of disk space. The numeric value for this parameter should be lower than the number for space_left. You may also append a percent sign (e.g. 1%) to the number to have the audit daemon calculate the number based on the disk partition size. Type: signed integer or string matching the pattern [0-9]+% Default: 50 Declared by: <nixpkgs/nixos/modules/security/auditd.nix>

## security.auditd.settings.space_left

If the free space in the filesystem containing log_file drops below this value, the audit daemon takes the action specified by space_left_action. If the value of space_left is specified as a whole number, it is interpreted as an absolute size in mebibytes (MiB). If the value is specified as a number between 1 and 99 followed by a percentage sign (e.g., 5%), the audit daemon calculates the absolute size in megabytes based on the size of the filesystem containing log_file. (E.g., if the filesystem containing log_file is 2 gibibytes in size, and space_left is set to 25%, then the audit daemon sets space_left to approximately 500 mebibytes. Note This calculation is performed when the audit daemon starts, so if you resize the filesystem containing log_file while the audit daemon is running, you should send the audit daemon SIGHUP to re-read the configuration file and recalculate the correct per‐ centage. Type: signed integer or string matching the pattern [0-9]+% Default: 75 Declared by: <nixpkgs/nixos/modules/security/auditd.nix>
