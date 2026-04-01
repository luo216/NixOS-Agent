---
module: networking.supplicant.<name>.userControlled
option_count: 3
source: options.html
---

# networking.supplicant.<name>.userControlled

## networking.supplicant.<name>.userControlled.enable

Allow normal users to control wpa_supplicant through wpa_gui or wpa_cli. This is useful for laptop users that switch networks a lot and don’t want to depend on a large package such as NetworkManager just to pick nearby access points. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/supplicant.nix>

## networking.supplicant.<name>.userControlled.group

Members of this group can control wpa_supplicant. Type: string Default: "wheel" Example: "network" Declared by: <nixpkgs/nixos/modules/services/networking/supplicant.nix>

## networking.supplicant.<name>.userControlled.socketDir

Directory of sockets for controlling wpa_supplicant. Type: string Default: "/run/wpa_supplicant" Declared by: <nixpkgs/nixos/modules/services/networking/supplicant.nix>
