---
module: services.oncall
option_count: 4
source: options.html
---

# services.oncall

## services.oncall.enable

Whether to enable Oncall web app. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/oncall.nix>

## services.oncall.package

The oncall package to use. Type: package Default: pkgs.oncall Declared by: <nixpkgs/nixos/modules/services/web-apps/oncall.nix>

## services.oncall.secretFile

A YAML file containing secrets such as database or user passwords. Some variables that can be considered secrets are: db.conn.kwargs.password: Password used to authenticate to the database. session.encrypt_key: Key for encrypting/signing session cookies. Change to random long values in production. session.sign_key: Key for encrypting/signing session cookies. Change to random long values in production. Type: absolute path not in the Nix store Example: "/run/keys/oncall-dbpassword" Declared by: <nixpkgs/nixos/modules/services/web-apps/oncall.nix>

## services.oncall.settings

Extra configuration options to append or override. For available and default option values see upstream configuration file and the administration part in the offical documentation. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/oncall.nix>
