---
module: services.buffyboard.settings.quirks
option_count: 2
source: options.html
---

# services.buffyboard.settings.quirks

## services.buffyboard.settings.quirks.fbdev_force_refresh

If true and using the framebuffer backend, this triggers a display refresh after every draw operation. This has a negative performance impact. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/buffyboard.nix>

## services.buffyboard.settings.quirks.ignore_unused_terminals

If true, buffyboard won’t automatically update the layout of a new terminal and draw the keyboard, if the terminal is not opened by any process. In this case SIGUSR1 should be sent to buffyboard to update the layout. This quirk was introduced to resolve a race between buffyboard and systemd-logind according to the following scenario: A user switches to a new virtual terminal Buffyboard opens the terminal and changes the number of rows systemd-logind sees that the terminal is opened by some other process and don’t start getty@.service The race is resolved by enabling this option and installing a drop-in file for getty@.service that sends SIGUSR1 to buffyboard. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/buffyboard.nix>
