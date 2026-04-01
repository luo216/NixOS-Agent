---
module: boot.binfmt
option_count: 4
source: options.html
---

# boot.binfmt

## boot.binfmt.addEmulatedSystemsToNixSandbox

Whether to add the boot.binfmt.emulatedSystems to nix.settings.extra-platforms. Disable this to use remote builders for those platforms, while allowing testing binaries locally. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/system/boot/binfmt.nix>

## boot.binfmt.emulatedSystems

List of systems to emulate. Will also configure Nix to support your new systems. Warning: the builder can execute all emulated systems within the same build, which introduces impurities in the case of cross compilation. Type: list of (one of “aarch64-linux”, “aarch64_be-linux”, “alpha-linux”, “armv6l-linux”, “armv7l-linux”, “i386-linux”, “i486-linux”, “i586-linux”, “i686-linux”, “i686-windows”, “loongarch64-linux”, “mips-linux”, “mips64-linux”, “mips64-linuxabin32”, “mips64el-linux”, “mips64el-linuxabin32”, “mipsel-linux”, “powerpc-linux”, “powerpc64-linux”, “powerpc64le-linux”, “riscv32-linux”, “riscv64-linux”, “s390x-linux”, “sparc-linux”, “sparc64-linux”, “wasm32-wasi”, “wasm64-wasi”, “x86_64-linux”, “x86_64-windows”) Default: [ ] Example: [ "wasm32-wasi" "x86_64-windows" "aarch64-linux" ] Declared by: <nixpkgs/nixos/modules/system/boot/binfmt.nix>

## boot.binfmt.preferStaticEmulators

Whether to use static emulators when available. This enables the kernel to preload the emulator binaries when the binfmt registrations are added, obviating the need to make the emulator binaries available inside chroots and chroot-like sandboxes. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/binfmt.nix>

## boot.binfmt.registrations

Extra binary formats to register with the kernel. See https://www.kernel.org/doc/html/latest/admin-guide/binfmt-misc.html for more details. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/binfmt.nix>
