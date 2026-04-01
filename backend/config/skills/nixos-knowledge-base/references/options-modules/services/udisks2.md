---
module: services.udisks2
option_count: 4
source: options.html
---

# services.udisks2

## services.udisks2.enable

Whether to enable udisks2, a DBus service that allows applications to query and manipulate storage devices. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/udisks2.nix>

## services.udisks2.package

The udisks package to use. Type: package Default: pkgs.udisks Declared by: <nixpkgs/nixos/modules/services/hardware/udisks2.nix>

## services.udisks2.mountOnMedia

When enabled, instructs udisks2 to mount removable drives under /media/ directory, instead of the default, ACL-controlled /run/media/$USER/. Since /media/ is not mounted as tmpfs by default, it requires cleanup to get rid of stale mountpoints; enabling this option will take care of this at boot. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/udisks2.nix>

## services.udisks2.settings

Options passed to udisksd. See here and drive configuration in here for supported options. Type: attribute set of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string) or a non-empty list of them) Default: { "udisks2.conf" = { defaults = { encryption = "luks2"; }; udisks2 = { modules = [ "*" ]; modules_load_preference = "ondemand"; }; }; } Example: { "WDC-WD10EZEX-60M2NA0-WD-WCC3F3SJ0698.conf" = { ATA = { StandbyTimeout = 50; }; }; }; Declared by: <nixpkgs/nixos/modules/services/hardware/udisks2.nix>
