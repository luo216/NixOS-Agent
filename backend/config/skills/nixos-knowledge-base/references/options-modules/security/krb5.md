---
module: security.krb5
option_count: 3
source: options.html
---

# security.krb5

## security.krb5.enable

Enable and configure Kerberos utilities Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/krb5>

## security.krb5.package

The krb5 package to use. Type: package Default: pkgs.krb5 Example: heimdal Declared by: <nixpkgs/nixos/modules/security/krb5>

## security.krb5.settings

Structured contents of the krb5.conf file. See krb5.conf(5) for details about configuration. Type: open submodule of attribute set of attribute set of ((list of attribute set of ((list of (signed integer or string or boolean)) or signed integer or string or boolean)) or attribute set of ((list of (signed integer or string or boolean)) or signed integer or string or boolean) or (list of (signed integer or string or boolean)) or signed integer or string or boolean) Default: { } Example: { domain_realm = { "mit.edu" = "ATHENA.MIT.EDU"; }; include = [ "/run/secrets/secret-krb5.conf" ]; includedir = [ "/run/secrets/secret-krb5.conf.d" ]; libdefaults = { default_realm = "ATHENA.MIT.EDU"; }; logging = { admin_server = "SYSLOG:NOTICE"; default = "SYSLOG:NOTICE"; kdc = "SYSLOG:NOTICE"; }; realms = { "ATHENA.MIT.EDU" = { admin_server = "athena.mit.edu"; kdc = [ "athena01.mit.edu" "athena02.mit.edu" ]; }; }; } Declared by: <nixpkgs/nixos/modules/security/krb5>
