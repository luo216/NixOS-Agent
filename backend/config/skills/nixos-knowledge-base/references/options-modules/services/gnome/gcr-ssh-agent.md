---
module: services.gnome.gcr-ssh-agent
option_count: 2
source: options.html
---

# services.gnome.gcr-ssh-agent

## services.gnome.gcr-ssh-agent.enable

Whether to enable GCR SSH agent. Type: boolean Default: config.services.gnome.gnome-keyring.enable Example: true Declared by: <nixpkgs/nixos/modules/services/desktops/gnome/gcr-ssh-agent.nix>

## services.gnome.gcr-ssh-agent.package

The GCR package to use. Type: package Default: pkgs.gcr_4 Declared by: <nixpkgs/nixos/modules/services/desktops/gnome/gcr-ssh-agent.nix>
