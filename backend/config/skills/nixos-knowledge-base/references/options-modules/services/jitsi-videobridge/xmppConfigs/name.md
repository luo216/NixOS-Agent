---
module: services.jitsi-videobridge.xmppConfigs.<name>
option_count: 7
source: options.html
---

# services.jitsi-videobridge.xmppConfigs.<name>

## services.jitsi-videobridge.xmppConfigs.<name>.disableCertificateVerification

Whether to skip validation of the server’s certificate. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/jitsi-videobridge.nix>

## services.jitsi-videobridge.xmppConfigs.<name>.domain

Domain part of JID of the XMPP user, if it is different from hostName. Type: null or string Default: null Example: "auth.xmpp.example.org" Declared by: <nixpkgs/nixos/modules/services/networking/jitsi-videobridge.nix>

## services.jitsi-videobridge.xmppConfigs.<name>.hostName

Hostname of the XMPP server to connect to. Name of the attribute set is used by default. Type: string Example: "xmpp.example.org" Declared by: <nixpkgs/nixos/modules/services/networking/jitsi-videobridge.nix>

## services.jitsi-videobridge.xmppConfigs.<name>.mucJids

JID of the MUC to join. JiCoFo needs to be configured to join the same MUC. Type: string Example: "jvbbrewery@internal.xmpp.example.org" Declared by: <nixpkgs/nixos/modules/services/networking/jitsi-videobridge.nix>

## services.jitsi-videobridge.xmppConfigs.<name>.mucNickname

Videobridges use the same XMPP account and need to be distinguished by the nickname (aka resource part of the JID). By default, system hostname is used. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/jitsi-videobridge.nix>

## services.jitsi-videobridge.xmppConfigs.<name>.passwordFile

File containing the password for the user. Type: string Example: "/run/keys/jitsi-videobridge-xmpp1" Declared by: <nixpkgs/nixos/modules/services/networking/jitsi-videobridge.nix>

## services.jitsi-videobridge.xmppConfigs.<name>.userName

User part of the JID. Type: string Default: "jvb" Declared by: <nixpkgs/nixos/modules/services/networking/jitsi-videobridge.nix>
