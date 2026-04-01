---
module: services.karakeep.browser
option_count: 3
source: options.html
---

# services.karakeep.browser

## services.karakeep.browser.enable

Enable the karakeep-browser service that runs a chromium instance in the background with debugging ports exposed. This is necessary for certain features like screenshots. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/karakeep.nix>

## services.karakeep.browser.exe

The browser executable (must be Chrome-like). Type: string Default: ${pkgs.chromium}/bin/chromium Example: ${pkgs.google-chrome}/bin/google-chrome-stable Declared by: <nixpkgs/nixos/modules/services/web-apps/karakeep.nix>

## services.karakeep.browser.port

The port the browser should run on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9222 Declared by: <nixpkgs/nixos/modules/services/web-apps/karakeep.nix>
