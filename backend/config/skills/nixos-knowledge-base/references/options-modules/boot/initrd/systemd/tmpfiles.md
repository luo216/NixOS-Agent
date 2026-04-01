---
module: boot.initrd.systemd.tmpfiles
option_count: 1
source: options.html
---

# boot.initrd.systemd.tmpfiles

## boot.initrd.systemd.tmpfiles.settings

Similar to systemd.tmpfiles.settings but the rules are only applied by systemd-tmpfiles before initrd-switch-root.target. See bootup(7). Type: attribute set of attribute set of attribute set of (submodule) Default: { } Example: { "10-mypackage" = { "/var/lib/my-service/statefolder" = { d = { group = "root"; mode = "0755"; user = "root"; }; }; }; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/tmpfiles.nix>
