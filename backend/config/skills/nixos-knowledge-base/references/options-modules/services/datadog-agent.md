---
module: services.datadog-agent
option_count: 16
source: options.html
---

# services.datadog-agent

## services.datadog-agent.enable

Whether to enable Datadog-agent v7 monitoring service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/datadog-agent.nix>

## services.datadog-agent.enableLiveProcessCollection

Whether to enable the live process collection agent. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/datadog-agent.nix>

## services.datadog-agent.enableTraceAgent

Whether to enable the trace agent. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/datadog-agent.nix>

## services.datadog-agent.package

The datadog-agent package to use. ::: {.note} The provided package is expected to have an overridable pythonPackages-attribute which configures the Python environment with the Datadog checks. ::: Type: package Default: pkgs.datadog-agent Declared by: <nixpkgs/nixos/modules/services/monitoring/datadog-agent.nix>

## services.datadog-agent.apiKeyFile

Path to a file containing the Datadog API key to associate the agent with your account. Type: absolute path Example: "/run/keys/datadog_api_key" Declared by: <nixpkgs/nixos/modules/services/monitoring/datadog-agent.nix>

## services.datadog-agent.checks

Configuration for all Datadog checks. Keys of this attribute set will be used as the name of the check to create the appropriate configuration in conf.d/$check.d/conf.yaml. The configuration is converted into JSON from the plain Nix language configuration, meaning that you should write configuration adhering to Datadog’s documentation - but in Nix language. Refer to the implementation of this module (specifically the definition of defaultChecks) for an example. Note: The ‘disk’ and ‘network’ check are configured in separate options because they exist by default. Attempting to override their configuration here will have no effect. Type: attribute set of (attribute set) Default: { } Example: { http_check = { init_config = null; instances = [ { name = "some-service"; tags = [ "some-service" ]; url = "http://localhost:1337/healthz"; } ]; }; } Declared by: <nixpkgs/nixos/modules/services/monitoring/datadog-agent.nix>

## services.datadog-agent.ddUrl

Custom dd_url to configure the agent with. Useful if traffic to datadog needs to go through a proxy. Don’t use this to point to another datadog site (EU) - use site instead. Type: null or string Default: null Example: "http://haproxy.example.com:3834" Declared by: <nixpkgs/nixos/modules/services/monitoring/datadog-agent.nix>

## services.datadog-agent.diskCheck

Disk check config Type: attribute set Default: { init_config = { }; instances = [ { use_mount = "false"; } ]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/datadog-agent.nix>

## services.datadog-agent.extraConfig

Extra configuration options that will be merged into the main config file datadog.yaml. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/datadog-agent.nix>

## services.datadog-agent.extraIntegrations

Extra integrations from the Datadog core-integrations repository that should be built and included. By default the included integrations are disk, mongo, network, nginx and postgres. To include additional integrations the name of the derivation and a function to filter its dependencies from the Python package set must be provided. Type: attribute set Default: { } Example: { ntp = pythonPackages: [ pythonPackages.ntplib ]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/datadog-agent.nix>

## services.datadog-agent.hostname

The hostname to show in the Datadog dashboard (optional) Type: null or string Default: null Example: "mymachine.mydomain" Declared by: <nixpkgs/nixos/modules/services/monitoring/datadog-agent.nix>

## services.datadog-agent.logLevel

Logging verbosity. Type: null or one of “DEBUG”, “INFO”, “WARN”, “ERROR” Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/datadog-agent.nix>

## services.datadog-agent.networkCheck

Network check config Type: attribute set Default: { init_config = { }; instances = [ { collect_connection_state = false; excluded_interfaces = [ "lo" "lo0" ]; } ]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/datadog-agent.nix>

## services.datadog-agent.processAgentPackage

Which DataDog v7 agent package to use. Note that the provided package is expected to have an overridable pythonPackages-attribute which configures the Python environment with the Datadog checks. Type: package Default: pkgs.datadog-process-agent Declared by: <nixpkgs/nixos/modules/services/monitoring/datadog-agent.nix>

## services.datadog-agent.site

The datadog site to point the agent towards. Set to datadoghq.eu to point it to their EU site. Type: null or string Default: null Example: "datadoghq.eu" Declared by: <nixpkgs/nixos/modules/services/monitoring/datadog-agent.nix>

## services.datadog-agent.tags

The tags to mark this Datadog agent Type: null or (list of string) Default: null Example: [ "test" "service" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/datadog-agent.nix>
