---
module: systemd.sysupdate
option_count: 3
source: options.html
---

# systemd.sysupdate

## systemd.sysupdate.enable

Atomically update the host OS, container images, portable service images or other sources. If enabled, updates are triggered in regular intervals via a systemd.timer unit. Please see systemd-sysupdate(8) for more details. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/sysupdate.nix>

## systemd.sysupdate.timerConfig

The timer configuration for performing the update. By default, the upstream configuration is used: https://github.com/systemd/systemd/blob/main/units/systemd-sysupdate.timer Type: attribute set of (systemd option) Default: { } Example: { OnCalendar = "Sun 14:00:00"; Unit = "foo.service"; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/sysupdate.nix>

## systemd.sysupdate.transfers

Specify transfers as a set of the names of the transfer files as the key and the configuration as its value. The configuration can use all upstream options. See sysupdate.d(5) for all available options. Type: attribute set of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string) or a non-empty list of them) Default: { } Example: { "10-uki" = { Source = { MatchPattern = [ "nixos_@v+@l-@d.efi" "nixos_@v+@l.efi" "nixos_@v.efi" ]; Path = "https://download.example.com/"; Type = "url-file"; }; Target = { InstancesMax = 2; MatchPattern = '' nixos_@v+@l-@d.efi"; \ nixos_@v+@l.efi \ nixos_@v.efi ''; Mode = "0444"; Path = "/EFI/Linux"; PathRelativeTo = "boot"; TriesDone = 0; TriesLeft = 3; Type = "regular-file"; }; Transfer = { ProtectVersion = "%A"; }; }; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/sysupdate.nix>
