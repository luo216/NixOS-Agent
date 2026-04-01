---
module: services.userborn
option_count: 3
source: options.html
---

# services.userborn

## services.userborn.enable

Whether to enable userborn. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/system/userborn.nix>

## services.userborn.package

The userborn package to use. Type: package Default: pkgs.userborn Declared by: <nixpkgs/nixos/modules/services/system/userborn.nix>

## services.userborn.passwordFilesLocation

The location of the original password files. If this is not /etc, the files are symlinked from this location to /etc. The primary motivation for this is an immutable /etc, where we cannot write the files directly to /etc. However this an also serve other use cases, e.g. when /etc is on a tmpfs. Type: string Default: if immutableEtc then "/var/lib/nixos" else "/etc" Declared by: <nixpkgs/nixos/modules/services/system/userborn.nix>
