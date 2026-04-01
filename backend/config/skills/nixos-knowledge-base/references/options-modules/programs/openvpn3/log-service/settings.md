---
module: programs.openvpn3.log-service.settings
option_count: 4
source: options.html
---

# programs.openvpn3.log-service.settings

## programs.openvpn3.log-service.settings.journald

Use systemd-journald Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/programs/openvpn3.nix>

## programs.openvpn3.log-service.settings.log_dbus_details

Add D-Bus details in log file/syslog Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/programs/openvpn3.nix>

## programs.openvpn3.log-service.settings.log_level

How verbose should the logging be Type: integer between 0 and 7 (both inclusive) Default: 3 Example: 6 Declared by: <nixpkgs/nixos/modules/programs/openvpn3.nix>

## programs.openvpn3.log-service.settings.timestamp

Add timestamp log file Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/openvpn3.nix>
