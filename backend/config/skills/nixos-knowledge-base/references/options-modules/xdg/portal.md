---
module: xdg.portal
option_count: 5
source: options.html
---

# xdg.portal

## xdg.portal.enable

Whether to enable xdg desktop integration. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/config/xdg/portal.nix>

## xdg.portal.config

Sets which portal backend should be used to provide the implementation for the requested interface. For details check portals.conf(5). Configs will be linked to /etc/xdg/xdg-desktop-portal/ with the name $desktop-portals.conf for xdg.portal.config.$desktop and portals.conf for xdg.portal.config.common as an exception. Type: attribute set of attribute set of (string or ((list of string) or string) convertible to it) Default: { } Example: { common = { default = [ "gtk" ]; }; pantheon = { default = [ "pantheon" "gtk" ]; "org.freedesktop.impl.portal.Secret" = [ "gnome-keyring" ]; }; x-cinnamon = { default = [ "xapp" "gtk" ]; }; } Declared by: <nixpkgs/nixos/modules/config/xdg/portal.nix>

## xdg.portal.configPackages

List of packages that provide XDG desktop portal configuration, usually in the form of share/xdg-desktop-portal/$desktop-portals.conf. Note that configs in xdg.portal.config will be preferred if set. Type: list of package Default: [ ] Example: [ pkgs.gnome-session ] Declared by: <nixpkgs/nixos/modules/config/xdg/portal.nix>

## xdg.portal.extraPortals

List of additional portals to add to path. Portals allow interaction with system, like choosing files or taking screenshots. At minimum, a desktop portal implementation should be listed. GNOME and KDE already adds xdg-desktop-portal-gtk; and xdg-desktop-portal-kde respectively. On other desktop environments you probably want to add them yourself. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/config/xdg/portal.nix>

## xdg.portal.xdgOpenUsePortal

Sets environment variable NIXOS_XDG_OPEN_USE_PORTAL to 1 This will make xdg-open use the portal to open programs, which resolves bugs involving programs opening inside FHS envs or with unexpected env vars set from wrappers. See #160923 for more info. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/xdg/portal.nix>
