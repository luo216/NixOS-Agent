---
module: services.kerberos_server
option_count: 3
source: options.html
---

# services.kerberos_server

## services.kerberos_server.enable

Whether to enable the kerberos authentication server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/system/kerberos/default.nix>

## services.kerberos_server.extraKDCArgs

Extra arguments to pass to the KDC process. See kdc(8). Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/system/kerberos/default.nix>

## services.kerberos_server.settings

Settings for the kerberos server of choice. See the following documentation: Heimdal: kdc.conf(5) MIT Kerberos: https://web.mit.edu/kerberos/krb5-1.21/doc/admin/conf_files/kdc_conf.html Type: open submodule of attribute set of attribute set of ((list of attribute set of ((list of (signed integer or string or boolean)) or signed integer or string or boolean)) or attribute set of ((list of (signed integer or string or boolean)) or signed integer or string or boolean) or (list of (signed integer or string or boolean)) or signed integer or string or boolean) Default: { } Declared by: <nixpkgs/nixos/modules/services/system/kerberos/default.nix>
