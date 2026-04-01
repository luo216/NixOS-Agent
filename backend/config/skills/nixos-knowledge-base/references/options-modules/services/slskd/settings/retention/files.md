---
module: services.slskd.settings.retention.files
option_count: 2
source: options.html
---

# services.slskd.settings.retention.files

## services.slskd.settings.retention.files.complete

Lifespan of completely downloaded files in minutes. Type: unsigned integer, meaning >=0 Default: "(indefinite)" Example: 20160 Declared by: <nixpkgs/nixos/modules/services/web-apps/slskd.nix>

## services.slskd.settings.retention.files.incomplete

Lifespan of incomplete downloading files in minutes. Type: unsigned integer, meaning >=0 Default: "(indefinite)" Declared by: <nixpkgs/nixos/modules/services/web-apps/slskd.nix>
