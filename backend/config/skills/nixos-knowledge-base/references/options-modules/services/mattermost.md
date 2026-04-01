---
module: services.mattermost
option_count: 18
source: options.html
---

# services.mattermost

## services.mattermost.enable

Whether to enable Mattermost chat server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.package

The mattermost package to use. Type: package Default: pkgs.mattermost Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.configDir

Mattermost config directory. Type: absolute path Default: '' if versionAtLeast config.system.stateVersion "25.05" then "/etc/mattermost" else "''${config.services.mattermost.dataDir}/config"; '' Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.dataDir

Mattermost working directory. Type: absolute path Default: "/var/lib/mattermost" Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.environment

Extra environment variables to export to the Mattermost process from the systemd unit configuration. Type: attribute set of (signed integer or string) Default: { } Example: { MM_SERVICESETTINGS_SITEURL = "http://example.com"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.environmentFile

Environment file (see systemd.exec(5) “EnvironmentFile=” section for the syntax) which sets config options for mattermost (see the Mattermost documentation). Settings defined in the environment file will overwrite settings set via Nix or via the services.mattermost.extraConfig option. Useful for setting config options without their value ending up in the (world-readable) Nix store, e.g. for a database password. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.group

Group which runs the Mattermost service. Type: string Default: "mattermost" Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.host

Host or address that this Mattermost instance listens on. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.logDir

Mattermost log directory. Type: absolute path Default: '' if versionAtLeast config.system.stateVersion "25.05" then "/var/log/mattermost" else "''${config.services.mattermost.dataDir}/logs"; '' Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.mutableConfig

Whether the Mattermost config.json is writeable by Mattermost. Most of the settings can be edited in the system console of Mattermost if this option is enabled. A template config using the options specified in services.mattermost will be generated but won’t be overwritten on changes or rebuilds. If this option is disabled, persistent changes in the system console won’t be possible (the default). If a config.json is present, it will be overwritten at service start! Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.plugins

Plugins to add to the configuration. Overrides any installed if non-null. This is a list of paths to .tar.gz files or derivations evaluating to .tar.gz files. You can use mattermost.buildPlugin to build plugins; see the NixOS documentation for more details. Type: list of (absolute path or package) Default: [ ] Example: "[ ./com.github.moussetc.mattermost.plugin.giphy-2.0.0.tar.gz ]" Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.pluginsBundle

Derivation building to a directory of plugin tarballs. This overrides services.mattermost.plugins if provided. Type: null or package Default: '' All entries in {config}`services.mattermost.plugins`, repacked '' Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.port

Port for Mattermost server to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8065 Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.preferNixConfig

If both mutableConfig and this option are set, the Nix configuration will take precedence over any settings configured in the server console. Type: boolean Default: '' versionAtLeast config.system.stateVersion "25.05"; '' Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.settings

Additional configuration options as Nix attribute set in config.json schema. Type: JSON value Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.siteName

Name of this Mattermost site. Type: string Default: "Mattermost" Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.siteUrl

URL this Mattermost instance is reachable under, without trailing slash. Type: string Example: "https://chat.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.user

User which runs the Mattermost service. Type: string Default: "mattermost" Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>
