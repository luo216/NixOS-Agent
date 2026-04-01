---
module: services.mosquitto.listeners.*
option_count: 7
source: options.html
---

# services.mosquitto.listeners.*

## services.mosquitto.listeners.*.acl

Additional ACL items to prepend to the generated ACL file. Type: list of single-line string Default: [ ] Example: [ "pattern read #" "topic readwrite anon/report/#" ] Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.listeners.*.address

Address to listen on. Listen on 0.0.0.0/:: when unset. Type: null or single-line string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.listeners.*.authPlugins

Authentication plugin to attach to this listener. Refer to the mosquitto.conf documentation for details on authentication plugins. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.listeners.*.omitPasswordAuth

Omits password checking, allowing anyone to log in with any user name unless other mandatory authentication methods (eg TLS client certificates) are configured. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.listeners.*.port

Port to listen on. Must be set to 0 to listen on a unix domain socket. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1883 Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.listeners.*.settings

Additional settings for this listener. Type: open submodule of attribute set of (string, path, bool, or integer) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.listeners.*.users

A set of users and their passwords and ACLs. Type: attribute set of (submodule) Default: { } Example: { john = { acl = [ "readwrite john/#" ]; password = "123456"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>
