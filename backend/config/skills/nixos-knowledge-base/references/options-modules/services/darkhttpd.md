---
module: services.darkhttpd
option_count: 6
source: options.html
---

# services.darkhttpd

## services.darkhttpd.enable

Whether to enable DarkHTTPd web server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/darkhttpd.nix>

## services.darkhttpd.address

Address to listen on. Pass all to listen on all interfaces. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-servers/darkhttpd.nix>

## services.darkhttpd.extraArgs

Additional configuration passed to the executable. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-servers/darkhttpd.nix>

## services.darkhttpd.hideServerId

Don’t identify the server type in headers or directory listings. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-servers/darkhttpd.nix>

## services.darkhttpd.port

Port to listen on. Pass 0 to let the system choose any free port for you. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 80 Declared by: <nixpkgs/nixos/modules/services/web-servers/darkhttpd.nix>

## services.darkhttpd.rootDir

Path from which to serve files. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-servers/darkhttpd.nix>
