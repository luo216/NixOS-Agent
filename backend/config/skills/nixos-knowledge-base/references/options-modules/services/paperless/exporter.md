---
module: services.paperless.exporter
option_count: 4
source: options.html
---

# services.paperless.exporter

## services.paperless.exporter.enable

Whether to enable regular automatic document exports. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>

## services.paperless.exporter.directory

Directory to store export. Type: string Default: ${config.services.paperless.dataDir}/export Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>

## services.paperless.exporter.onCalendar

When to run the exporter. See systemd.time(7). null disables the timer; allowing you to run the paperless-exporter service through other means. Type: null or string Default: "01:30:00" Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>

## services.paperless.exporter.settings

Settings to pass to the document exporter as CLI arguments. Type: attribute set of anything Default: { compare-checksums = true; delete = true; no-color = true; no-progress-bar = true; } Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>
