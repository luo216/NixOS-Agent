---
module: services.aesmd.settings
option_count: 4
source: options.html
---

# services.aesmd.settings

## services.aesmd.settings.defaultQuotingType

Attestation quote type. Type: null or one of “ecdsa_256”, “epid_linkable”, “epid_unlinkable” Default: null Example: "ecdsa_256" Declared by: <nixpkgs/nixos/modules/services/security/aesmd.nix>

## services.aesmd.settings.proxy

HTTP network proxy. Type: null or string Default: null Example: "http://proxy_url:1234" Declared by: <nixpkgs/nixos/modules/services/security/aesmd.nix>

## services.aesmd.settings.proxyType

Type of proxy to use. The default uses the system’s default proxy. If direct is given, uses no proxy. A value of manual uses the proxy from services.aesmd.settings.proxy. Type: null or one of “default”, “direct”, “manual” Default: if (config.services.aesmd.settings.proxy != null) then "manual" else null Example: "default" Declared by: <nixpkgs/nixos/modules/services/security/aesmd.nix>

## services.aesmd.settings.whitelistUrl

URL to retrieve authorized Intel SGX enclave signers. Type: null or string Default: null Example: "http://whitelist.trustedservices.intel.com/SGX/LCWL/Linux/sgx_white_list_cert.bin" Declared by: <nixpkgs/nixos/modules/services/security/aesmd.nix>
