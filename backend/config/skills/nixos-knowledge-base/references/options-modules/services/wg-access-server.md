---
module: services.wg-access-server
option_count: 4
source: options.html
---

# services.wg-access-server

## services.wg-access-server.enable

Whether to enable wg-access-server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/wg-access-server.nix>

## services.wg-access-server.package

The wg-access-server package to use. Type: package Default: pkgs.wg-access-server Declared by: <nixpkgs/nixos/modules/services/networking/wg-access-server.nix>

## services.wg-access-server.secretsFile

yaml file containing all secrets. this needs to be in the same structure as the configuration. This must to contain the admin password and wireguard private key. As well as the secrets for your auth backend. Example: adminPassword: <admin password> wireguard: privateKey: <wireguard private key> auth: oidc: clientSecret: <client secret> Type: absolute path Declared by: <nixpkgs/nixos/modules/services/networking/wg-access-server.nix>

## services.wg-access-server.settings

See https://www.freie-netze.org/wg-access-server/2-configuration/ for possible options Type: open submodule of (YAML 1.1 value) Declared by: <nixpkgs/nixos/modules/services/networking/wg-access-server.nix>
