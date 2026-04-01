---
module: services.neo4j.ssl.policies.<name>
option_count: 10
source: options.html
---

# services.neo4j.ssl.policies.<name>

## services.neo4j.ssl.policies.<name>.allowKeyGeneration

Allows the generation of a private key and associated self-signed certificate. Only performed when both objects cannot be found for this policy. It is recommended to turn this off again after keys have been generated. The public certificate is required to be duplicated to the directory holding trusted certificates as defined by the trustedDir option. Keys should in general be generated and distributed offline by a trusted certificate authority and not by utilizing this mode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.ssl.policies.<name>.baseDirectory

The mandatory base directory for cryptographic objects of this policy. This path is only automatically generated when this option as well as directories.certificates are left at their default. Ensure read/write permissions are given to the Neo4j daemon user neo4j. It is also possible to override each individual configuration with absolute paths. See the privateKey and publicCertificate policy options. Type: absolute path Default: "${config.services.neo4j.directories.certificates}/${name}" Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.ssl.policies.<name>.ciphers

Restrict the allowed ciphers of this policy to those defined here. The default ciphers are those of the JVM platform. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.ssl.policies.<name>.clientAuth

The client authentication stance for this policy. Type: one of “NONE”, “OPTIONAL”, “REQUIRE” Default: "REQUIRE" Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.ssl.policies.<name>.privateKey

The name of private PKCS #8 key file for this policy to be found in the baseDirectory, or the absolute path to the key file. It is mandatory that a key can be found or generated. Type: string Default: "private.key" Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.ssl.policies.<name>.publicCertificate

The name of public X.509 certificate (chain) file in PEM format for this policy to be found in the baseDirectory, or the absolute path to the certificate file. It is mandatory that a certificate can be found or generated. The public certificate is required to be duplicated to the directory holding trusted certificates as defined by the trustedDir option. Type: string Default: "public.crt" Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.ssl.policies.<name>.revokedDir

Path to directory of CRLs (Certificate Revocation Lists) in PEM format. Must be an absolute path. The existence of this directory is mandatory and will need to be created manually when: setting this option to something other than its default; setting either this policy’s baseDirectory or directories.certificates to something other than their default. Ensure read/write permissions are given to the Neo4j daemon user neo4j. Type: absolute path Default: "${config.services.neo4j.ssl.policies.<name>.baseDirectory}/revoked" Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.ssl.policies.<name>.tlsVersions

Restrict the TLS protocol versions of this policy to those defined here. Type: list of string Default: [ "TLSv1.2" ] Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.ssl.policies.<name>.trustAll

Makes this policy trust all remote parties. Enabling this is not recommended and the policy’s trusted directory will be ignored. Use of this mode is discouraged. It would offer encryption but no security. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>

## services.neo4j.ssl.policies.<name>.trustedDir

Path to directory of X.509 certificates in PEM format for trusted parties. Must be an absolute path. The existence of this directory is mandatory and will need to be created manually when: setting this option to something other than its default; setting either this policy’s baseDirectory or directories.certificates to something other than their default. Ensure read/write permissions are given to the Neo4j daemon user neo4j. The public certificate as defined by publicCertificate is required to be duplicated to this directory. Type: absolute path Default: "${config.services.neo4j.ssl.policies.<name>.baseDirectory}/trusted" Declared by: <nixpkgs/nixos/modules/services/databases/neo4j.nix>
