---
module: security.pam.mount
option_count: 12
source: options.html
---

# security.pam.mount

## security.pam.mount.enable

Enable PAM mount system to mount filesystems on user login. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam_mount.nix>

## security.pam.mount.additionalSearchPaths

Additional programs to include in the search path of pam_mount. Useful for example if you want to use some FUSE filesystems like bindfs. Type: list of package Default: [ ] Example: [ pkgs.bindfs ] Declared by: <nixpkgs/nixos/modules/security/pam_mount.nix>

## security.pam.mount.createMountPoints

Create mountpoints for volumes if they do not exist. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/security/pam_mount.nix>

## security.pam.mount.cryptMountOptions

Global mount options that apply to every crypt volume. You can define volume-specific options in the volume definitions. Type: list of string Default: [ ] Example: [ "allow_discard" ] Declared by: <nixpkgs/nixos/modules/security/pam_mount.nix>

## security.pam.mount.debugLevel

Sets the Debug-Level. 0 disables debugging, 1 enables pam_mount tracing, and 2 additionally enables tracing in mount.crypt. The default is 0. For more information, visit https://pam-mount.sourceforge.net/pam_mount.conf.5.html. Type: signed integer Default: 0 Example: 1 Declared by: <nixpkgs/nixos/modules/security/pam_mount.nix>

## security.pam.mount.extraVolumes

List of volume definitions for pam_mount. For more information, visit https://pam-mount.sourceforge.net/pam_mount.conf.5.html. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/security/pam_mount.nix>

## security.pam.mount.fuseMountOptions

Global mount options that apply to every FUSE volume. You can define volume-specific options in the volume definitions. Type: list of string Default: [ ] Example: [ "nodev" "nosuid" "force-user=%(USER)" "gid=%(USERGID)" "perms=0700" "chmod-deny" "chown-deny" "chgrp-deny" ] Declared by: <nixpkgs/nixos/modules/security/pam_mount.nix>

## security.pam.mount.logoutHup

Kill remaining processes after logout by sending a SIGHUP. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam_mount.nix>

## security.pam.mount.logoutKill

Kill remaining processes after logout by sending a SIGKILL. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam_mount.nix>

## security.pam.mount.logoutTerm

Kill remaining processes after logout by sending a SIGTERM. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam_mount.nix>

## security.pam.mount.logoutWait

Amount of microseconds to wait until killing remaining processes after final logout. For more information, visit https://pam-mount.sourceforge.net/pam_mount.conf.5.html. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/security/pam_mount.nix>

## security.pam.mount.removeCreatedMountPoints

Remove mountpoints created by pam_mount after logout. This only affects mountpoints that have been created by pam_mount in the same session. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/security/pam_mount.nix>
