---
module: services.sogo
option_count: 7
source: options.html
---

# services.sogo

## services.sogo.enable

Whether to enable SOGo groupware. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/sogo.nix>

## services.sogo.configReplaces

Replacement-filepath mapping for sogo.conf. Every key is replaced with the contents of the file specified as value. In the example, every occurrence of LDAP_BINDPW will be replaced with the text of the specified file. Type: attribute set of string Default: { } Example: { LDAP_BINDPW = "/var/lib/secrets/sogo/ldappw"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/sogo.nix>

## services.sogo.ealarmsCredFile

Optional path to a credentials file for email alarms Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/sogo.nix>

## services.sogo.extraConfig

Extra sogo.conf configuration lines Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/sogo.nix>

## services.sogo.language

Language of SOGo Type: string Default: "English" Declared by: <nixpkgs/nixos/modules/services/web-apps/sogo.nix>

## services.sogo.timezone

Timezone of your SOGo instance Type: string Example: "America/Montreal" Declared by: <nixpkgs/nixos/modules/services/web-apps/sogo.nix>

## services.sogo.vhostName

Name of the nginx vhost Type: string Default: "sogo" Declared by: <nixpkgs/nixos/modules/services/web-apps/sogo.nix>
