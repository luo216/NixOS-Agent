---
module: services.zfs.zed
option_count: 2
source: options.html
---

# services.zfs.zed

## services.zfs.zed.enableMail

Whether to enable ZED’s ability to send emails. Type: boolean Default: config.services.mail.sendmailSetuidWrapper != null Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## services.zfs.zed.settings

ZFS Event Daemon /etc/zfs/zed.d/zed.rc content See zed(8) for details on ZED and the scripts in /etc/zfs/zed.d to find the possible variables Type: attribute set of (string or signed integer or boolean or list of string) Example: { ZED_DEBUG_LOG = "/tmp/zed.debug.log"; ZED_EMAIL_ADDR = [ "root" ]; ZED_EMAIL_PROG = "mail"; ZED_EMAIL_OPTS = "-s '@SUBJECT@' @ADDRESS@"; ZED_NOTIFY_INTERVAL_SECS = 3600; ZED_NOTIFY_VERBOSE = false; ZED_USE_ENCLOSURE_LEDS = true; ZED_SCRUB_AFTER_RESILVER = false; } Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>
