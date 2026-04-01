---
module: services.nebula.networks.<name>.listen
option_count: 2
source: options.html
---

# services.nebula.networks.<name>.listen

## services.nebula.networks.<name>.listen.host

IP address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>

## services.nebula.networks.<name>.listen.port

Port number to listen on. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: if (config.services.nebula.networks.${name}.isLighthouse || config.services.nebula.networks.${name}.isRelay) then 4242 else 0; Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>
