---
module: services.firezone.server.domain
option_count: 3
source: options.html
---

# services.firezone.server.domain

## services.firezone.server.domain.enable

Whether to enable the Firezone domain server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.domain.package

The firezone-server-domain package to use. Type: package Default: pkgs.firezone-server-domain Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.domain.settings

Environment variables for this component of the Firezone server. For a list of available variables, please refer to the upstream definitions. Some variables like OUTBOUND_EMAIL_ADAPTER_OPTS require json values for which you can use VAR = builtins.toJSON { /* ... */ }. This component will automatically inherit all variables defined via services.firezone.server.settings and services.firezone.server.settingsSecret, but which can be overwritten by this option. Type: open submodule of attribute set of (boolean or floating point number or signed integer or string or absolute path or package) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>
