---
module: services.icingaweb2.modules.monitoring
option_count: 5
source: options.html
---

# services.icingaweb2.modules.monitoring

## services.icingaweb2.modules.monitoring.enable

Whether to enable the icingaweb2 monitoring module. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/icingaweb2/module-monitoring.nix>

## services.icingaweb2.modules.monitoring.backends

Monitoring backends to define Type: attribute set of (submodule) Default: { icinga = { resource = "icinga_ido"; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/icingaweb2/module-monitoring.nix>

## services.icingaweb2.modules.monitoring.mutableBackends

Make backends.ini of the monitoring module mutable (e.g. via the web interface). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/icingaweb2/module-monitoring.nix>

## services.icingaweb2.modules.monitoring.mutableTransports

Make commandtransports.ini of the monitoring module mutable (e.g. via the web interface). Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/icingaweb2/module-monitoring.nix>

## services.icingaweb2.modules.monitoring.transports

Command transports to define Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/icingaweb2/module-monitoring.nix>
