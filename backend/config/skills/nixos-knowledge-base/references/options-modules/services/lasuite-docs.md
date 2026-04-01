---
module: services.lasuite-docs
option_count: 10
source: options.html
---

# services.lasuite-docs

## services.lasuite-docs.enable

Whether to enable SuiteNumérique Docs. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.enableNginx

Whether to enable enable and configure Nginx for reverse proxying. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.backendPackage

The lasuite-docs package to use. Type: package Default: pkgs.lasuite-docs Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.bind

The path, host/port or file descriptior to bind the gunicorn socket to. See https://docs.gunicorn.org/en/stable/settings.html#bind for possible options. Type: string Default: "unix:/run/lasuite-docs/gunicorn.sock" Example: "127.0.0.1:8000" Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.domain

Domain name of the docs instance. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.environmentFile

Path to environment file. This can be useful to pass secrets to docs via tools like agenix or sops. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.frontendPackage

The lasuite-docs-frontend package to use. Type: package Default: pkgs.lasuite-docs-frontend Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.s3Url

URL of the S3 bucket. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.secretKeyPath

Path to the Django secret key. The key can be generated using: python3 -c 'import secrets; print(secrets.token_hex())' If not set, the secret key will be automatically generated. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.settings

Configuration options of docs. See https://github.com/suitenumerique/docs/blob/v4.4.0/docs/env.md REDIS_URL and CELERY_BROKER_URL are set if services.lasuite-docs.redis.createLocally is true. DB_HOST is set if services.lasuite-docs.postgresql.createLocally is true. Type: open submodule of attribute set of (null or string or boolean or absolute path or signed integer) Default: { } Example: '' { DJANGO_ALLOWED_HOSTS = "*"; } '' Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>
