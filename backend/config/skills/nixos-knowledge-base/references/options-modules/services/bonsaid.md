---
module: services.bonsaid
option_count: 5
source: options.html
---

# services.bonsaid

## services.bonsaid.enable

Whether to enable bonsaid. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/desktops/bonsaid.nix>

## services.bonsaid.package

The bonsai package to use. Type: package Default: pkgs.bonsai Declared by: <nixpkgs/nixos/modules/services/desktops/bonsaid.nix>

## services.bonsaid.configFile

Path to a .json file specifying the state transitions. You don’t need to set this unless you prefer to provide the json file yourself instead of using the settings option. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/desktops/bonsaid.nix>

## services.bonsaid.extraFlags

Extra flags to pass to bonsaid, such as [ "-v" ] to enable verbose logging. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/desktops/bonsaid.nix>

## services.bonsaid.settings

State transition definitions. See the upstream README for extended documentation and a more complete example. Type: list of (open submodule of (JSON value)) Example: [ { event_name = "power_button_pressed"; transitions = [ { delay_duration = 600000000; transitions = [ { command = [ "swaymsg" "--" "output" "*" "power" "off" ]; transitions = [ ]; type = "exec"; } ]; type = "delay"; } { event_name = "power_button_released"; transitions = [ ]; type = "event"; } ]; type = "event"; } ] Declared by: <nixpkgs/nixos/modules/services/desktops/bonsaid.nix>
