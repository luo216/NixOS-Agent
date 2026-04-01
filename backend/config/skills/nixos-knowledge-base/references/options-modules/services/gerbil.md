---
module: services.gerbil
option_count: 2
source: options.html
---

# services.gerbil

## services.gerbil.environmentFile

Path to a file containing sensitive environment variables for Gerbil. See the Gerbil Documentation for more information. These will overwrite anything defined in the config. Type: null or absolute path Default: null Example: "/etc/nixos/secrets/gerbil.env" Declared by: <nixpkgs/nixos/modules/services/networking/pangolin.nix>

## services.gerbil.port

Specifies the port to listen on for Gerbil. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3003 Declared by: <nixpkgs/nixos/modules/services/networking/pangolin.nix>
