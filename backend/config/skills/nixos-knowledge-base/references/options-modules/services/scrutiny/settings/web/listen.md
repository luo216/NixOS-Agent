---
module: services.scrutiny.settings.web.listen
option_count: 3
source: options.html
---

# services.scrutiny.settings.web.listen

## services.scrutiny.settings.web.listen.basepath

If Scrutiny will be behind a path prefixed reverse proxy, you can override this value to serve Scrutiny on a subpath. Type: string Default: "" Example: "/scrutiny" Declared by: <nixpkgs/nixos/modules/services/monitoring/scrutiny.nix>

## services.scrutiny.settings.web.listen.host

Interface address for web application to bind to. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/scrutiny.nix>

## services.scrutiny.settings.web.listen.port

Port for web application to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/monitoring/scrutiny.nix>
