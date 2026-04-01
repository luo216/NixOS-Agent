---
module: qt
option_count: 3
source: options.html
---

# qt

## qt.enable

Whether to enable Qt configuration, including theming. Enabling this option is necessary for Qt plugins to work in the installed profiles (e.g.: nix-env -i or environment.systemPackages). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/config/qt.nix>

## qt.platformTheme

Selects the platform theme to use for Qt applications. The options are gnome: Use GNOME theme with qgnomeplatform gtk2: Use GTK theme with qtstyleplugins kde: Use Qt settings from Plasma. lxqt: Use LXQt style set using the lxqt-config-appearance application. qt5ct: Use Qt style set using the qt5ct and qt6ct applications. Type: null or one of “gnome”, “gtk2”, “kde”, “lxqt”, “qt5ct” Default: null Example: "gnome" Related packages: pkgs.qgnomeplatform pkgs.qgnomeplatform-qt6 pkgs.libsForQt5.qt5ct pkgs.libsForQt5.qtstyleplugins pkgs.kdePackages.plasma-integration pkgs.kdePackages.systemsettings pkgs.lxqt.lxqt-config pkgs.lxqt.lxqt-qtplugin pkgs.qt6Packages.qt6ct pkgs.qt6Packages.qt6gtk2 Declared by: <nixpkgs/nixos/modules/config/qt.nix>

## qt.style

Selects the style to use for Qt applications. The options are adwaita, adwaita-dark, adwaita-highcontrast, adawaita-highcontrastinverse: Use Adwaita Qt style with adwaita breeze: Use the Breeze style from breeze bb10bright, bb10dark, cleanlooks, gtk2, motif, plastique: Use styles from qtstyleplugins kvantum: Use styles from kvantum Type: null or one of “adwaita”, “adwaita-dark”, “adwaita-highcontrast”, “adwaita-highcontrastinverse”, “bb10bright”, “bb10dark”, “breeze”, “cde”, “cleanlooks”, “gtk2”, “kvantum”, “motif”, “plastique” Default: null Example: "adwaita" Related packages: pkgs.adwaita-qt pkgs.adwaita-qt6 pkgs.libsForQt5.qtstyleplugin-kvantum pkgs.libsForQt5.qtstyleplugins pkgs.qt6Packages.qt6gtk2 pkgs.qt6Packages.qtstyleplugin-kvantum Declared by: <nixpkgs/nixos/modules/config/qt.nix>
