---
module: services.atd
option_count: 2
source: options.html
---

# services.atd

## services.atd.enable

Whether to enable the at daemon, a command scheduler. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/scheduling/atd.nix>

## services.atd.allowEveryone

Whether to make /var/spool/at{jobs,spool} writeable by everyone (and sticky). This is normally not needed since the at commands are setuid/setgid atd. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/scheduling/atd.nix>
