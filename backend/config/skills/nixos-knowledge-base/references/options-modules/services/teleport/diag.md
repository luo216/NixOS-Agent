---
module: services.teleport.diag
option_count: 3
source: options.html
---

# services.teleport.diag

## services.teleport.diag.enable

Whether to enable endpoints for monitoring purposes. See https://goteleport.com/docs/setup/admin/troubleshooting/#troubleshooting/ . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/teleport.nix>

## services.teleport.diag.addr

Metrics and diagnostics address. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/teleport.nix>

## services.teleport.diag.port

Metrics and diagnostics port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/networking/teleport.nix>
