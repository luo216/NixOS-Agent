---
module: services.gokapi.environment
option_count: 4
source: options.html
---

# services.gokapi.environment

## services.gokapi.environment.GOKAPI_CONFIG_DIR

Sets the directory for the config file. Type: string Default: "%S/gokapi/config" Declared by: <nixpkgs/nixos/modules/services/networking/gokapi.nix>

## services.gokapi.environment.GOKAPI_CONFIG_FILE

Sets the filename for the config file. Type: string Default: "config.json" Declared by: <nixpkgs/nixos/modules/services/networking/gokapi.nix>

## services.gokapi.environment.GOKAPI_DATA_DIR

Sets the directory for the data. Type: string Default: "%S/gokapi/data" Declared by: <nixpkgs/nixos/modules/services/networking/gokapi.nix>

## services.gokapi.environment.GOKAPI_PORT

Sets the port of the service. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 53842 Declared by: <nixpkgs/nixos/modules/services/networking/gokapi.nix>
