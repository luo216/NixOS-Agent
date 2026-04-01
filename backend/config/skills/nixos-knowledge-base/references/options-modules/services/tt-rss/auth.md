---
module: services.tt-rss.auth
option_count: 2
source: options.html
---

# services.tt-rss.auth

## services.tt-rss.auth.autoCreate

Allow authentication modules to auto-create users in tt-rss internal database when authenticated successfully. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.auth.autoLogin

Automatically login user on remote or other kind of externally supplied authentication, otherwise redirect to login form as normal. If set to true, users won’t be able to set application language and settings profile. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>
