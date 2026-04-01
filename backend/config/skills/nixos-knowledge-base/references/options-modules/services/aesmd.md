---
module: services.aesmd
option_count: 5
source: options.html
---

# services.aesmd

## services.aesmd.enable

Whether to enable Intel’s Architectural Enclave Service Manager (AESM) for Intel SGX. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/aesmd.nix>

## services.aesmd.package

The sgx-psw package to use. Type: package Default: pkgs.sgx-psw Declared by: <nixpkgs/nixos/modules/services/security/aesmd.nix>

## services.aesmd.environment

Additional environment variables to pass to the AESM service. Type: attribute set of string Default: { } Example: { AZDCAP_COLLATERAL_VERSION = "v2"; AZDCAP_DEBUG_LOG_LEVEL = "INFO"; } Declared by: <nixpkgs/nixos/modules/services/security/aesmd.nix>

## services.aesmd.quoteProviderLibrary

Custom quote provider library to use. Type: null or absolute path Default: null Example: pkgs.sgx-azure-dcap-client Declared by: <nixpkgs/nixos/modules/services/security/aesmd.nix>

## services.aesmd.settings

AESM configuration Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/security/aesmd.nix>
