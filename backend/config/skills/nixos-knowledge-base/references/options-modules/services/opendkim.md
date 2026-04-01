---
module: services.opendkim
option_count: 9
source: options.html
---

# services.opendkim

## services.opendkim.enable

Whether to enable OpenDKIM sender authentication system. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/opendkim.nix>

## services.opendkim.configFile

Additional opendkim configuration as a file. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/mail/opendkim.nix>

## services.opendkim.domains

Local domains set (see opendkim(8) for more information on datasets). Messages from them are signed, not verified. Type: string Default: "csl:${config.networking.hostName}" Example: "csl:example.com,mydomain.net" Declared by: <nixpkgs/nixos/modules/services/mail/opendkim.nix>

## services.opendkim.group

Group for the daemon. Type: string Default: "opendkim" Declared by: <nixpkgs/nixos/modules/services/mail/opendkim.nix>

## services.opendkim.keyPath

The path that opendkim should put its generated private keys into. The DNS settings will be found in this directory with the name selector.txt. Type: absolute path Default: "/var/lib/opendkim/keys" Declared by: <nixpkgs/nixos/modules/services/mail/opendkim.nix>

## services.opendkim.selector

Selector to use when signing. Type: string Declared by: <nixpkgs/nixos/modules/services/mail/opendkim.nix>

## services.opendkim.settings

Additional opendkim configuration Type: open submodule of attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/mail/opendkim.nix>

## services.opendkim.socket

Socket which is used for communication with OpenDKIM. Type: string Default: "local:/run/opendkim/opendkim.sock" Declared by: <nixpkgs/nixos/modules/services/mail/opendkim.nix>

## services.opendkim.user

User for the daemon. Type: string Default: "opendkim" Declared by: <nixpkgs/nixos/modules/services/mail/opendkim.nix>
