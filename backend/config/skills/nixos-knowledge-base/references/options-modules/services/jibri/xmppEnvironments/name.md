---
module: services.jibri.xmppEnvironments.<name>
option_count: 5
source: options.html
---

# services.jibri.xmppEnvironments.<name>

## services.jibri.xmppEnvironments.<name>.disableCertificateVerification

Whether to skip validation of the server’s certificate. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/jibri/default.nix>

## services.jibri.xmppEnvironments.<name>.stripFromRoomDomain

The prefix to strip from the room’s JID domain to derive the call URL. Type: string Default: "0" Example: "conference." Declared by: <nixpkgs/nixos/modules/services/networking/jibri/default.nix>

## services.jibri.xmppEnvironments.<name>.usageTimeout

The duration that the Jibri session can be. A value of zero means indefinitely. Type: string Default: "0" Example: "1 hour" Declared by: <nixpkgs/nixos/modules/services/networking/jibri/default.nix>

## services.jibri.xmppEnvironments.<name>.xmppDomain

The base XMPP domain. Type: string Example: "xmpp.example.org" Declared by: <nixpkgs/nixos/modules/services/networking/jibri/default.nix>

## services.jibri.xmppEnvironments.<name>.xmppServerHosts

Hostnames of the XMPP servers to connect to. Type: list of string Example: [ "xmpp.example.org" ] Declared by: <nixpkgs/nixos/modules/services/networking/jibri/default.nix>
