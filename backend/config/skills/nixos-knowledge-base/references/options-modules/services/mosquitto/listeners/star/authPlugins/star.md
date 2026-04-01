---
module: services.mosquitto.listeners.*.authPlugins.*
option_count: 3
source: options.html
---

# services.mosquitto.listeners.*.authPlugins.*

## services.mosquitto.listeners.*.authPlugins.*.denySpecialChars

Automatically disallow all clients using # or + in their name/id. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.listeners.*.authPlugins.*.options

Options for the auth plugin. Each key turns into a auth_opt_* line in the config. Type: attribute set of (string, path, bool, or integer) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.listeners.*.authPlugins.*.plugin

Plugin path to load, should be a .so file. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>
