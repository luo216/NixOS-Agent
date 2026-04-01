---
module: services.jitsi-meet
option_count: 5
source: options.html
---

# services.jitsi-meet

## services.jitsi-meet.enable

Whether to enable Jitsi Meet - Secure, Simple and Scalable Video Conferences. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/jitsi-meet.nix>

## services.jitsi-meet.config

Client-side web application settings that override the defaults in config.js. See https://github.com/jitsi/jitsi-meet/blob/master/config.js for default configuration with comments. Type: attribute set Default: { } Example: { enableWelcomePage = false; defaultLang = "fi"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/jitsi-meet.nix>

## services.jitsi-meet.extraConfig

Text to append to config.js web application config file. Can be used to insert JavaScript logic to determine user’s region in cascading bridges setup. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/jitsi-meet.nix>

## services.jitsi-meet.hostName

FQDN of the Jitsi Meet instance. Type: string Example: "meet.example.org" Declared by: <nixpkgs/nixos/modules/services/web-apps/jitsi-meet.nix>

## services.jitsi-meet.interfaceConfig

Client-side web-app interface settings that override the defaults in interface_config.js. See https://github.com/jitsi/jitsi-meet/blob/master/interface_config.js for default configuration with comments. Type: attribute set Default: { } Example: { SHOW_JITSI_WATERMARK = false; SHOW_WATERMARK_FOR_GUESTS = false; } Declared by: <nixpkgs/nixos/modules/services/web-apps/jitsi-meet.nix>
