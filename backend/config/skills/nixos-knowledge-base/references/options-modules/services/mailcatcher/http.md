---
module: services.mailcatcher.http
option_count: 3
source: options.html
---

# services.mailcatcher.http

## services.mailcatcher.http.ip

The ip address of the http server. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/mail/mailcatcher.nix>

## services.mailcatcher.http.path

Prefix to all HTTP paths. Type: null or string Default: null Example: "/mailcatcher" Declared by: <nixpkgs/nixos/modules/services/mail/mailcatcher.nix>

## services.mailcatcher.http.port

The port address of the http server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1080 Declared by: <nixpkgs/nixos/modules/services/mail/mailcatcher.nix>
