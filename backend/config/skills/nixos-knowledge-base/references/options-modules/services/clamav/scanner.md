---
module: services.clamav.scanner
option_count: 3
source: options.html
---

# services.clamav.scanner

## services.clamav.scanner.enable

Whether to enable ClamAV scanner. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/clamav.nix>

## services.clamav.scanner.interval

How often clamdscan is invoked. See systemd.time(7) for more information about the format. By default this runs using 10 cores at most, be sure to run it at a time of low traffic. Type: string Default: "*-*-* 04:00:00" Declared by: <nixpkgs/nixos/modules/services/security/clamav.nix>

## services.clamav.scanner.scanDirectories

List of directories to scan. The default includes everything I could think of that is valid for nixos. Feel free to contribute a PR to add to the default if you see something missing. Type: list of string Default: [ "/home" "/var/lib" "/tmp" "/etc" "/var/tmp" ] Declared by: <nixpkgs/nixos/modules/services/security/clamav.nix>
