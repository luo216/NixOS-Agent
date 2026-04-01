---
module: services.hedgedoc.settings
option_count: 11
source: options.html
---

# services.hedgedoc.settings

## services.hedgedoc.settings.allowGravatar

Whether to enable Libravatar as profile picture source on your instance. Despite the naming of the setting, Hedgedoc replaced Gravatar with Libravatar in CodiMD 1.4.0 Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/hedgedoc.nix>

## services.hedgedoc.settings.allowOrigin

List of domains to whitelist. Type: list of string Default: with config.services.hedgedoc.settings; [ host ] ++ lib.optionals (domain != null) [ domain ] Example: [ "localhost" "hedgedoc.org" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/hedgedoc.nix>

## services.hedgedoc.settings.db

Specify the configuration for sequelize. HedgeDoc supports mysql, postgres, sqlite and mssql. See https://sequelize.readthedocs.io/en/v3/ for more information. Note The relevant parts will be overriden if you set dbURL. Type: attribute set Default: { dialect = "sqlite"; storage = "/var/lib/hedgedoc/db.sqlite"; } Example: db = { username = "hedgedoc"; database = "hedgedoc"; host = "localhost:5432"; # or via socket # host = "/run/postgresql"; dialect = "postgresql"; }; Declared by: <nixpkgs/nixos/modules/services/web-apps/hedgedoc.nix>

## services.hedgedoc.settings.domain

Domain to use for website. This is useful if you are trying to run hedgedoc behind a reverse proxy. Type: null or string Default: null Example: "hedgedoc.org" Declared by: <nixpkgs/nixos/modules/services/web-apps/hedgedoc.nix>

## services.hedgedoc.settings.host

Address to listen on. Type: null or string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/hedgedoc.nix>

## services.hedgedoc.settings.path

Path to UNIX domain socket to listen on Note If specified, host and port will be ignored. Type: null or absolute path Default: null Example: "/run/hedgedoc/hedgedoc.sock" Declared by: <nixpkgs/nixos/modules/services/web-apps/hedgedoc.nix>

## services.hedgedoc.settings.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Example: 80 Declared by: <nixpkgs/nixos/modules/services/web-apps/hedgedoc.nix>

## services.hedgedoc.settings.protocolUseSSL

Use https:// for all links. This is useful if you are trying to run hedgedoc behind a reverse proxy. Note Only applied if domain is set. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/hedgedoc.nix>

## services.hedgedoc.settings.uploadsPath

Directory for storing uploaded images. Type: absolute path Default: "/var/lib/hedgedoc/uploads" Declared by: <nixpkgs/nixos/modules/services/web-apps/hedgedoc.nix>

## services.hedgedoc.settings.urlPath

URL path for the website. This is useful if you are hosting hedgedoc on a path like www.example.com/hedgedoc Type: null or string Default: null Example: "hedgedoc" Declared by: <nixpkgs/nixos/modules/services/web-apps/hedgedoc.nix>

## services.hedgedoc.settings.useSSL

Enable to use SSL server. Note This will also enable protocolUseSSL. It will also require you to set the following: sslKeyPath sslCertPath sslCAPath dhParamPath Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/hedgedoc.nix>
