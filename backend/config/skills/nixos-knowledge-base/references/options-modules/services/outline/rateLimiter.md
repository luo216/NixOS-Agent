---
module: services.outline.rateLimiter
option_count: 3
source: options.html
---

# services.outline.rateLimiter

## services.outline.rateLimiter.enable

Whether to enable rate limiter for the application web server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.rateLimiter.durationWindow

Length of a throttling window. Type: signed integer Default: 60 Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.rateLimiter.requests

Maximum number of requests in a throttling window. Type: signed integer Default: 5000 Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>
