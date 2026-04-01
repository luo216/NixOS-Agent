---
module: time
option_count: 2
source: options.html
---

# time

## time.hardwareClockInLocalTime

If set, keep the hardware clock in local time instead of UTC. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/locale.nix>

## time.timeZone

The time zone used when displaying times and dates. See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for a comprehensive list of possible values for this setting. If null, the timezone will default to UTC and can be set imperatively using timedatectl. Type: null or string without spaces Default: null Example: "America/New_York" Declared by: <nixpkgs/nixos/modules/config/locale.nix>
