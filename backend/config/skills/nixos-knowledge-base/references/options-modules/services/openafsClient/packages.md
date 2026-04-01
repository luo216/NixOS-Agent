---
module: services.openafsClient.packages
option_count: 2
source: options.html
---

# services.openafsClient.packages

## services.openafsClient.packages.module

OpenAFS kernel module package. MUST match the userland package! Type: package Default: config.boot.kernelPackages.openafs Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/client.nix>

## services.openafsClient.packages.programs

OpenAFS programs package. MUST match the kernel module package! Type: package Default: getBin pkgs.openafs Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/client.nix>
