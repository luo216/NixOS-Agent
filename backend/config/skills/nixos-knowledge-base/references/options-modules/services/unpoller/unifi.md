---
module: services.unpoller.unifi
option_count: 2
source: options.html
---

# services.unpoller.unifi

## services.unpoller.unifi.controllers

List of Unifi controllers to poll. Use defaults if empty. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.unifi.dynamic

Let prometheus select which controller to poll when scraping. Use with default credentials. See unifi-poller wiki for more. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>
