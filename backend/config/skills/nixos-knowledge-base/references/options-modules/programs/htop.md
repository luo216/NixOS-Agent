---
module: programs.htop
option_count: 3
source: options.html
---

# programs.htop

## programs.htop.enable

Whether to enable htop process monitor. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/htop.nix>

## programs.htop.package

The htop package to use. Type: package Default: pkgs.htop Declared by: <nixpkgs/nixos/modules/programs/htop.nix>

## programs.htop.settings

Extra global default configuration for htop which is read on first startup only. Htop subsequently uses ~/.config/htop/htoprc as configuration source. Type: attribute set of (string or signed integer or boolean or list of (string or signed integer or boolean)) Default: { } Example: { hide_kernel_threads = true; hide_userland_threads = true; } Declared by: <nixpkgs/nixos/modules/programs/htop.nix>
