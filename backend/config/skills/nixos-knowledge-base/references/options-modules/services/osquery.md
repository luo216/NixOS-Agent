---
module: services.osquery
option_count: 3
source: options.html
---

# services.osquery

## services.osquery.enable

Whether to enable osqueryd daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/osquery.nix>

## services.osquery.flags

Attribute set of flag names and values to be written to the osqueryd flagfile. For more information, refer to https://osquery.readthedocs.io/en/stable/installation/cli-flags. Type: open submodule of attribute set of string Default: { } Example: { config_refresh = "10"; } Declared by: <nixpkgs/nixos/modules/services/monitoring/osquery.nix>

## services.osquery.settings

Configuration to be written to the osqueryd JSON configuration file. To understand the configuration format, refer to https://osquery.readthedocs.io/en/stable/deployment/configuration/#configuration-components. Type: attribute set Default: { } Example: { options = { utc = false; }; } Declared by: <nixpkgs/nixos/modules/services/monitoring/osquery.nix>
