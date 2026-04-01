---
module: services.fprintd
option_count: 2
source: options.html
---

# services.fprintd

## services.fprintd.enable

Whether to enable fprintd daemon and PAM module for fingerprint readers handling. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/fprintd.nix>

## services.fprintd.package

fprintd package to use. Type: package Default: if config.services.fprintd.tod.enable then pkgs.fprintd-tod else pkgs.fprintd Declared by: <nixpkgs/nixos/modules/services/security/fprintd.nix>
