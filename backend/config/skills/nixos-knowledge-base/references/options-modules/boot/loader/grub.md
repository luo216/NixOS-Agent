---
module: boot.loader.grub
option_count: 40
source: options.html
---

# boot.loader.grub

## boot.loader.grub.enable

Whether to enable the GNU GRUB boot loader. Type: boolean Default: !config.boot.isContainer Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.enableCryptodisk

Enable support for encrypted partitions. GRUB should automatically unlock the correct encrypted partition and look for filesystems. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.backgroundColor

Background color to be used for GRUB to fill the areas the image isn’t filling. Type: null or string Default: null Example: "#7EBAE4" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.configurationLimit

Maximum of configurations in boot menu. GRUB has problems when there are too many entries. Type: signed integer Default: 100 Example: 120 Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.configurationName

GRUB entry name instead of default. Type: string Default: "" Example: "Stable 2.6.21" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.copyKernels

Whether the GRUB menu builder should copy kernels and initial ramdisks to /boot. This is done automatically if /boot is on a different partition than /. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.default

Index of the default menu item to be booted. Can also be set to “saved”, which will make GRUB select the menu item that was used at the last boot. Type: signed integer or string Default: "0" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.device

The device on which the GRUB boot loader will be installed. The special value nodev means that a GRUB boot menu will be generated, but GRUB itself will not actually be installed. To install GRUB on multiple devices, use boot.loader.grub.devices. Type: string Default: "" Example: "/dev/disk/by-id/wwn-0x500001234567890a" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.devices

The devices on which the boot loader, GRUB, will be installed. Can be used instead of device to install GRUB onto multiple devices. Type: list of string Default: [ ] Example: [ "/dev/disk/by-id/wwn-0x500001234567890a" ] Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.efiInstallAsRemovable

Whether to invoke grub-install with --removable. Unless you turn this on, GRUB will install itself somewhere in boot.loader.efi.efiSysMountPoint (exactly where depends on other config variables). If you’ve set boot.loader.efi.canTouchEfiVariables AND you are currently booted in UEFI mode, then GRUB will use efibootmgr to modify the boot order in the EFI variables of your firmware to include this location. If you are not booted in UEFI mode at the time GRUB is being installed, the NVRAM will not be modified, and your system will not find GRUB at boot time. However, GRUB will still return success so you may miss the warning that gets printed (“efibootmgr: EFI variables are not supported on this system.”). If you turn this feature on, GRUB will install itself in a special location within efiSysMountPoint (namely EFI/boot/boot$arch.efi) which the firmwares are hardcoded to try first, regardless of NVRAM EFI variables. To summarize, turn this on if: You are installing NixOS and want it to boot in UEFI mode, but you are currently booted in legacy mode You want to make a drive that will boot regardless of the NVRAM state of the computer (like a USB “removable” drive) You simply dislike the idea of depending on NVRAM state to make your drive bootable Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.efiSupport

Whether GRUB should be built with EFI support. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.entryOptions

Options applied to the primary NixOS menu entry. Type: null or string Default: "--class nixos --unrestricted" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.extraConfig

Additional GRUB commands inserted in the configuration file just before the menu entries. Type: strings concatenated with “\n” Default: "" Example: '' serial --unit=0 --speed=115200 --word=8 --parity=no --stop=1 terminal_input --append serial terminal_output --append serial '' Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.extraEntries

Any additional entries you want added to the GRUB boot menu. Type: strings concatenated with “\n” Default: "" Example: '' # GRUB 2 example menuentry "Windows 7" { chainloader (hd0,4)+1 } # GRUB 2 with UEFI example, chainloading another distro menuentry "Fedora" { set root=(hd1,1) chainloader /efi/fedora/grubx64.efi } '' Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.extraEntriesBeforeNixOS

Whether extraEntries are included before the default option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.extraFiles

A set of files to be copied to /boot. Each attribute name denotes the destination file name in /boot, while the corresponding attribute value specifies the source file. Type: attribute set of absolute path Default: { } Example: { "memtest.bin" = "${pkgs.memtest86plus}/memtest.bin"; } Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.extraGrubInstallArgs

Additional arguments passed to grub-install. A use case for this is to build specific GRUB2 modules directly into the GRUB2 kernel image, so that they are available and activated even in the grub rescue shell. They are also necessary when the BIOS/UEFI is bugged and cannot correctly read large disks (e.g. above 2 TB), so GRUB2’s own nativedisk and related modules can be used to use its own disk drivers. The example shows one such case. This is also useful for booting from USB. See the GRUB source code for which disk modules are available. The list elements are passed directly as argv arguments to the grub-install program, in order. Type: list of string Default: [ ] Example: [ "--modules=nativedisk ahci pata part_gpt part_msdos diskfilter mdraid1x lvm ext2" ] Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.extraInstallCommands

