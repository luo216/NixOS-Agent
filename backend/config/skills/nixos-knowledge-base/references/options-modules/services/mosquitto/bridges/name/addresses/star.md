---
module: services.mosquitto.bridges.<name>.addresses.*
option_count: 2
source: options.html
---

# services.mosquitto.bridges.<name>.addresses.*

## services.mosquitto.bridges.<name>.addresses.*.address

Address of the remote MQTT broker. Type: single-line string Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.bridges.<name>.addresses.*.port

Port of the remote MQTT broker. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1883 Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>
