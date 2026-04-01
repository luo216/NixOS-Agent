---
module: services.nfs.idmapd
option_count: 1
source: options.html
---

# services.nfs.idmapd

## services.nfs.idmapd.settings

libnfsidmap configuration. Refer to https://linux.die.net/man/5/idmapd.conf for details. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { Translation = { GSS-Methods = "static,nsswitch"; }; Static = { "root/hostname.domain.com@REALM.COM" = "root"; }; } Declared by: <nixpkgs/nixos/modules/tasks/filesystems/nfs.nix>
