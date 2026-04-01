---
module: boot.loader.systemd-boot
option_count: 13
source: options.html
---

# boot.loader.systemd-boot

## boot.loader.systemd-boot.enable

Whether to enable the systemd-boot (formerly gummiboot) EFI boot manager. For more information about systemd-boot: https://www.freedesktop.org/wiki/Software/systemd/systemd-boot/ Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>

## boot.loader.systemd-boot.configurationLimit

Maximum number of latest generations in the boot menu. Useful to prevent boot partition running out of disk space. null means no limit i.e. all generations that have not been garbage collected yet. Type: null or signed integer Default: null Example: 120 Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>

## boot.loader.systemd-boot.consoleMode

The resolution of the console. The following values are valid: "0": Standard UEFI 80x25 mode "1": 80x50 mode, not supported by all devices "2": The first non-standard mode provided by the device firmware, if any "5": Applicable for SteamDeck where this mode represent horizontal mode "auto": Pick a suitable mode automatically using heuristics "max": Pick the highest-numbered available mode "keep": Keep the mode selected by firmware (the default) Type: one of “0”, “1”, “2”, “5”, “auto”, “max”, “keep” Default: "keep" Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>

## boot.loader.systemd-boot.editor

Whether to allow editing the kernel command-line before boot. It is recommended to set this to false, as it allows gaining root access by passing init=/bin/sh as a kernel parameter. However, it is enabled by default for backwards compatibility. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>

## boot.loader.systemd-boot.extraEntries

Any additional entries you want added to the systemd-boot menu. These entries will be copied to $BOOT/loader/entries. Each attribute name denotes the destination file name, and the corresponding attribute value is the contents of the entry. To control the ordering of the entry in the boot menu, use the sort-key field, see https://uapi-group.org/specifications/specs/boot_loader_specification/#sorting and boot.loader.systemd-boot.sortKey. Type: attribute set of strings concatenated with “\n” Default: { } Example: { "memtest86.conf" = '' title Memtest86+ efi /efi/memtest86/memtest.efi sort-key z_memtest ''; } Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>

## boot.loader.systemd-boot.extraFiles

A set of files to be copied to $BOOT. Each attribute name denotes the destination file name in $BOOT, while the corresponding attribute value specifies the source file. Type: attribute set of absolute path Default: { } Example: { "efi/memtest86/memtest.efi" = "${pkgs.memtest86plus}/memtest.efi"; } Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>

## boot.loader.systemd-boot.extraInstallCommands

Additional shell commands inserted in the bootloader installer script after generating menu entries. It can be used to expand on extra boot entries that cannot incorporate certain pieces of information (such as the resulting init= kernel parameter). Type: strings concatenated with “\n” Default: "" Example: '' default_cfg=$(cat /boot/loader/loader.conf | grep default | awk '{print $2}') init_value=$(cat /boot/loader/entries/$default_cfg | grep init= | awk '{print $2}') sed -i "s|@INIT@|$init_value|g" /boot/custom/config_with_placeholder.conf '' Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>

## boot.loader.systemd-boot.graceful

Invoke bootctl install with the --graceful option, which ignores errors when EFI variables cannot be written or when the EFI System Partition cannot be found. Currently only applies to random seed operations. Only enable this option if systemd-boot otherwise fails to install, as the scope or implication of the --graceful option may change in the future. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>

## boot.loader.systemd-boot.installDeviceTree

Install the devicetree blob specified by config.hardware.deviceTree.name to the ESP and instruct systemd-boot to pass this DTB to linux. Type: unspecified value Default: "with config.hardware.deviceTree; enable && name != null" Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>

## boot.loader.systemd-boot.rebootForBitlocker

Enable EXPERIMENTAL BitLocker support. Try to detect BitLocker encrypted drives along with an active TPM. If both are found and Windows Boot Manager is selected in the boot menu, set the “BootNext” EFI variable and restart the system. The firmware will then start Windows Boot Manager directly, leaving the TPM PCRs in expected states so that Windows can unseal the encryption key. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>

## boot.loader.systemd-boot.sortKey

The sort key used for the NixOS bootloader entries. This key determines sorting relative to non-NixOS entries. See also https://uapi-group.org/specifications/specs/boot_loader_specification/#sorting This option can also be used to control the sorting of NixOS specialisations. By default, specialisations inherit the sort key of their parent generation and will have the same value for both the sort-key and the version (i.e. the generation number), systemd-boot will therefore sort them based on their file name, meaning that in your boot menu you will have each main generation directly followed by its specialisations sorted alphabetically by their names. If you want a different ordering for a specialisation, you can override its sort-key which will cause the specialisation to be uncoupled from its parent generation. It will then be sorted by its new sort-key just like any other boot entry. The sort-key is stored in the generation’s bootspec, which means that generations keep their sort-keys even if the original definition of the generation was removed from the NixOS configuration. It also means that updating the sort-key will only affect new generations, while old ones will keep the sort-key that they were originally built with. Type: string Default: "nixos" Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>

## boot.loader.systemd-boot.windows

Make Windows bootable from systemd-boot. This option is not necessary when Windows and NixOS use the same EFI System Partition (ESP). In that case, Windows will automatically be detected by systemd-boot. However, if Windows is installed on a separate drive or ESP, you can use this option to add a menu entry for each installation manually. The attribute name is used for the title of the menu entry and internal file names. Type: attribute set of (submodule) Default: { } Example: { "10".efiDeviceHandle = "HD0c3"; "11-ame" = { title = "Windows 11 Ameliorated Edition"; efiDeviceHandle = "HD0b1"; }; "11-home" = { title = "Windows 11 Home"; efiDeviceHandle = "FS1"; sortKey = "z_windows"; }; } Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>

## boot.loader.systemd-boot.xbootldrMountPoint

Where the XBOOTLDR partition is mounted. If set, this partition will be used as $BOOT to store boot loader entries and extra files instead of the EFI partition. As per the bootloader specification, it is recommended that the EFI and XBOOTLDR partitions be mounted at /efi and /boot, respectively. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>
