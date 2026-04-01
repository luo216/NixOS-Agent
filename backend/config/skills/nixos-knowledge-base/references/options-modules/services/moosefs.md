---
module: services.moosefs
option_count: 2
source: options.html
---

# services.moosefs

## services.moosefs.masterHost

IP or DNS name of the MooseFS master server. Type: string Default: null Declared by: <nixpkgs/nixos/modules/services/network-filesystems/moosefs.nix>

## services.moosefs.runAsUser

Run daemons as moosefs user instead of root for better security. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/moosefs.nix>
