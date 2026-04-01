---
module: services.acme-dns
option_count: 3
source: options.html
---

# services.acme-dns

## services.acme-dns.enable

Whether to enable acme-dns. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/acme-dns.nix>

## services.acme-dns.package

The acme-dns package to use. Type: package Default: pkgs.acme-dns Declared by: <nixpkgs/nixos/modules/services/networking/acme-dns.nix>

## services.acme-dns.settings

Free-form settings written directly to the acme-dns.cfg file. Refer to https://github.com/joohoi/acme-dns/blob/master/README.md#configuration for supported values. Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/acme-dns.nix>
