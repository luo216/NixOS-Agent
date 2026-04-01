---
module: services.wstunnel.servers.<name>.settings
option_count: 1
source: options.html
---

# services.wstunnel.servers.<name>.settings

## services.wstunnel.servers.<name>.settings.restrict-to

Restrictions on the connections that the server will accept. For more flexibility, and the possibility to also allow reverse tunnels, look into the restrict-config option that takes a path to a yaml file. Type: list of (submodule) Default: [ ] Example: [ { host = "127.0.0.1"; port = 51820; } ] Declared by: <nixpkgs/nixos/modules/services/networking/wstunnel.nix>
