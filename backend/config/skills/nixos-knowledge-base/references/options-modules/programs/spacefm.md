---
module: programs.spacefm
option_count: 2
source: options.html
---

# programs.spacefm

## programs.spacefm.enable

Whether to install SpaceFM and create /etc/spacefm/spacefm.conf. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/spacefm.nix>

## programs.spacefm.settings

The system-wide spacefm configuration. Parameters to be written to /etc/spacefm/spacefm.conf. Refer to the relevant entry in the SpaceFM manual. Type: attribute set Default: { tmp_dir = "/tmp"; terminal_su = "${pkgs.sudo}/bin/sudo"; } Declared by: <nixpkgs/nixos/modules/programs/spacefm.nix>
