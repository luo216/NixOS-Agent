---
module: services.lk-jwt-service
option_count: 5
source: options.html
---

# services.lk-jwt-service

## services.lk-jwt-service.enable

Whether to enable lk-jwt-service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/lk-jwt-service.nix>

## services.lk-jwt-service.package

The lk-jwt-service package to use. Type: package Default: pkgs.lk-jwt-service Declared by: <nixpkgs/nixos/modules/services/matrix/lk-jwt-service.nix>

## services.lk-jwt-service.keyFile

Path to a file containing the credential mapping (<keyname>: <secret>) to access LiveKit. Example: lk-jwt-service: f6lQGaHtM5HfgZjIcec3cOCRfiDqIine4CpZZnqdT5cE For more information, see https://github.com/element-hq/lk-jwt-service#configuration. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/matrix/lk-jwt-service.nix>

## services.lk-jwt-service.livekitUrl

The public websocket URL for livekit. The proto needs to be either wss:// (recommended) or ws:// (insecure). Type: string matching the pattern ^wss?://.* Example: "wss://example.com/livekit/sfu" Declared by: <nixpkgs/nixos/modules/services/matrix/lk-jwt-service.nix>

## services.lk-jwt-service.port

Port that lk-jwt-service should listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/matrix/lk-jwt-service.nix>
