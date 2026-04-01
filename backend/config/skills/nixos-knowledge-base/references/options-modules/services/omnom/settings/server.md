---
module: services.omnom.settings.server
option_count: 2
source: options.html
---

# services.omnom.settings.server

## services.omnom.settings.server.address

Server address. Type: string Default: "127.0.0.1:${config.services.omnom.port}" Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>

## services.omnom.settings.server.secure_cookie

Whether to limit cookies to a secure channel. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>
