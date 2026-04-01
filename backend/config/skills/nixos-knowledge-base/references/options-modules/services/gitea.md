---
module: services.gitea
option_count: 15
source: options.html
---

# services.gitea

## services.gitea.enable

Enable Gitea Service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.package

The gitea package to use. Type: package Default: pkgs.gitea Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.appName

Application name. Type: string Default: "gitea: Gitea Service" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.camoHmacKeyFile

Path to a file containing the camo HMAC key. Type: null or string Default: null Example: "/var/lib/secrets/gitea/camoHmacKey" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.customDir

Gitea custom directory. Used for config, custom templates and other options. Type: string Default: "${config.services.gitea.stateDir}/custom" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.extraConfig

Configuration lines appended to the generated gitea configuration file. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.group

Group under which gitea runs. Type: string Default: "gitea" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.mailerPasswordFile

Path to a file containing the SMTP password. Type: null or string Default: null Example: "/var/lib/secrets/gitea/mailpw" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.metricsTokenFile

Path to a file containing the metrics authentication token. Type: null or string Default: null Example: "/var/lib/secrets/gitea/metrics_token" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.minioAccessKeyId

Path to a file containing the Minio access key id. Type: null or string Default: null Example: "/var/lib/secrets/gitea/minio_access_key_id" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.minioSecretAccessKey

Path to a file containing the Minio secret access key. Type: null or string Default: null Example: "/var/lib/secrets/gitea/minio_secret_access_key" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.repositoryRoot

Path to the git repositories. Type: string Default: "${config.services.gitea.stateDir}/repositories" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.settings

Gitea configuration. Refer to https://docs.gitea.io/en-us/config-cheat-sheet/ for details on supported values. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { "cron.sync_external_users" = { RUN_AT_START = true; SCHEDULE = "@every 24h"; UPDATE_EXISTING = true; }; mailer = { ENABLED = true; PROTOCOL = "smtp+starttls"; SMTP_ADDR = "smtp.example.org"; SMTP_PORT = "587"; FROM = "Gitea Service <do-not-reply@example.org>"; USER = "do-not-reply@example.org"; }; other = { SHOW_FOOTER_VERSION = false; }; } Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.stateDir

Gitea data directory. Type: string Default: "/var/lib/gitea" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.user

User account under which gitea runs. Type: string Default: "gitea" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>
