---
module: services.authelia.instances.<name>.settings.server
option_count: 1
source: options.html
---

# services.authelia.instances.<name>.settings.server

## services.authelia.instances.<name>.settings.server.address

The address to listen on. Type: string Default: "tcp://:9091/" Example: "unix:///var/run/authelia.sock?path=authelia&umask=0117" Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>
