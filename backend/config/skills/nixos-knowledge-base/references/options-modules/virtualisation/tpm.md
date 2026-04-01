---
module: virtualisation.tpm
option_count: 4
source: options.html
---

# virtualisation.tpm

## virtualisation.tpm.enable

Whether to enable a TPM device in the virtual machine with a driver, using swtpm. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.tpm.package

The swtpm package to use. Type: package Default: pkgs.swtpm Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.tpm.deviceModel

QEMU device model for the TPM, uses the appropriate default based on th guest platform system and the package passed. Type: string Default: '' Based on the guest platform Linux system: - `tpm-tis` for (i686, x86_64) - `tpm-spapr` for ppc64 - `tpm-tis-device` for (armv7, aarch64) '' Example: "tpm-tis-device" Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.tpm.provisioning

Script to provision the TPM before control is handed off to the VM. TPM2TOOLS_TCTI will be provided to configure tpm2-tools to use the swtpm instance transparently. TCTI is also provided as a generic value, consumer is expected to re-export it however it may need (TPM2OPENSSL_TCTI, TPM2_PKCS11_TCTI, …). Type: null or string Default: null Example: tpm2_nvdefine 0xcafecafe \ -C o \ -a "ownerread|policyread|policywrite|ownerwrite|authread|authwrite" echo "foobar" | tpm2_nvwrite 0xcafecafe -C o Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>
