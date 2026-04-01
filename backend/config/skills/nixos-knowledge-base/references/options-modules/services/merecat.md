---
module: services.merecat
option_count: 2
source: options.html
---

# services.merecat

## services.merecat.enable

Whether to enable Merecat HTTP server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/merecat.nix>

## services.merecat.settings

Merecat configuration. Refer to merecat(8) for details on supported values. Type: attribute set of (atom (null, bool, int, float or string)) Default: { } Example: { directory = "/srv/www"; hostname = "localhost"; port = 8080; virtual-host = true; } Declared by: <nixpkgs/nixos/modules/services/web-servers/merecat.nix>
