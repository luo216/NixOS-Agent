---
module: services.lasuite-meet.livekit
option_count: 4
source: options.html
---

# services.lasuite-meet.livekit

## services.lasuite-meet.livekit.enable

Whether to enable Configure local livekit server. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>

## services.lasuite-meet.livekit.keyFile

LiveKit key file holding one or multiple application secrets. Use livekit-server generate-keys to generate a random key name and secret. The file should have the YAML format <keyname>: <secret>. Example: lasuite-meet: f6lQGaHtM5HfgZjIcec3cOCRfiDqIine4CpZZnqdT5cE Individual key/secret pairs need to be passed to clients to connect to this instance. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>

## services.lasuite-meet.livekit.openFirewall

Whether to enable Open firewall ports for livekit. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>

## services.lasuite-meet.livekit.settings

Settings to pass to the livekit server. See services.livekit.settings for more details. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>
