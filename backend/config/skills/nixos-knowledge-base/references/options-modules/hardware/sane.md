---
module: hardware.sane
option_count: 7
source: options.html
---

# hardware.sane

## hardware.sane.enable

Enable support for SANE scanners. Note Users in the “scanner” group will gain access to the scanner, or the “lp” group if it’s also a printer. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/sane.nix>

## hardware.sane.backends-package

The sane-backends package to use. Type: package Default: pkgs.sane-backends Declared by: <nixpkgs/nixos/modules/services/hardware/sane.nix>

## hardware.sane.disabledDefaultBackends

Names of backends which are enabled by default but should be disabled. See $SANE_CONFIG_DIR/dll.conf for the list of possible names. Type: list of string Default: [ ] Example: [ "v4l" ] Declared by: <nixpkgs/nixos/modules/services/hardware/sane.nix>

## hardware.sane.extraBackends

Packages providing extra SANE backends to enable. Note The example contains the package for HP scanners, and the package for Apple AirScan and Microsoft WSD support (supports many vendors/devices). Type: list of absolute path Default: [ ] Example: [ pkgs.hplipWithPlugin pkgs.sane-airscan ] Declared by: <nixpkgs/nixos/modules/services/hardware/sane.nix>

## hardware.sane.netConf

Network hosts that should be probed for remote scanners. Type: strings concatenated with “\n” Default: "" Example: "192.168.0.16" Declared by: <nixpkgs/nixos/modules/services/hardware/sane.nix>

## hardware.sane.openFirewall

Open ports needed for discovery of scanners on the local network, e.g. needed for Canon scanners (BJNP protocol). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/sane.nix>

## hardware.sane.snapshot

Use a development snapshot of SANE scanner drivers. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/sane.nix>
