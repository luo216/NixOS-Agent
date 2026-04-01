---
module: services.cachefilesd
option_count: 3
source: options.html
---

# services.cachefilesd

## services.cachefilesd.enable

Whether to enable cachefilesd network filesystems caching daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/cachefilesd.nix>

## services.cachefilesd.cacheDir

Directory to contain filesystem cache. Type: string Default: "/var/cache/fscache" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/cachefilesd.nix>

## services.cachefilesd.extraConfig

Additional configuration file entries. See cachefilesd.conf(5) for more information. Type: strings concatenated with “\n” Default: "" Example: "brun 10%" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/cachefilesd.nix>
