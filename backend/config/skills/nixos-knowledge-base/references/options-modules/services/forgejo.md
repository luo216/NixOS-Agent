---
module: services.forgejo
option_count: 10
source: options.html
---

# services.forgejo

## services.forgejo.enable

Whether to enable Forgejo, a software forge. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.package

The forgejo-lts package to use. Type: package Default: pkgs.forgejo-lts Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.customDir

Base directory for custom templates and other options. If services.forgejo.useWizard is disabled (default), this directory will also hold secrets and the resulting app.ini config at runtime. Type: string Default: "${config.services.forgejo.stateDir}/custom" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.group

Group under which Forgejo runs. Type: string Default: "forgejo" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.repositoryRoot

Path to the git repositories. Type: string Default: "${config.services.forgejo.stateDir}/repositories" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.secrets

This is a small wrapper over systemd’s LoadCredential. It takes the same sections and keys as services.forgejo.settings, but the value of each key is a path instead of a string or bool. The path is then loaded as credential, exported as environment variable and then feed through https://codeberg.org/forgejo/forgejo/src/branch/forgejo/contrib/environment-to-ini/environment-to-ini.go. It does the required environment variable escaping for you. Note Keys specified here take priority over the ones in services.forgejo.settings! Type: open submodule of attribute set of attribute set of absolute path Default: { } Example: { metrics = { TOKEN = "/run/keys/forgejo-metrics-token"; }; camo = { HMAC_KEY = "/run/keys/forgejo-camo-hmac"; }; service = { HCAPTCHA_SECRET = "/run/keys/forgejo-hcaptcha-secret"; HCAPTCHA_SITEKEY = "/run/keys/forgejo-hcaptcha-sitekey"; }; } Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.settings

Free-form settings written directly to the app.ini configfile file. Refer to https://forgejo.org/docs/latest/admin/config-cheat-sheet/ for supported values. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { DEFAULT = { RUN_MODE = "dev"; }; "cron.sync_external_users" = { RUN_AT_START = true; SCHEDULE = "@every 24h"; UPDATE_EXISTING = true; }; mailer = { ENABLED = true; MAILER_TYPE = "sendmail"; FROM = "do-not-reply@example.org"; SENDMAIL_PATH = "${pkgs.system-sendmail}/bin/sendmail"; }; other = { SHOW_FOOTER_VERSION = false; }; } Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.stateDir

Forgejo data directory. Type: string Default: "/var/lib/forgejo" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.useWizard

Whether to use the built-in installation wizard instead of declaratively managing the app.ini config file in nix. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.user

User account under which Forgejo runs. Type: string Default: "forgejo" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>
