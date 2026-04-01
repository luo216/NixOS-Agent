---
module: services.bloop
option_count: 2
source: options.html
---

# services.bloop

## services.bloop.extraOptions

Specifies additional command line argument to pass to bloop java process. Type: list of string Default: [ ] Example: [ "-J-Xmx2G" "-J-XX:MaxInlineLevel=20" "-J-XX:+UseParallelGC" ] Declared by: <nixpkgs/nixos/modules/services/development/bloop.nix>

## services.bloop.install

Whether to install a user service for the Bloop server. The service must be manually started for each user with “systemctl --user start bloop”. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/development/bloop.nix>
