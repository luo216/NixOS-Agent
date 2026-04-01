---
module: services.garage.settings
option_count: 2
source: options.html
---

# services.garage.settings

## services.garage.settings.data_dir

The directory in which Garage will store the data blocks of objects. This folder can be placed on an HDD. Since v0.9.0, Garage supports multiple data directories, refer to https://garagehq.deuxfleurs.fr/documentation/reference-manual/configuration/#data_dir for the exact format. Type: absolute path or list of (attribute set) Default: "/var/lib/garage/data" Example: [ { capacity = "2T"; path = "/var/lib/garage/data"; } ] Declared by: <nixpkgs/nixos/modules/services/web-servers/garage.nix>

## services.garage.settings.metadata_dir

The metadata directory, put this on a fast disk (e.g. SSD) if possible. Type: absolute path Default: "/var/lib/garage/meta" Declared by: <nixpkgs/nixos/modules/services/web-servers/garage.nix>
