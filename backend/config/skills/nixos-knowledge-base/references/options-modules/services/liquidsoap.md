---
module: services.liquidsoap
option_count: 1
source: options.html
---

# services.liquidsoap

## services.liquidsoap.streams

Set of Liquidsoap streams to start, one systemd service per stream. Type: attribute set of (absolute path or string) Default: { } Example: { myStream1 = "/etc/liquidsoap/myStream1.liq"; myStream2 = ./myStream2.liq; myStream3 = "out(playlist(\"/srv/music/\"))"; } Declared by: <nixpkgs/nixos/modules/services/audio/liquidsoap.nix>
