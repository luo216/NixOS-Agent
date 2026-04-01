---
module: services.kmscon
option_count: 8
source: options.html
---

# services.kmscon

## services.kmscon.enable

Whether to enable kmscon as the virtual console instead of gettys. kmscon is a kms/dri-based userspace virtual terminal implementation. It supports a richer feature set than the standard linux console VT, including full unicode support, and when the video card supports drm should be much faster . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/ttys/kmscon.nix>

## services.kmscon.package

The kmscon package to use. Type: package Default: pkgs.kmscon Declared by: <nixpkgs/nixos/modules/services/ttys/kmscon.nix>

## services.kmscon.autologinUser

Username of the account that will be automatically logged in at the console. If unspecified, a login prompt is shown as usual. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/ttys/kmscon.nix>

## services.kmscon.extraConfig

Extra contents of the kmscon.conf file. Type: strings concatenated with “\n” Default: "" Example: "font-size=14" Declared by: <nixpkgs/nixos/modules/services/ttys/kmscon.nix>

## services.kmscon.extraOptions

Extra flags to pass to kmscon. Type: strings concatenated with " " Default: "" Example: "--term xterm-256color" Declared by: <nixpkgs/nixos/modules/services/ttys/kmscon.nix>

## services.kmscon.fonts

Fonts used by kmscon, in order of priority. Type: null or (non-empty (list of (submodule))) Default: null Example: [ { name = "Source Code Pro"; package = pkgs.source-code-pro; } ] Declared by: <nixpkgs/nixos/modules/services/ttys/kmscon.nix>

## services.kmscon.hwRender

Whether to enable 3D hardware acceleration to render the console. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/ttys/kmscon.nix>

## services.kmscon.useXkbConfig

Whether to configure keymap from xserver keyboard settings. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/ttys/kmscon.nix>
