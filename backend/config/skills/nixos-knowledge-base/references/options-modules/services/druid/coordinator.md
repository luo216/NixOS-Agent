---
module: services.druid.coordinator
option_count: 6
source: options.html
---

# services.druid.coordinator

## services.druid.coordinator.enable

Whether to enable Druid Coordinator. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>

## services.druid.coordinator.config

(key=value) Configuration to be written to runtime.properties of the druid Druid Coordinator https://druid.apache.org/docs/latest/configuration/index.html Type: attribute set of anything Default: { } Example: { "druid.plainTextPort" = "8082"; "druid.service" = "servicename"; } Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>

## services.druid.coordinator.jdk

The JDK package to use. Type: package Default: pkgs.jdk17_headless Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>

## services.druid.coordinator.jvmArgs

Arguments to pass to the JVM Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>

## services.druid.coordinator.openFirewall

Open firewall ports for Druid Coordinator. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>

## services.druid.coordinator.restartIfChanged

Automatically restart the service on config change. This can be set to false to defer restarts on clusters running critical applications. Please consider the security implications of inadvertently running an older version, and the possibility of unexpected behavior caused by inconsistent versions across a cluster when disabling this option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>
