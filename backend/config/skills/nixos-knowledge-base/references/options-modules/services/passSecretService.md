---
module: services.passSecretService
option_count: 2
source: options.html
---

# services.passSecretService

## services.passSecretService.enable

Whether to enable pass secret service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/pass-secret-service.nix>

## services.passSecretService.package

The pass-secret-service package to use. Type: package Default: pkgs.pass-secret-service Example: pass-secret-service.override { python3 = pkgs.python310 } Declared by: <nixpkgs/nixos/modules/services/security/pass-secret-service.nix>
