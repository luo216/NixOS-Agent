---
module: services.suricata.settings.logging
option_count: 4
source: options.html
---

# services.suricata.settings.logging

## services.suricata.settings.logging.default-log-format

The default output format. Optional parameter, should default to something reasonable if not provided. Can be overridden in an output section. You can leave this out to get the default. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.logging.default-log-level

The default log level: can be overridden in an output section. Note that debug level logging will only be emitted if Suricata was compiled with the --enable-debug configure option. Type: one of “error”, “warning”, “notice”, “info”, “perf”, “config”, “debug” Default: "notice" Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.logging.default-output-filter

A regex to filter output. Can be overridden in an output section. Defaults to empty (no filter). Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.logging.stacktrace-on-signal

Requires libunwind to be available when Suricata is configured and built. If a signal unexpectedly terminates Suricata, displays a brief diagnostic message with the offending stacktrace if enabled. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>
