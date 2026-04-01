---
module: systemd.sysupdate.reboot
option_count: 2
source: options.html
---

# systemd.sysupdate.reboot

## systemd.sysupdate.reboot.enable

Whether to automatically reboot after an update. If set to true, the system will automatically reboot via a systemd.timer unit but only after a new version was installed. This uses a unit completely separate from the one performing the update because it is typically advisable to download updates regularly while the system is up, but delay reboots until the appropriate time (i.e. typically at night). Set this to false if you do not want to reboot after an update. This is useful when you update a container image or another source where rebooting is not necessary in order to finalize the update. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/sysupdate.nix>

## systemd.sysupdate.reboot.timerConfig

The timer configuration for rebooting after an update. By default, the upstream configuration is used: https://github.com/systemd/systemd/blob/main/units/systemd-sysupdate-reboot.timer Type: attribute set of (systemd option) Default: { } Example: { OnCalendar = "Sun 14:00:00"; Unit = "foo.service"; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/sysupdate.nix>
