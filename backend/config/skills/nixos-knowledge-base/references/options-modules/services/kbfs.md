---
module: services.kbfs
option_count: 4
source: options.html
---

# services.kbfs

## services.kbfs.enable

Whether to mount the Keybase filesystem. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kbfs.nix>

## services.kbfs.enableRedirector

Whether to enable the Keybase root redirector service, allowing any user to access KBFS files via /keybase, which will show different contents depending on the requester. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kbfs.nix>

## services.kbfs.extraFlags

Additional flags to pass to the Keybase filesystem on launch. Type: list of string Default: [ ] Example: [ "-label kbfs" "-mount-type normal" ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kbfs.nix>

## services.kbfs.mountPoint

Mountpoint for the Keybase filesystem. Type: string Default: "%h/keybase" Example: "/keybase" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kbfs.nix>
