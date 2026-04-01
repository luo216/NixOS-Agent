---
module: services.postfix-tlspol.settings.server
option_count: 5
source: options.html
---

# services.postfix-tlspol.settings.server

## services.postfix-tlspol.settings.server.address

Path or address/port where postfix-tlspol binds its socket to. Type: string Default: "unix:/run/postfix-tlspol/tlspol.sock" Example: "127.0.0.1:8642" Declared by: <nixpkgs/nixos/modules/services/mail/postfix-tlspol.nix>

## services.postfix-tlspol.settings.server.cache-file

Path to the cache file. Type: absolute path (read only) Default: "/var/cache/postfix-tlspol/cache.db" Declared by: <nixpkgs/nixos/modules/services/mail/postfix-tlspol.nix>

## services.postfix-tlspol.settings.server.log-level

Log level Type: one of “debug”, “info”, “warn”, “error” Default: "info" Example: "warn" Declared by: <nixpkgs/nixos/modules/services/mail/postfix-tlspol.nix>

## services.postfix-tlspol.settings.server.prefetch

Whether to prefetch DNS records when the TTL of a cached record is about to expire. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/mail/postfix-tlspol.nix>

## services.postfix-tlspol.settings.server.socket-permissions

Permissions to the UNIX socket, if configured. Note Due to hardening on the systemd unit the socket can never be created world readable/writable. Type: string (read only) Default: "0660" Declared by: <nixpkgs/nixos/modules/services/mail/postfix-tlspol.nix>
