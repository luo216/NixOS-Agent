---
module: services.jicofo
option_count: 9
source: options.html
---

# services.jicofo

## services.jicofo.enable

Whether to enable Jitsi Conference Focus - component of Jitsi Meet. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/jicofo.nix>

## services.jicofo.bridgeMuc

JID of the internal MUC used to communicate with Videobridges. Type: string Example: "jvbbrewery@internal.meet.example.org" Declared by: <nixpkgs/nixos/modules/services/networking/jicofo.nix>

## services.jicofo.componentPasswordFile

Path to file containing component secret. Type: string Example: "/run/keys/jicofo-component" Declared by: <nixpkgs/nixos/modules/services/networking/jicofo.nix>

## services.jicofo.config

Contents of the jicofo.conf configuration file. Type: HOCON value Default: { } Example: { jicofo.bridge.max-bridge-participants = 42; } Declared by: <nixpkgs/nixos/modules/services/networking/jicofo.nix>

## services.jicofo.userDomain

Domain part of the JID for XMPP user connection. Type: string Example: "auth.meet.example.org" Declared by: <nixpkgs/nixos/modules/services/networking/jicofo.nix>

## services.jicofo.userName

User part of the JID for XMPP user connection. Type: string Default: "focus" Declared by: <nixpkgs/nixos/modules/services/networking/jicofo.nix>

## services.jicofo.userPasswordFile

Path to file containing password for XMPP user connection. Type: string Example: "/run/keys/jicofo-user" Declared by: <nixpkgs/nixos/modules/services/networking/jicofo.nix>

## services.jicofo.xmppDomain

Domain name of the XMMP server to which to connect as a component. If null, xmppHost is used. Type: null or string Example: "meet.example.org" Declared by: <nixpkgs/nixos/modules/services/networking/jicofo.nix>

## services.jicofo.xmppHost

Hostname of the XMPP server to connect to. Type: string Example: "localhost" Declared by: <nixpkgs/nixos/modules/services/networking/jicofo.nix>
