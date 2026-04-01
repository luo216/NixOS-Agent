---
module: programs.schroot.profiles.<name>
option_count: 3
source: options.html
---

# programs.schroot.profiles.<name>

## programs.schroot.profiles.<name>.copyfiles

A list of files to copy into the chroot from the host system. Type: list of string Example: [ "/etc/resolv.conf" ] Declared by: <nixpkgs/nixos/modules/programs/schroot.nix>

## programs.schroot.profiles.<name>.fstab

A file in the format described in fstab(5), used to mount filesystems inside the chroot. The mount location is relative to the root of the chroot. Type: absolute path Example: pkgs.writeText "my-schroot-fstab" '' /proc /proc none rw,bind 0 0 /sys /sys none rw,bind 0 0 /dev /dev none rw,bind 0 0 /dev/pts /dev/pts none rw,bind 0 0 /home /home none rw,rbind 0 0 /tmp /tmp none rw,bind 0 0 /dev/shm /dev/shm none rw,bind 0 0 /nix /nix none ro,bind 0 0 /run/current-system /run/current-system none rw,bind 0 0 /run/wrappers /run/wrappers none rw,bind 0 0 '' Declared by: <nixpkgs/nixos/modules/programs/schroot.nix>

## programs.schroot.profiles.<name>.nssdatabases

System databases (as described in /etc/nsswitch.conf on GNU/Linux systems) to copy into the chroot from the host. Type: list of string Example: [ "passwd" "shadow" "group" "gshadow" "services" "protocols" "networks" "hosts" ] Declared by: <nixpkgs/nixos/modules/programs/schroot.nix>
