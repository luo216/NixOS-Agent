---
module: services.tlsrpt.fetcher.settings
option_count: 2
source: options.html
---

# services.tlsrpt.fetcher.settings

## services.tlsrpt.fetcher.settings.log_level

Level of log messages to emit. Type: one of “debug”, “info”, “warning”, “error”, “critical” Default: "info" Declared by: <nixpkgs/nixos/modules/services/mail/tlsrpt.nix>

## services.tlsrpt.fetcher.settings.storage

Path to the collectd sqlite database. Type: string Default: config.services.tlsrpt.collectd.settings.storage Declared by: <nixpkgs/nixos/modules/services/mail/tlsrpt.nix>
