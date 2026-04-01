---
module: services.isso
option_count: 2
source: options.html
---

# services.isso

## services.isso.enable

Whether to enable isso, a commenting server similar to Disqus. Note: The application’s author suppose to run isso behind a reverse proxy. The embedded solution offered by NixOS is also only suitable for small installations below 20 requests per second . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/isso.nix>

## services.isso.settings

Configuration for isso. See Isso Server Configuration for supported values. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Example: { general = { host = "http://localhost"; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/isso.nix>
