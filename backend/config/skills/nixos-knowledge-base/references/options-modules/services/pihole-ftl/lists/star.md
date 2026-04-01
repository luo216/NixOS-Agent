---
module: services.pihole-ftl.lists.*
option_count: 4
source: options.html
---

# services.pihole-ftl.lists.*

## services.pihole-ftl.lists.*.enabled

Whether this list is enabled Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>

## services.pihole-ftl.lists.*.description

Description of the list Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>

## services.pihole-ftl.lists.*.type

Whether domains on this list should be explicitly allowed, or blocked Type: one of “allow”, “block” Default: "block" Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>

## services.pihole-ftl.lists.*.url

URL of the domain list Type: string Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>
