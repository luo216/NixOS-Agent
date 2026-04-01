---
module: services.nitter.config
option_count: 6
source: options.html
---

# services.nitter.config

## services.nitter.config.enableDebug

Whether to enable request logs and debug endpoints. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.config.enableRSS

Whether to enable RSS feeds. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.config.base64Media

Use base64 encoding for proxied media URLs. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.config.proxy

URL to a HTTP/HTTPS proxy. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.config.proxyAuth

Credentials for proxy. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.config.tokenCount

Minimum amount of usable tokens. Tokens are used to authorize API requests, but they expire after ~1 hour, and have a limit of 187 requests. The limit gets reset every 15 minutes, and the pool is filled up so there is always at least tokenCount usable tokens. Only increase this if you receive major bursts all the time. Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>
