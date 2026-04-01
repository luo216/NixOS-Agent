---
module: networking.wireless.userControlled
option_count: 2
source: options.html
---

# networking.wireless.userControlled

## networking.wireless.userControlled.enable

Allow normal users to control wpa_supplicant through wpa_gui or wpa_cli. This is useful for laptop users that switch networks a lot and don’t want to depend on a large package such as NetworkManager just to pick nearby access points. When using a declarative network specification you cannot persist any settings via wpa_gui or wpa_cli. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>

## networking.wireless.userControlled.group

Members of this group can control wpa_supplicant. Type: string Default: "wheel" Example: "network" Declared by: <nixpkgs/nixos/modules/services/networking/wpa_supplicant.nix>
