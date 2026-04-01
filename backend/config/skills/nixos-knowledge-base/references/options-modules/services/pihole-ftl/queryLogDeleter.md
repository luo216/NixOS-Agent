---
module: services.pihole-ftl.queryLogDeleter
option_count: 3
source: options.html
---

# services.pihole-ftl.queryLogDeleter

## services.pihole-ftl.queryLogDeleter.enable

Whether to enable Pi-hole FTL DNS query log deleter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>

## services.pihole-ftl.queryLogDeleter.age

Delete DNS query logs older than this many days, if services.pihole-ftl.queryLogDeleter.enable is on. Type: signed integer Default: 90 Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>

## services.pihole-ftl.queryLogDeleter.interval

How often the query log deleter is run. See systemd.time(7) for more information about the format. Type: string Default: "weekly" Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>
