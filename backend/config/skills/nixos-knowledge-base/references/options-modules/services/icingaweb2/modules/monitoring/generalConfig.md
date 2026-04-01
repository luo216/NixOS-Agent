---
module: services.icingaweb2.modules.monitoring.generalConfig
option_count: 2
source: options.html
---

# services.icingaweb2.modules.monitoring.generalConfig

## services.icingaweb2.modules.monitoring.generalConfig.mutable

Make config.ini of the monitoring module mutable (e.g. via the web interface). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/icingaweb2/module-monitoring.nix>

## services.icingaweb2.modules.monitoring.generalConfig.protectedVars

List of string patterns for custom variables which should be excluded from user’s view. Type: list of string Default: [ "*pw*" "*pass*" "community" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/icingaweb2/module-monitoring.nix>
