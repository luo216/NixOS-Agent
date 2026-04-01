---
module: security.tpm2.tctiEnvironment
option_count: 4
source: options.html
---

# security.tpm2.tctiEnvironment

## security.tpm2.tctiEnvironment.enable

Set common TCTI environment variables to the specified value. The variables are TPM2TOOLS_TCTI TPM2_PKCS11_TCTI Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>

## security.tpm2.tctiEnvironment.deviceConf

Configuration part of the device TCTI, e.g. the path to the TPM device. Applies if interface is set to “device”. The format is specified in the tpm2-tools repository. Type: string Default: "/dev/tpmrm0" Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>

## security.tpm2.tctiEnvironment.interface

The name of the TPM command transmission interface (TCTI) library to use. Type: one of “tabrmd”, “device” Default: "device" Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>

## security.tpm2.tctiEnvironment.tabrmdConf

Configuration part of the tabrmd TCTI, like the D-Bus bus name. Applies if interface is set to “tabrmd”. The format is specified in the tpm2-tools repository. Type: string Default: "bus_name=com.intel.tss2.Tabrmd" Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>
