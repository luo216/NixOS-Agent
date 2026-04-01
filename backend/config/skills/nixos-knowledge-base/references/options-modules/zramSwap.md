---
module: zramSwap
option_count: 7
source: options.html
---

# zramSwap

## zramSwap.enable

Enable in-memory compressed devices and swap space provided by the zram kernel module. See https://www.kernel.org/doc/Documentation/blockdev/zram.txt . Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/zram.nix>

## zramSwap.algorithm

Compression algorithm. lzo has good compression, but is slow. lz4 has bad compression, but is fast. zstd is both good compression and fast, but requires newer kernel. You can check what other algorithms are supported by your zram device with cat /sys/class/block/zram*/comp_algorithm Type: one of “842”, “lzo”, “lzo-rle”, “lz4”, “lz4hc”, “zstd” or string Default: "zstd" Example: "lz4" Declared by: <nixpkgs/nixos/modules/config/zram.nix>

## zramSwap.memoryMax

Maximum total amount of memory (in bytes) that can be stored in the zram swap devices. If set, the smaller one of this option and memoryPercent would be used. This doesn’t define how much memory will be used by the zram swap devices. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/config/zram.nix>

## zramSwap.memoryPercent

Maximum total amount of memory that can be stored in the zram swap devices (as a percentage of your total memory). Defaults to 1/2 of your total RAM. Run zramctl to check how good memory is compressed. This doesn’t define how much memory will be used by the zram swap devices. Type: positive integer, meaning >0 Default: 50 Declared by: <nixpkgs/nixos/modules/config/zram.nix>

## zramSwap.priority

Priority of the zram swap devices. It should be a number higher than the priority of your disk-based swap devices (so that the system will fill the zram swap devices before falling back to disk swap). Type: signed integer Default: 5 Declared by: <nixpkgs/nixos/modules/config/zram.nix>

## zramSwap.swapDevices

Number of zram devices to be used as swap, recommended is 1. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/config/zram.nix>

## zramSwap.writebackDevice

Write incompressible pages to this device, as there’s no gain from keeping them in RAM. Type: null or absolute path Default: null Example: "/dev/zvol/tarta-zoot/swap-writeback" Declared by: <nixpkgs/nixos/modules/config/zram.nix>
