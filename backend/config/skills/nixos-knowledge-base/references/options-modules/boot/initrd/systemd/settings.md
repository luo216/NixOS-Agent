---
module: boot.initrd.systemd.settings
option_count: 1
source: options.html
---

# boot.initrd.systemd.settings

## boot.initrd.systemd.settings.Manager

Options for the global systemd service manager used in initrd. See systemd-system.conf(5) man page for available options. Type: open submodule of attribute set of (systemd option) Default: { DefaultEnvironment = "PATH=/bin:/sbin"; } Example: { KExecWatchdogSec = "5min"; RebootWatchdogSec = "10min"; RuntimeWatchdogSec = "30s"; WatchdogDevice = "/dev/watchdog"; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>
