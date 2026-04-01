---
module: services.umami.settings
option_count: 10
source: options.html
---

# services.umami.settings

## services.umami.settings.APP_SECRET_FILE

A file containing a secure random string. This is used for signing user sessions. The contents of the file are read through systemd credentials, therefore the user running umami does not need permissions to read the file. If you wish to set this to a string instead (not recommended since it will be placed world-readable in the Nix store), you can use the APP_SECRET option. Type: null or string Default: null Example: "/run/secrets/umamiAppSecret" Declared by: <nixpkgs/nixos/modules/services/web-apps/umami.nix>

## services.umami.settings.BASE_PATH

Allows you to host Umami under a subdirectory. You may need to update your reverse proxy settings to correctly handle the BASE_PATH prefix. Type: string Default: "" Example: "/analytics" Declared by: <nixpkgs/nixos/modules/services/web-apps/umami.nix>

## services.umami.settings.COLLECT_API_ENDPOINT

Allows you to send metrics to a location different than the default /api/send. Type: null or string Default: null Example: "/api/alternate-send" Declared by: <nixpkgs/nixos/modules/services/web-apps/umami.nix>

## services.umami.settings.DATABASE_URL

Connection string for the database. Must start with postgresql:// or postgres://. Type: null or string Default: if config.services.umami.createPostgresqlDatabase then "postgresql://umami@localhost/umami?host=/run/postgresql" else null Example: "postgresql://root:root@localhost/umami" Declared by: <nixpkgs/nixos/modules/services/web-apps/umami.nix>

## services.umami.settings.DATABASE_URL_FILE

A file containing a connection string for the database. The connection string must start with postgresql:// or postgres://. The contents of the file are read through systemd credentials, therefore the user running umami does not need permissions to read the file. Type: null or string Default: null Example: "/run/secrets/umamiDatabaseUrl" Declared by: <nixpkgs/nixos/modules/services/web-apps/umami.nix>

## services.umami.settings.DISABLE_TELEMETRY

Umami collects completely anonymous telemetry data in order help improve the application. You can choose to disable this if you don’t want to participate. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/umami.nix>

## services.umami.settings.DISABLE_UPDATES

Disables the check for new versions of Umami. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/web-apps/umami.nix>

## services.umami.settings.HOSTNAME

The address to listen on. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/web-apps/umami.nix>

## services.umami.settings.PORT

The port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Example: 3010 Declared by: <nixpkgs/nixos/modules/services/web-apps/umami.nix>

## services.umami.settings.TRACKER_SCRIPT_NAME

Allows you to assign a custom name to the tracker script different from the default script.js. Type: list of string Default: [ ] Example: [ "tracker.js" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/umami.nix>
