---
module: services.nextcloud-spreed-signaling.settings.stats
option_count: 1
source: options.html
---

# services.nextcloud-spreed-signaling.settings.stats

## services.nextcloud-spreed-signaling.settings.stats.allowed_ips

List of IP addresses that are allowed to access the debug, stats and metrics endpoints. Leave empty or null to only allow access from localhost. Type: null or (list of string) Default: null Example: [ "127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>
