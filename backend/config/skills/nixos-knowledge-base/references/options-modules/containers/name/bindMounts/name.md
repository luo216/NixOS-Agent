---
module: containers.<name>.bindMounts.<name>
option_count: 3
source: options.html
---

# containers.<name>.bindMounts.<name>

## containers.<name>.bindMounts.<name>.hostPath

Location of the host path to be mounted. Type: null or string Default: null Example: "/home/alice" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.bindMounts.<name>.isReadOnly

Determine whether the mounted path will be accessed in read-only mode. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.bindMounts.<name>.mountPoint

Mount point on the container file system. Type: string Example: "/mnt/usb" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>
