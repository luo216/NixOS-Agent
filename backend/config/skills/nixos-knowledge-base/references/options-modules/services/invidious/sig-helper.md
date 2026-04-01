---
module: services.invidious.sig-helper
option_count: 3
source: options.html
---

# services.invidious.sig-helper

## services.invidious.sig-helper.enable

Whether to enable and configure inv-sig-helper to emulate the youtube client’s javascript. This is required to make certain videos playable. This will download and run completely untrusted javascript from youtube! While this service is sandboxed, this may still be an issue! Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/invidious.nix>

## services.invidious.sig-helper.package

The inv-sig-helper package to use. Type: package Default: pkgs.inv-sig-helper Declared by: <nixpkgs/nixos/modules/services/web-apps/invidious.nix>

## services.invidious.sig-helper.listenAddress

The IP address/port where inv-sig-helper should listen. Type: string Default: "127.0.0.1:2999" Declared by: <nixpkgs/nixos/modules/services/web-apps/invidious.nix>
