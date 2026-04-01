---
module: services.mackerel-agent
option_count: 5
source: options.html
---

# services.mackerel-agent

## services.mackerel-agent.enable

Whether to enable mackerel.io agent. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/mackerel-agent.nix>

## services.mackerel-agent.apiKeyFile

Path to file containing the Mackerel API key. The file should contain a single line of the following form: apikey = "EXAMPLE_API_KEY" Type: absolute path Example: "/run/keys/mackerel-api-key" Declared by: <nixpkgs/nixos/modules/services/monitoring/mackerel-agent.nix>

## services.mackerel-agent.autoRetirement

Whether to enable retiring the host upon OS shutdown . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/mackerel-agent.nix>

## services.mackerel-agent.runAsRoot

Whether to enable running as root. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/mackerel-agent.nix>

## services.mackerel-agent.settings

Options for mackerel-agent.conf. Documentation: https://mackerel.io/docs/entry/spec/agent Type: open submodule of (TOML value) Default: { } Example: { silent = false; verbose = false; } Declared by: <nixpkgs/nixos/modules/services/monitoring/mackerel-agent.nix>
