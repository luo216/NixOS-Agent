---
module: services.mediagoblin.paste
option_count: 2
source: options.html
---

# services.mediagoblin.paste

## services.mediagoblin.paste.port

Port under which paste will listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 6543 Declared by: <nixpkgs/nixos/modules/services/web-apps/mediagoblin.nix>

## services.mediagoblin.paste.settings

Settings which are written into paste.ini. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/mediagoblin.nix>
