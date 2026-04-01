---
module: services.outline.storage
option_count: 11
source: options.html
---

# services.outline.storage

## services.outline.storage.accelerateUrl

URL for AWS S3 transfer acceleration. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.storage.accessKey

S3 access key. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.storage.acl

ACL setting. Type: string Default: "private" Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.storage.forcePathStyle

Force S3 path style. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.storage.localRootDir

If storageType is local, this sets the parent directory under which all attachments/images go. Type: string Default: "/var/lib/outline/data" Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.storage.region

AWS S3 region name. Type: string Default: "xx-xxxx-x" Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.storage.secretKeyFile

File path that contains the S3 secret key. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.storage.storageType

File storage type, it can be local or s3. Type: one of “local”, “s3” Default: "s3" Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.storage.uploadBucketName

Name of the bucket where uploads should be stored. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.storage.uploadBucketUrl

URL endpoint of an S3-compatible API where uploads should be stored. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.storage.uploadMaxSize

Maxmium file size for uploads. Type: signed integer Default: 26214400 Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>
