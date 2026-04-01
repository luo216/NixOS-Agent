---
module: services.jitsi-meet.prosody
option_count: 3
source: options.html
---

# services.jitsi-meet.prosody

## services.jitsi-meet.prosody.enable

Whether to configure Prosody to relay XMPP messages between Jitsi Meet components. Turn this off if you want to configure it manually. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/web-apps/jitsi-meet.nix>

## services.jitsi-meet.prosody.allowners_muc

Add module allowners, any user in chat is able to kick other. Usefull in jitsi-meet to kick ghosts. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/jitsi-meet.nix>

## services.jitsi-meet.prosody.lockdown

Whether to disable Prosody features not needed by Jitsi Meet. The default Prosody configuration assumes that it will be used as a general-purpose XMPP server rather than as a companion service for Jitsi Meet. This option reconfigures Prosody to only listen on localhost without support for TLS termination, XMPP federation or the file transfer proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/jitsi-meet.nix>
