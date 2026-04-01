---
module: services.iodine
option_count: 1
source: options.html
---

# services.iodine

## services.iodine.clients

Each attribute of this option defines a systemd service that runs iodine. Many or none may be defined. The name of each service is iodine-«name» where «name» is the name of the corresponding attribute name. Type: attribute set of (submodule) Default: { } Example: { foo = { server = "tunnel.mdomain.com"; relay = "8.8.8.8"; extraConfig = "-v"; } } Declared by: <nixpkgs/nixos/modules/services/networking/iodine.nix>
