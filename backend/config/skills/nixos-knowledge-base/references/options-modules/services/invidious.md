---
module: services.invidious
option_count: 9
source: options.html
---

# services.invidious

## services.invidious.enable

Whether to enable Invidious. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/invidious.nix>

## services.invidious.package

The invidious package to use. Type: package Default: pkgs.invidious Declared by: <nixpkgs/nixos/modules/services/web-apps/invidious.nix>

## services.invidious.address

The IP address Invidious should bind to. Type: string Default: if config.services.invidious.nginx.enable then "127.0.0.1" else "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/web-apps/invidious.nix>

## services.invidious.domain

The FQDN Invidious is reachable on. This is used to configure nginx and for building absolute URLs. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/invidious.nix>

## services.invidious.extraSettingsFile

A file including Invidious settings. It gets merged with the settings specified in services.invidious.settings and can be used to store secrets like hmac_key outside of the nix store. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/invidious.nix>

## services.invidious.hmacKeyFile

A path to a file containing the hmac_key. If null, a key will be generated automatically on first start. If non-null, this option overrides any hmac_key specified in services.invidious.settings or via services.invidious.extraSettingsFile. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/invidious.nix>

## services.invidious.port

The port Invidious should listen on. To allow access from outside, you can use either services.invidious.nginx or add config.services.invidious.port to networking.firewall.allowedTCPPorts. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/web-apps/invidious.nix>

## services.invidious.serviceScale

How many invidious instances to run. See https://docs.invidious.io/improve-public-instance/#2-multiple-invidious-processes for more details on how this is intended to work. All instances beyond the first one have the options channel_threads and feed_threads set to 0 to avoid conflicts with multiple instances refreshing subscriptions. Instances will be configured to bind to consecutive ports starting with services.invidious.port for the first instance. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/web-apps/invidious.nix>

## services.invidious.settings

The settings Invidious should use. See config.example.yml for a list of all possible options. Type: JSON value Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/invidious.nix>
