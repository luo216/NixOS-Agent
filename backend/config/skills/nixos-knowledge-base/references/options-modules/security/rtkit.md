---
module: security.rtkit
option_count: 3
source: options.html
---

# security.rtkit

## security.rtkit.enable

Whether to enable the RealtimeKit system service, which hands out realtime scheduling priority to user processes on demand. For example, PulseAudio and PipeWire use this to acquire realtime priority. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/rtkit.nix>

## security.rtkit.package

The rtkit package to use. Type: package Default: pkgs.rtkit Declared by: <nixpkgs/nixos/modules/security/rtkit.nix>

## security.rtkit.args

Command-line options for rtkit-daemon. Type: list of string Default: [ ] Example: [ "--our-realtime-priority=29" "--max-realtime-priority=28" ] Declared by: <nixpkgs/nixos/modules/security/rtkit.nix>
