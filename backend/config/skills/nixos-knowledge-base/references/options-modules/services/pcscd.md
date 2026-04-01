---
module: services.pcscd
option_count: 6
source: options.html
---

# services.pcscd

## services.pcscd.enable

Whether to enable PCSC-Lite daemon, to access smart cards using SCard API (PC/SC). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/pcscd.nix>

## services.pcscd.extendReaderNames

String to append to every reader name. The special variable $HOSTNAME will be expanded to the current host name. Type: null or string Default: null Example: " $HOSTNAME" Declared by: <nixpkgs/nixos/modules/services/hardware/pcscd.nix>

## services.pcscd.extraArgs

Extra command line arguments to be passed to the PCSC daemon. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/hardware/pcscd.nix>

## services.pcscd.ignoreReaderNames

List of reader name patterns for the PCSC daemon to ignore. For more precise control, readers can be ignored through udev rules (cf. services.udev.extraRules) by setting the PCSCLITE_IGNORE property, for example: ACTION!="remove|unbind", SUBSYSTEM=="usb", ATTR{idVendor}=="20a0", ENV{PCSCLITE_IGNORE}="1" Type: list of string matching the pattern [^:]+ Default: [ ] Example: [ "Nitrokey" "YubiKey" ] Declared by: <nixpkgs/nixos/modules/services/hardware/pcscd.nix>

## services.pcscd.plugins

Plugin packages to be used for PCSC-Lite. Type: list of package Default: [ pkgs.ccid ] Example: [ pkgs.pcsc-cyberjack ] Declared by: <nixpkgs/nixos/modules/services/hardware/pcscd.nix>

## services.pcscd.readerConfigs

Configuration for devices that aren’t hotpluggable. See reader.conf(5) for valid options. Type: list of strings concatenated with “\n” Default: [ ] Example: [ '' FRIENDLYNAME "Some serial reader" DEVICENAME /dev/ttyS0 LIBPATH /path/to/serial_reader.so CHANNELID 1 '' ] Declared by: <nixpkgs/nixos/modules/services/hardware/pcscd.nix>
