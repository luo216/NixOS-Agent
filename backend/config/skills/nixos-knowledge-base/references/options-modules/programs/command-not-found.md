---
module: programs.command-not-found
option_count: 2
source: options.html
---

# programs.command-not-found

## programs.command-not-found.enable

Whether interactive shells should show which Nix package (if any) provides a missing command. Requires nix-channels to be set and downloaded (sudo nix-channels --update.) See also nix-index and nix-index-database as an alternative for flakes-based systems. Additionally, having the env var NIX_AUTO_RUN set will automatically run the matching package, and with NIX_AUTO_RUN_INTERACTIVE it will confirm the package before running. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/command-not-found/command-not-found.nix>

## programs.command-not-found.dbPath

Absolute path to programs.sqlite. By default this file will be provided by your channel (nixexprs.tar.xz). Type: absolute path Default: "/nix/var/nix/profiles/per-user/root/channels/nixos/programs.sqlite" Declared by: <nixpkgs/nixos/modules/programs/command-not-found/command-not-found.nix>
