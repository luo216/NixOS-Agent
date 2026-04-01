---
module: services.invidious.http3-ytproxy
option_count: 2
source: options.html
---

# services.invidious.http3-ytproxy

## services.invidious.http3-ytproxy.enable

Whether to enable http3-ytproxy for faster loading of images and video playback. If services.invidious.nginx.enable is used, nginx will be configured automatically. If not, you need to configure a reverse proxy yourself according to https://docs.invidious.io/improve-public-instance/#3-speed-up-video-playback-with-http3-ytproxy. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/invidious.nix>

## services.invidious.http3-ytproxy.package

The http3-ytproxy package to use. Type: package Default: pkgs.http3-ytproxy Declared by: <nixpkgs/nixos/modules/services/web-apps/invidious.nix>
