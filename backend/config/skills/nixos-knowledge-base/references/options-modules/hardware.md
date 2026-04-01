---
module: hardware
option_count: 6
source: options.html
---

# hardware

## hardware.enableAllFirmware

Whether to enable all firmware, including unfree packages that must be explictly allowed. Alternatively, use the hardware.enableRedistributableFirmware option. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/all-firmware.nix>

## hardware.enableAllHardware

Whether to enable Enable support for most hardware. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/all-hardware.nix>

## hardware.enableRedistributableFirmware

Whether to enable firmware with a license allowing redistribution. Type: boolean Default: config.hardware.enableAllFirmware Example: true Declared by: <nixpkgs/nixos/modules/hardware/all-firmware.nix>

## hardware.firmware

List of packages containing firmware files. Such files will be loaded automatically if the kernel asks for them (i.e., when it has detected specific hardware that requires firmware to function). If multiple packages contain firmware files with the same name, the first package in the list takes precedence. Note that you must rebuild your system if you add files to any of these directories. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/hardware/udev.nix>

## hardware.firmwareCompression

Whether to compress firmware files. Defaults depend on the kernel version. For kernels older than 5.3, firmware files are not compressed. For kernels 5.3 and newer, firmware files are compressed with xz. For kernels 5.19 and newer, firmware files are compressed with zstd. Type: one of “xz”, “zstd”, “none” Default: "auto" Declared by: <nixpkgs/nixos/modules/services/hardware/udev.nix>

## hardware.wirelessRegulatoryDatabase

Whether to enable loading the wireless regulatory database at boot. Type: boolean Default: Enabled if proprietary firmware is allowed via enableRedistributableFirmware or enableAllFirmware. Example: true Declared by: <nixpkgs/nixos/modules/hardware/all-firmware.nix>
