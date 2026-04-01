---
module: services.pairdrop
option_count: 5
source: options.html
---

# services.pairdrop

## services.pairdrop.enable

Whether to enable pairdrop. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/pairdrop.nix>

## services.pairdrop.package

The pairdrop package to use. Type: package Default: pkgs.pairdrop Declared by: <nixpkgs/nixos/modules/services/web-apps/pairdrop.nix>

## services.pairdrop.environment

Additional configuration (environment variables) for PairDrop, see https://github.com/schlagmichdoch/PairDrop/blob/master/docs/host-your-own.md#environment-variables for supported values. Type: open submodule of attribute set of (boolean or signed integer or string) Default: { } Example: { BLUESKY_BUTTON_ACTIVE = false; CUSTOM_BUTTON_ACTIVE = false; DEBUG_MODE = true; DONATION_BUTTON_ACTIVE = false; IPV6_LOCALIZE = 4; MASTODON_BUTTON_ACTIVE = false; PRIVACYPOLICY_BUTTON_ACTIVE = false; RATE_LIMIT = 1; RTC_CONFIG = "/etc/pairdrop/rtc-config.json"; SIGNALING_SERVER = "pairdrop.net"; TWITTER_BUTTON_ACTIVE = false; WS_FALLBACK = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/pairdrop.nix>

## services.pairdrop.port

The port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Example: 3010 Declared by: <nixpkgs/nixos/modules/services/web-apps/pairdrop.nix>

## services.pairdrop.rtcConfig

Configuration for STUN/TURN servers. This is converted to JSON and written into a file automatically. If you want to provide a file path instead, set RTC_CONFIG in services.pairdrop.environment. Type: JSON value Default: null Example: { iceServers = [ { urls = "stun:stun.example.com:19302"; } ]; sdpSemantics = "unified-plan"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/pairdrop.nix>
