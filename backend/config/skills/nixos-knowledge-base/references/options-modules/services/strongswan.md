---
module: services.strongswan
option_count: 7
source: options.html
---

# services.strongswan

## services.strongswan.enable

Whether to enable strongSwan. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/strongswan.nix>

## services.strongswan.enabledPlugins

A list of additional plugins to enable if managePlugins is true. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/strongswan.nix>

## services.strongswan.ca

A set of CAs (certification authorities) and their options for the ‘ca xxx’ sections of the ipsec.conf file. Type: attribute set of attribute set of string Default: { } Example: { strongswan = { auto = "add"; cacert = "/run/keys/strongswanCert.pem"; crluri = "http://crl2.strongswan.org/strongswan.crl"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan.nix>

## services.strongswan.connections

A set of connections and their options for the ‘conn xxx’ sections of the ipsec.conf file. Type: attribute set of attribute set of string Default: { } Example: { "%default" = { keyexchange = "ikev2"; keyingtries = "1"; }; roadwarrior = { auto = "add"; leftcert = "/run/keys/moonCert.pem"; leftid = "@moon.strongswan.org"; leftsubnet = "10.1.0.0/16"; right = "%any"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan.nix>

## services.strongswan.managePlugins

If set to true, this option will disable automatic plugin loading and then tell strongSwan to enable the plugins specified in the enabledPlugins option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/strongswan.nix>

## services.strongswan.secrets

A list of paths to IPSec secret files. These files will be included into the main ipsec.secrets file with the include directive. It is safer if these paths are absolute. Type: list of string Default: [ ] Example: [ "/run/keys/ipsec-foo.secret" ] Declared by: <nixpkgs/nixos/modules/services/networking/strongswan.nix>

## services.strongswan.setup

A set of options for the ‘config setup’ section of the ipsec.conf file. Defines general configuration parameters. Type: attribute set of string Default: { } Example: { cachecrls = "yes"; strictcrlpolicy = "yes"; } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan.nix>
