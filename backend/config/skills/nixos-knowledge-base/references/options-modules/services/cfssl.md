---
module: services.cfssl
option_count: 24
source: options.html
---

# services.cfssl

## services.cfssl.enable

Whether to enable the CFSSL CA api-server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.address

Address to bind. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.ca

CA used to sign the new certificate – accepts ‘[file:]fname’ or ‘env:varname’. Type: string Default: "${cfg.dataDir}/ca.pem" Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.caBundle

Path to root certificate store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.caKey

CA private key – accepts ‘[file:]fname’ or ‘env:varname’. Type: string Default: "file:${cfg.dataDir}/ca-key.pem" Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.configFile

Path to configuration file. Do not put this in nix-store as it might contain secrets. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.dataDir

The work directory for CFSSL. Note If left as the default value this directory will automatically be created before the CFSSL server starts, otherwise you are responsible for ensuring the directory exists with appropriate ownership and permissions. Type: absolute path Default: "/var/lib/cfssl" Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.dbConfig

Certificate db configuration file. Path must be writeable. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.disable

Endpoints to disable (comma-separated list) Type: null or strings concatenated with “,” Default: null Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.intBundle

Path to intermediate certificate store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.intDir

Intermediates directory. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.logLevel

Log level (0 = DEBUG, 5 = FATAL). Type: integer between 0 and 5 (both inclusive) Default: 1 Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.metadata

Metadata file for root certificate presence. The content of the file is a json dictionary (k,v): each key k is a SHA-1 digest of a root certificate while value v is a list of key store filenames. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.mutualTlsCa

Mutual TLS - require clients be signed by this CA. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.mutualTlsClientCert

Mutual TLS - client certificate to call remote instance requiring client certs. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.mutualTlsClientKey

Mutual TLS - client key to call remote instance requiring client certs. Do not put this in nix-store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.mutualTlsCn

Mutual TLS - regex for whitelist of allowed client CNs. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.port

Port to bind. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8888 Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.remote

Remote CFSSL server. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.responder

Certificate for OCSP responder. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.responderKey

Private key for OCSP responder certificate. Do not put this in nix-store. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.tlsCert

Other endpoint’s CA to set up TLS protocol. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.tlsKey

Other endpoint’s CA private key. Do not put this in nix-store. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>

## services.cfssl.tlsRemoteCa

CAs to trust for remote TLS requests. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/cfssl.nix>
