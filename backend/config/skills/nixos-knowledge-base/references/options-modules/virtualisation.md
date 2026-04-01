---
module: virtualisation
option_count: 32
source: options.html
---

# virtualisation

## virtualisation.additionalPaths

A list of paths whose closure should be made available to the VM. When 9p is used, the closure is registered in the Nix database in the VM. All other paths in the host Nix store appear in the guest Nix store as well, but are considered garbage (because they are not registered in the Nix database of the guest). When virtualisation.useNixStoreImage is set, the closure is copied to the Nix store image. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.bios

An alternate BIOS (such as qboot) with which to start the VM. Should contain a file named bios.bin. If null, QEMU’s builtin SeaBIOS will be used. Type: null or package Default: null Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.bootLoaderDevice

The path (inside th VM) to the device to boot from when legacy booting. Type: absolute path Default: /dev/disk/by-id/virtio-root Example: "/dev/disk/by-id/virtio-boot-loader-device" Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.bootPartition

The path (inside the VM) to the device containing the EFI System Partition (ESP). If you are not booting from a UEFI firmware, this value is, by default, null. The ESP is mounted to boot.loader.efi.efiSysMountpoint. Type: null or absolute path Default: if cfg.useEFIBoot then "/dev/disk/by-label/ESP" else if cfg.useBIOSBoot then "/dev/disk/by-label/BOOT" else null Example: "/dev/disk/by-label/esp" Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.cores

Specify the number of cores the guest is permitted to use. The number can be higher than the available cores on the host system. Type: positive integer, meaning >0 Default: 1 Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.diskImage

Path to the disk image containing the root filesystem. The image will be created on startup if it does not exist. If null, a tmpfs will be used as the root filesystem and the VM’s state will not be persistent. Type: null or string Default: "./${config.system.name}.qcow2" Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.diskSize

The disk size in MiB (1024×1024 bytes) of the virtual machine. Type: value “auto” (singular enum) or (positive integer, meaning >0) Default: if virtualisation.diskSizeAutoSupported then "auto" else 1024 Declared by: <nixpkgs/nixos/modules/virtualisation/disk-size-option.nix>

## virtualisation.emptyDiskImages

Additional disk images to provide to the VM. The value is a list of size in MiB (1024×1024 bytes) of each disk. These disks are writeable by the VM. Type: list of ((submodule) or (positive integer, meaning >0) convertible to it) Default: [ ] Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.fileSystems

The file systems to be mounted. It must include an entry for the root directory (mountPoint = "/"). Each entry in the list is an attribute set with the following fields: mountPoint, device, fsType (a file system type recognised by mount; defaults to "auto"), and options (the mount options passed to mount using the -o flag; defaults to [ "defaults" ]). Instead of specifying device, you can also specify a volume label (label) for file systems that support it, such as ext2/ext3 (see mke2fs -L). Type: attribute set of (submodule) Default: { } Example: { "/".device = "/dev/hda1"; "/data" = { device = "/dev/hda2"; fsType = "ext3"; options = [ "data=journal" ]; }; "/bigdisk".label = "bigdisk"; } Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.forwardPorts

