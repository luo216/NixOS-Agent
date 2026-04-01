---
module: services.tt-rss.registration
option_count: 3
source: options.html
---

# services.tt-rss.registration

## services.tt-rss.registration.enable

Allow users to register themselves. Please be aware that allowing random people to access your tt-rss installation is a security risk and potentially might lead to data loss or server exploit. Disabled by default. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.registration.maxUsers

Maximum amount of users which will be allowed to register on this system. 0 - no limit. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.registration.notifyAddress

Email address to send new user notifications to. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>
