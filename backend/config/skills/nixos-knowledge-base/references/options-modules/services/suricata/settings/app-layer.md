---
module: services.suricata.settings.app-layer
option_count: 2
source: options.html
---

# services.suricata.settings.app-layer

## services.suricata.settings.app-layer.error-policy

The error-policy setting applies to all app-layer parsers. Values can be “drop-flow”, “pass-flow”, “bypass”, “drop-packet”, “pass-packet”, “reject” or “ignore” (the default). Type: one of “drop-flow”, “pass-flow”, “bypass”, “drop-packet”, “pass-packet”, “reject”, “ignore” Default: "ignore" Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.app-layer.protocols

app-layer protocols, see upstream docs. Type: null or (attribute set of (open submodule of (YAML 1.1 value))) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>
