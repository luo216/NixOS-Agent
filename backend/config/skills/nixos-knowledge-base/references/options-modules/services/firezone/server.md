---
module: services.firezone.server
option_count: 6
source: options.html
---

# services.firezone.server

## services.firezone.server.enable

Whether to enable all Firezone components. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.enableLocalDB

Whether to enable a local postgresql database for Firezone. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.clusterHosts

A list of components and their hosts that are part of this cluster. For a single-machine setup, the default value will be sufficient. This value will automatically set ERLANG_CLUSTER_ADAPTER_CONFIG. The format is <COMPONENT_NAME>@<HOSTNAME>. Type: list of string Default: [ "api@localhost.localdomain" "web@localhost.localdomain" "domain@localhost.localdomain" ] Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.openClusterFirewall

Opens up the erlang distribution port of all enabled components to allow reaching the server cluster from the internet. You only need to set this if you are actually distributing your cluster across multiple machines. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.settings

Environment variables for the Firezone server. For a list of available variables, please refer to the upstream definitions. Some variables like OUTBOUND_EMAIL_ADAPTER_OPTS require json values for which you can use VAR = builtins.toJSON { /* ... */ }. Each component has an additional settings option which allows you to override specific variables passed to that component. Type: open submodule of attribute set of (boolean or floating point number or signed integer or string or absolute path or package) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.settingsSecret

This is a convenience option which allows you to set secret values for environment variables by specifying a file which will contain the value at runtime. Before starting the server, the content of each file will be loaded into the respective environment variable. Otherwise, this option is equivalent to services.firezone.server.settings. Refer to the settings option for more information regarding the actual variables and how filtering rules are applied for each component. Type: open submodule of attribute set of absolute path Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>
