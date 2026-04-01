---
module: services.strongswan-swanctl.swanctl.authorities.<name>
option_count: 8
source: options.html
---

# services.strongswan-swanctl.swanctl.authorities.<name>

## services.strongswan-swanctl.swanctl.authorities.<name>.cacert

The certificates may use a relative path from the swanctl x509ca directory or an absolute path. Configure one of cacert, file, or handle per section. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.authorities.<name>.cert_uri_base

Defines the base URI for the Hash and URL feature supported by IKEv2. Instead of exchanging complete certificates, IKEv2 allows one to send an URI that resolves to the DER encoded certificate. The certificate URIs are built by appending the SHA1 hash of the DER encoded certificates to this base URI. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.authorities.<name>.crl_uris

List of CRL distribution points (ldap, http, or file URI). StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.authorities.<name>.file

Absolute path to the certificate to load. Passed as-is to the daemon, so it must be readable by it. Configure either this or handle, but not both, in one section. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.authorities.<name>.handle

Hex-encoded CKA_ID or handle of the certificate on a token or TPM, respectively. Configure either this or file, but not both, in one section. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.authorities.<name>.module

Optional PKCS#11 module name. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.authorities.<name>.ocsp_uris

List of OCSP URIs. StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.authorities.<name>.slot

Optional slot number of the token that stores the certificate. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>
