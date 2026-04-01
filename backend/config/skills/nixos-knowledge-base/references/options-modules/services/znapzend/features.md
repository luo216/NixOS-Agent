---
module: services.znapzend.features
option_count: 7
source: options.html
---

# services.znapzend.features

## services.znapzend.features.compressed

Whether to enable compressed feature which adds the options -Lce to the zfs send command. When this is enabled, make sure that both the sending and receiving pool have the same relevant features enabled. Using -c will skip unnecessary decompress-compress stages, -L is for large block support and -e is for embedded data support. see znapzend(1) and zfs(8) for more info . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.features.lowmemRecurse

Whether to enable use lowmemRecurse on systems where you have too many datasets, so a recursive listing of attributes to find backup plans exhausts the memory available to znapzend: instead, go the slower way to first list all impacted dataset names, and then query their configs one by one . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.features.oracleMode

Whether to enable destroying snapshots one by one instead of using one long argument list. If source and destination are out of sync for a long time, you may have so many snapshots to destroy that the argument gets is too long and the command fails . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.features.recvu

Whether to enable recvu feature which uses -u on the receiving end to keep the destination filesystem unmounted . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.features.sendRaw

Whether to enable sendRaw feature which adds the options -w to the zfs send command. For encrypted source datasets this instructs zfs not to decrypt before sending which results in a remote backup that can’t be read without the encryption key/passphrase, useful when the remote isn’t fully trusted or not physically secure. This option must be used consistently, raw incrementals cannot be based on non-raw snapshots and vice versa . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.features.skipIntermediates

Whether to enable the skipIntermediates feature to send a single increment between latest common snapshot and the newly made one. It may skip several source snaps if the destination was offline for some time, and it should skip snapshots not managed by znapzend. Normally for online destinations, the new snapshot is sent as soon as it is created on the source, so there are no automatic increments to skip . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.features.zfsGetType

Whether to enable using zfsGetType if your zfs get supports a -t argument for filtering by dataset type at all AND lists properties for snapshots by default when recursing, so that there is too much data to process while searching for backup plans. If these two conditions apply to your system, the time needed for a --recursive search for backup plans can literally differ by hundreds of times (depending on the amount of snapshots in that dataset tree… and a decent backup plan will ensure you have a lot of those), so you would benefit from requesting this feature . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>
