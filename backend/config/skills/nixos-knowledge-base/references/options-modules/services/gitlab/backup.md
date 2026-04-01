---
module: services.gitlab.backup
option_count: 5
source: options.html
---

# services.gitlab.backup

## services.gitlab.backup.keepTime

How long to keep the backups around, in hours. 0 means “keep forever”. Type: signed integer Default: 0 Example: 48 Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.backup.path

GitLab path for backups. Type: string Default: config.services.gitlab.statePath + "/backup" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.backup.skip

Directories to exclude from the backup. The example excludes CI artifacts and LFS objects from the backups. The tar option skips the creation of a tar file. Refer to https://docs.gitlab.com/ee/raketasks/backup_restore.html#excluding-specific-directories-from-the-backup for more information. Type: one of “db”, “uploads”, “builds”, “artifacts”, “lfs”, “registry”, “pages”, “repositories”, “tar” or list of (one of “db”, “uploads”, “builds”, “artifacts”, “lfs”, “registry”, “pages”, “repositories”, “tar”) Default: [ ] Example: [ "artifacts" "lfs" ] Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.backup.startAt

The time(s) to run automatic backup of GitLab state. Specified in systemd’s time format; see systemd.time(7). Type: string or list of string Default: [ ] Example: "03:00" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.backup.uploadOptions

GitLab automatic upload specification. Tells GitLab to upload the backup to a remote location when done. Attributes specified here are added under production -> backup -> upload in config/gitlab.yml. Type: attribute set Default: { } Example: { # Fog storage connection settings, see http://fog.io/storage/ connection = { provider = "AWS"; region = "eu-north-1"; aws_access_key_id = "AKIAXXXXXXXXXXXXXXXX"; aws_secret_access_key = { _secret = config.deployment.keys.aws_access_key.path; }; }; # The remote 'directory' to store your backups in. # For S3, this would be the bucket name. remote_directory = "my-gitlab-backups"; # Use multipart uploads when file size reaches 100MB, see # http://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html multipart_chunk_size = 104857600; # Turns on AWS Server-Side Encryption with Amazon S3-Managed Keys for backups, this is optional encryption = "AES256"; # Specifies Amazon S3 storage class to use for backups, this is optional storage_class = "STANDARD"; }; Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>
