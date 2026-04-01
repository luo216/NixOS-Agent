---
module: services.peertube
option_count: 12
source: options.html
---

# services.peertube

## services.peertube.enable

Whether to enable Peertube. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.enableWebHttps

Whether clients will access your PeerTube instance with HTTPS. Does NOT configure the PeerTube webserver itself to listen for incoming HTTPS connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.package

The peertube package to use. Type: package Default: pkgs.peertube Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.configureNginx

Configure nginx as a reverse proxy for peertube. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.dataDirs

Allow access to custom data locations. Type: list of absolute path Default: [ ] Example: [ "/opt/peertube/storage" "/var/cache/peertube" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.group

Group under which Peertube runs. Type: string Default: "peertube" Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.listenHttp

The port that the local PeerTube web server will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9000 Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.listenWeb

The public-facing port that PeerTube will be accessible at (likely 80 or 443 if running behind a reverse proxy). Clients will try to access PeerTube at this port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9000 Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.localDomain

The domain serving your PeerTube instance. Type: string Example: "peertube.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.serviceEnvironmentFile

Set environment variables for the service. Mainly useful for setting the initial root password. For example write to file: PT_INITIAL_ROOT_PASSWORD=changeme Type: null or absolute path Default: null Example: "/run/keys/peertube/password-init-root" Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.settings

Configuration for peertube. Type: open submodule of (JSON value) Example: { listen = { hostname = "0.0.0.0"; }; log = { level = "debug"; }; storage = { tmp = "/opt/data/peertube/storage/tmp/"; logs = "/opt/data/peertube/storage/logs/"; cache = "/opt/data/peertube/storage/cache/"; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.user

User account under which Peertube runs. Type: string Default: "peertube" Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>
