---
module: services.btrbk.instances.<name>
option_count: 3
source: options.html
---

# services.btrbk.instances.<name>

## services.btrbk.instances.<name>.onCalendar

How often this btrbk instance is started. See systemd.time(7) for more information about the format. Setting it to null disables the timer, thus this instance can only be started manually. Type: null or string Default: "daily" Declared by: <nixpkgs/nixos/modules/services/backup/btrbk.nix>

## services.btrbk.instances.<name>.settings

configuration options for btrbk. Nested attrsets translate to subsections. Type: open submodule of attribute set of (string or instances of this type recursively) Default: { } Example: { snapshot_preserve = "14d"; snapshot_preserve_min = "2d"; volume = { "/mnt/btr_pool" = { subvolume = { home = { snapshot_create = "always"; }; rootfs = { }; }; target = "/mnt/btr_backup/mylaptop"; }; }; } Declared by: <nixpkgs/nixos/modules/services/backup/btrbk.nix>

## services.btrbk.instances.<name>.snapshotOnly

Whether to run in snapshot only mode. This skips backup creation and deletion steps. Useful when you want to manually backup to an external drive that might not always be connected. Use btrbk -c /path/to/conf resume to trigger manual backups. More examples here. See also snapshot subcommand in btrbk(1). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/btrbk.nix>
