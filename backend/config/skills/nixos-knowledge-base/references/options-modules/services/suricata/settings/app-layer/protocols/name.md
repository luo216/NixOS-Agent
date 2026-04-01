---
module: services.suricata.settings.app-layer.protocols.<name>
option_count: 1
source: options.html
---

# services.suricata.settings.app-layer.protocols.<name>

## services.suricata.settings.app-layer.protocols.<name>.enabled

The option “enabled” takes 3 values - “yes”, “no”, “detection-only”. “yes” enables both detection and the parser, “no” disables both, and “detection-only” enables protocol detection only (parser disabled). Type: one of “yes”, “no”, “detection-only” Default: "no" Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>
