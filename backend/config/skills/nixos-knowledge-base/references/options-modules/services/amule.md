---
module: services.amule
option_count: 3
source: options.html
---

# services.amule

## services.amule.enable

Whether to run the AMule daemon. You need to manually run “amuled --ec-config” to configure the service for the first time. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/amuled.nix>

## services.amule.dataDir

The directory holding configuration, incoming and temporary files. Type: string Default: "/home/${config.services.amule.user}/" Declared by: <nixpkgs/nixos/modules/services/networking/amuled.nix>

## services.amule.user

The user the AMule daemon should run as. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/amuled.nix>
