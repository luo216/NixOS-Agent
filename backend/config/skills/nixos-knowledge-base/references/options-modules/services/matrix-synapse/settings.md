---
module: services.matrix-synapse.settings
option_count: 26
source: options.html
---

# services.matrix-synapse.settings

## services.matrix-synapse.settings.enable_metrics

Enable collection and rendering of performance metrics Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.enable_registration

Enable registration for new users. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.app_service_config_files

A list of application service config file to use Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.dynamic_thumbnails

Whether to generate new thumbnails on the fly to precisely match the resolution requested by the client. If true then whenever a new resolution is requested by the client the server will generate a new thumbnail. If false the server will pick a thumbnail from a precalculated list. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.listeners

List of ports that Synapse should listen on, their purpose and their configuration. By default, synapse will be configured for client and federation traffic on port 8008, and use a UNIX domain socket for worker replication. See services.matrix-synapse.workers for more details. Type: list of (submodule) Default: [ { bind_addresses = [ "127.0.0.1" ]; port = 8008; resources = [ { compress = true; names = [ "client" ]; } { compress = false; names = [ "federation" ]; } ]; tls = false; type = "http"; x_forwarded = true; } ] Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.log_config

The file that holds the logging configuration. Type: absolute path Default: Path to a yaml file generated from this Nix expression: { disable_existing_loggers = false; formatters = { journal_fmt = { format = "%(name)s: [%(request)s] %(message)s"; }; }; handlers = { journal = { SYSLOG_IDENTIFIER = "synapse"; class = "systemd.journal.JournalHandler"; formatter = "journal_fmt"; }; }; root = { handlers = [ "journal" ]; level = "INFO"; }; version = 1; } Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.macaroon_secret_key

Secret key for authentication tokens. If none is specified, the registration_shared_secret is used, if one is given; otherwise, a secret key is derived from the signing key. Secrets should be passed in via extraConfigFiles! Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.max_image_pixels

Maximum number of pixels that will be thumbnailed Type: string Default: "32M" Example: "64M" Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.max_upload_size

The largest allowed upload size in bytes Type: string Default: "50M" Example: "100M" Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.media_store_path

Directory where uploaded images and attachments are stored. Type: absolute path Default: "/var/lib/matrix-synapse/media_store for when system.stateVersion is at least 22.05, /var/lib/matrix-synapse/media when lower than 22.05" Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.pid_file

The file to store the PID in. Type: absolute path (read only) Default: "/run/matrix-synapse.pid" Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.public_baseurl

The public-facing base URL for the client API (not including _matrix/…) Type: null or string Default: null Example: "https://example.com:8448/" Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.redis

Redis configuration for synapse. See the upstream documentation for available options. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.registration_shared_secret

If set, allows registration by anyone who also has the shared secret, even if registration is otherwise disabled. Secrets should be passed in via extraConfigFiles! Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.report_stats

Whether or not to report anonymized homeserver usage statistics. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.server_name

The domain name of the server, with optional explicit port. This is used by remote servers to look up the server address. This is also the last part of your UserID. The server_name cannot be changed later so it is important to configure this correctly before you start Synapse. Type: string Default: config.networking.hostName Example: "example.com" Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.signing_key_path

Path to the signing key to sign messages with. Type: absolute path Default: "/var/lib/matrix-synapse/homeserver.signing.key" Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.tls_certificate_path

PEM encoded X509 certificate for TLS. You can replace the self-signed certificate that synapse autogenerates on launch with your own SSL certificate + key pair if you like. Any required intermediary certificates can be appended after the primary certificate in hierarchical order. Type: null or string Default: null Example: "/var/lib/acme/example.com/fullchain.pem" Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.tls_private_key_path

PEM encoded private key for TLS. Specify null if synapse is not speaking TLS directly. Type: null or string Default: null Example: "/var/lib/acme/example.com/key.pem" Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.trusted_key_servers

The trusted servers to download signing keys from. Type: list of (open submodule of (YAML 1.1 value)) Default: [ { server_name = "matrix.org"; verify_keys = { "ed25519:auto" = "Noi6WqcDj0QmPxCNQqgezwTlBKrfqehY1u2FyWP9uYw"; }; } ] Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.turn_shared_secret

The shared secret used to compute passwords for the TURN server. Secrets should be passed in via extraConfigFiles! Type: string Default: "" Example: config.services.coturn.static-auth-secret Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.turn_uris

The public URIs of the TURN server to give to clients Type: list of string Default: [ ] Example: [ "turn:turn.example.com:3487?transport=udp" "turn:turn.example.com:3487?transport=tcp" "turns:turn.example.com:5349?transport=udp" "turns:turn.example.com:5349?transport=tcp" ] Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.url_preview_enabled

Is the preview URL API enabled? If enabled, you must specify an explicit url_preview_ip_range_blacklist of IPs that the spider is denied from accessing. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.url_preview_ip_range_blacklist

List of IP address CIDR ranges that the URL preview spider is denied from accessing. Type: list of string Default: [ "10.0.0.0/8" "100.64.0.0/10" "127.0.0.0/8" "169.254.0.0/16" "172.16.0.0/12" "192.0.0.0/24" "192.0.2.0/24" "192.168.0.0/16" "192.88.99.0/24" "198.18.0.0/15" "198.51.100.0/24" "2001:db8::/32" "203.0.113.0/24" "224.0.0.0/4" "::1/128" "fc00::/7" "fe80::/10" "fec0::/10" "ff00::/8" ] Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.url_preview_ip_range_whitelist

List of IP address CIDR ranges that the URL preview spider is allowed to access even if they are specified in url_preview_ip_range_blacklist. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.url_preview_url_blacklist

Optional list of URL matches that the URL preview spider is denied from accessing. Type: list of ((attribute set of string) or string convertible to it) Default: [ ] Example: [ { scheme = "http"; } # no http previews { netloc = "www.acme.com"; path = "/foo"; } # block http(s)://www.acme.com/foo ] Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>
