---
module: services.vsmartcard-vpcd
option_count: 3
source: options.html
---

# services.vsmartcard-vpcd

## services.vsmartcard-vpcd.enable

Whether to enable Virtual smart card driver… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/development/vsmartcard-vpcd.nix>

## services.vsmartcard-vpcd.hostname

Hostname of a waiting vpicc server vpcd will be connecting to. Use /dev/null for listening mode. Type: string Default: "/dev/null" Declared by: <nixpkgs/nixos/modules/services/development/vsmartcard-vpcd.nix>

## services.vsmartcard-vpcd.port

Port number vpcd will be listening on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 35963 Declared by: <nixpkgs/nixos/modules/services/development/vsmartcard-vpcd.nix>
