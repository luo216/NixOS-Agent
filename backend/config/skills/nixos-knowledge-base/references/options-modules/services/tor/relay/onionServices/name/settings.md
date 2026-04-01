---
module: services.tor.relay.onionServices.<name>.settings
option_count: 8
source: options.html
---

# services.tor.relay.onionServices.<name>.settings

## services.tor.relay.onionServices.<name>.settings.HiddenServiceAllowUnknownPorts

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.relay.onionServices.<name>.settings.HiddenServiceDirGroupReadable

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.relay.onionServices.<name>.settings.HiddenServiceExportCircuitID

See torrc manual. Type: null or value “haproxy” (singular enum) Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.relay.onionServices.<name>.settings.HiddenServiceMaxStreams

See torrc manual. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.relay.onionServices.<name>.settings.HiddenServiceMaxStreamsCloseCircuit

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.relay.onionServices.<name>.settings.HiddenServiceNumIntroductionPoints

See torrc manual. Type: null or integer between 0 and 20 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.relay.onionServices.<name>.settings.HiddenServiceSingleHopMode

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.relay.onionServices.<name>.settings.RendPostPeriod

See torrc manual. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>
