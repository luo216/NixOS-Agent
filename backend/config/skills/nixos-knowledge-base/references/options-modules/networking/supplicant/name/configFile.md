---
module: networking.supplicant.<name>.configFile
option_count: 2
source: options.html
---

# networking.supplicant.<name>.configFile

## networking.supplicant.<name>.configFile.path

External wpa_supplicant.conf configuration file. The configuration options defined declaratively within networking.supplicant have precedence over options defined in configFile. Type: null or absolute path Default: null Example: /etc/wpa_supplicant.conf Declared by: <nixpkgs/nixos/modules/services/networking/supplicant.nix>

## networking.supplicant.<name>.configFile.writable

Whether the configuration file at configFile.path should be written to by wpa_supplicant. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/supplicant.nix>
