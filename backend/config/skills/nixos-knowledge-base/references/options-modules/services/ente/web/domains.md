---
module: services.ente.web.domains
option_count: 5
source: options.html
---

# services.ente.web.domains

## services.ente.web.domains.accounts

The domain under which the accounts frontend will be served. Type: string Example: "accounts.ente.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/ente.nix>

## services.ente.web.domains.albums

The domain under which the albums frontend will be served. Type: string Example: "albums.ente.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/ente.nix>

## services.ente.web.domains.api

The domain under which the api is served. This will NOT serve the api itself, but is a required setting to host the frontends! This will automatically be set for you if you enable both the api server and web frontends. Type: string Example: "api.ente.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/ente.nix>

## services.ente.web.domains.cast

The domain under which the cast frontend will be served. Type: string Example: "cast.ente.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/ente.nix>

## services.ente.web.domains.photos

The domain under which the photos frontend will be served. Type: string Example: "photos.ente.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/ente.nix>
