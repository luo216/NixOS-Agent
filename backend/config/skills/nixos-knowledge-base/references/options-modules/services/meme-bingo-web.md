---
module: services.meme-bingo-web
option_count: 6
source: options.html
---

# services.meme-bingo-web

## services.meme-bingo-web.enable

Whether to enable a web app for the meme bingo, rendered entirely on the web server and made interactive with forms. Note: The application’s author suppose to run meme-bingo-web behind a reverse proxy for SSL and HTTP/3 . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/meme-bingo-web.nix>

## services.meme-bingo-web.package

The meme-bingo-web package to use. Type: package Default: pkgs.meme-bingo-web Declared by: <nixpkgs/nixos/modules/services/web-apps/meme-bingo-web.nix>

## services.meme-bingo-web.address

The address the webserver will bind to. Type: string Default: "localhost" Example: "::" Declared by: <nixpkgs/nixos/modules/services/web-apps/meme-bingo-web.nix>

## services.meme-bingo-web.baseUrl

URL to be used for the HTML <base> element on all HTML routes. Type: string Default: "http://localhost:41678/" Example: "https://bingo.example.com/" Declared by: <nixpkgs/nixos/modules/services/web-apps/meme-bingo-web.nix>

## services.meme-bingo-web.openFirewall

Whether to enable Opens the specified port in the firewall. . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/meme-bingo-web.nix>

## services.meme-bingo-web.port

Port to be used for the web server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 41678 Example: 21035 Declared by: <nixpkgs/nixos/modules/services/web-apps/meme-bingo-web.nix>
