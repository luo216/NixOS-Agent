---
module: security.soteria
option_count: 2
source: options.html
---

# security.soteria

## security.soteria.enable

Whether to enable Soteria, a Polkit authentication agent for any desktop environment. Note You should only enable this if you are on a Desktop Environment that does not provide a graphical polkit authentication agent, or you are on a standalone window manager or Wayland compositor. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/soteria.nix>

## security.soteria.package

The soteria package to use. Type: package Default: pkgs.soteria Declared by: <nixpkgs/nixos/modules/security/soteria.nix>
