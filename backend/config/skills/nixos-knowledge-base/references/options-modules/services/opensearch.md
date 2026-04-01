---
module: services.opensearch
option_count: 10
source: options.html
---

# services.opensearch

## services.opensearch.enable

Whether to enable OpenSearch. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/search/opensearch.nix>

## services.opensearch.package

The OpenSearch package to use. Type: package Default: pkgs.opensearch Declared by: <nixpkgs/nixos/modules/services/search/opensearch.nix>

## services.opensearch.dataDir

Data directory for OpenSearch. If you change this, you need to manually create the directory. You also need to create the opensearch user and group, or change services.opensearch.user and services.opensearch.group to existing ones with access to the directory. Type: absolute path Default: "/var/lib/opensearch" Declared by: <nixpkgs/nixos/modules/services/search/opensearch.nix>

## services.opensearch.extraCmdLineOptions

Extra command line options for the OpenSearch launcher. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/search/opensearch.nix>

## services.opensearch.extraJavaOptions

Extra command line options for Java. Type: list of string Default: [ ] Example: [ "-Djava.net.preferIPv4Stack=true" ] Declared by: <nixpkgs/nixos/modules/services/search/opensearch.nix>

## services.opensearch.group

The group OpenSearch runs as. Should be left at default unless you have very specific needs. Type: string Default: "opensearch" Declared by: <nixpkgs/nixos/modules/services/search/opensearch.nix>

## services.opensearch.logging

opensearch logging configuration. Type: string Default: '' logger.action.name = org.opensearch.action logger.action.level = info appender.console.type = Console appender.console.name = console appender.console.layout.type = PatternLayout appender.console.layout.pattern = [%d{ISO8601}][%-5p][%-25c{1.}] %marker%m%n rootLogger.level = info rootLogger.appenderRef.console.ref = console '' Declared by: <nixpkgs/nixos/modules/services/search/opensearch.nix>

## services.opensearch.restartIfChanged

Automatically restart the service on config change. This can be set to false to defer restarts on a server or cluster. Please consider the security implications of inadvertently running an older version, and the possibility of unexpected behavior caused by inconsistent versions across a cluster when disabling this option. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/search/opensearch.nix>

## services.opensearch.settings

OpenSearch configuration. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/search/opensearch.nix>

## services.opensearch.user

The user OpenSearch runs as. Should be left at default unless you have very specific needs. Type: string Default: "opensearch" Declared by: <nixpkgs/nixos/modules/services/search/opensearch.nix>
