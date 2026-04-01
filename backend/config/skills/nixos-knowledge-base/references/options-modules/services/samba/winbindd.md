---
module: services.samba.winbindd
option_count: 2
source: options.html
---

# services.samba.winbindd

## services.samba.winbindd.enable

Whether to enable Samba’s winbindd, which provides a number of services to the Name Service Switch capability found in most modern C libraries, to arbitrary applications via PAM and ntlm_auth and to Samba itself. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba.nix>

## services.samba.winbindd.extraArgs

Extra arguments to pass to the winbindd service. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/samba.nix>
