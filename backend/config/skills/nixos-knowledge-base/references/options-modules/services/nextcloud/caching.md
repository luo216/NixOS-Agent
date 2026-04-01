---
module: services.nextcloud.caching
option_count: 3
source: options.html
---

# services.nextcloud.caching

## services.nextcloud.caching.apcu

Whether to load the APCu module into PHP. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.caching.memcached

Whether to load the Memcached module into PHP. You still need to enable Memcached in your config.php. See https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/caching_configuration.html Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.caching.redis

Whether to load the Redis module into PHP. You still need to enable Redis in your config.php. See https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/caching_configuration.html Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>
