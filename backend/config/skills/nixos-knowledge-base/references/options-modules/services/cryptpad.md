---
module: services.cryptpad
option_count: 4
source: options.html
---

# services.cryptpad

## services.cryptpad.enable

Whether to enable cryptpad. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/cryptpad.nix>

## services.cryptpad.package

The cryptpad package to use. Type: package Default: pkgs.cryptpad Declared by: <nixpkgs/nixos/modules/services/web-apps/cryptpad.nix>

## services.cryptpad.configureNginx

Configure Nginx as a reverse proxy for Cryptpad. Note that this makes some assumptions on your setup, and sets settings that will affect other virtualHosts running on your Nginx instance, if any. Alternatively you can configure a reverse-proxy of your choice. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/cryptpad.nix>

## services.cryptpad.settings

Cryptpad configuration settings. See https://github.com/cryptpad/cryptpad/blob/main/config/config.example.js for a more extensive reference documentation. Test your deployed instance through https://<domain>/checkup/. Type: open submodule of (JSON value) Declared by: <nixpkgs/nixos/modules/services/web-apps/cryptpad.nix>
