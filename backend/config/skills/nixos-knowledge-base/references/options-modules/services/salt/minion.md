---
module: services.salt.minion
option_count: 2
source: options.html
---

# services.salt.minion

## services.salt.minion.enable

Whether to enable Salt configuration management system minion service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/admin/salt/minion.nix>

## services.salt.minion.configuration

Salt minion configuration as Nix attribute set. See https://docs.saltstack.com/en/latest/ref/configuration/minion.html for details. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/admin/salt/minion.nix>
