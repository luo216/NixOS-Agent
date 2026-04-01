---
module: services.vault
option_count: 14
source: options.html
---

# services.vault

## services.vault.enable

Whether to enable Vault daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/vault.nix>

## services.vault.package

The vault package to use. Type: package Default: pkgs.vault Declared by: <nixpkgs/nixos/modules/services/security/vault.nix>

## services.vault.address

The name of the ip interface to listen to Type: string Default: "127.0.0.1:8200" Declared by: <nixpkgs/nixos/modules/services/security/vault.nix>

## services.vault.dev

In this mode, Vault runs in-memory and starts unsealed. This option is not meant production but for development and testing i.e. for nixos tests. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/vault.nix>

## services.vault.devRootTokenID

Initial root token. This only applies when services.vault.dev is true Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/vault.nix>

## services.vault.extraConfig

Extra text appended to vault.hcl. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/security/vault.nix>

## services.vault.extraSettingsPaths

Configuration files to load besides the immutable one defined by the NixOS module. This can be used to avoid putting credentials in the Nix store, which can be read by any user. Each path can point to a JSON- or HCL-formatted file, or a directory to be scanned for files with .hcl or .json extensions. To upload the confidential file with NixOps, use for example: # https://releases.nixos.org/nixops/latest/manual/manual.html#opt-deployment.keys deployment.keys."vault.hcl" = let db = import ./db-credentials.nix; in { text = '' storage "postgresql" { connection_url = "postgres://${db.username}:${db.password}@host.example.com/exampledb?sslmode=verify-ca" } ''; user = "vault"; }; services.vault.extraSettingsPaths = ["/run/keys/vault.hcl"]; services.vault.storageBackend = "postgresql"; users.users.vault.extraGroups = ["keys"]; Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/vault.nix>

## services.vault.listenerExtraConfig

Extra text appended to the listener section. Type: strings concatenated with “\n” Default: '' tls_min_version = "tls12" '' Declared by: <nixpkgs/nixos/modules/services/security/vault.nix>

## services.vault.storageBackend

The name of the type of storage backend Type: one of “inmem”, “file”, “consul”, “zookeeper”, “s3”, “azure”, “dynamodb”, “etcd”, “mssql”, “mysql”, “postgresql”, “swift”, “gcs”, “raft” Default: "inmem" Declared by: <nixpkgs/nixos/modules/services/security/vault.nix>

## services.vault.storageConfig

HCL configuration to insert in the storageBackend section. Confidential values should not be specified here because this option’s value is written to the Nix store, which is publicly readable. Provide credentials and such in a separate file using services.vault.extraSettingsPaths. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/security/vault.nix>

## services.vault.storagePath

Data directory for file backend Type: null or absolute path Default: if config.services.vault.storageBackend == "file" || cfg.storageBackend == "raft" then "/var/lib/vault" else null Declared by: <nixpkgs/nixos/modules/services/security/vault.nix>

## services.vault.telemetryConfig

Telemetry configuration Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/security/vault.nix>

## services.vault.tlsCertFile

TLS certificate file. TLS will be disabled unless this option is set Type: null or string Default: null Example: "/path/to/your/cert.pem" Declared by: <nixpkgs/nixos/modules/services/security/vault.nix>

## services.vault.tlsKeyFile

TLS private key file. TLS will be disabled unless this option is set Type: null or string Default: null Example: "/path/to/your/key.pem" Declared by: <nixpkgs/nixos/modules/services/security/vault.nix>
