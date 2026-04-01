---
module: services.vlagent.remoteWrite
option_count: 4
source: options.html
---

# services.vlagent.remoteWrite

## services.vlagent.remoteWrite.basicAuthPasswordFile

File that contains the Basic Auth password used to connect to remote_write endpoint Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/vlagent.nix>

## services.vlagent.remoteWrite.basicAuthUsername

Basic Auth username used to connect to remote_write endpoint Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/vlagent.nix>

## services.vlagent.remoteWrite.maxDiskUsagePerUrl

The maximum file-based buffer size in bytes. Supports the following optional suffixes for size values: KB, MB, GB, TB, KiB, MiB, GiB, TiB. See docs for more infomations: https://docs.victoriametrics.com/vlagent.html#advanced-usage Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/vlagent.nix>

## services.vlagent.remoteWrite.url

Endpoint for the victorialogs instance Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/vlagent.nix>
