---
module: services.biboumi.settings
option_count: 13
source: options.html
---

# services.biboumi.settings

## services.biboumi.settings.admin

The bare JID of the gateway administrator. This JID will have more privileges than other standard users, for example some administration ad-hoc commands will only be available to that JID. Type: list of string Default: [ ] Example: [ "admin@example.org" ] Declared by: <nixpkgs/nixos/modules/services/networking/biboumi.nix>

## services.biboumi.settings.ca_file

Specifies which file should be used as the list of trusted CA when negotiating a TLS session. Type: absolute path Default: config.security.pki.caBundle Declared by: <nixpkgs/nixos/modules/services/networking/biboumi.nix>

## services.biboumi.settings.db_name

The name of the database to use. Set it to null and use credentialsFile if you do not want this connection string to go into the Nix store. Type: null or absolute path or string Default: "/var/lib/biboumi/biboumi.sqlite" Example: "postgresql://user:secret@localhost" Declared by: <nixpkgs/nixos/modules/services/networking/biboumi.nix>

## services.biboumi.settings.hostname

The hostname served by the XMPP gateway. This domain must be configured in the XMPP server as an external component. Type: string Example: "biboumi.example.org" Declared by: <nixpkgs/nixos/modules/services/networking/biboumi.nix>

## services.biboumi.settings.identd_port

The TCP port on which to listen for identd queries. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 113 Example: 0 Declared by: <nixpkgs/nixos/modules/services/networking/biboumi.nix>

## services.biboumi.settings.log_level

Indicate what type of log messages to write in the logs. 0 is debug, 1 is info, 2 is warning, 3 is error. Type: integer between 0 and 3 (both inclusive) Default: 1 Declared by: <nixpkgs/nixos/modules/services/networking/biboumi.nix>

## services.biboumi.settings.password

The password used to authenticate the XMPP component to your XMPP server. This password must be configured in the XMPP server, associated with the external component on hostname. Set it to null and use credentialsFile if you do not want this password to go into the Nix store. Type: null or string Declared by: <nixpkgs/nixos/modules/services/networking/biboumi.nix>

## services.biboumi.settings.persistent_by_default

Whether all rooms will be persistent by default: the value of the “persistent” option in the global configuration of each user will be “true”, but the value of each individual room will still default to false. This means that a user just needs to change the global “persistent” configuration option to false in order to override this. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/biboumi.nix>

## services.biboumi.settings.policy_directory

A directory that should contain the policy files, used to customize Botan’s behaviour when negotiating the TLS connections with the IRC servers. Type: absolute path Default: "${pkgs.biboumi}/etc/biboumi" Declared by: <nixpkgs/nixos/modules/services/networking/biboumi.nix>

## services.biboumi.settings.port

The TCP port to use to connect to the local XMPP component. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5347 Declared by: <nixpkgs/nixos/modules/services/networking/biboumi.nix>

## services.biboumi.settings.realname_customization

Whether the users will be able to use the ad-hoc commands that lets them configure their realname and username. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/biboumi.nix>

## services.biboumi.settings.realname_from_jid

Whether the realname and username of each biboumi user will be extracted from their JID. Otherwise they will be set to the nick they used to connect to the IRC server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/biboumi.nix>

## services.biboumi.settings.xmpp_server_ip

The IP address to connect to the XMPP server on. The connection to the XMPP server is unencrypted, so the biboumi instance and the server should normally be on the same host. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/biboumi.nix>
