---
module: services.fider
option_count: 5
source: options.html
---

# services.fider

## services.fider.enable

Whether to enable the Fider server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/fider.nix>

## services.fider.package

The fider package to use. Type: package Default: pkgs.fider Declared by: <nixpkgs/nixos/modules/services/web-apps/fider.nix>

## services.fider.dataDir

Default data folder for Fider. Type: string Default: "/var/lib/fider" Example: "/mnt/fider" Declared by: <nixpkgs/nixos/modules/services/web-apps/fider.nix>

## services.fider.environment

Environment variables to set for the service. Secrets should be specified using environmentFiles. Refer to https://github.com/getfider/fider/blob/stable/.example.env and https://github.com/getfider/fider/blob/stable/app/pkg/env/env.go for available options. Type: attribute set of string Default: { } Example: { BASE_URL = "https://fider.example.com"; BLOB_STORAGE = "fs"; EMAIL = "smtp"; EMAIL_NOREPLY = "fider@example.com"; EMAIL_SMTP_HOST = "mail.example.com"; EMAIL_SMTP_PORT = "587"; EMAIL_SMTP_USERNAME = "fider@example.com"; PORT = "31213"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/fider.nix>

## services.fider.environmentFiles

Files to load environment variables from. Loaded variables override values set in environment. Type: list of absolute path Default: [ ] Example: "/run/secrets/fider.env" Declared by: <nixpkgs/nixos/modules/services/web-apps/fider.nix>
