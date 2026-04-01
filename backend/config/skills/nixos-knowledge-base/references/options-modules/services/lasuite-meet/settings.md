---
module: services.lasuite-meet.settings
option_count: 9
source: options.html
---

# services.lasuite-meet.settings

## services.lasuite-meet.settings.CELERY_BROKER_URL

URL of the redis backend for celery Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>

## services.lasuite-meet.settings.DB_HOST

Host of the database Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>

## services.lasuite-meet.settings.DB_NAME

Name of the database Type: string Default: "lasuite-meet" Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>

## services.lasuite-meet.settings.DB_USER

User of the database Type: string Default: "lasuite-meet" Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>

## services.lasuite-meet.settings.DJANGO_ALLOWED_HOSTS

Comma-separated list of hosts that are able to connect to the server Type: string Default: if cfg.enableNginx then "localhost,127.0.0.1,${cfg.domain}" else "" Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>

## services.lasuite-meet.settings.DJANGO_DATA_DIR

Path to the data directory Type: absolute path Default: "/var/lib/lasuite-meet" Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>

## services.lasuite-meet.settings.DJANGO_SECRET_KEY_FILE

The path to the file containing Django’s secret key Type: absolute path Default: "/var/lib/lasuite-meet/django_secret_key" Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>

## services.lasuite-meet.settings.LIVEKIT_API_URL

URL to the livekit server Type: null or string Default: if cfg.enableNginx && cfg.livekit.enable then "http://$${cfg.domain}/livekit" else null Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>

## services.lasuite-meet.settings.REDIS_URL

URL of the redis backend Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>
