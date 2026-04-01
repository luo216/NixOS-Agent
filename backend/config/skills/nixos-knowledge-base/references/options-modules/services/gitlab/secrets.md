---
module: services.gitlab.secrets
option_count: 7
source: options.html
---

# services.gitlab.secrets

## services.gitlab.secrets.activeRecordDeterministicKeyFile

A file containing the secret used to encrypt some rails data in a deterministic way in the DB. This should not be the same as services.gitlab.secrets.activeRecordPrimaryKeyFile! Make sure the secret is at ideally 32 characters and all random, no regular words or you’ll be exposed to dictionary attacks. This should be a string, not a nix path, since nix paths are copied into the world-readable nix store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.secrets.activeRecordPrimaryKeyFile

A file containing the secret used to encrypt some rails data in the DB. This should not be the same as services.gitlab.secrets.activeRecordDeterministicKeyFile! Make sure the secret is at ideally 32 characters and all random, no regular words or you’ll be exposed to dictionary attacks. This should be a string, not a nix path, since nix paths are copied into the world-readable nix store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.secrets.activeRecordSaltFile

A file containing the salt for active record encryption in the DB. Make sure the secret is at ideally 32 characters and all random, no regular words or you’ll be exposed to dictionary attacks. This should be a string, not a nix path, since nix paths are copied into the world-readable nix store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.secrets.dbFile

A file containing the secret used to encrypt variables in the DB. If you change or lose this key you will be unable to access variables stored in database. Make sure the secret is at least 32 characters and all random, no regular words or you’ll be exposed to dictionary attacks. This should be a string, not a nix path, since nix paths are copied into the world-readable nix store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.secrets.jwsFile

A file containing the secret used to encrypt session keys. If you change or lose this key, users will be disconnected. Make sure the secret is an RSA private key in PEM format. You can generate one with openssl genrsa 2048 This should be a string, not a nix path, since nix paths are copied into the world-readable nix store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.secrets.otpFile

A file containing the secret used to encrypt secrets for OTP tokens. If you change or lose this key, users which have 2FA enabled for login won’t be able to login anymore. Make sure the secret is at least 32 characters and all random, no regular words or you’ll be exposed to dictionary attacks. This should be a string, not a nix path, since nix paths are copied into the world-readable nix store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.secrets.secretFile

A file containing the secret used to encrypt variables in the DB. If you change or lose this key you will be unable to access variables stored in database. Make sure the secret is at least 32 characters and all random, no regular words or you’ll be exposed to dictionary attacks. This should be a string, not a nix path, since nix paths are copied into the world-readable nix store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>
