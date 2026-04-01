---
module: services.autosuspend.settings
option_count: 2
source: options.html
---

# services.autosuspend.settings

## services.autosuspend.settings.suspend_cmd

The command to execute in case the host shall be suspended. This line can contain additional command line arguments to the command to execute. Type: string Default: "systemctl suspend" Declared by: <nixpkgs/nixos/modules/services/misc/autosuspend.nix>

## services.autosuspend.settings.wakeup_cmd

The command to execute for scheduling a wake up of the system. The given string is processed using Python’s str.format() and a format argument called timestamp encodes the UTC timestamp of the planned wake up time (float). Additionally iso can be used to acquire the timestamp in ISO 8601 format. Type: string Default: "sh -c 'echo 0 > /sys/class/rtc/rtc0/wakealarm && echo {timestamp:.0f} > /sys/class/rtc/rtc0/wakealarm' " Declared by: <nixpkgs/nixos/modules/services/misc/autosuspend.nix>
