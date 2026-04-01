---
module: virtualisation.qemu
option_count: 7
source: options.html
---

# virtualisation.qemu

## virtualisation.qemu.package

QEMU package to use. Type: package Default: if hostPkgs.stdenv.hostPlatform.qemuArch == pkgs.stdenv.hostPlatform.qemuArch then config.virtualisation.host.pkgs.qemu_kvm else config.virtualisation.host.pkgs.qemu Example: pkgs.qemu_test Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.qemu.consoles

The output console devices to pass to the kernel command line via the console parameter, the primary console is the last item of this list. By default it enables both serial console and tty0. The preferred console (last one) is based on the value of virtualisation.graphics. Type: list of string Default: [ "ttyS0,115200n8" "tty0" ] Example: [ "console=tty1" ] Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.qemu.diskInterface

The interface used for the virtual hard disks. Type: one of “virtio”, “scsi”, “ide” Default: "virtio" Example: "scsi" Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.qemu.drives

Drives passed to qemu. Type: list of (submodule) Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.qemu.networkingOptions

Networking-related command-line options that should be passed to qemu. The default is to use userspace networking (SLiRP). See the QEMU Wiki on Networking for details. If you override this option, be advised to keep ${QEMU_NET_OPTS:+,$QEMU_NET_OPTS} (as seen in the example) to keep the default runtime behaviour. Type: list of string Default: [ ] Example: [ "-net nic,netdev=user.0,model=virtio" "-netdev user,id=user.0,\${QEMU_NET_OPTS:+,$QEMU_NET_OPTS}" ] Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.qemu.options

Options passed to QEMU. See QEMU User Documentation for a complete list. Type: list of string Default: [ ] Example: [ "-vga std" ] Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.qemu.virtioKeyboard

Enable the virtio-keyboard device. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>
