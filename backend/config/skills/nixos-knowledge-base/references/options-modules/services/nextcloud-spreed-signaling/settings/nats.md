---
module: services.nextcloud-spreed-signaling.settings.nats
option_count: 1
source: options.html
---

# services.nextcloud-spreed-signaling.settings.nats

## services.nextcloud-spreed-signaling.settings.nats.url

URL of one or more NATS backends to use. This can be set to nats://loopback to process NATS messages internally instead. Type: list of string Default: [ "nats://loopback" ] Example: [ "nats://localhost:4222" ] Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>
