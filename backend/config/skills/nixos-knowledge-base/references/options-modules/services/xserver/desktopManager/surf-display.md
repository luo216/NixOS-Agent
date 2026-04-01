---
module: services.xserver.desktopManager.surf-display
option_count: 7
source: options.html
---

# services.xserver.desktopManager.surf-display

## services.xserver.desktopManager.surf-display.enable

Whether to enable surf-display as a kiosk browser session. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/surf-display.nix>

## services.xserver.desktopManager.surf-display.defaultWwwUri

Default URI to display. Type: string Default: "${pkgs.surf-display}/share/surf-display/empty-page.html" Example: "https://www.example.com/" Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/surf-display.nix>

## services.xserver.desktopManager.surf-display.extraConfig

Extra configuration options to append to /etc/default/surf-display. Type: strings concatenated with “\n” Default: "" Example: '' # Enforce fixed resolution for all displays (default: not set): DEFAULT_RESOLUTION="1920x1080" # HTTP proxy URL, if needed (default: not set). HTTP_PROXY_URL="http://webcache:3128" # Configure individual display screens with host specific parameters: DISPLAYS['display-host-0']="www_uri=https://www.displayserver.comany.net/display-1/index.html" DISPLAYS['display-host-1']="www_uri=https://www.displayserver.comany.net/display-2/index.html" DISPLAYS['display-host-2']="www_uri=https://www.displayserver.comany.net/display-3/index.html|res=1920x1280" DISPLAYS['display-host-3']="www_uri=https://www.displayserver.comany.net/display-4/index.html"|res=1280x1024" DISPLAYS['display-host-local-file']="www_uri=file:///usr/share/doc/surf-display/empty-page.html" '' Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/surf-display.nix>

## services.xserver.desktopManager.surf-display.hideIdlePointer

Hide idle mouse pointer. Type: string Default: "yes" Example: "no" Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/surf-display.nix>

## services.xserver.desktopManager.surf-display.inactivityInterval

Setting for internal inactivity timer to restart surf-display if the user goes inactive/idle to get a fresh session for the next user of the kiosk. If this value is set to zero, the whole feature of restarting due to inactivity is disabled. Type: signed integer Default: 300 Example: 0 Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/surf-display.nix>

## services.xserver.desktopManager.surf-display.pointerButtonMap

Disable right and middle pointer device click in browser sessions while keeping scrolling wheels’ functionality intact. See pointer subcommand on man xmodmap for details. Type: string Default: "1 0 0 4 5 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/surf-display.nix>

## services.xserver.desktopManager.surf-display.screensaverSettings

Screensaver settings, see man 1 xset for possible options. Type: strings concatenated with " " Default: "" Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/surf-display.nix>
