---
module: services.jitsi-videobridge
option_count: 6
source: options.html
---

# services.jitsi-videobridge

## services.jitsi-videobridge.enable

Whether to enable Jitsi Videobridge, a WebRTC compatible video router. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/jitsi-videobridge.nix>

## services.jitsi-videobridge.colibriRestApi

Whether to enable the private rest API for the COLIBRI control interface. Needed for monitoring jitsi, enabling scraping of the /colibri/stats endpoint. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/jitsi-videobridge.nix>

## services.jitsi-videobridge.config

Videobridge configuration. See https://github.com/jitsi/jitsi-videobridge/blob/master/jvb/src/main/resources/reference.conf for default configuration with comments. Type: attribute set Default: { } Example: { videobridge = { ice.udp.port = 5000; websockets = { enabled = true; server-id = "jvb1"; }; }; } Declared by: <nixpkgs/nixos/modules/services/networking/jitsi-videobridge.nix>

## services.jitsi-videobridge.extraProperties

Additional Java properties passed to jitsi-videobridge. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/jitsi-videobridge.nix>

## services.jitsi-videobridge.openFirewall

Whether to open ports in the firewall for the videobridge. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/jitsi-videobridge.nix>

## services.jitsi-videobridge.xmppConfigs

XMPP servers to connect to. See https://github.com/jitsi/jitsi-videobridge/blob/master/doc/muc.md for more information. Type: attribute set of (submodule) Default: { } Example: { "localhost" = { hostName = "localhost"; userName = "jvb"; domain = "auth.xmpp.example.org"; passwordFile = "/var/lib/jitsi-meet/videobridge-secret"; mucJids = "jvbbrewery@internal.xmpp.example.org"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/jitsi-videobridge.nix>
