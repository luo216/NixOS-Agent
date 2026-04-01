---
module: services.hercules-ci-agent
option_count: 3
source: options.html
---

# services.hercules-ci-agent

## services.hercules-ci-agent.enable

Enable to run Hercules CI Agent as a system service. Hercules CI is a continuous integation service that is centered around Nix. Support is available at help@hercules-ci.com. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hercules-ci-agent/common.nix>

## services.hercules-ci-agent.package

The hercules-ci-agent package to use. Type: package Default: pkgs.hercules-ci-agent Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hercules-ci-agent/common.nix>

## services.hercules-ci-agent.settings

These settings are written to the agent.toml file. Not all settings are listed as options, can be set nonetheless. For the exhaustive list of settings, see https://docs.hercules-ci.com/hercules-ci/reference/agent-config/. Type: open submodule of (TOML value) Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hercules-ci-agent/common.nix>
