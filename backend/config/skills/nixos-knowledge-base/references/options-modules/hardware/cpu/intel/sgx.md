---
module: hardware.cpu.intel.sgx
option_count: 1
source: options.html
---

# hardware.cpu.intel.sgx

## hardware.cpu.intel.sgx.enableDcapCompat

Whether to enable backward compatibility for SGX software build for the out-of-tree Intel SGX DCAP driver. Creates symbolic links for the SGX devices /dev/sgx_enclave and /dev/sgx_provision to make them available as /dev/sgx/enclave and /dev/sgx/provision, respectively. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/hardware/cpu/intel-sgx.nix>
