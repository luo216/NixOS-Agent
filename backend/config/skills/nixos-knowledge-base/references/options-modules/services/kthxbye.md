---
module: services.kthxbye
option_count: 12
source: options.html
---

# services.kthxbye

## services.kthxbye.enable

Whether to enable kthxbye alert acknowledgement management daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/kthxbye.nix>

## services.kthxbye.package

The kthxbye package to use. Type: package Default: pkgs.kthxbye Declared by: <nixpkgs/nixos/modules/services/monitoring/kthxbye.nix>

## services.kthxbye.extendBy

Extend silences by adding DURATION seconds. DURATION should be provided in the time.Duration format. Type: string Default: "15m0s" Example: "6h0m0s" Declared by: <nixpkgs/nixos/modules/services/monitoring/kthxbye.nix>

## services.kthxbye.extendIfExpiringIn

Extend silences that are about to expire in the next DURATION seconds. DURATION should be provided in the time.Duration format. Type: string Default: "5m0s" Example: "1m0s" Declared by: <nixpkgs/nixos/modules/services/monitoring/kthxbye.nix>

## services.kthxbye.extendWithPrefix

Extend silences with comment starting with PREFIX string. Type: string Default: "ACK!" Example: "!perma-silence" Declared by: <nixpkgs/nixos/modules/services/monitoring/kthxbye.nix>

## services.kthxbye.extraOptions

Extra command line options. Documentation can be found here. Type: list of string Default: [ ] Example: [ "-extend-with-prefix 'ACK!'" ]; Declared by: <nixpkgs/nixos/modules/services/monitoring/kthxbye.nix>

## services.kthxbye.interval

Silence check interval duration in the time.Duration format. Type: string Default: "45s" Example: "30s" Declared by: <nixpkgs/nixos/modules/services/monitoring/kthxbye.nix>

## services.kthxbye.listenAddress

The address to listen on for HTTP requests. Type: string Default: "0.0.0.0" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/monitoring/kthxbye.nix>

## services.kthxbye.logJSON

Format logged messages as JSON. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/kthxbye.nix>

## services.kthxbye.maxDuration

Maximum duration of a silence, it won’t be extended anymore after reaching it. Duration should be provided in the time.Duration format. Type: null or string Default: null Example: "30d" Declared by: <nixpkgs/nixos/modules/services/monitoring/kthxbye.nix>

## services.kthxbye.openFirewall

Whether to open ports in the firewall needed for the daemon to function. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/kthxbye.nix>

## services.kthxbye.port

The port to listen on for HTTP requests. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/monitoring/kthxbye.nix>
