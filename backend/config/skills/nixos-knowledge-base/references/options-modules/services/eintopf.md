---
module: services.eintopf
option_count: 3
source: options.html
---

# services.eintopf

## services.eintopf.enable

Whether to enable Lauti (Eintopf) community event calendar web app. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/eintopf.nix>

## services.eintopf.secrets

A list of files containing the various secrets. Should be in the format expected by systemd’s EnvironmentFile directory. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/eintopf.nix>

## services.eintopf.settings

Settings to configure web service. See https://codeberg.org/Klasse-Methode/lauti/src/branch/main/DEPLOYMENT.md for available options. Type: attribute set of string Default: { } Example: { EINTOPF_ADDR = ":1234"; EINTOPF_ADMIN_EMAIL = "admin@example.org"; EINTOPF_TIMEZONE = "Europe/Berlin"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/eintopf.nix>
