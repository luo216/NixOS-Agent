---
module: services.portunus.dex
option_count: 3
source: options.html
---

# services.portunus.dex

## services.portunus.dex.enable

Whether to enable Dex ldap connector. To activate dex, first a search user must be created in the Portunus web ui and then the password must to be set as the DEX_SEARCH_USER_PASSWORD environment variable in the services.dex.environmentFile setting . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/portunus.nix>

## services.portunus.dex.oidcClients

List of OIDC clients. The OIDC secret must be set as the DEX_CLIENT_${id} environment variable in the services.dex.environmentFile setting. Note Make sure the id only contains characters that are allowed in an environment variable name, e.g. no -. Type: list of (submodule) Default: [ ] Example: [ { callbackURL = "https://example.com/client/oidc/callback"; id = "service"; } ] Declared by: <nixpkgs/nixos/modules/services/misc/portunus.nix>

## services.portunus.dex.port

Port where dex should listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5556 Declared by: <nixpkgs/nixos/modules/services/misc/portunus.nix>
