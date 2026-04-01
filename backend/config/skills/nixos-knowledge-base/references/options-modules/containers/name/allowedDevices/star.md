---
module: containers.<name>.allowedDevices.*
option_count: 2
source: options.html
---

# containers.<name>.allowedDevices.*

## containers.<name>.allowedDevices.*.modifier

Device node access modifier. Takes a combination r (read), w (write), and m (mknod). See the systemd.resource-control(5) man page for more information. Type: string Example: "rw" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.allowedDevices.*.node

Path to device node Type: string Example: "/dev/net/tun" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>
