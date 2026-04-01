---
module: services.bepasty
option_count: 2
source: options.html
---

# services.bepasty

## services.bepasty.enable

Whether to enable bepasty, a binary pastebin server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/bepasty.nix>

## services.bepasty.servers

configure a number of bepasty servers which will be started with gunicorn. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/bepasty.nix>