When using the SLiRP user networking (default), this option allows to forward ports to/from the host/guest. Warning If the NixOS firewall on the virtual machine is enabled, you also have to open the guest ports to enable the traffic between host and guest. Note Currently QEMU supports only IPv4 forwarding. Type: list of (submodule) Default: [ ] Example: [ # forward local port 2222 -> 22, to ssh into the VM { from = "host"; host.port = 2222; guest.port = 22; } # forward local port 80 -> 10.0.2.10:80 in the VLAN { from = "guest"; guest.address = "10.0.2.10"; guest.port = 80; host.address = "127.0.0.1"; host.port = 80; } ] Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.graphics

Whether to run QEMU with a graphics window, or in nographic mode. Serial console will be enabled on both settings, but this will change the preferred console. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.installBootLoader

Install boot loader to target image. This is best-effort and may break with unconventional partition setups. Use virtualisation.useDefaultFilesystems for a known-working configuration. Type: boolean Default: "cfg.useBootLoader && cfg.useDefaultFilesystems" Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.interfaces

Network interfaces to add to the VM. Type: attribute set of (submodule) Default: { } Example: { enp1s0 = { vlan = 1; }; } Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.memorySize

The memory size of the virtual machine in MiB (1024×1024 bytes). Type: positive integer, meaning >0 Default: 1024 Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.mountHostNixStore

Mount the host Nix store as a 9p mount. Type: boolean Default: !cfg.useNixStoreImage && !cfg.useBootLoader Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.msize

The msize (maximum packet size) option passed to 9p file systems, in bytes. Increasing this should increase performance significantly, at the cost of higher RAM usage. Type: positive integer, meaning >0 Default: 16384 Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.resolution

The resolution of the virtual machine display. Type: attribute set Default: { x = 1024; y = 768; } Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.restrictNetwork

If this option is enabled, the guest will be isolated, i.e. it will not be able to contact the host and no guest IP packets will be routed over the host to the outside. This option does not affect any explicitly set forwarding rules. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.rootDevice

The path (inside the VM) to the device containing the root filesystem. Type: null or absolute path Default: /dev/disk/by-label/nixos Example: "/dev/disk/by-label/nixos" Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.sharedDirectories

An attributes set of directories that will be shared with the virtual machine using VirtFS (9P filesystem over VirtIO). The attribute name will be used as the 9P mount tag. Type: attribute set of (submodule) Default: { } Example: { my-share = { source = "/path/to/be/shared"; target = "/mnt/shared"; }; } Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.useBIOSBoot

If enabled for legacy MBR VMs, the VM image will have a separate boot partition mounted at /boot. useBIOSBoot is ignored if useEFIBoot == true. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.useBootLoader

Use a boot loader to boot the system. This allows, among other things, testing the boot loader. If disabled, the kernel and initrd are directly booted, forgoing any bootloader. Check the documentation on virtualisation.directBoot.enable for details. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.useDefaultFilesystems

If enabled, the boot disk of the virtual machine will be formatted and mounted with the default filesystems for testing. Swap devices and LUKS will be disabled. If disabled, a root filesystem has to be specified and formatted (for example in the initial ramdisk). Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.useEFIBoot

If enabled, the virtual machine will provide a EFI boot manager. useEFIBoot is ignored if useBootLoader == false. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.useHostCerts

If enabled, when NIX_SSL_CERT_FILE is set on the host, pass the CA certificates from the host to the VM. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.useNixStoreImage

Build and use a disk image for the Nix store, instead of accessing the host’s one through 9p. For applications which do a lot of reads from the store, this can drastically improve performance, but at the cost of disk space and image build time. The Nix store image is built just-in-time right before the VM is started. Because it does not produce another derivation, the image is not cached between invocations and never lands in the store or binary cache. If you want a full disk image with a partition table and a root filesystem instead of only a store image, enable virtualisation.useBootLoader instead. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.useSecureBoot

Enable Secure Boot support in the EFI firmware. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.vlans

Virtual networks to which the VM is connected. Each number «N» in this list causes the VM to have a virtual Ethernet interface attached to a separate virtual network on which it will be assigned IP address 192.168.«N».«M», where «M» is the index of this VM in the list of VMs. Type: list of (unsigned integer, meaning >=0) Default: if config.virtualisation.interfaces == {} then [ 1 ] else [ ] Example: [ 1 2 ] Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.vmVariant

Machine configuration to be added for the vm script produced by nixos-rebuild build-vm. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/build-vm.nix>

## virtualisation.vmVariantWithBootLoader

Machine configuration to be added for the vm script produced by nixos-rebuild build-vm-with-bootloader. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/build-vm.nix>

## virtualisation.writableStore

If enabled, the Nix store in the VM is made writable by layering an overlay filesystem on top of the host’s Nix store. By default, this is enabled if you mount a host Nix store. Type: boolean Default: cfg.mountHostNixStore Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.writableStoreUseTmpfs

Use a tmpfs for the writable store instead of writing to the VM’s own filesystem. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>
