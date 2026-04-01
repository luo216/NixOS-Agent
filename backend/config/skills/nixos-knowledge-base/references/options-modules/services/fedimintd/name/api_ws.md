---
module: services.fedimintd.<name>.api_ws
option_count: 4
source: options.html
---

# services.fedimintd.<name>.api_ws

## services.fedimintd.<name>.api_ws.bind

Address to bind on for API connections relied by the reverse proxy/tls terminator. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.fedimintd.<name>.api_ws.openFirewall

Opens TCP port in firewall for fedimintd’s Websocket API Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.fedimintd.<name>.api_ws.port

TCP Port to bind on for API connections relayed by the reverse proxy/tls terminator. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8174 Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.fedimintd.<name>.api_ws.url

Public URL of the API address of the reverse proxy/tls terminator. Usually starting with wss://. Type: null or string Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>
