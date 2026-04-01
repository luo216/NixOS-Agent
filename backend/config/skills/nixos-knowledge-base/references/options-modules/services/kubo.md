---
module: services.kubo
option_count: 15
source: options.html
---

# services.kubo

## services.kubo.enable

Whether to enable the Interplanetary File System (WARNING: may cause severe network degradation). NOTE: after enabling this option and rebuilding your system, you need to log out and back in for the IPFS_PATH environment variable to be present in your shell. Until you do that, the CLI tools won’t be able to talk to the daemon by default . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kubo.nix>

## services.kubo.enableGC

Whether to enable automatic garbage collection Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kubo.nix>

## services.kubo.package

The kubo package to use. Type: package Default: pkgs.kubo Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kubo.nix>

## services.kubo.autoMigrate

Whether Kubo should try to migrate its filesystem repository automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kubo.nix>

## services.kubo.autoMount

Whether Kubo should try to mount /ipfs, /ipns and /mfs at startup. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kubo.nix>

## services.kubo.dataDir

The data dir for Kubo Type: string Default: if lib.versionAtLeast config.system.stateVersion "17.09" then "/var/lib/ipfs" else "/var/lib/ipfs/.ipfs" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kubo.nix>

## services.kubo.defaultMode

systemd service that is enabled by default Type: one of “online”, “offline”, “norouting” Default: "online" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kubo.nix>

## services.kubo.emptyRepo

If set to false, the repo will be initialized with help files Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kubo.nix>

## services.kubo.extraFlags

Extra flags passed to the Kubo daemon Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kubo.nix>

## services.kubo.group

Group under which the Kubo daemon runs Type: string Default: "ipfs" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kubo.nix>

## services.kubo.localDiscovery

Whether to enable local discovery for the Kubo daemon. This will allow Kubo to scan ports on your local network. Some hosting services will ban you if you do this. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kubo.nix>

## services.kubo.serviceFdlimit

The fdlimit for the Kubo systemd unit or null to have the daemon attempt to manage it Type: null or signed integer Default: null Example: 65536 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kubo.nix>

## services.kubo.settings

Attrset of daemon configuration. See https://github.com/ipfs/kubo/blob/master/docs/config.md for reference. You can’t set Identity or Pinning. Type: open submodule of (JSON value) Default: { } Example: { Bootstrap = [ "/ip4/128.199.219.111/tcp/4001/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu" "/ip4/162.243.248.213/tcp/4001/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm" ]; Datastore = { StorageMax = "100GB"; }; Discovery = { MDNS = { Enabled = false; }; }; Swarm = { AddrFilters = null; }; } Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kubo.nix>

## services.kubo.startWhenNeeded

Whether to use socket activation to start Kubo when needed. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kubo.nix>

## services.kubo.user

User under which the Kubo daemon runs Type: string Default: "ipfs" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kubo.nix>
