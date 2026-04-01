---
module: services.hylafax.modems.<name>
option_count: 3
source: options.html
---

# services.hylafax.modems.<name>

## services.hylafax.modems.<name>.config

Attribute set of values for the given modem. Values can be either strings or integers (which will be added to the config file verbatimly) or lists thereof (which will be translated to multiple lines with the same configuration key). Boolean values are translated to “Yes” or “No”. The default contains some reasonable configuration to yield an operational system. Options defined here override options in commonModemConfig for this modem. Type: attribute set of ((list of ((string or signed integer convertible to it) or boolean convertible to it)) or ((string or signed integer convertible to it) or boolean convertible to it) convertible to it) Example: { AreaCode = "49"; FAXNumber = "123456"; LocalCode = "30"; LocalIdentifier = "LostInBerlin"; } Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.modems.<name>.name

Name of modem device, will be searched for in /dev. Type: non-empty string Example: "ttyS1" Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.modems.<name>.type

Name of modem configuration file, will be searched for in config in the spooling area directory. Type: non-empty string Example: "cirrus" Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>
