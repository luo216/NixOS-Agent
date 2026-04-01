---
module: virtualisation.podman.autoPrune
option_count: 3
source: options.html
---

# virtualisation.podman.autoPrune

## virtualisation.podman.autoPrune.enable

Whether to periodically prune Podman resources. If enabled, a systemd timer will run podman system prune -f as specified by the dates option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/podman/default.nix>

## virtualisation.podman.autoPrune.dates

Specification (in the format described by systemd.time(7)) of the time at which the prune will occur. Type: string Default: "weekly" Declared by: <nixpkgs/nixos/modules/virtualisation/podman/default.nix>

## virtualisation.podman.autoPrune.flags

Any additional flags passed to podman system prune. Type: list of string Default: [ ] Example: [ "--all" ] Declared by: <nixpkgs/nixos/modules/virtualisation/podman/default.nix>
