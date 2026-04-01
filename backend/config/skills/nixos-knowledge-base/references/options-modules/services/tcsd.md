---
module: services.tcsd
option_count: 9
source: options.html
---

# services.tcsd

## services.tcsd.enable

Whether to enable tcsd, a Trusted Computing management service that provides TCG Software Stack (TSS). The tcsd daemon is the only portal to the Trusted Platform Module (TPM), a hardware chip on the motherboard. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/tcsd.nix>

## services.tcsd.conformanceCred

Path to the conformance credential for your TPM. See also the platformCred option Type: absolute path Default: "${config.services.tcsd.stateDir}/conformance.cert" Declared by: <nixpkgs/nixos/modules/services/hardware/tcsd.nix>

## services.tcsd.endorsementCred

Path to the endorsement credential for your TPM. See also the platformCred option Type: absolute path Default: "${config.services.tcsd.stateDir}/endorsement.cert" Declared by: <nixpkgs/nixos/modules/services/hardware/tcsd.nix>

## services.tcsd.firmwarePCRs

PCR indices used in the TPM for firmware measurements. Type: string Default: "0,1,2,3,4,5,6,7" Declared by: <nixpkgs/nixos/modules/services/hardware/tcsd.nix>

## services.tcsd.group

Group account under which tcsd runs. Type: string Default: "tss" Declared by: <nixpkgs/nixos/modules/services/hardware/tcsd.nix>

## services.tcsd.kernelPCRs

PCR indices used in the TPM for kernel measurements. Type: string Default: "8,9,10,11,12" Declared by: <nixpkgs/nixos/modules/services/hardware/tcsd.nix>

## services.tcsd.platformCred

Path to the platform credential for your TPM. Your TPM manufacturer may have provided you with a set of credentials (certificates) that should be used when creating identities using your TPM. When a user of your TPM makes an identity, this credential will be encrypted as part of that process. See the 1.1b TPM Main specification section 9.3 for information on this process. Type: absolute path Default: "${config.services.tcsd.stateDir}/platform.cert" Declared by: <nixpkgs/nixos/modules/services/hardware/tcsd.nix>

## services.tcsd.stateDir

The location of the system persistent storage file. The system persistent storage file holds keys and data across restarts of the TCSD and system reboots. Type: absolute path Default: "/var/lib/tpm" Declared by: <nixpkgs/nixos/modules/services/hardware/tcsd.nix>

## services.tcsd.user

User account under which tcsd runs. Type: string Default: "tss" Declared by: <nixpkgs/nixos/modules/services/hardware/tcsd.nix>
