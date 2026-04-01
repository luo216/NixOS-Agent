---
module: services.trafficserver.plugins.*
option_count: 2
source: options.html
---

# services.trafficserver.plugins.*

## services.trafficserver.plugins.*.arg

arguments to pass to the plugin Type: string Default: "" Example: "--header=ATS-My-Debug" Declared by: <nixpkgs/nixos/modules/services/web-servers/trafficserver/default.nix>

## services.trafficserver.plugins.*.path

Path to plugin. The path can either be absolute, or relative to the plugin directory. Type: string Example: "xdebug.so" Declared by: <nixpkgs/nixos/modules/services/web-servers/trafficserver/default.nix>
