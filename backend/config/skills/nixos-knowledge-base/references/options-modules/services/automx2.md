---
module: services.automx2
option_count: 5
source: options.html
---

# services.automx2

## services.automx2.enable

Whether to enable automx2. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/automx2.nix>

## services.automx2.package

The automx2 package to use. Type: package Default: pkgs.python3Packages.automx2 Declared by: <nixpkgs/nixos/modules/services/mail/automx2.nix>

## services.automx2.domain

E-Mail-Domain for which mail client autoconfig/autoconfigure should be set up. The autoconfig and autodiscover subdomains are automatically prepended and set up with ACME. The names of those domains are hardcoded in the mail clients and are not configurable. Type: string Example: "example.com" Declared by: <nixpkgs/nixos/modules/services/mail/automx2.nix>

## services.automx2.port

Port used by automx2. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4243 Declared by: <nixpkgs/nixos/modules/services/mail/automx2.nix>

## services.automx2.settings

Bootstrap json to populate database. See docs for details. Type: JSON value Declared by: <nixpkgs/nixos/modules/services/mail/automx2.nix>
