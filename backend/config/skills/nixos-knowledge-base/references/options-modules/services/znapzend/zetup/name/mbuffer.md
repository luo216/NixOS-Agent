---
module: services.znapzend.zetup.<name>.mbuffer
option_count: 3
source: options.html
---

# services.znapzend.zetup.<name>.mbuffer

## services.znapzend.zetup.<name>.mbuffer.enable

Whether to use mbuffer. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.zetup.<name>.mbuffer.port

Port to use for mbuffer. If this is null, it will run mbuffer through ssh. If this is not null, it will run mbuffer directly through TCP, which is not encrypted but faster. In that case the given port needs to be open on the destination host. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.zetup.<name>.mbuffer.size

The size for mbuffer. Supports the units b, k, M, G. Type: string of the form number{b|k|M|G} Default: "1G" Example: "128M" Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>
