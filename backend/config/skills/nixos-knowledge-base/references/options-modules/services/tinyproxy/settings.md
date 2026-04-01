---
module: services.tinyproxy.settings
option_count: 4
source: options.html
---

# services.tinyproxy.settings

## services.tinyproxy.settings.Anonymous

If an Anonymous keyword is present, then anonymous proxying is enabled. The headers listed with Anonymous are allowed through, while all others are denied. If no Anonymous keyword is present, then all headers are allowed through. You must include quotes around the headers. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/tinyproxy.nix>

## services.tinyproxy.settings.Filter

Tinyproxy supports filtering of web sites based on URLs or domains. This option specifies the location of the file containing the filter rules, one rule per line. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/tinyproxy.nix>

## services.tinyproxy.settings.Listen

Specify which address to listen to. Type: null or string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/tinyproxy.nix>

## services.tinyproxy.settings.Port

Specify which port to listen to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8888 Declared by: <nixpkgs/nixos/modules/services/networking/tinyproxy.nix>
