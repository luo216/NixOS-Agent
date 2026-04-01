---
module: xdg.portal.wlr
option_count: 2
source: options.html
---

# xdg.portal.wlr

## xdg.portal.wlr.enable

Whether to enable desktop portal for wlroots-based desktops. This will add the xdg-desktop-portal-wlr package into the xdg.portal.extraPortals option, and provide the configuration file . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/config/xdg/portals/wlr.nix>

## xdg.portal.wlr.settings

Configuration for xdg-desktop-portal-wlr. See xdg-desktop-portal-wlr(5) for supported values. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { screencast = { output_name = "HDMI-A-1"; max_fps = 30; exec_before = "disable_notifications.sh"; exec_after = "enable_notifications.sh"; chooser_type = "simple"; chooser_cmd = "${pkgs.slurp}/bin/slurp -f 'Monitor: %o' -or"; }; } Declared by: <nixpkgs/nixos/modules/config/xdg/portals/wlr.nix>
