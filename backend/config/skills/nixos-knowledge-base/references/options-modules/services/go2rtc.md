---
module: services.go2rtc
option_count: 3
source: options.html
---

# services.go2rtc

## services.go2rtc.enable

Whether to enable go2rtc streaming server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/video/go2rtc/default.nix>

## services.go2rtc.package

The go2rtc package to use. Type: package Default: pkgs.go2rtc Declared by: <nixpkgs/nixos/modules/services/video/go2rtc/default.nix>

## services.go2rtc.settings

go2rtc configuration as a Nix attribute set. See the wiki for possible configuration options. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/video/go2rtc/default.nix>
