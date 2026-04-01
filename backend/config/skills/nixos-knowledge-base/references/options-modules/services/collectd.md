---
module: services.collectd
option_count: 10
source: options.html
---

# services.collectd

## services.collectd.enable

Whether to enable collectd agent. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/collectd.nix>

## services.collectd.package

The collectd package to use. Type: package Default: pkgs.collectd Declared by: <nixpkgs/nixos/modules/services/monitoring/collectd.nix>

## services.collectd.autoLoadPlugin

Enable plugin autoloading. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/collectd.nix>

## services.collectd.buildMinimalPackage

Build a minimal collectd package with only the configured services.collectd.plugins Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/collectd.nix>

## services.collectd.dataDir

Data directory for collectd agent. Type: absolute path Default: "/var/lib/collectd" Declared by: <nixpkgs/nixos/modules/services/monitoring/collectd.nix>

## services.collectd.extraConfig

Extra configuration for collectd. Use mkBefore to add lines before the default config, and mkAfter to add them below. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/collectd.nix>

## services.collectd.include

Additional paths to load config from. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/collectd.nix>

## services.collectd.plugins

Attribute set of plugin names to plugin config segments Type: attribute set of strings concatenated with “\n” Default: { } Example: { cpu = ""; memory = ""; network = "Server 192.168.1.1 25826"; } Declared by: <nixpkgs/nixos/modules/services/monitoring/collectd.nix>

## services.collectd.user

User under which to run collectd. Type: null or string Default: "collectd" Declared by: <nixpkgs/nixos/modules/services/monitoring/collectd.nix>

## services.collectd.validateConfig

Validate the syntax of collectd configuration file at build time. Disable this if you use the Include directive on files unavailable in the build sandbox, or when cross-compiling. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/collectd.nix>
