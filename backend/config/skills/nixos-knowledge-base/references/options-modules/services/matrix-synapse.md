---
module: services.matrix-synapse
option_count: 15
source: options.html
---

# services.matrix-synapse

## services.matrix-synapse.enable

Whether to enable matrix.org synapse, the reference homeserver. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.enableRegistrationScript

Whether to install the register_new_matrix_user script, that allows account creation on the terminal. Note This script does not work when the client listener uses UNIX domain sockets Type: boolean Default: '' Enabled if the client listener uses TCP sockets '' Example: false Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.package

Reference to the matrix-synapse wrapper with all extras (e.g. for oidc or saml2) added to the PYTHONPATH of all executables. This option is useful to reference the “final” matrix-synapse package that’s actually used by matrix-synapse.service. For instance, when using workers, it’s possible to run ${config.services.matrix-synapse.package}/bin/synapse_worker and no additional PYTHONPATH needs to be specified for extras or plugins configured via services.matrix-synapse. However, this means that this option is supposed to be only declared by the services.matrix-synapse module itself and is thus read-only. In order to modify matrix-synapse itself, use an overlay to override pkgs.matrix-synapse-unwrapped. Type: package (read only) Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.configFile

Path to the configuration file on the target system. Useful to configure e.g. workers that also need this. Type: absolute path (read only) Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.configureRedisLocally

Whether to automatically configure a local redis server for matrix-synapse. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.dataDir

The directory where matrix-synapse stores its stateful data such as certificates, media and uploads. Type: string Default: "/var/lib/matrix-synapse" Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.extraArgs

Extra command lines argument that are passed to synapse and workers. Type: list of string Default: [ ] Example: [ "--no-secrets-in-config" ] Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.extraConfigFiles

Extra config files to include. The configuration files will be included based on the command line argument --config-path. This allows to configure secrets without having to go through the Nix store, e.g. based on deployment keys if NixOps is in use. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.extras

Explicitly install extras provided by matrix-synapse. Most will require some additional configuration. Extras will automatically be enabled, when the relevant configuration sections are present. Please note that this option is additive: i.e. when adding a new item to this list, the defaults are still kept. To override the defaults as well, use lib.mkForce. Type: list of (one of “cache-memory”, “jwt”, “oidc”, “postgres”, “redis”, “saml2”, “sentry”, “systemd”, “url-preview”) Default: [ "systemd" "postgres" "url-preview" ] Example: [ "cache-memory" # Provide statistics about caching memory consumption "jwt" # JSON Web Token authentication "oidc" # OpenID Connect authentication "postgres" # PostgreSQL database backend "redis" # Redis support for the replication stream between worker processes "saml2" # SAML2 authentication "sentry" # Error tracking and performance metrics "systemd" # Provide the JournalHandler used in the default log_config "url-preview" # Support for oEmbed URL previews ] Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.log

Default configuration for the loggers used by matrix-synapse and its workers. The defaults are added with the default priority which means that these will be merged with additional declarations. These additional declarations also take precedence over the defaults when declared with at least normal priority. For instance the log-level for synapse and its workers can be changed like this: { lib, ... }: { services.matrix-synapse.log.root.level = "WARNING"; } And another field can be added like this: { services.matrix-synapse.log = { loggers."synapse.http.matrixfederationclient".level = "DEBUG"; }; } Additionally, the field handlers.journal.SYSLOG_IDENTIFIER will be added to each log config, i.e. synapse for matrix-synapse.service synapse-<worker name> for matrix-synapse-worker-<worker name>.service This is only done if this option has a handlers.journal field declared. To discard all settings declared by this option for each worker and synapse, lib.mkForce can be used. To discard all settings declared by this option for a single worker or synapse only, services.matrix-synapse.workers.<name>.worker_log_config or services.matrix-synapse.settings.log_config can be used. Type: attribute set of (YAML 1.1 value) Default: { disable_existing_loggers = false; formatters = { journal_fmt = { format = "%(name)s: [%(request)s] %(message)s"; }; }; handlers = { journal = { class = "systemd.journal.JournalHandler"; formatter = "journal_fmt"; }; }; root = { handlers = [ "journal" ]; level = "INFO"; }; version = 1; } Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.plugins

List of additional Matrix plugins to make available. Type: list of package Default: [ ] Example: with config.services.matrix-synapse.package.plugins; [ matrix-synapse-ldap3 matrix-synapse-pam ]; Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.serviceUnit

The systemd unit (a service or a target) for other services to depend on if they need to be started after matrix-synapse. This option is useful as the actual parent unit for all matrix-synapse processes changes when configuring workers. Type: string (read only) Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings

The primary synapse configuration. See the sample configuration for possible values. Secrets should be passed in by using the extraConfigFiles option. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.withJemalloc

Whether to preload jemalloc to reduce memory fragmentation and overall usage. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.workers

Options for configuring workers. Worker support will be enabled if at least one worker is configured here. See the worker documention for possible options for each worker. Worker-specific options overriding the shared homeserver configuration can be specified here for each worker. Note Worker support will add a replication listener on port 9093 to the main synapse process using the default value of services.matrix-synapse.settings.listeners and configure that listener as services.matrix-synapse.settings.instance_map.main. If you set either of those options, make sure to configure a replication listener yourself. A redis server is required for running workers. A local one can be enabled using services.matrix-synapse.configureRedisLocally. Workers also require a proper reverse proxy setup to direct incoming requests to the appropriate process. See the reverse proxy documentation for a general reverse proxying setup and the worker documentation for the available endpoints per worker application. Type: attribute set of (open submodule of (YAML 1.1 value)) Default: { } Example: { "federation_sender" = { }; "federation_receiver" = { worker_listeners = [ { type = "http"; port = 8009; bind_addresses = [ "127.0.0.1" ]; tls = false; x_forwarded = true; resources = [{ names = [ "federation" ]; }]; } ]; }; } Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>
