---
module: networking.modemmanager
option_count: 3
source: options.html
---

# networking.modemmanager

## networking.modemmanager.enable

Whether to use ModemManager to manage modem devices. This is usually used by some higher layer manager such as NetworkManager but can be used standalone especially if using a modem for non-IP connectivity (e.g. GPS). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/modemmanager.nix>

## networking.modemmanager.package

The modemmanager package to use. Type: package Default: pkgs.modemmanager Declared by: <nixpkgs/nixos/modules/services/networking/modemmanager.nix>

## networking.modemmanager.fccUnlockScripts

List of FCC unlock scripts to enable on the system, behaving as described in https://modemmanager.org/docs/modemmanager/fcc-unlock/#integration-with-third-party-fcc-unlock-tools. Type: list of (submodule) Default: [ ] Example: [{ id = "03f0:4e1d"; path = "${pkgs.modemmanager}/share/ModemManager/fcc-unlock.available.d/03f0:4e1d"; }] Declared by: <nixpkgs/nixos/modules/services/networking/modemmanager.nix>
