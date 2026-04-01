---
module: networking.networkmanager.ethernet
option_count: 1
source: options.html
---

# networking.networkmanager.ethernet

## networking.networkmanager.ethernet.macAddress

Set the MAC address of the interface. "XX:XX:XX:XX:XX:XX": MAC address of the interface "permanent": Use the permanent MAC address of the device "preserve": Don’t change the MAC address of the device upon activation "random": Generate a randomized value upon each connect "stable": Generate a stable, hashed MAC address Type: string or one of “permanent”, “preserve”, “random”, “stable” Default: "preserve" Example: "00:11:22:33:44:55" Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>
