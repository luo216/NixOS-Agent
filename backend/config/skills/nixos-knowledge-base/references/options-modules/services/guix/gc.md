---
module: services.guix.gc
option_count: 3
source: options.html
---

# services.guix.gc

## services.guix.gc.enable

Whether to enable automatic garbage collection service for Guix. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/guix>

## services.guix.gc.dates

How often the garbage collection occurs. This takes the time format from systemd.time(7). Type: string Default: "03:15" Example: "weekly" Declared by: <nixpkgs/nixos/modules/services/misc/guix>

## services.guix.gc.extraArgs

List of arguments to be passed to guix gc. When given no option, it will try to collect all garbage which is often inconvenient so it is recommended to set some options. Type: list of string Default: [ ] Example: [ "--delete-generations=1m" "--free-space=10G" "--optimize" ] Declared by: <nixpkgs/nixos/modules/services/misc/guix>
