---
module: services.tlsrpt
option_count: 3
source: options.html
---

# services.tlsrpt

## services.tlsrpt.enable

Whether to enable the TLSRPT services. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/tlsrpt.nix>

## services.tlsrpt.package

The tlsrpt-reporter package to use. Type: package Default: pkgs.tlsrpt-reporter Declared by: <nixpkgs/nixos/modules/services/mail/tlsrpt.nix>

## services.tlsrpt.configurePostfix

Whether to configure permissions to allow integration with Postfix. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/mail/tlsrpt.nix>
