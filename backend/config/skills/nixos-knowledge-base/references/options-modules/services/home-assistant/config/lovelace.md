---
module: services.home-assistant.config.lovelace
option_count: 1
source: options.html
---

# services.home-assistant.config.lovelace

## services.home-assistant.config.lovelace.mode

In what mode should the main Lovelace panel be, yaml or storage (UI managed). Type: one of “yaml”, “storage” Default: if (cfg.lovelaceConfig != null || cfg.lovelaceConfigFile != null) then "yaml" else "storage"; Example: "yaml" Declared by: <nixpkgs/nixos/modules/services/home-automation/home-assistant.nix>
