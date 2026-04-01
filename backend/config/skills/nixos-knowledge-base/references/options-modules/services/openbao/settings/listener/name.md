---
module: services.openbao.settings.listener.<name>
option_count: 2
source: options.html
---

# services.openbao.settings.listener.<name>

## services.openbao.settings.listener.<name>.address

The TCP address or UNIX socket path to listen on. Type: string Default: if config.services.openbao.settings.listener.<name>.type == "unix" then "/run/openbao/openbao.sock" else "127.0.0.1:8200" Declared by: <nixpkgs/nixos/modules/services/security/openbao.nix>

## services.openbao.settings.listener.<name>.type

The listener type to enable. Type: one of “tcp”, “unix” Declared by: <nixpkgs/nixos/modules/services/security/openbao.nix>
