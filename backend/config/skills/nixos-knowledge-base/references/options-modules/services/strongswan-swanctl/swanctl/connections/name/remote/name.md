---
module: services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>
option_count: 13
source: options.html
---

# services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>

## services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>.auth

Authentication to expect from remote. See the local section’s auth keyword description about the details of supported mechanisms. Since 5.4.0, to require a trustchain public key strength for the remote side, specify the key type followed by the minimum strength in bits (for example ecdsa-384 or rsa-2048-ecdsa-256). To limit the acceptable set of hashing algorithms for trustchain validation, append hash algorithms to pubkey or a key strength definition (for example pubkey-sha256-sha512, rsa-2048-sha256-sha384-sha512 or rsa-2048-sha256-ecdsa-256-sha256-sha384). Unless disabled in strongswan.conf, or explicit IKEv2 signature constraints are configured (refer to the description of the local section’s auth keyword for details), such key types and hash algorithms are also applied as constraints against IKEv2 signature authentication schemes used by the remote side. To require RSASSA-PSS signatures use rsa/pss instead of pubkey or rsa as in e.g. rsa/pss-sha256. If pubkey or rsa constraints are configured RSASSA-PSS signatures will only be accepted if enabled in strongswan.conf(5). To specify trust chain constraints for EAP-(T)TLS, append a colon to the EAP method, followed by the key type/size and hash algorithm as discussed above (e.g. eap-tls:ecdsa-384-sha384). StrongSwan default: "pubkey" Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>.ca_id

Identity in CA certificate to accept for authentication. The specified identity must be contained in one (intermediate) CA of the remote peer trustchain, either as subject or as subjectAltName. This has the same effect as specifying cacerts to force clients under a CA to specific connections; it does not require the CA certificate to be available locally, and can be received from the peer during the IKE exchange. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>.cacert

Section for a CA certificate to accept for authentication. Certificates in cacerts are transmitted as binary blobs, these sections offer more flexibility. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>.cacerts

List of CA certificates to accept for authentication. The certificates may use a relative path from the swanctl x509ca directory or an absolute path. StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>.cert

Section for a certificate candidate to use for authentication. Certificates in certs are transmitted as binary blobs, these sections offer more flexibility. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>.cert_policy

List of certificate policy OIDs the peer’s certificate must have. OIDs are specified using the numerical dotted representation. StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>.certs

List of certificates to accept for authentication. The certificates may use a relative path from the swanctl x509 directory or an absolute path. StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>.eap_id

Identity to use as peer identity during EAP authentication. If set to %any the EAP-Identity method will be used to ask the client for an EAP identity. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>.groups

Authorization group memberships to require. The peer must prove membership to at least one of the specified groups. Group membership can be certified by different means, for example by appropriate Attribute Certificates or by an AAA backend involved in the authentication. StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>.id

IKE identity to expect for authentication round. When using certificate authentication, the IKE identity must be contained in the certificate, either as subject or as subjectAltName. StrongSwan default: "%any" Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>.pubkeys

List of raw public keys to accept for authentication. The public keys may use a relative path from the swanctl pubkey directory or an absolute path. StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>.revocation

Certificate revocation policy for CRL or OCSP revocation. A strict revocation policy fails if no revocation information is available, i.e. the certificate is not known to be unrevoked. ifuri fails only if a CRL/OCSP URI is available, but certificate revocation checking fails, i.e. there should be revocation information available, but it could not be obtained. The default revocation policy relaxed fails only if a certificate is revoked, i.e. it is explicitly known that it is bad. StrongSwan default: "relaxed" Type: null or one of “strict”, “ifuri”, “relaxed” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>.round

Optional numeric identifier by which authentication rounds are sorted. If not specified rounds are ordered by their position in the config file/vici message. StrongSwan default: 0 Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>
