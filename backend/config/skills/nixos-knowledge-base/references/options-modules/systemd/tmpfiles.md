---
module: systemd.tmpfiles
option_count: 3
source: options.html
---

# systemd.tmpfiles

## systemd.tmpfiles.packages

List of packages containing systemd-tmpfiles rules. All files ending in .conf found in «pkg»/lib/tmpfiles.d will be included. If this folder does not exist or does not contain any files an error will be returned instead. If a lib output is available, rules are searched there and only there. If there is no lib output it will fall back to out and if that does not exist either, the default output will be used. Type: list of package Default: [ ] Example: [ pkgs.lvm2 ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd/tmpfiles.nix>

## systemd.tmpfiles.rules

Rules for creation, deletion and cleaning of volatile and temporary files automatically. See tmpfiles.d(5) for the exact format. Type: list of string Default: [ ] Example: [ "d /tmp 1777 root root 10d" ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd/tmpfiles.nix>

## systemd.tmpfiles.settings

Declare systemd-tmpfiles rules to create, delete, and clean up volatile and temporary files and directories. Even though the service is called *tmp*files you can also create persistent files. Type: attribute set of attribute set of attribute set of (submodule) Default: { } Example: { "10-mypackage" = { "/var/lib/my-service/statefolder" = { d = { group = "root"; mode = "0755"; user = "root"; }; }; }; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/tmpfiles.nix>
