---
module: services.authelia.instances.<name>.secrets
option_count: 6
source: options.html
---

# services.authelia.instances.<name>.secrets

## services.authelia.instances.<name>.secrets.jwtSecretFile

Path to your JWT secret used during identity verificaton. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>

## services.authelia.instances.<name>.secrets.manual

Configuring authelia’s secret files via the secrets attribute set is intended to be convenient and help catch cases where values are required to run at all. If a user wants to set these values themselves and bypass the validation they can set this value to true. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>

## services.authelia.instances.<name>.secrets.oidcHmacSecretFile

Path to your HMAC secret used to sign OIDC JWTs. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>

## services.authelia.instances.<name>.secrets.oidcIssuerPrivateKeyFile

Path to your private key file used to encrypt OIDC JWTs. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>

## services.authelia.instances.<name>.secrets.sessionSecretFile

Path to your session secret. Only used when redis is used as session storage. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>

## services.authelia.instances.<name>.secrets.storageEncryptionKeyFile

Path to your storage encryption key. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>
