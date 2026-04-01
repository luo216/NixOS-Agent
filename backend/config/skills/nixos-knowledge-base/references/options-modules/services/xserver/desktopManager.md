---
module: services.xserver.desktopManager
option_count: 1
source: options.html
---

# services.xserver.desktopManager

## services.xserver.desktopManager.runXdgAutostartIfNone

Whether to run XDG autostart files for sessions without a desktop manager (with only a window manager), these sessions usually don’t handle XDG autostart files by default. Some services like i18n.inputMethod and service.earlyoom use XDG autostart files to start. If this option is not set to true and you are using a window manager without a desktop manager, you need to manually start them or running dex somewhere. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/none.nix>
