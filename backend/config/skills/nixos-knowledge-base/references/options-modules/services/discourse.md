---
module: services.discourse
option_count: 12
source: options.html
---

# services.discourse

## services.discourse.enable

Whether to enable Discourse, an open source discussion platform. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.enableACME

Whether an ACME certificate should be used to secure connections to the server. Type: boolean Default: true, unless services.discourse.sslCertificate and services.discourse.sslCertificateKey are set. Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.package

The discourse package to use. Type: package Default: pkgs.discourse Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.backendSettings

Additional settings to put in the discourse.conf file. Look in the discourse_defaults.conf file in the upstream distribution to find available options. Setting an option to null means “define variable, but leave right-hand side empty”. Type: attribute set of (null or string or signed integer or boolean or floating point number) Default: { } Example: { max_reqs_per_ip_per_minute = 300; max_reqs_per_ip_per_10_seconds = 60; max_asset_reqs_per_ip_per_10_seconds = 250; max_reqs_per_ip_mode = "warn+block"; }; Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.hostname

The hostname to serve Discourse on. Type: string Default: config.networking.fqdnOrHostName Example: "discourse.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.plugins

Plugins to install as part of Discourse, expressed as a list of derivations. Type: list of package Default: [ ] Example: with config.services.discourse.package.plugins; [ discourse-canned-replies discourse-github ]; Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.secretKeyBaseFile

The path to a file containing the secret_key_base secret. Discourse uses secret_key_base to encrypt the cookie store, which contains session data, and to digest user auth tokens. Needs to be a 64 byte long string of hexadecimal characters. You can generate one by running openssl rand -hex 64 >/path/to/secret_key_base_file This should be a string, not a nix path, since nix paths are copied into the world-readable nix store. Type: null or absolute path Default: null Example: "/run/keys/secret_key_base" Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.sidekiqProcesses

How many Sidekiq processes should be spawned. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.siteSettings

Discourse site settings. These are the settings that can be changed from the UI. This only defines their default values: they can still be overridden from the UI. Available settings can be found by looking in the site_settings.yml file of the upstream distribution. To find a setting’s path, you only need to care about the first two levels; i.e. its category and name. See the example. Settings containing secret data should be set to an attribute set containing the attribute _secret - a string pointing to a file containing the value the option should be set to. See the example to get a better picture of this: in the resulting config/nixos_site_settings.json file, the login.github_client_secret key will be set to the contents of the /run/keys/discourse_github_client_secret file. Type: JSON value Default: { } Example: { required = { title = "My Cats"; site_description = "Discuss My Cats (and be nice plz)"; }; login = { enable_github_logins = true; github_client_id = "a2f6dfe838cb3206ce20"; github_client_secret._secret = /run/keys/discourse_github_client_secret; }; }; Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.sslCertificate

The path to the server SSL certificate. Set this to enable SSL. Type: null or absolute path Default: null Example: "/run/keys/ssl.cert" Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.sslCertificateKey

The path to the server SSL certificate key. Set this to enable SSL. Type: null or absolute path Default: null Example: "/run/keys/ssl.key" Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.unicornTimeout

Time in seconds before a request to Unicorn times out. This can be raised if the system Discourse is running on is too slow to handle many requests within 30 seconds. Type: signed integer Default: 30 Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>
