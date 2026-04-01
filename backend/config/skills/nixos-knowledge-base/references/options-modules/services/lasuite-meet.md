---
module: services.lasuite-meet
option_count: 9
source: options.html
---

# services.lasuite-meet

## services.lasuite-meet.enable

Whether to enable SuiteNumérique Meet. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>

## services.lasuite-meet.enableNginx

Whether to enable enable and configure Nginx for reverse proxying. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>

## services.lasuite-meet.backendPackage

The lasuite-meet package to use. Type: package Default: pkgs.lasuite-meet Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>

## services.lasuite-meet.bind

The path, host/port or file descriptior to bind the gunicorn socket to. See https://docs.gunicorn.org/en/stable/settings.html#bind for possible options. Type: string Default: "unix:/run/lasuite-meet/gunicorn.sock" Example: "127.0.0.1:8000" Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>

## services.lasuite-meet.domain

Domain name of the meet instance. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>

## services.lasuite-meet.environmentFile

Path to environment file. This can be useful to pass secrets to meet via tools like agenix or sops. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>

## services.lasuite-meet.frontendPackage

The lasuite-meet-frontend package to use. Type: package Default: pkgs.lasuite-meet-frontend Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>

## services.lasuite-meet.secretKeyPath

Path to the Django secret key. The key can be generated using: python3 -c 'import secrets; print(secrets.token_hex())' If not set, the secret key will be automatically generated. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>

## services.lasuite-meet.settings

Configuration options of meet. See https://github.com/suitenumerique/meet/blob/v0.1.42/docs/env.md REDIS_URL and CELERY_BROKER_URL are set if services.lasuite-meet.redis.createLocally is true. DB_NAME DB_USER and DB_HOST are set if services.lasuite-meet.postgresql.createLocally is true. Type: open submodule of lazy attribute set of (null or string or boolean or absolute path or signed integer) Default: { } Example: '' { DJANGO_ALLOWED_HOSTS = "*"; } '' Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-meet.nix>
