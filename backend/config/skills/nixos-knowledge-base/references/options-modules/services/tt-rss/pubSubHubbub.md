---
module: services.tt-rss.pubSubHubbub
option_count: 2
source: options.html
---

# services.tt-rss.pubSubHubbub

## services.tt-rss.pubSubHubbub.enable

Enable client PubSubHubbub support in tt-rss. When disabled, tt-rss won’t try to subscribe to PUSH feed updates. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.pubSubHubbub.hub

URL to a PubSubHubbub-compatible hub server. If defined, “Published articles” generated feed would automatically become PUSH-enabled. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>
