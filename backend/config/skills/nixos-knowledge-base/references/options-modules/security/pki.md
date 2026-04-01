---
module: security.pki
option_count: 5
source: options.html
---

# security.pki

## security.pki.caBundle

(Read-only) the path to the final bundle of certificate authorities as a single file. Type: absolute path (read only) Declared by: <nixpkgs/nixos/modules/security/ca.nix>

## security.pki.caCertificateBlacklist

A list of blacklisted CA certificate names that won’t be imported from the Mozilla Trust Store into /etc/ssl/certs/ca-certificates.crt. Use the names from that file. Type: list of string Default: [ ] Example: [ "WoSign" "WoSign China" "CA WoSign ECC Root" "Certification Authority of WoSign G2" ] Declared by: <nixpkgs/nixos/modules/security/ca.nix>

## security.pki.certificateFiles

A list of files containing trusted root certificates in PEM format. These are concatenated to form /etc/ssl/certs/ca-certificates.crt, which is used by many programs that use OpenSSL, such as curl and git. Type: list of absolute path Default: [ ] Example: [ "${pkgs.dn42-cacert}/etc/ssl/certs/dn42-ca.crt" ] Declared by: <nixpkgs/nixos/modules/security/ca.nix>

## security.pki.certificates

A list of trusted root certificates in PEM format. Type: list of string Default: [ ] Example: [ '' NixOS.org ========= -----BEGIN CERTIFICATE----- MIIGUDCCBTigAwIBAgIDD8KWMA0GCSqGSIb3DQEBBQUAMIGMMQswCQYDVQQGEwJJ TDEWMBQGA1UEChMNU3RhcnRDb20gTHRkLjErMCkGA1UECxMiU2VjdXJlIERpZ2l0 ... -----END CERTIFICATE----- '' ] Declared by: <nixpkgs/nixos/modules/security/ca.nix>

## security.pki.useCompatibleBundle

Whether to enable usage of a compatibility bundle. Such a bundle consists exclusively of BEGIN CERTIFICATE and no BEGIN TRUSTED CERTIFICATE, which is an OpenSSL specific PEM format. It is known to be incompatible with certain software stacks. Nevertheless, enabling this will strip all additional trust rules provided by the certificates themselves. This can have security consequences depending on your usecases . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/ca.nix>
