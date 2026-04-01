---
module: services.uhub.<name>
option_count: 4
source: options.html
---

# services.uhub.<name>

## services.uhub.<name>.enable

Whether to enable hub instance. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/misc/uhub.nix>

## services.uhub.<name>.enableTLS

Whether to enable TLS support. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/uhub.nix>

## services.uhub.<name>.plugins

Uhub plugin configuration. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/uhub.nix>

## services.uhub.<name>.settings

Configuration of uhub. See https://www.uhub.org/doc/config.php for a list of options. Type: attribute set of (boolean or signed integer or string) Default: { } Example: { hub_description = "Yet another ADC hub"; hub_name = "My Public Hub"; max_users = 150; server_bind_addr = "any"; server_port = 1511; } Declared by: <nixpkgs/nixos/modules/services/misc/uhub.nix>
