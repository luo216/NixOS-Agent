---
module: services.buildkite-agents.<name>
option_count: 13
source: options.html
---

# services.buildkite-agents.<name>

## services.buildkite-agents.<name>.enable

Whether to enable this buildkite agent Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildkite-agents.nix>

## services.buildkite-agents.<name>.package

The buildkite-agent package to use. Type: package Default: pkgs.buildkite-agent Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildkite-agents.nix>

## services.buildkite-agents.<name>.dataDir

The workdir for the agent Type: string Default: "/var/lib/buildkite-agent-‹name›" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildkite-agents.nix>

## services.buildkite-agents.<name>.extraConfig

Extra lines to be added verbatim to the configuration file. Type: strings concatenated with “\n” Default: "" Example: "debug=true" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildkite-agents.nix>

## services.buildkite-agents.<name>.extraGroups

Groups the user for this buildkite agent should belong to Type: list of string Default: [ "keys" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildkite-agents.nix>

## services.buildkite-agents.<name>.hooks

“Agent” hooks to install. See https://buildkite.com/docs/agent/v3/hooks for possible options. Type: attribute set of strings concatenated with “\n” Default: { } Example: { environment = '' export SECRET_VAR=`head -1 /run/keys/secret` ''; } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildkite-agents.nix>

## services.buildkite-agents.<name>.hooksPath

Path to the directory storing the hooks. Consider using services.buildkite-agents.<name>.hooks.<name> instead. Type: absolute path Default: generated from services.buildkite-agents.<name>.hooks Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildkite-agents.nix>

## services.buildkite-agents.<name>.name

The name of the agent as seen in the buildkite dashboard. Type: string Default: "%hostname-‹name›-%n" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildkite-agents.nix>

## services.buildkite-agents.<name>.privateSshKeyPath

OpenSSH private key A run-time path to the key file, which is supposed to be provisioned outside of Nix store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildkite-agents.nix>

## services.buildkite-agents.<name>.runtimePackages

Add programs to the buildkite-agent environment Type: list of package Default: [ pkgs.bash pkgs.gnutar pkgs.gzip pkgs.git pkgs.nix ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildkite-agents.nix>

## services.buildkite-agents.<name>.shell

Command that buildkite-agent 3 will execute when it spawns a shell. Type: string Default: "${pkgs.bash}/bin/bash -e -c" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildkite-agents.nix>

## services.buildkite-agents.<name>.tags

Tags for the agent. Type: attribute set of (string or list of string) Default: { } Example: { docker = "true"; queue = "default"; ruby2 = "true"; } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildkite-agents.nix>

## services.buildkite-agents.<name>.tokenPath

The token from your Buildkite “Agents” page. A run-time path to the token file, which is supposed to be provisioned outside of Nix store. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildkite-agents.nix>
