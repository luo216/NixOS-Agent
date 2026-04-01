---
module: services.gnunet
option_count: 3
source: options.html
---

# services.gnunet

## services.gnunet.enable

Whether to run the GNUnet daemon. GNUnet is GNU’s anonymous peer-to-peer communication and file sharing framework. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/gnunet.nix>

## services.gnunet.package

The gnunet package to use. Type: package Default: pkgs.gnunet Example: gnunet_git Declared by: <nixpkgs/nixos/modules/services/networking/gnunet.nix>

## services.gnunet.extraOptions

Additional options that will be copied verbatim in gnunet.conf. See gnunet.conf(5) for details. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/gnunet.nix>
