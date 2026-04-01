---
module: programs.obs-studio
option_count: 4
source: options.html
---

# programs.obs-studio

## programs.obs-studio.enable

Whether to enable Free and open source software for video recording and live streaming. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/obs-studio.nix>

## programs.obs-studio.enableVirtualCamera

Installs and sets up the v4l2loopback kernel module, necessary for OBS to start a virtual camera. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/obs-studio.nix>

## programs.obs-studio.package

The obs-studio package to use. Type: null or package Default: pkgs.obs-studio Example: obs-studio Declared by: <nixpkgs/nixos/modules/programs/obs-studio.nix>

## programs.obs-studio.plugins

Optional OBS plugins. Type: list of package Default: [ ] Example: [ pkgs.obs-studio-plugins.wlrobs ] Declared by: <nixpkgs/nixos/modules/programs/obs-studio.nix>
