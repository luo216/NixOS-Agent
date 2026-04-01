---
module: services.ircdHybrid
option_count: 9
source: options.html
---

# services.ircdHybrid

## services.ircdHybrid.enable

Whether to enable IRCD. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ircd-hybrid/default.nix>

## services.ircdHybrid.adminEmail

IRCD server administrator e-mail. Type: string Default: "<bit-bucket@example.com>" Example: "<name@domain.tld>" Declared by: <nixpkgs/nixos/modules/services/networking/ircd-hybrid/default.nix>

## services.ircdHybrid.certificate

IRCD server SSL certificate. There are some limitations - read manual. Type: null or absolute path Default: null Example: /root/certificates/irc.pem Declared by: <nixpkgs/nixos/modules/services/networking/ircd-hybrid/default.nix>

## services.ircdHybrid.description

IRCD server description. Type: string Default: "Hybrid-7 IRC server." Declared by: <nixpkgs/nixos/modules/services/networking/ircd-hybrid/default.nix>

## services.ircdHybrid.extraIPs

Extra IP’s to bind. Type: list of string Default: [ ] Example: [ "127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/ircd-hybrid/default.nix>

## services.ircdHybrid.extraPort

Extra port to avoid filtering. Type: string Default: "7117" Declared by: <nixpkgs/nixos/modules/services/networking/ircd-hybrid/default.nix>

## services.ircdHybrid.rsaKey

IRCD server RSA key. Type: null or absolute path Default: null Example: /root/certificates/irc.key Declared by: <nixpkgs/nixos/modules/services/networking/ircd-hybrid/default.nix>

## services.ircdHybrid.serverName

IRCD server name. Type: string Default: "hades.arpa" Declared by: <nixpkgs/nixos/modules/services/networking/ircd-hybrid/default.nix>

## services.ircdHybrid.sid

IRCD server unique ID in a net of servers. Type: string Default: "0NL" Declared by: <nixpkgs/nixos/modules/services/networking/ircd-hybrid/default.nix>
