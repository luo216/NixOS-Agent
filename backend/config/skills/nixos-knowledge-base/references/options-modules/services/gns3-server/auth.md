---
module: services.gns3-server.auth
option_count: 3
source: options.html
---

# services.gns3-server.auth

## services.gns3-server.auth.enable

Whether to enable password based HTTP authentication to access the GNS3 Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/gns3-server.nix>

## services.gns3-server.auth.passwordFile

A file containing the password to access the GNS3 Server. Warning This should be a string, not a nix path, since nix paths are copied into the world-readable nix store. Type: null or absolute path Default: null Example: "/run/secrets/gns3-server-password" Declared by: <nixpkgs/nixos/modules/services/networking/gns3-server.nix>

## services.gns3-server.auth.user

Username used to access the GNS3 Server. Type: null or string Default: null Example: "gns3" Declared by: <nixpkgs/nixos/modules/services/networking/gns3-server.nix>
