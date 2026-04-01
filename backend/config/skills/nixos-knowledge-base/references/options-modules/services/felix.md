---
module: services.felix
option_count: 4
source: options.html
---

# services.felix

## services.felix.enable

Whether to enable the Apache Felix OSGi service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/felix.nix>

## services.felix.bundles

List of bundles that should be activated on startup Type: list of package Default: [ pkgs.felix_remoteshell ] Declared by: <nixpkgs/nixos/modules/services/misc/felix.nix>

## services.felix.group

Group account under which Apache Felix runs. Type: string Default: "osgi" Declared by: <nixpkgs/nixos/modules/services/misc/felix.nix>

## services.felix.user

User account under which Apache Felix runs. Type: string Default: "osgi" Declared by: <nixpkgs/nixos/modules/services/misc/felix.nix>
