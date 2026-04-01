---
module: services.lifecycled.queueCleaner
option_count: 3
source: options.html
---

# services.lifecycled.queueCleaner

## services.lifecycled.queueCleaner.enable

Whether to enable lifecycled-queue-cleaner. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/lifecycled.nix>

## services.lifecycled.queueCleaner.frequency

How often to trigger the queue cleaner. NOTE: This string should be a valid value for a systemd timer’s OnCalendar configuration. See systemd.timer(5) for more information. Type: string Default: "hourly" Declared by: <nixpkgs/nixos/modules/services/misc/lifecycled.nix>

## services.lifecycled.queueCleaner.parallel

The number of parallel deletes to run. Type: unsigned integer, meaning >=0 Default: 20 Declared by: <nixpkgs/nixos/modules/services/misc/lifecycled.nix>
