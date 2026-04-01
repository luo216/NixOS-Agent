---
module: services.canaille
option_count: 7
source: options.html
---

# services.canaille

## services.canaille.enable

Whether to enable Canaille. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/canaille.nix>

## services.canaille.package

The canaille package to use. Type: package Default: pkgs.canaille Declared by: <nixpkgs/nixos/modules/services/security/canaille.nix>

## services.canaille.jwtPrivateKeyFile

File containing the JWT private key. Make sure it has appropriate permissions. You can generate one using openssl genrsa -out private.pem 4096 openssl rsa -in private.pem -pubout -outform PEM -out public.pem Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/canaille.nix>

## services.canaille.ldapBindPasswordFile

File containing the LDAP bind password. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/canaille.nix>

## services.canaille.secretKeyFile

File containing the Flask secret key. Its content is going to be provided to Canaille as SECRET_KEY. Make sure it has appropriate permissions. For example, copy the output of this to the specified file: python3 -c 'import secrets; print(secrets.token_hex())' Type: absolute path Declared by: <nixpkgs/nixos/modules/services/security/canaille.nix>

## services.canaille.settings

Settings for Canaille. See the documentation for details. Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/security/canaille.nix>

## services.canaille.smtpPasswordFile

File containing the SMTP password. Make sure it has appropriate permissions. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/canaille.nix>
