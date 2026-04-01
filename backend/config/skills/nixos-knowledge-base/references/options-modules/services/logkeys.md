---
module: services.logkeys
option_count: 2
source: options.html
---

# services.logkeys

## services.logkeys.enable

Whether to enable logkeys, a keylogger service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/logkeys.nix>

## services.logkeys.device

Use the given device as keyboard input event device instead of /dev/input/eventX default. Type: null or string Default: null Example: "/dev/input/event15" Declared by: <nixpkgs/nixos/modules/services/misc/logkeys.nix>
