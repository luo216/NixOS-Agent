---
module: services.tlsrpt.collectd.settings
option_count: 4
source: options.html
---

# services.tlsrpt.collectd.settings

## services.tlsrpt.collectd.settings.log_level

Level of log messages to emit. Type: one of “debug”, “info”, “warning”, “error”, “critical” Default: "info" Declared by: <nixpkgs/nixos/modules/services/mail/tlsrpt.nix>

## services.tlsrpt.collectd.settings.socketmode

Permissions on the UNIX socket. Type: string Default: "0220" Declared by: <nixpkgs/nixos/modules/services/mail/tlsrpt.nix>

## services.tlsrpt.collectd.settings.socketname

Path at which the UNIX socket will be created. Type: absolute path Default: "/run/tlsrpt/collectd.sock" Declared by: <nixpkgs/nixos/modules/services/mail/tlsrpt.nix>

## services.tlsrpt.collectd.settings.storage

Storage backend definition. Type: string Default: "sqlite:///var/lib/tlsrpt/collectd.sqlite" Declared by: <nixpkgs/nixos/modules/services/mail/tlsrpt.nix>
