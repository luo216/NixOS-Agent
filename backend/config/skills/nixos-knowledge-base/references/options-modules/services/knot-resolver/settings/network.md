---
module: services.knot-resolver.settings.network
option_count: 1
source: options.html
---

# services.knot-resolver.settings.network

## services.knot-resolver.settings.network.listen

List of interfaces to listen to and its configuration. Type: list of (open submodule of (YAML 1.1 value)) Default: [ { interface = [ "127.0.0.1" ]; kind = "dns"; freebind = false; } ] ++ lib.optionals config.networking.enableIPv6 [ { interface = [ "::1" ]; kind = "dns"; freebind = false; } ]; Declared by: <nixpkgs/nixos/modules/services/networking/knot-resolver.nix>
