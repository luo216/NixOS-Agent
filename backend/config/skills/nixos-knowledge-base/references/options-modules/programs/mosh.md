---
module: programs.mosh
option_count: 4
source: options.html
---

# programs.mosh

## programs.mosh.enable

Whether to enable mosh. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/mosh.nix>

## programs.mosh.package

The mosh package to use. Type: package Default: pkgs.mosh Declared by: <nixpkgs/nixos/modules/programs/mosh.nix>

## programs.mosh.openFirewall

Whether to automatically open the necessary ports in the firewall. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/programs/mosh.nix>

## programs.mosh.withUtempter

Whether to enable libutempter for mosh. This is required so that mosh can write to /var/run/utmp (which can be queried with who to display currently connected user sessions). Note, this will add a guid wrapper for the group utmp! Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/programs/mosh.nix>
