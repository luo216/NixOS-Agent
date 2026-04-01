---
module: services.ncps.cache.lru
option_count: 2
source: options.html
---

# services.ncps.cache.lru

## services.ncps.cache.lru.schedule

The cron spec for cleaning the store to keep it under config.ncps.cache.maxSize. Refer to https://pkg.go.dev/github.com/robfig/cron/v3#hdr-Usage for documentation. Type: null or string Default: null Example: "0 2 * * *" Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>

## services.ncps.cache.lru.scheduleTimeZone

The name of the timezone to use for the cron schedule. See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for a comprehensive list of possible values for this setting. Type: string Default: "Local" Example: "America/Los_Angeles" Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>
