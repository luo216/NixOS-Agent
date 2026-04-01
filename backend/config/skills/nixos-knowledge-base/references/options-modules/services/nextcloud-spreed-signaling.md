---
module: services.nextcloud-spreed-signaling
option_count: 9
source: options.html
---

# services.nextcloud-spreed-signaling

## services.nextcloud-spreed-signaling.enable

Whether to enable Spreed standalone signaling server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>

## services.nextcloud-spreed-signaling.package

The nextcloud-spreed-signaling package to use. Type: package Default: pkgs.nextcloud-spreed-signaling Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>

## services.nextcloud-spreed-signaling.backends

A list of backends from which clients are allowed to connect from. The name of the attribute will be used as the backend id. Each backend will have isolated rooms, i.e. clients connecting to room “abc12345” on backend 1 will be in a different room than clients connected to a room with the same name on backend 2. Also sessions connected from different backends will not be able to communicate with each other. Type: attribute set of (submodule) Default: { } Example: { nextcloud = { secretFile = "/run/secrets/nextcloud-secret"; urls = [ "https://cloud.example.com" ]; }; } Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>

## services.nextcloud-spreed-signaling.configureNginx

Whether to set up and configure an nginx virtual host according to upstream’s recommendations. The virtualHost domain must be specified under config.services.nextcloud-spreed-signaling.hostName if this is enabled. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>

## services.nextcloud-spreed-signaling.group

Group under which to run the Spreed signaling server. Type: string Default: "nextcloud-spreed-signaling" Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>

## services.nextcloud-spreed-signaling.hostName

The host name to bind the nginx virtual host to, if config.services.nextcloud-spreed-signaling.configureNginx is set to true. Type: null or string Default: null Example: "talk.mydomain.org" Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>

## services.nextcloud-spreed-signaling.settings

Declarative configuration. Refer to https://github.com/strukturag/nextcloud-spreed-signaling/blob/master/server.conf.in for a list of available options. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>

## services.nextcloud-spreed-signaling.stateDir

Directory used for state & config files. Type: absolute path Default: "/var/lib/nextcloud-spreed-signaling" Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>

## services.nextcloud-spreed-signaling.user

User account under which to run the Spreed signaling server. Type: string Default: "nextcloud-spreed-signaling" Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>
