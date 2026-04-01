---
module: services.xserver.desktopManager.kodi
option_count: 2
source: options.html
---

# services.xserver.desktopManager.kodi

## services.xserver.desktopManager.kodi.enable

Enable the kodi multimedia center. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/kodi.nix>

## services.xserver.desktopManager.kodi.package

The kodi package to use. Type: package Default: pkgs.kodi Example: kodi.withPackages (p: with p; [ jellyfin pvr-iptvsimple vfs-sftp ]) Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/kodi.nix>
