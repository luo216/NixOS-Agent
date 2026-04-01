---
module: services.goatcounter
option_count: 6
source: options.html
---

# services.goatcounter

## services.goatcounter.enable

Whether to enable goatcounter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/goatcounter.nix>

## services.goatcounter.package

The goatcounter package to use. Type: package Default: pkgs.goatcounter Declared by: <nixpkgs/nixos/modules/services/web-apps/goatcounter.nix>

## services.goatcounter.address

Web interface address. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/goatcounter.nix>

## services.goatcounter.extraArgs

List of extra arguments to be passed to goatcounter cli. See goatcounter help serve for more information. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/goatcounter.nix>

## services.goatcounter.port

Web interface port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8081 Declared by: <nixpkgs/nixos/modules/services/web-apps/goatcounter.nix>

## services.goatcounter.proxy

Whether Goatcounter service is running behind a reverse proxy. Will listen for HTTPS if false. Refer to documentation for more details. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/goatcounter.nix>
