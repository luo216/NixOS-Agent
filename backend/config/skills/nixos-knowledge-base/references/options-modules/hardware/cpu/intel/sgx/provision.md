---
module: hardware.cpu.intel.sgx.provision
option_count: 4
source: options.html
---

# hardware.cpu.intel.sgx.provision

## hardware.cpu.intel.sgx.provision.enable

Whether to enable access to the Intel SGX provisioning device. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/cpu/intel-sgx.nix>

## hardware.cpu.intel.sgx.provision.group

Group to assign to the SGX provisioning device. Type: string Default: "sgx_prv" Declared by: <nixpkgs/nixos/modules/hardware/cpu/intel-sgx.nix>

## hardware.cpu.intel.sgx.provision.mode

Mode to set for the SGX provisioning device. Type: string Default: "0660" Declared by: <nixpkgs/nixos/modules/hardware/cpu/intel-sgx.nix>

## hardware.cpu.intel.sgx.provision.user

Owner to assign to the SGX provisioning device. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/hardware/cpu/intel-sgx.nix>
