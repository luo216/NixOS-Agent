---
module: services.wivrn.config
option_count: 2
source: options.html
---

# services.wivrn.config

## services.wivrn.config.enable

Whether to enable configuration for WiVRn. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/video/wivrn.nix>

## services.wivrn.config.json

Configuration for WiVRn. The attributes are serialized to JSON in config.json. The server will fallback to default values for any missing attributes. Like upstream, the application option is a list including the application and it’s flags. In the case of the NixOS module however, the first element of the list must be a package. The module will assert otherwise. The application can be set to a single package because it gets passed to lib.toList, though this will not allow for flags to be passed. WiVRn has good default configurations and most options can be configured at runtime so it is recommended to leave this empty and try the defaults before attempting manual configuration. See https://github.com/WiVRn/WiVRn/blob/master/docs/configuration.md Type: JSON value Default: { } Example: { # left eye, hardware; right eye, software; transparency, hardware encoder = [ { encoder = "vulkan"; codec = "h265"; } { encoder = "x264"; codec = "h264"; } { encoder = "vulkan"; codec = "h265"; } ]; application = [ pkgs.wayvr ]; } Declared by: <nixpkgs/nixos/modules/services/video/wivrn.nix>
