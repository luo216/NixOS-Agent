---
module: services.public-inbox.http
option_count: 4
source: options.html
---

# services.public-inbox.http

## services.public-inbox.http.enable

Whether to enable the public-inbox HTTP server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.http.args

Command-line arguments to pass to public-inbox-httpd(1). Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.http.mounts

Root paths or URLs that public-inbox will be served on. If domain parts are present, only requests to those domains will be accepted. Type: list of string Default: [ "/" ] Example: [ "/lists/archives" ] Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.http.port

Listening port or systemd’s ListenStream= entry to be used as a reverse proxy, eg. in nginx: locations."/inbox".proxyPass = "http://unix:${config.services.public-inbox.http.port}:/inbox"; Set to null and use systemd.sockets.public-inbox-httpd.listenStreams if you need a more advanced listening. Type: null or string or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 80 Example: "/run/public-inbox-httpd.sock" Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>
