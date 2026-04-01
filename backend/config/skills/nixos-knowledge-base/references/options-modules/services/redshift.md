---
module: services.redshift
option_count: 4
source: options.html
---

# services.redshift

## services.redshift.enable

Enable Redshift to change your screen’s colour temperature depending on the time of day. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/redshift.nix>

## services.redshift.package

The redshift package to use. Type: package Default: pkgs.redshift Declared by: <nixpkgs/nixos/modules/services/x11/redshift.nix>

## services.redshift.executable

Redshift executable to use within the package. Type: string Default: "/bin/redshift" Example: "/bin/redshift-gtk" Declared by: <nixpkgs/nixos/modules/services/x11/redshift.nix>

## services.redshift.extraOptions

Additional command-line arguments to pass to redshift. Type: list of string Default: [ ] Example: [ "-v" "-m randr" ] Declared by: <nixpkgs/nixos/modules/services/x11/redshift.nix>
