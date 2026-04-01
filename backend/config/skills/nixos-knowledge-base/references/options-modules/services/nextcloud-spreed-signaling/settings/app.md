---
module: services.nextcloud-spreed-signaling.settings.app
option_count: 1
source: options.html
---

# services.nextcloud-spreed-signaling.settings.app

## services.nextcloud-spreed-signaling.settings.app.debug

Set to “true” to install pprof debug handlers. Access will only be possible from IPs allowed through IPs declared in config.services.nextcloud-spreed-signaling.settings.stats.allowed_ips. See “https://golang.org/pkg/net/http/pprof/” for further information. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>
