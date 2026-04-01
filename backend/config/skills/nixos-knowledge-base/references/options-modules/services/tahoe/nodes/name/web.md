---
module: services.tahoe.nodes.<name>.web
option_count: 1
source: options.html
---

# services.tahoe.nodes.<name>.web

## services.tahoe.nodes.<name>.web.port

The port on which the Web server will listen. This is the correct setting to tweak if you want Tahoe’s WUI to listen on a different port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3456 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/tahoe.nix>
