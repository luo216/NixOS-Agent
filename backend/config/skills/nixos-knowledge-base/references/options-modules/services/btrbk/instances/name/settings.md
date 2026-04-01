---
module: services.btrbk.instances.<name>.settings
option_count: 1
source: options.html
---

# services.btrbk.instances.<name>.settings

## services.btrbk.instances.<name>.settings.stream_compress

Compress the btrfs send stream before transferring it from/to remote locations using a compression command. Type: one of “gzip”, “pigz”, “bzip2”, “pbzip2”, “bzip3”, “xz”, “lzo”, “lz4”, “zstd”, “no” Default: "no" Declared by: <nixpkgs/nixos/modules/services/backup/btrbk.nix>
