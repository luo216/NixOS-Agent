---
module: services.mosquitto.bridges.<name>
option_count: 3
source: options.html
---

# services.mosquitto.bridges.<name>

## services.mosquitto.bridges.<name>.addresses

Remote endpoints for the bridge. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.bridges.<name>.settings

Additional settings for this bridge. Type: open submodule of attribute set of (string, path, bool, or integer) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.bridges.<name>.topics

Topic patterns to be shared between the two brokers. Refer to the mosquitto.conf documentation for details on the format. Type: list of single-line string Default: [ ] Example: [ "# both 2 local/topic/ remote/topic/" ] Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>
