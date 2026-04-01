---
module: services.outline
option_count: 31
source: options.html
---

# services.outline

## services.outline.enable

Whether to enable outline. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.enableUpdateCheck

Have the installation check for updates by sending anonymized statistics to the maintainers. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.package

Outline package to use. Type: package Default: pkgs.outline Example: pkgs.outline.overrideAttrs (super: { # Ignore the domain part in emails that come from OIDC. This is might # be helpful if you want multiple users with different email providers # to still land in the same team. Note that this effectively makes # Outline a single-team instance. patchPhase = '' sed -i 's/const domain = parts\.length && parts\[1\];/const domain = "example.com";/g' plugins/oidc/server/auth/oidc.ts ''; }) Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.azureAuthentication

To configure Microsoft/Azure auth, you’ll need to create an OAuth Client. See the guide for details on setting up your Azure App. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.cdnUrl

If using a Cloudfront/Cloudflare distribution or similar it can be set using this option. This will cause paths to JavaScript files, stylesheets and images to be updated to the hostname defined here. In your CDN configuration the origin server should be set to public URL. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.concurrency

How many processes should be spawned. For a rough estimate, divide your server’s available memory by 512. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.databaseUrl

URI to use for the main PostgreSQL database. If this needs to include credentials that shouldn’t be world-readable in the Nix store, set an environment file on the systemd service and override the DATABASE_URL entry. Pass the string local to setup a database on the local server. Type: string Default: "local" Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.debugOutput

Set this to http log HTTP requests. Type: null or value “http” (singular enum) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.defaultLanguage

The default interface language. See translate.getoutline.com for a list of available language codes and their rough percentage translated. Type: one of “da_DK”, “de_DE”, “en_US”, “es_ES”, “fa_IR”, “fr_FR”, “it_IT”, “ja_JP”, “ko_KR”, “nl_NL”, “pl_PL”, “pt_BR”, “pt_PT”, “ru_RU”, “sv_SE”, “th_TH”, “vi_VN”, “zh_CN”, “zh_TW” Default: "en_US" Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.discordAuthentication

To configure Discord auth, you’ll need to create an application at https://discord.com/developers/applications/ See https://docs.getoutline.com/s/hosting/doc/discord-g4JdWFFub6 for details on setting up your Discord app. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.forceHttps

Auto-redirect to HTTPS in production. The default is true but you may set this to false if you can be sure that SSL is terminated at an external loadbalancer. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.googleAnalyticsId

Optionally enable Google Analytics to track page views in the knowledge base. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.googleAuthentication

To configure Google auth, you’ll need to create an OAuth Client ID at https://console.cloud.google.com/apis/credentials When configuring the Client ID, add an Authorized redirect URI to https://[publicUrl]/auth/google.callback. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.group

Group under which the service should run. If this is the default value, the group will be created. Type: string Default: "outline" Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.logo

Custom logo displayed on the authentication screen. This will be scaled to a height of 60px. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.maximumImportSize

The maximum size of document imports. Overriding this could be required if you have especially large Word documents with embedded imagery. Type: signed integer Default: 5120000 Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.oidcAuthentication

To configure generic OIDC auth, you’ll need some kind of identity provider. See the documentation for whichever IdP you use to fill out all the fields. The redirect URL is https://[publicUrl]/auth/oidc.callback. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.port

Listening port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.publicUrl

The fully qualified, publicly accessible URL Type: string Default: "http://localhost:3000" Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.redisUrl

Connection to a redis server. If this needs to include credentials that shouldn’t be world-readable in the Nix store, set an environment file on the systemd service and override the REDIS_URL entry. Pass the string local to setup a local Redis database. Type: string Default: "local" Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.secretKeyFile

File path that contains the application secret key. It must be 32 bytes long and hex-encoded. If the file does not exist, a new key will be generated and saved here. Type: string Default: "/var/lib/outline/secret_key" Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.sentryDsn

Optionally enable Sentry to track errors and performance. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.sentryTunnel

Optionally add a Sentry proxy tunnel for bypassing ad blockers in the UI. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.slackAuthentication

To configure Slack auth, you’ll need to create an Application at https://api.slack.com/apps When configuring the Client ID, add a redirect URL under “OAuth & Permissions” to https://[publicUrl]/auth/slack.callback. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.slackIntegration

For a complete Slack integration with search and posting to channels this configuration is also needed. See here for details: https://wiki.generaloutline.com/share/be25efd1-b3ef-4450-b8e5-c4a4fc11e02a Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.smtp

To support sending outgoing transactional emails such as “document updated” or “you’ve been invited” you’ll need to provide authentication for an SMTP server. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.sslCertFile

File path that contains the Base64-encoded certificate for HTTPS termination. This is only required if you do not use an external reverse proxy. See the documentation. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.sslKeyFile

File path that contains the Base64-encoded private key for HTTPS termination. This is only required if you do not use an external reverse proxy. See the documentation. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.storage

To support uploading of images for avatars and document attachments an s3-compatible storage can be provided. AWS S3 is recommended for redundancy however if you want to keep all file storage local an alternative such as minio can be used. Local filesystem storage can also be used. A more detailed guide on setting up storage is available here. Type: submodule Example: { accessKey = "..."; secretKeyFile = "/somewhere"; uploadBucketUrl = "https://minio.example.com"; uploadBucketName = "outline"; region = "us-east-1"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.user

User under which the service should run. If this is the default value, the user will be created, with the specified group as the primary group. Type: string Default: "outline" Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.utilsSecretFile

File path that contains the utility secret key. If the file does not exist, a new key will be generated and saved here. Type: string Default: "/var/lib/outline/utils_secret" Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>
