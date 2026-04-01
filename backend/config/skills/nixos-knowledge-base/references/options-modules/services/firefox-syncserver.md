---
module: services.firefox-syncserver
option_count: 5
source: options.html
---

# services.firefox-syncserver

## services.firefox-syncserver.enable

Whether to enable the Firefox Sync storage service. Out of the box this will not be very useful unless you also configure at least one service and one nodes by inserting them into the mysql database manually, e.g. by running INSERT INTO `services` (`id`, `service`, `pattern`) VALUES ('1', 'sync-1.5', '{node}/1.5/{uid}'); INSERT INTO `nodes` (`id`, `service`, `node`, `available`, `current_load`, `capacity`, `downed`, `backoff`) VALUES ('1', '1', 'https://mydomain.tld', '1', '0', '10', '0', '0'); services.firefox-syncserver.singleNode.enable does this automatically when enabled . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/firefox-syncserver.nix>

## services.firefox-syncserver.package

The syncstorage-rs package to use. Type: package Default: pkgs.syncstorage-rs Declared by: <nixpkgs/nixos/modules/services/networking/firefox-syncserver.nix>

## services.firefox-syncserver.logLevel

Log level to run with. This can be a simple log level like error or trace, or a more complicated logging expression. Type: string Default: "error" Declared by: <nixpkgs/nixos/modules/services/networking/firefox-syncserver.nix>

## services.firefox-syncserver.secrets

A file containing the various secrets. Should be in the format expected by systemd’s EnvironmentFile directory. Two secrets are currently available: SYNC_MASTER_SECRET and SYNC_TOKENSERVER__FXA_METRICS_HASH_SECRET. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/networking/firefox-syncserver.nix>

## services.firefox-syncserver.settings

Settings for the sync server. These take priority over values computed from NixOS options. See the example config in https://github.com/mozilla-services/syncstorage-rs/blob/master/config/local.example.toml and the doc comments on the Settings structs in https://github.com/mozilla-services/syncstorage-rs/blob/master/syncstorage-settings/src/lib.rs and https://github.com/mozilla-services/syncstorage-rs/blob/master/tokenserver-settings/src/lib.rs for available options. Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/firefox-syncserver.nix>
