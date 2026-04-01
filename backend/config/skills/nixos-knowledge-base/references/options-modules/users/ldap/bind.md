---
module: users.ldap.bind
option_count: 4
source: options.html
---

# users.ldap.bind

## users.ldap.bind.distinguishedName

The distinguished name to bind to the LDAP server with. If this is not specified, an anonymous bind will be done. Type: string Default: "" Example: "cn=admin,dc=example,dc=com" Declared by: <nixpkgs/nixos/modules/config/ldap.nix>

## users.ldap.bind.passwordFile

The path to a file containing the credentials to use when binding to the LDAP server (if not binding anonymously). Type: string Default: "/etc/ldap/bind.password" Declared by: <nixpkgs/nixos/modules/config/ldap.nix>

## users.ldap.bind.policy

Specifies the policy to use for reconnecting to an unavailable LDAP server. The default is hard_open, which reconnects if opening the connection to the directory server failed. By contrast, hard_init reconnects if initializing the connection failed. Initializing may not actually contact the directory server, and it is possible that a malformed configuration file will trigger reconnection. If soft is specified, then nss_ldap will return immediately on server failure. All hard reconnect policies block with exponential backoff before retrying. Type: one of “hard_open”, “hard_init”, “soft” Default: "hard_open" Declared by: <nixpkgs/nixos/modules/config/ldap.nix>

## users.ldap.bind.timeLimit

Specifies the time limit (in seconds) to use when connecting to the directory server. This is distinct from the time limit specified in users.ldap.timeLimit and affects the initial server connection only. Type: signed integer Default: 30 Declared by: <nixpkgs/nixos/modules/config/ldap.nix>
