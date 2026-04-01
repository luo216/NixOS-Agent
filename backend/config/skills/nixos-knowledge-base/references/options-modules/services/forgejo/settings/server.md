---
module: services.forgejo.settings.server
option_count: 8
source: options.html
---

# services.forgejo.settings.server

## services.forgejo.settings.server.DISABLE_SSH

Disable external SSH feature. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.settings.server.DOMAIN

Domain name of your server. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.settings.server.HTTP_ADDR

Listen address. Must be a path when using a unix socket. Type: string or absolute path Default: if lib.hasSuffix "+unix" cfg.settings.server.PROTOCOL then "/run/forgejo/forgejo.sock" else "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.settings.server.HTTP_PORT

Listen port. Ignored when using a unix socket. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.settings.server.PROTOCOL

Listen protocol. +unix means “over unix”, not “in addition to.” Type: one of “http”, “https”, “fcgi”, “http+unix”, “fcgi+unix” Default: "http" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.settings.server.ROOT_URL

Full public URL of Forgejo server. Type: string Default: "http://${config.services.forgejo.settings.server.DOMAIN}:${toString config.services.forgejo.settings.server.HTTP_PORT}/" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.settings.server.SSH_PORT

SSH port displayed in clone URL. The option is required to configure a service when the external visible port differs from the local listening port i.e. if port forwarding is used. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 22 Example: 2222 Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.settings.server.STATIC_ROOT_PATH

Upper level of template and static files path. Type: string or absolute path Default: config.services.forgejo.package.data Example: "/var/lib/forgejo/data" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>
