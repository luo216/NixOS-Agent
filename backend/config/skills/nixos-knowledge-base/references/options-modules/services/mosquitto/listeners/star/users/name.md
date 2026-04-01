---
module: services.mosquitto.listeners.*.users.<name>
option_count: 5
source: options.html
---

# services.mosquitto.listeners.*.users.<name>

## services.mosquitto.listeners.*.users.<name>.acl

Control client access to topics on the broker. Type: list of single-line string Default: [ ] Example: [ "read A/B" "readwrite A/#" ] Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.listeners.*.users.<name>.hashedPassword

Specifies the hashed password for the MQTT User. To generate hashed password install the mosquitto package and use mosquitto_passwd, then extract the second field (after the :) from the generated file. Type: null or single-line string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.listeners.*.users.<name>.hashedPasswordFile

Specifies the path to a file containing the hashed password for the MQTT user. To generate hashed password install the mosquitto package and use mosquitto_passwd, then remove the username: prefix from the generated file. The file is securely passed to mosquitto by leveraging systemd credentials. No special permissions need to be set on this file. Type: null or absolute path Default: null Example: "/path/to/file" Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.listeners.*.users.<name>.password

Specifies the (clear text) password for the MQTT User. Type: null or single-line string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.listeners.*.users.<name>.passwordFile

Specifies the path to a file containing the clear text password for the MQTT user. The file is securely passed to mosquitto by leveraging systemd credentials. No special permissions need to be set on this file. Type: null or absolute path Default: null Example: "/path/to/file" Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>
