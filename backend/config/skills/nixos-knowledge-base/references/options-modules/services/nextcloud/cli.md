---
module: services.nextcloud.cli
option_count: 1
source: options.html
---

# services.nextcloud.cli

## services.nextcloud.cli.memoryLimit

The memory_limit of PHP is equal to services.nextcloud.maxUploadSize. The value can be customized for nextcloud-cron.service using this option. Type: null or string Default: null Example: "1G" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>
