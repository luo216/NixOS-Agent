---
module: services.rustus.storage
option_count: 9
source: options.html
---

# services.rustus.storage

## services.rustus.storage.data_dir

path to the local directory where all files are stored Type: string Default: "/var/lib/rustus" Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>

## services.rustus.storage.dir_structure

pattern of a directory structure locally and on s3 Type: string Default: "{year}/{month}/{day}" Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>

## services.rustus.storage.force_sync

calls fsync system call after every write to disk in local storage Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>

## services.rustus.storage.s3_access_key_file

File path that contains the S3 access key. Type: string Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>

## services.rustus.storage.s3_bucket

S3 bucket. Type: string Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>

## services.rustus.storage.s3_region

S3 region name. Type: string Default: "us-east-1" Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>

## services.rustus.storage.s3_secret_key_file

File path that contains the S3 secret key. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>

## services.rustus.storage.s3_url

S3 url. Type: string Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>

## services.rustus.storage.type

Type of storage to use Type: one of “file-storage”, “hybrid-s3” Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>
