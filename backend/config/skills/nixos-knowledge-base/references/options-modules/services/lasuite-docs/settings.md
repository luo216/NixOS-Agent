---
module: services.lasuite-docs.settings
option_count: 8
source: options.html
---

# services.lasuite-docs.settings

## services.lasuite-docs.settings.CELERY_BROKER_URL

URL of the redis backend for celery Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.settings.DATA_DIR

Path to the data directory Type: absolute path Default: "/var/lib/lasuite-docs" Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.settings.DB_HOST

Host of the database Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.settings.DB_NAME

Name of the database Type: string Default: "lasuite-docs" Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.settings.DB_USER

User of the database Type: string Default: "lasuite-docs" Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.settings.DJANGO_ALLOWED_HOSTS

Comma-separated list of hosts that are able to connect to the server Type: string Default: if cfg.enableNginx then "localhost,127.0.0.1,${cfg.domain}" else "" Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.settings.DJANGO_SECRET_KEY_FILE

The path to the file containing Django’s secret key Type: absolute path Default: "/var/lib/lasuite-docs/django_secret_key" Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.settings.REDIS_URL

URL of the redis backend Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>
