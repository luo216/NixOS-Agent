---
module: services.strongswan-swanctl.swanctl.connections.<name>.local.<name>
option_count: 9
source: options.html
---

# services.strongswan-swanctl.swanctl.connections.<name>.local.<name>

## services.strongswan-swanctl.swanctl.connections.<name>.local.<name>.aaa_id

Server side EAP-Identity to expect in the EAP method. Some EAP methods, such as EAP-TLS, use an identity for the server to perform mutual authentication. This identity may differ from the IKE identity, especially when EAP authentication is delegated from the IKE responder to an AAA backend. For EAP-(T)TLS, this defines the identity for which the server must provide a certificate in the TLS exchange. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.local.<name>.auth

Authentication to perform locally. The default pubkey uses public key authentication using a private key associated to a usable certificate. psk uses pre-shared key authentication. The IKEv1 specific xauth is used for XAuth or Hybrid authentication, while the IKEv2 specific eap keyword defines EAP authentication. For xauth, a specific backend name may be appended, separated by a dash. The appropriate xauth backend is selected to perform the XAuth exchange. For traditional XAuth, the xauth method is usually defined in the second authentication round following an initial pubkey (or psk) round. Using xauth in the first round performs Hybrid Mode client authentication. For eap, a specific EAP method name may be appended, separated by a dash. An EAP module implementing the appropriate method is selected to perform the EAP conversation. Since 5.4.0, if both peers support RFC 7427 (“Signature Authentication in IKEv2”) specific hash algorithms to be used during IKEv2 authentication may be configured. To do so use ike: followed by a trust chain signature scheme constraint (see description of the remote section’s auth keyword). For example, with ike:pubkey-sha384-sha256 a public key signature scheme with either SHA-384 or SHA-256 would get used for authentication, in that order and depending on the hash algorithms supported by the peer. If no specific hash algorithms are configured, the default is to prefer an algorithm that matches or exceeds the strength of the signature key. If no constraints with ike: prefix are configured any signature scheme constraint (without ike: prefix) will also apply to IKEv2 authentication, unless this is disabled in strongswan.conf. To use RSASSA-PSS signatures use rsa/pss instead of pubkey or rsa as in e.g. ike:rsa/pss-sha256. If pubkey or rsa constraints are configured RSASSA-PSS signatures will only be used if enabled in strongswan.conf(5). StrongSwan default: "pubkey" Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.local.<name>.cert

Section for a certificate candidate to use for authentication. Certificates in certs are transmitted as binary blobs, these sections offer more flexibility. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.local.<name>.certs

List of certificate candidates to use for authentication. The certificates may use a relative path from the swanctl x509 directory or an absolute path. The certificate used for authentication is selected based on the received certificate request payloads. If no appropriate CA can be located, the first certificate is used. StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.local.<name>.eap_id

Client EAP-Identity to use in EAP-Identity exchange and the EAP method. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.local.<name>.id

IKE identity to use for authentication round. When using certificate authentication, the IKE identity must be contained in the certificate, either as subject or as subjectAltName. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.local.<name>.pubkeys

List of raw public key candidates to use for authentication. The public keys may use a relative path from the swanctl pubkey directory or an absolute path. Even though multiple local public keys could be defined in principle, only the first public key in the list is used for authentication. StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.local.<name>.round

Optional numeric identifier by which authentication rounds are sorted. If not specified rounds are ordered by their position in the config file/vici message. StrongSwan default: 0 Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.local.<name>.xauth_id

Client XAuth username used in the XAuth exchange. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>
