---
module: services.hedgedoc
option_count: 5
source: options.html
---

# services.hedgedoc

## services.hedgedoc.enable

Whether to enable the HedgeDoc Markdown Editor. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/hedgedoc.nix>

## services.hedgedoc.package

The hedgedoc package to use. Type: package Default: pkgs.hedgedoc Declared by: <nixpkgs/nixos/modules/services/web-apps/hedgedoc.nix>

## services.hedgedoc.configureNginx

Whether to configure nginx as a reverse proxy. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/hedgedoc.nix>

## services.hedgedoc.environmentFile

Environment file as defined in systemd.exec(5). Secrets may be passed to the service without adding them to the world-readable Nix store, by specifying placeholder variables as the option value in Nix and setting these variables accordingly in the environment file. # snippet of HedgeDoc-related config services.hedgedoc.settings.dbURL = "postgres://hedgedoc:\${DB_PASSWORD}@db-host:5432/hedgedocdb"; services.hedgedoc.settings.minio.secretKey = "$MINIO_SECRET_KEY"; # content of the environment file DB_PASSWORD=verysecretdbpassword MINIO_SECRET_KEY=verysecretminiokey Note that this file needs to be available on the host on which HedgeDoc is running. Type: null or absolute path Default: null Example: "/var/lib/hedgedoc/hedgedoc.env" Declared by: <nixpkgs/nixos/modules/services/web-apps/hedgedoc.nix>

## services.hedgedoc.settings

HedgeDoc configuration, see https://docs.hedgedoc.org/configuration/ for documentation. Type: open submodule of (JSON value) Declared by: <nixpkgs/nixos/modules/services/web-apps/hedgedoc.nix>
