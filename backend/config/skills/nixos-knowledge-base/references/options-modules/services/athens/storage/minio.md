---
module: services.athens.storage.minio
option_count: 6
source: options.html
---

# services.athens.storage.minio

## services.athens.storage.minio.enableSSL

Enable SSL for the minio storage backend. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.storage.minio.bucket

Bucket name for the minio storage backend. Type: null or string Default: null Example: "gomods" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.storage.minio.endpoint

Endpoint of the minio storage backend. Type: null or string Default: null Example: "minio.example.com:9001" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.storage.minio.key

Access key id for the minio storage backend. Type: null or string Default: null Example: "minio" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.storage.minio.region

Region for the minio storage backend. Type: null or string Default: null Example: "us-east-1" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.storage.minio.secret

Secret key for the minio storage backend. Warning: this is stored in plain text in the config file. Type: null or string Default: null Example: "minio123" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>
