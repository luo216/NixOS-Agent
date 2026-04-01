---
module: services.clamav.updater
option_count: 4
source: options.html
---

# services.clamav.updater

## services.clamav.updater.enable

Whether to enable ClamAV freshclam updater. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/clamav.nix>

## services.clamav.updater.frequency

Number of database checks per day. Type: signed integer Default: 12 Declared by: <nixpkgs/nixos/modules/services/security/clamav.nix>

## services.clamav.updater.interval

How often freshclam is invoked. See systemd.time(7) for more information about the format. Type: string Default: "hourly" Declared by: <nixpkgs/nixos/modules/services/security/clamav.nix>

## services.clamav.updater.settings

freshclam configuration. Refer to https://linux.die.net/man/5/freshclam.conf, for details on supported values. Type: attribute set of (boolean or signed integer or string or list of string) Default: { } Declared by: <nixpkgs/nixos/modules/services/security/clamav.nix>
