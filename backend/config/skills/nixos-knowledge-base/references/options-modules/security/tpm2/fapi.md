---
module: security.tpm2.fapi
option_count: 11
source: options.html
---

# security.tpm2.fapi

## security.tpm2.fapi.ekCertLess

A switch to disable Endorsement Key (EK) certificate verification. A value of null indicates that the generated fapi config file does not contain a ek_cert_less key. The effect of not having that key at all is the same as setting its value to false. A value of false means that the tss2 cli will not work if there is no EK Cert installed, or if the installed EK Cert can’t be validated. A value of true means that the tss2 cli will work even if there’s no EK cert installed. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>

## security.tpm2.fapi.ekFingerprint

The fingerprint of the endorsement key. A value of null means that you have chosen not to specify the expected fingerprint of the EK. You can still have an endorsement key, it just won’t get checked to see if it’s fingerprint matches a particular value before being used. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>

## security.tpm2.fapi.firmwareLogFile

The binary bios measurements. Type: string Default: "/sys/kernel/security/tpm0/binary_bios_measurements" Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>

## security.tpm2.fapi.imaLogFile

The binary IMA measurements (Integrity Measurement Architecture). Type: string Default: "/sys/kernel/security/ima/binary_runtime_measurements" Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>

## security.tpm2.fapi.logDir

The directory for the event log. Type: string Default: "/var/log/tpm2-tss/eventlog/" Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>

## security.tpm2.fapi.profileDir

Directory that contains all cryptographic profiles known to FAPI. Type: string Default: ${pkgs.tpm2-tss}/etc/fapi-profiles/ Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>

## security.tpm2.fapi.profileName

Name of the default cryptographic profile chosen from the profile_dir directory. Type: string Default: "P_ECCP256SHA256" Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>

## security.tpm2.fapi.systemDir

The directory where system objects, policies, and imported objects are stored. Type: string Default: "/var/lib/tpm2-tss/keystore" Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>

## security.tpm2.fapi.systemPcrs

The PCR registers which are used by the system. Type: list of signed integer Default: [ ] Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>

## security.tpm2.fapi.tcti

The TCTI which will be used. An empty string indicates no TCTI is specified by the FAPI config. If not specified in the FAPI config it can be specified by environment variable (TPM2TOOLS_TCTI, TPM2_PKCS11_TCTI, etc) or a TCTI will be chosen by the FAPI library by searching for tabrmd, device, and mssim TCTIs in that order. Type: string Default: "" Example: "device:/dev/tpmrm0" Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>

## security.tpm2.fapi.userDir

The directory where user objects are stored. Type: string Default: "~/.local/share/tpm2-tss/user/keystore/" Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>
