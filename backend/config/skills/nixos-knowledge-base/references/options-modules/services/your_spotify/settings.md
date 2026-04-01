---
module: services.your_spotify.settings
option_count: 5
source: options.html
---

# services.your_spotify.settings

## services.your_spotify.settings.API_ENDPOINT

The endpoint of your server This api has to be reachable from the device you use the website from not from the server. This means that for example you may need two nginx virtual hosts if you want to expose this on the internet. Has to include a protocol Prefix (e.g. http://) Type: string Example: "https://localhost:3000" Declared by: <nixpkgs/nixos/modules/services/web-apps/your_spotify.nix>

## services.your_spotify.settings.CLIENT_ENDPOINT

The endpoint of your web application. Has to include a protocol Prefix (e.g. http://) Type: string Example: "https://your_spotify.example.org" Declared by: <nixpkgs/nixos/modules/services/web-apps/your_spotify.nix>

## services.your_spotify.settings.MONGO_ENDPOINT

The endpoint of the Mongo database. Type: string Default: "mongodb://localhost:27017/your_spotify" Declared by: <nixpkgs/nixos/modules/services/web-apps/your_spotify.nix>

## services.your_spotify.settings.PORT

The port of the api server Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/web-apps/your_spotify.nix>

## services.your_spotify.settings.SPOTIFY_PUBLIC

The public client ID of your Spotify application. Refer to: Creating the Spotify Application Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/your_spotify.nix>
