---
module: services.jigasi
option_count: 11
source: options.html
---

# services.jigasi

## services.jigasi.enable

Whether to enable Jitsi Gateway to SIP - component of Jitsi Meet. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/jigasi.nix>

## services.jigasi.bridgeMuc

JID of the internal MUC used to communicate with Videobridges. Type: string Example: "jigasibrewery@internal.meet.example.org" Declared by: <nixpkgs/nixos/modules/services/networking/jigasi.nix>

## services.jigasi.componentPasswordFile

Path to file containing component secret. Type: string Example: "/run/keys/jigasi-component" Declared by: <nixpkgs/nixos/modules/services/networking/jigasi.nix>

## services.jigasi.config

Contents of the <filename>sip-communicator.properties</filename> configuration file for jigasi. Type: attribute set of string Default: { } Example: { "org.jitsi.jigasi.auth.URL" = "XMPP:jitsi-meet.example.com"; } Declared by: <nixpkgs/nixos/modules/services/networking/jigasi.nix>

## services.jigasi.defaultJvbRoomName

Name of the default JVB room that will be joined if no special header is included in SIP invite. Type: string Default: "" Example: "siptest" Declared by: <nixpkgs/nixos/modules/services/networking/jigasi.nix>

## services.jigasi.environmentFile

File containing environment variables to be passed to the jigasi service, in which secret tokens can be specified securely by defining values for <literal>JIGASI_SIPUSER</literal>, <literal>JIGASI_SIPPWD</literal>, <literal>JIGASI_SIPSERVER</literal> and <literal>JIGASI_SIPPORT</literal>. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/jigasi.nix>

## services.jigasi.userDomain

Domain part of the JID for XMPP user connection. Type: string Example: "internal.meet.example.org" Declared by: <nixpkgs/nixos/modules/services/networking/jigasi.nix>

## services.jigasi.userName

User part of the JID for XMPP user connection. Type: string Default: "callcontrol" Declared by: <nixpkgs/nixos/modules/services/networking/jigasi.nix>

## services.jigasi.userPasswordFile

Path to file containing password for XMPP user connection. Type: string Example: "/run/keys/jigasi-user" Declared by: <nixpkgs/nixos/modules/services/networking/jigasi.nix>

## services.jigasi.xmppDomain

Domain name of the XMMP server to which to connect as a component. If null, <option>xmppHost</option> is used. Type: null or string Example: "meet.example.org" Declared by: <nixpkgs/nixos/modules/services/networking/jigasi.nix>

## services.jigasi.xmppHost

Hostname of the XMPP server to connect to. Type: string Example: "localhost" Declared by: <nixpkgs/nixos/modules/services/networking/jigasi.nix>
