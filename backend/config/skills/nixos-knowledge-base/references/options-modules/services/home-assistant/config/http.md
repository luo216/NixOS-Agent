---
module: services.home-assistant.config.http
option_count: 2
source: options.html
---

# services.home-assistant.config.http

## services.home-assistant.config.http.server_host

Only listen to incoming requests on specific IP/host. The default listed assumes support for IPv4 and IPv6. Type: string or list of string Default: [ "0.0.0.0" "::" ] Example: "::1" Declared by: <nixpkgs/nixos/modules/services/home-automation/home-assistant.nix>

## services.home-assistant.config.http.server_port

The port on which to listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8123 Declared by: <nixpkgs/nixos/modules/services/home-automation/home-assistant.nix>
