---
module: services.kea.ctrl-agent
option_count: 4
source: options.html
---

# services.kea.ctrl-agent

## services.kea.ctrl-agent.enable

Whether to enable Kea Control Agent. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/kea.nix>

## services.kea.ctrl-agent.configFile

Kea Control Agent configuration as a path, see https://kea.readthedocs.io/en/kea-3.0.2/arm/agent.html. Takes preference over settings. Most users should prefer using settings instead. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/kea.nix>

## services.kea.ctrl-agent.extraArgs

List of additional arguments to pass to the daemon. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/kea.nix>

## services.kea.ctrl-agent.settings

Kea Control Agent configuration as an attribute set, see https://kea.readthedocs.io/en/kea-3.0.2/arm/agent.html. Type: JSON value Default: null Declared by: <nixpkgs/nixos/modules/services/networking/kea.nix>
