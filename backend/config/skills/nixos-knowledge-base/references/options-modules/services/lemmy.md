---
module: services.lemmy
option_count: 5
source: options.html
---

# services.lemmy

## services.lemmy.enable

Whether to enable lemmy a federated alternative to reddit in rust. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/lemmy.nix>

## services.lemmy.adminPasswordFile

File which contains the value of setup.admin_password. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/lemmy.nix>

## services.lemmy.pictrsApiKeyFile

File which contains the value of pictrs.api_key. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/lemmy.nix>

## services.lemmy.settings

Lemmy configuration Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/lemmy.nix>

## services.lemmy.smtpPasswordFile

File which contains the value of email.smtp_password. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/lemmy.nix>
