---
module: networking.jool.nat64.<name>
option_count: 1
source: options.html
---

# networking.jool.nat64.<name>

## networking.jool.nat64.<name>.framework

The framework to use for attaching Jool’s translation to the exist kernel packet processing rules. See the documentation for the differences between the two options. Type: one of “netfilter”, “iptables” Default: "netfilter" Declared by: <nixpkgs/nixos/modules/services/networking/jool.nix>
