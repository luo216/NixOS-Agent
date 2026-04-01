---
module: services.domoticz
option_count: 3
source: options.html
---

# services.domoticz

## services.domoticz.enable

Whether to enable Domoticz home automation. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/domoticz.nix>

## services.domoticz.bind

IP address to bind to. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/misc/domoticz.nix>

## services.domoticz.port

Port to bind to for HTTP, set to 0 to disable HTTP. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/misc/domoticz.nix>
