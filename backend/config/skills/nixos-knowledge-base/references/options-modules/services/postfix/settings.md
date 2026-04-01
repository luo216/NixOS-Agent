---
module: services.postfix.settings
option_count: 2
source: options.html
---

# services.postfix.settings

## services.postfix.settings.main

The main.cf configuration file as key value set. Null values will not be rendered. Tip Check postconf -d for the default values of all settings. Type: open submodule of attribute set of (null or boolean or signed integer or absolute path or string or list of string) Example: { mail_owner = "postfix"; smtp_tls_security_level = "may"; } Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.master

The master.cf configuration file as an attribute set of service defitions Tip Check https://www.postfix.org/master.5.html for possible settings. Type: attribute set of (submodule) Default: { } Example: { submission = { args = [ "-o" "smtpd_tls_security_level=encrypt" ]; type = "inet"; }; } Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>
