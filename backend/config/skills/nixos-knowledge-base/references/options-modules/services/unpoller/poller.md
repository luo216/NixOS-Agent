---
module: services.unpoller.poller
option_count: 3
source: options.html
---

# services.unpoller.poller

## services.unpoller.poller.debug

Turns on line numbers, microsecond logging, and a per-device log. This may be noisy if you have a lot of devices. It adds one line per device. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.poller.plugins

Load additional plugins. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.poller.quiet

Turns off per-interval logs. Only startup and error logs will be emitted. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>
