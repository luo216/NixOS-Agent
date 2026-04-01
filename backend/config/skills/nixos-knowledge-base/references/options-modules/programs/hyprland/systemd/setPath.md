---
module: programs.hyprland.systemd.setPath
option_count: 1
source: options.html
---

# programs.hyprland.systemd.setPath

## programs.hyprland.systemd.setPath.enable

Set environment path of systemd to include the current system’s bin directory. This is needed in Hyprland setups, where opening links in applications do not work. Enabled by default for Hyprland versions older than 0.41.2. Type: boolean Default: lib.versionOlder cfg.package.version "0.41.2" Example: false Declared by: <nixpkgs/nixos/modules/programs/wayland/hyprland.nix>
