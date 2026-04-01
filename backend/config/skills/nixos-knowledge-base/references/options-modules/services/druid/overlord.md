---
module: services.druid.overlord
option_count: 6
source: options.html
---

# services.druid.overlord

## services.druid.overlord.enable

Whether to enable Druid Overlord. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>

## services.druid.overlord.config

(key=value) Configuration to be written to runtime.properties of the druid Druid Overlord https://druid.apache.org/docs/latest/configuration/index.html Type: attribute set of anything Default: { } Example: { "druid.plainTextPort" = "8082"; "druid.service" = "servicename"; } Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>

## services.druid.overlord.jdk

The JDK package to use. Type: package Default: pkgs.jdk17_headless Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>

## services.druid.overlord.jvmArgs

Arguments to pass to the JVM Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>

## services.druid.overlord.openFirewall

Open firewall ports for Druid Overlord. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>

## services.druid.overlord.restartIfChanged

Automatically restart the service on config change. This can be set to false to defer restarts on clusters running critical applications. Please consider the security implications of inadvertently running an older version, and the possibility of unexpected behavior caused by inconsistent versions across a cluster when disabling this option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>
