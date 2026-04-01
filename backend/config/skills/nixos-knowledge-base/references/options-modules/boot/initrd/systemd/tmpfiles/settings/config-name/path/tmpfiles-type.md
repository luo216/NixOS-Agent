---
module: boot.initrd.systemd.tmpfiles.settings.<config-name>.<path>.<tmpfiles-type>
option_count: 6
source: options.html
---

# boot.initrd.systemd.tmpfiles.settings.<config-name>.<path>.<tmpfiles-type>

## boot.initrd.systemd.tmpfiles.settings.<config-name>.<path>.<tmpfiles-type>.age

Delete a file when it reaches a certain age. If a file or directory is older than the current time minus the age field, it is deleted. If set to "-" no automatic clean-up is done. Type: string Default: "-" Example: "10d" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/tmpfiles.nix>

## boot.initrd.systemd.tmpfiles.settings.<config-name>.<path>.<tmpfiles-type>.argument

An argument whose meaning depends on the type of operation. Please see the upstream documentation for the meaning of this parameter in different situations: tmpfiles.d(5) Type: string Default: "" Example: "" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/tmpfiles.nix>

## boot.initrd.systemd.tmpfiles.settings.<config-name>.<path>.<tmpfiles-type>.group

The group of the file. This may either be a numeric ID or a user/group name. If omitted or when set to "-", the user and group of the user who invokes systemd-tmpfiles is used. Type: string Default: "-" Example: "root" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/tmpfiles.nix>

## boot.initrd.systemd.tmpfiles.settings.<config-name>.<path>.<tmpfiles-type>.mode

The file access mode to use when creating this file or directory. Type: string Default: "-" Example: "0755" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/tmpfiles.nix>

## boot.initrd.systemd.tmpfiles.settings.<config-name>.<path>.<tmpfiles-type>.type

The type of operation to perform on the file. The type consists of a single letter and optionally one or more modifier characters. Please see the upstream documentation for the available types and more details: tmpfiles.d(5) Type: string Default: "‹tmpfiles-type›" Example: "d" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/tmpfiles.nix>

## boot.initrd.systemd.tmpfiles.settings.<config-name>.<path>.<tmpfiles-type>.user

The user of the file. This may either be a numeric ID or a user/group name. If omitted or when set to "-", the user and group of the user who invokes systemd-tmpfiles is used. Type: string Default: "-" Example: "root" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/tmpfiles.nix>
