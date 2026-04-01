---
module: services.your_spotify
option_count: 7
source: options.html
---

# services.your_spotify

## services.your_spotify.enable

Whether to enable your_spotify. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/your_spotify.nix>

## services.your_spotify.enableLocalDB

Whether to enable a local mongodb instance. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/your_spotify.nix>

## services.your_spotify.package

The your_spotify package to use. Type: package Default: pkgs.your_spotify Declared by: <nixpkgs/nixos/modules/services/web-apps/your_spotify.nix>

## services.your_spotify.clientPackage

Client package to use. Type: package Declared by: <nixpkgs/nixos/modules/services/web-apps/your_spotify.nix>

## services.your_spotify.nginxVirtualHost

If set creates an nginx virtual host for the client. In most cases this should be the CLIENT_ENDPOINT without protocol prefix. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/your_spotify.nix>

## services.your_spotify.settings

Your Spotify Configuration. Refer to Your Spotify for definitions and values. Type: open submodule of attribute set of string Example: { CLIENT_ENDPOINT = "https://example.com"; API_ENDPOINT = "https://api.example.com"; SPOTIFY_PUBLIC = "spotify_client_id"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/your_spotify.nix>

## services.your_spotify.spotifySecretFile

A file containing the secret key of your Spotify application. Refer to: Creating the Spotify Application. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-apps/your_spotify.nix>
