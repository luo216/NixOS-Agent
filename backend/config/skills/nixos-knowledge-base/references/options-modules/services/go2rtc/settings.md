---
module: services.go2rtc.settings
option_count: 1
source: options.html
---

# services.go2rtc.settings

## services.go2rtc.settings.streams

Stream source configuration. Multiple source types are supported. Check the configuration reference for possible options. Type: attribute set of (string or list of string) Default: { } Example: { cam1 = "onvif://admin:password@192.168.1.123:2020"; cam2 = "tcp://192.168.1.123:12345"; } Declared by: <nixpkgs/nixos/modules/services/video/go2rtc/default.nix>
