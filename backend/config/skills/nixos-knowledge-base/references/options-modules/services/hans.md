---
module: services.hans
option_count: 1
source: options.html
---

# services.hans

## services.hans.clients

Each attribute of this option defines a systemd service that runs hans. Many or none may be defined. The name of each service is hans-«name» where «name» is the name of the corresponding attribute name. Type: attribute set of (submodule) Default: { } Example: { foo = { server = "192.0.2.1"; extraConfig = "-v"; } } Declared by: <nixpkgs/nixos/modules/services/networking/hans.nix>
