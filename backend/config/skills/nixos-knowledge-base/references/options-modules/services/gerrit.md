---
module: services.gerrit
option_count: 11
source: options.html
---

# services.gerrit

## services.gerrit.enable

Whether to enable Gerrit service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/gerrit.nix>

## services.gerrit.package

The gerrit package to use. Type: package Default: pkgs.gerrit Declared by: <nixpkgs/nixos/modules/services/web-apps/gerrit.nix>

## services.gerrit.builtinPlugins

List of builtins plugins to install. Those are shipped in the gerrit.war file. Type: list of (one of “codemirror-editor”, “commit-message-length-validator”, “delete-project”, “download-commands”, “gitiles”, “hooks”, “plugin-manager”, “replication”, “reviewnotes”, “singleusergroup”, “webhooks”) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/gerrit.nix>

## services.gerrit.jvmHeapLimit

How much memory to allocate to the JVM heap Type: string Default: "1024m" Declared by: <nixpkgs/nixos/modules/services/web-apps/gerrit.nix>

## services.gerrit.jvmOpts

A list of JVM options to start gerrit with. Type: list of string Default: [ "-Dflogger.backend_factory=com.google.common.flogger.backend.log4j.Log4jBackendFactory#getInstance" "-Dflogger.logging_context=com.google.gerrit.server.logging.LoggingContext#getInstance" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/gerrit.nix>

## services.gerrit.jvmPackage

The jdk21_headless package to use. Type: package Default: pkgs.jdk21_headless Declared by: <nixpkgs/nixos/modules/services/web-apps/gerrit.nix>

## services.gerrit.listenAddress

hostname:port to listen for HTTP traffic. This is bound using the systemd socket activation. Type: string Default: "[::]:8080" Declared by: <nixpkgs/nixos/modules/services/web-apps/gerrit.nix>

## services.gerrit.plugins

List of plugins to add to Gerrit. Each derivation is a jar file itself where the name of the derivation is the name of plugin. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/gerrit.nix>

## services.gerrit.replicationSettings

Replication configuration. This will be generated to the etc/replication.config file. Type: lazy attribute set of lazy attribute set of (string or boolean or signed integer or list of (string or boolean or signed integer) or lazy attribute set of (string or boolean or signed integer or list of (string or boolean or signed integer))) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/gerrit.nix>

## services.gerrit.serverId

Set a UUID that uniquely identifies the server. This can be generated with nix-shell -p util-linux --run uuidgen. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/gerrit.nix>

## services.gerrit.settings

Gerrit configuration. This will be generated to the etc/gerrit.config file. Type: lazy attribute set of lazy attribute set of (string or boolean or signed integer or list of (string or boolean or signed integer) or lazy attribute set of (string or boolean or signed integer or list of (string or boolean or signed integer))) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/gerrit.nix>
