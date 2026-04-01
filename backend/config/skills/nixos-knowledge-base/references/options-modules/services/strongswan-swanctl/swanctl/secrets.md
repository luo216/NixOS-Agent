---
module: services.strongswan-swanctl.swanctl.secrets
option_count: 11
source: options.html
---

# services.strongswan-swanctl.swanctl.secrets

## services.strongswan-swanctl.swanctl.secrets.eap

EAP secret section for a specific secret. Each EAP secret is defined in a unique section having the eap prefix. EAP secrets are used for XAuth authentication as well. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.secrets.ecdsa

Private key decryption passphrase for a key in the ecdsa folder. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.secrets.ike

IKE preshared secret section for a specific secret. Each IKE PSK is defined in a unique section having the ike prefix. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.secrets.ntlm

NTLM secret section for a specific secret. Each NTLM secret is defined in a unique section having the ntlm prefix. NTLM secrets may only be used for EAP-MSCHAPv2 authentication. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.secrets.pkcs12

PKCS#12 decryption passphrase for a container in the pkcs12 folder. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.secrets.pkcs8

Private key decryption passphrase for a key in the pkcs8 folder. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.secrets.ppk

Postquantum Preshared Key (PPK) section for a specific secret. Each PPK is defined in a unique section having the ppk prefix. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.secrets.private

Private key decryption passphrase for a key in the private folder. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.secrets.rsa

Private key decryption passphrase for a key in the rsa folder. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.secrets.token

Definition for a private key that’s stored on a token/smartcard/TPM. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.secrets.xauth

EAP secret section for a specific secret. Each EAP secret is defined in a unique section having the eap prefix. EAP secrets are used for XAuth authentication as well. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>
