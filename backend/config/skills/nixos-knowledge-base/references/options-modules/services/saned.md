---
module: services.saned
option_count: 2
source: options.html
---

# services.saned

## services.saned.enable

Enable saned network daemon for remote connection to scanners. saned would be run from scanner user; to allow access to hardware that doesn’t have scanner group you should add needed groups to this user. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/sane.nix>

## services.saned.extraConfig

Extra saned configuration lines. Type: strings concatenated with “\n” Default: "" Example: "192.168.0.0/24" Declared by: <nixpkgs/nixos/modules/services/hardware/sane.nix>
