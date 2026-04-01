---
module: services.gns3-server
option_count: 3
source: options.html
---

# services.gns3-server

## services.gns3-server.enable

Whether to enable GNS3 Server daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/gns3-server.nix>

## services.gns3-server.package

The gns3-server package to use. Type: package Default: pkgs.gns3-server Declared by: <nixpkgs/nixos/modules/services/networking/gns3-server.nix>

## services.gns3-server.settings

The global options in config file in ini format. Refer to https://docs.gns3.com/docs/using-gns3/administration/gns3-server-configuration-file/ for all available options. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { host = "127.0.0.1"; port = 3080; } Declared by: <nixpkgs/nixos/modules/services/networking/gns3-server.nix>
