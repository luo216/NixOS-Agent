---
module: services.samba.nmbd
option_count: 2
source: options.html
---

# services.samba.nmbd

## services.samba.nmbd.enable

Whether to enable Samba’s nmbd, which replies to NetBIOS over IP name service requests. It also participates in the browsing protocols which make up the Windows “Network Neighborhood” view. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba.nix>

## services.samba.nmbd.extraArgs

Extra arguments to pass to the nmbd service. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba.nix>