Additional shell commands inserted in the bootloader installer script after generating menu entries. Type: strings concatenated with “\n” Default: "" Example: '' # the example below generates detached signatures that GRUB can verify # https://www.gnu.org/software/grub/manual/grub/grub.html#Using-digital-signatures ''${pkgs.findutils}/bin/find /boot -not -path "/boot/efi/*" -type f -name '*.sig' -delete old_gpg_home=$GNUPGHOME export GNUPGHOME="$(mktemp -d)" ''${pkgs.gnupg}/bin/gpg --import ''${priv_key} > /dev/null 2>&1 ''${pkgs.findutils}/bin/find /boot -not -path "/boot/efi/*" -type f -exec ''${pkgs.gnupg}/bin/gpg --detach-sign "{}" \; > /dev/null 2>&1 rm -rf $GNUPGHOME export GNUPGHOME=$old_gpg_home '' Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.extraPerEntryConfig

Additional GRUB commands inserted in the configuration file at the start of each NixOS menu entry. Type: strings concatenated with “\n” Default: "" Example: "root (hd0)" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.extraPrepareConfig

Additional bash commands to be run at the script that prepares the GRUB menu entries. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.font

Path to a TrueType, OpenType, or pf2 font to be used by Grub. Type: null or absolute path Default: "${pkgs.grub2}/share/grub/unicode.pf2" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.fontSize

Font size for the grub menu. Ignored unless font is set to a ttf or otf font. Type: null or signed integer Default: null Example: 16 Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.forceInstall

Whether to try and forcibly install GRUB even if problems are detected. It is not recommended to enable this unless you know what you are doing. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.forcei686

Whether to force the use of a ia32 boot loader on x64 systems. Required to install and run NixOS on 64bit x86 systems with 32bit (U)EFI. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.fsIdentifier

Determines how GRUB will identify devices when generating the configuration file. A value of uuid / label signifies that grub will always resolve the uuid or label of the device before using it in the configuration. A value of provided means that GRUB will use the device name as show in df or mount. Note, zfs zpools / datasets are ignored and will always be mounted using their labels. Type: one of “uuid”, “label”, “provided” Default: "uuid" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.gfxmodeBios

The gfxmode to pass to GRUB when loading a graphical boot interface under BIOS. Type: string Default: "1024x768" Example: "auto" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.gfxmodeEfi

The gfxmode to pass to GRUB when loading a graphical boot interface under EFI. Type: string Default: "auto" Example: "1024x768" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.gfxpayloadBios

The gfxpayload to pass to GRUB when loading a graphical boot interface under BIOS. Type: string Default: "text" Example: "keep" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.gfxpayloadEfi

The gfxpayload to pass to GRUB when loading a graphical boot interface under EFI. Type: string Default: "keep" Example: "text" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.ipxe

Set of iPXE scripts available for booting from the GRUB boot menu. Type: attribute set of (absolute path or string) Default: { } Example: { demo = '' #!ipxe dhcp chain http://boot.ipxe.org/demo/boot.php ''; } Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/ipxe.nix>

## boot.loader.grub.mirroredBoots

Mirror the boot configuration to multiple partitions and install grub to the respective devices corresponding to those partitions. Type: list of (submodule) Default: [ ] Example: [ { devices = [ "/dev/disk/by-id/wwn-0x500001234567890a" ]; path = "/boot1"; } { devices = [ "/dev/disk/by-id/wwn-0x500009876543210a" ]; path = "/boot2"; } ] Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.splashImage

Background image used for GRUB. Set to null to run GRUB in text mode. Note File must be one of .png, .tga, .jpg, or .jpeg. JPEG images must not be progressive. The image will be scaled if necessary to fit the screen. Type: null or absolute path Example: ./my-background.png Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.splashMode

Whether to stretch the image or show the image in the top-left corner unstretched. Type: one of “normal”, “stretch” Default: "stretch" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.storePath

Path to the Nix store when looking for kernels at boot. Only makes sense when copyKernels is false. Type: string Default: "/nix/store" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.subEntryOptions

Options applied to the secondary NixOS submenu entry. Type: null or string Default: "--class nixos" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.theme

Path to the grub theme to be used. Type: null or absolute path Default: null Example: "${pkgs.kdePackages.breeze-grub}/grub/themes/breeze" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.timeoutStyle

menu shows the menu. countdown uses a text-mode countdown. hidden hides GRUB entirely. When using a theme, the default value (menu) is appropriate for the graphical countdown. When attempting to do flicker-free boot, hidden should be used. See the GRUB documentation section about timeout_style. Note If this option is set to ‘countdown’ or ‘hidden’ […] and ESC or F4 are pressed, or SHIFT is held down during that time, it will display the menu and wait for input. From: Simple configuration handling page, under GRUB_TIMEOUT_STYLE. Type: one of “menu”, “countdown”, “hidden” Default: "menu" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.useOSProber

If set to true, append entries for other OSs detected by os-prober. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.users

User accounts for GRUB. When specified, the GRUB command line and all boot options except the default are password-protected. All passwords and hashes provided will be stored in /boot/grub/grub.cfg, and will be visible to any local user who can read this file. Additionally, any passwords and hashes provided directly in a Nix configuration (as opposed to external files) will be copied into the Nix store, and will be visible to all local users. Type: attribute set of (submodule) Default: { } Example: { root = { hashedPasswordFile = "/path/to/file"; }; } Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.zfsSupport

Whether GRUB should be built against libzfs. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>
