---
module: services.nzbhydra2
option_count: 4
source: options.html
---

# services.nzbhydra2

## services.nzbhydra2.enable

Whether to enable NZBHydra2, Usenet meta search. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/nzbhydra2.nix>

## services.nzbhydra2.package

The nzbhydra2 package to use. Type: package Default: pkgs.nzbhydra2 Declared by: <nixpkgs/nixos/modules/services/misc/nzbhydra2.nix>

## services.nzbhydra2.dataDir

The directory where NZBHydra2 stores its data files. Type: string Default: "/var/lib/nzbhydra2" Declared by: <nixpkgs/nixos/modules/services/misc/nzbhydra2.nix>

## services.nzbhydra2.openFirewall

Open ports in the firewall for the NZBHydra2 web interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/nzbhydra2.nix>
