---
module: services.knot-resolver.settings
option_count: 1
source: options.html
---

# services.knot-resolver.settings

## services.knot-resolver.settings.workers

The number of running kresd (Knot Resolver daemon) workers. If set to ‘auto’, it is equal to number of CPUs available. Type: value “auto” (singular enum) or (unsigned integer, meaning >=0) Default: 1 Declared by: <nixpkgs/nixos/modules/services/networking/knot-resolver.nix>
