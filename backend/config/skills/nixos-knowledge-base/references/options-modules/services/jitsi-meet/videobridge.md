---
module: services.jitsi-meet.videobridge
option_count: 2
source: options.html
---

# services.jitsi-meet.videobridge

## services.jitsi-meet.videobridge.enable

Jitsi Videobridge instance and configure it to connect to Prosody. Additional configuration is possible with services.jitsi-videobridge Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/jitsi-meet.nix>

## services.jitsi-meet.videobridge.passwordFile

File containing password to the Prosody account for videobridge. If null, a file with password will be generated automatically. Setting this option is useful if you plan to connect additional videobridges to the XMPP server. Type: null or string Default: null Example: "/run/keys/videobridge" Declared by: <nixpkgs/nixos/modules/services/web-apps/jitsi-meet.nix>
