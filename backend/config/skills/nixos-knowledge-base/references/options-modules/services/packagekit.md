---
module: services.packagekit
option_count: 3
source: options.html
---

# services.packagekit

## services.packagekit.enable

Whether to enable PackageKit, a cross-platform D-Bus abstraction layer for installing software. Software utilizing PackageKit can install software regardless of the package manager . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/packagekit.nix>

## services.packagekit.settings

Additional settings passed straight through to PackageKit.conf Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/packagekit.nix>

## services.packagekit.vendorSettings

Additional settings passed straight through to Vendor.conf Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/packagekit.nix>
