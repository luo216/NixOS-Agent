---
module: services.ente.api.settings.apps
option_count: 3
source: options.html
---

# services.ente.api.settings.apps

## services.ente.api.settings.apps.accounts

Set this to the URL where your accounts page is running. This is primarily for passkey support. Type: string Default: "https://accounts.ente.io" Declared by: <nixpkgs/nixos/modules/services/web-apps/ente.nix>

## services.ente.api.settings.apps.cast

Set this to the URL where your cast page is running. This is for browser and chromecast casting support. Type: string Default: "https://cast.ente.io" Declared by: <nixpkgs/nixos/modules/services/web-apps/ente.nix>

## services.ente.api.settings.apps.public-albums

If you’re running a self hosted instance and wish to serve public links, set this to the URL where your albums web app is running. Type: string Default: "https://albums.ente.io" Declared by: <nixpkgs/nixos/modules/services/web-apps/ente.nix>
