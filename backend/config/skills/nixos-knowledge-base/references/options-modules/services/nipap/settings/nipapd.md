---
module: services.nipap.settings.nipapd
option_count: 6
source: options.html
---

# services.nipap.settings.nipapd

## services.nipap.settings.nipapd.db_host

PostgreSQL host to connect to. Empty means use UNIX socket. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/nipap.nix>

## services.nipap.settings.nipapd.db_name

Name of database to use on PostgreSQL server. Type: string Default: "nipap" Declared by: <nixpkgs/nixos/modules/services/web-apps/nipap.nix>

## services.nipap.settings.nipapd.debug

Enable debug logging. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/nipap.nix>

## services.nipap.settings.nipapd.foreground

Remain in foreground rather than forking to background. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/nipap.nix>

## services.nipap.settings.nipapd.listen

IP address to bind nipapd to. Type: string Default: "::1" Declared by: <nixpkgs/nixos/modules/services/web-apps/nipap.nix>

## services.nipap.settings.nipapd.port

Port to bind nipapd to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1337 Declared by: <nixpkgs/nixos/modules/services/web-apps/nipap.nix>
