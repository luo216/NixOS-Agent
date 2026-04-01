---
module: services.fedimintd.<name>.nginx
option_count: 5
source: options.html
---

# services.fedimintd.<name>.nginx

## services.fedimintd.<name>.nginx.enable

Whether to configure nginx for fedimintd Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.fedimintd.<name>.nginx.config

Overrides to the nginx vhost section for api Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.fedimintd.<name>.nginx.fqdn

Public domain of the API address of the reverse proxy/tls terminator. Type: string Example: "api.myfedimint.com" Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.fedimintd.<name>.nginx.path_ui

Path to host the built-in UI on and forward to the daemon’s api port Type: string Default: "/" Example: "/" Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.fedimintd.<name>.nginx.path_ws

Path to host the API on and forward to the daemon’s api port Type: string Default: "/ws/" Example: "/" Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>
