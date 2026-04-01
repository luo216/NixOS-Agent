---
module: services.headscale.settings.policy
option_count: 2
source: options.html
---

# services.headscale.settings.policy

## services.headscale.settings.policy.mode

The mode can be “file” or “database” that defines where the ACL policies are stored and read from. Type: one of “file”, “database” Default: "file" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.policy.path

If the mode is set to “file”, the path to a HuJSON file containing ACL policies. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>
