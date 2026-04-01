---
module: systemd.services.<name>.confinement
option_count: 5
source: options.html
---

# systemd.services.<name>.confinement

## systemd.services.<name>.confinement.enable

If set, all the required runtime store paths for this service are bind-mounted into a tmpfs-based chroot(2). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/systemd-confinement.nix>

## systemd.services.<name>.confinement.packages

Additional packages or strings with context to add to the closure of the chroot. By default, this includes all the packages from the serviceConfig.ExecReload, serviceConfig.ExecStartPost, serviceConfig.ExecStartPre, serviceConfig.ExecStop, serviceConfig.ExecStopPost and serviceConfig.ExecStart options. If you want to have all the dependencies of this systemd unit, you can use confinement.fullUnit. Note The store paths listed in path are not included in the closure as well as paths from other options except those listed above. Type: list of (string or package) Default: [ ] Declared by: <nixpkgs/nixos/modules/security/systemd-confinement.nix>

## systemd.services.<name>.confinement.binSh

The program to make available as /bin/sh inside the chroot. If this is set to null, no /bin/sh is provided at all. This is useful for some applications, which for example use the system(3) library function to execute commands. Type: null or absolute path Default: config.environment.binsh Example: "${pkgs.dash}/bin/dash" Declared by: <nixpkgs/nixos/modules/security/systemd-confinement.nix>

## systemd.services.<name>.confinement.fullUnit

Whether to include the full closure of the systemd unit file into the chroot, instead of just the dependencies for the executables. Warning While it may be tempting to just enable this option to make things work quickly, please be aware that this might add paths to the closure of the chroot that you didn’t anticipate. It’s better to use confinement.packages to explicitly add additional store paths to the chroot. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/systemd-confinement.nix>

## systemd.services.<name>.confinement.mode

The value full-apivfs (the default) sets up private /dev, /proc, /sys, /tmp and /var/tmp file systems in a separate user name space. If this is set to chroot-only, only the file system name space is set up along with the call to chroot(2). In all cases, unless serviceConfig.PrivateTmp=true is set, both /tmp and /var/tmp paths are added to InaccessiblePaths=. This is to overcome options like DynamicUser=true implying PrivateTmp=true without letting it being turned off. Beware however that giving processes the CAP_SYS_ADMIN and @mount privileges can let them undo the effects of InaccessiblePaths=. Note This doesn’t cover network namespaces and is solely for file system level isolation. Type: one of “full-apivfs”, “chroot-only” Default: "full-apivfs" Declared by: <nixpkgs/nixos/modules/security/systemd-confinement.nix>
