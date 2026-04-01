---
module: systemd.settings
option_count: 1
source: options.html
---

# systemd.settings

## systemd.settings.Manager

Options for the global systemd service manager. See systemd-system.conf(5) man page for available options. Type: open submodule of attribute set of (systemd option) Default: { DefaultIOAccounting = true; DefaultIPAccounting = true; } Example: { KExecWatchdogSec = "5min"; RebootWatchdogSec = "10min"; RuntimeWatchdogSec = "30s"; WatchdogDevice = "/dev/watchdog"; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>
