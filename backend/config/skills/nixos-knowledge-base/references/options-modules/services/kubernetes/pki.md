---
module: services.kubernetes.pki
option_count: 10
source: options.html
---

# services.kubernetes.pki

## services.kubernetes.pki.enable

Whether to enable easyCert issuer service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/pki.nix>

## services.kubernetes.pki.caCertPathPrefix

Path-prefrix for the CA-certificate to be used for cfssl signing. Suffixes “.pem” and “-key.pem” will be automatically appended for the public and private keys respectively. Type: string Default: "${config.services.cfssl.dataDir}/ca" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/pki.nix>

## services.kubernetes.pki.caSpec

Certificate specification for the auto-generated CAcert. Type: attribute set Default: { CN = "kubernetes-cluster-ca"; L = "auto-generated"; O = "NixOS"; OU = "services.kubernetes.pki.caSpec"; } Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/pki.nix>

## services.kubernetes.pki.certs

List of certificate specs to feed to cert generator. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/pki.nix>

## services.kubernetes.pki.cfsslAPIExtraSANs

Extra x509 Subject Alternative Names to be added to the cfssl API webserver TLS cert. Type: list of string Default: [ ] Example: [ "subdomain.example.com" ] Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/pki.nix>

## services.kubernetes.pki.etcClusterAdminKubeconfig

Symlink a kubeconfig with cluster-admin privileges to environment path (/etc/<path>). Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/pki.nix>

## services.kubernetes.pki.genCfsslAPICerts

Whether to automatically generate cfssl API webserver TLS cert and key, if they don’t exist. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/pki.nix>

## services.kubernetes.pki.genCfsslAPIToken

Whether to automatically generate cfssl API-token secret, if they doesn’t exist. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/pki.nix>

## services.kubernetes.pki.genCfsslCACert

Whether to automatically generate cfssl CA certificate and key, if they don’t exist. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/pki.nix>

## services.kubernetes.pki.pkiTrustOnBootstrap

Whether to always trust remote cfssl server upon initial PKI bootstrap. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/pki.nix>
