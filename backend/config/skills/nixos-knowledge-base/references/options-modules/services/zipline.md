---
module: services.zipline
option_count: 4
source: options.html
---

# services.zipline

## services.zipline.enable

Whether to enable Zipline. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/zipline.nix>

## services.zipline.package

The zipline package to use. Type: package Default: pkgs.zipline Declared by: <nixpkgs/nixos/modules/services/web-apps/zipline.nix>

## services.zipline.environmentFiles

Files to load environment variables from (in addition to services.zipline.settings). This is useful to avoid putting secrets into the nix store. See https://zipline.diced.sh/docs/config for more information. Type: list of absolute path Default: [ ] Example: [ "/run/secrets/zipline.env" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/zipline.nix>

## services.zipline.settings

Configuration of Zipline. See https://zipline.diced.sh/docs/config for more information. Type: open submodule of attribute set of (string or signed integer) Default: { } Example: { CORE_HOSTNAME = "0.0.0.0"; CORE_PORT = "3000"; CORE_SECRET = "changethis"; DATABASE_URL = "postgres://postgres:postgres@postgres/postgres"; DATASOURCE_LOCAL_DIRECTORY = "/var/lib/zipline/uploads"; DATASOURCE_TYPE = "local"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/zipline.nix>
