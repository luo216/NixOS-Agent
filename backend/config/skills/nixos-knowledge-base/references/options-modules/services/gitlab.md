---
module: services.gitlab
option_count: 21
source: options.html
---

# services.gitlab

## services.gitlab.enable

Enable the gitlab service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.databaseCreateLocally

Whether a database should be automatically created on the local host. Set this to false if you plan on provisioning a local database yourself. This has no effect if services.gitlab.databaseHost is customized. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.databaseHost

GitLab database hostname. An empty string means “use local unix socket connection”. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.databaseName

GitLab database name. Type: string Default: "gitlab" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.databasePasswordFile

File containing the GitLab database user password. This should be a string, not a nix path, since nix paths are copied into the world-readable nix store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.databasePool

Database connection pool size. Type: signed integer Default: 5 Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.databaseUsername

GitLab database user. Type: string Default: "gitlab" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.extraConfig

Extra options to be added under production in config/gitlab.yml, as a nix attribute set. Options containing secret data should be set to an attribute set containing the attribute _secret - a string pointing to a file containing the value the option should be set to. See the example to get a better picture of this: in the resulting config/gitlab.yml file, the production.omniauth.providers[0].args.client_options.secret key will be set to the contents of the /var/keys/gitlab_oidc_secret file. Type: YAML 1.1 value Default: { } Example: { gitlab = { default_projects_features = { builds = false; }; }; omniauth = { enabled = true; auto_sign_in_with_provider = "openid_connect"; allow_single_sign_on = ["openid_connect"]; block_auto_created_users = false; providers = [ { name = "openid_connect"; label = "OpenID Connect"; args = { name = "openid_connect"; scope = ["openid" "profile"]; response_type = "code"; issuer = "https://keycloak.example.com/auth/realms/My%20Realm"; discovery = true; client_auth_method = "query"; uid_field = "preferred_username"; client_options = { identifier = "gitlab"; secret = { _secret = "/var/keys/gitlab_oidc_secret"; }; redirect_uri = "https://git.example.com/users/auth/openid_connect/callback"; }; }; } ]; }; }; Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.extraDatabaseConfig

Extra configuration in config/database.yml. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.extraEnv

Additional environment variables for the GitLab environment. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.extraGitlabRb

Extra configuration to be placed in config/extra-gitlab.rb. This can be used to add configuration not otherwise exposed through this module’s options. Type: string Default: "" Example: '' if Rails.env.production? Rails.application.config.action_mailer.delivery_method = :sendmail ActionMailer::Base.delivery_method = :sendmail ActionMailer::Base.sendmail_settings = { location: "/run/wrappers/bin/sendmail", arguments: "-i -t" } end '' Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.extraShellConfig

Extra configuration to merge into shell-config.yml Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.group

Group to run gitlab and all related services. Type: string Default: "gitlab" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.host

GitLab host name. Used e.g. for copy-paste URLs. Type: string Default: config.networking.hostName Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.https

Whether gitlab prints URLs with https as scheme. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.initialRootEmail

Initial email address of the root account if this is a new install. Type: string Default: "admin@local.host" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.initialRootPasswordFile

File containing the initial password of the root account if this is a new install. This should be a string, not a nix path, since nix paths are copied into the world-readable nix store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.port

GitLab server port for copy-paste URLs, e.g. 80 or 443 if you’re service over https. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.redisUrl

Redis URL for all GitLab services. Type: string Default: "unix:/run/gitlab/redis.sock" Example: "redis://localhost:6379/" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.statePath

GitLab state directory. Configuration, repositories and logs, among other things, are stored here. The directory will be created automatically if it doesn’t exist already. Its parent directories must be owned by either root or the user set in services.gitlab.user. Type: string Default: "/var/gitlab/state" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.user

User to run gitlab and all related services. Type: string Default: "gitlab" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>
