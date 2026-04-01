---
module: services.pgbackrest
option_count: 4
source: options.html
---

# services.pgbackrest

## services.pgbackrest.enable

Whether to enable pgBackRest. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/pgbackrest.nix>

## services.pgbackrest.repos

An attribute set of repositories as described in: https://pgbackrest.org/configuration.html#section-repository Each repository defaults to set repo-host to the attribute’s name. The special value “localhost” will unset repo-host. Note The prefix repoNNN- is added automatically. Example: Use path instead of repo1-path. Type: attribute set of (open submodule of attribute set of (boolean or (unsigned integer, meaning >=0) or string or attribute set of string or list of string)) Default: { } Example: { localhost.path = "/var/lib/backup"; "backup.example.com".host-type = "tls"; } Declared by: <nixpkgs/nixos/modules/services/backup/pgbackrest.nix>

## services.pgbackrest.settings

An attribute set of options as described in: https://pgbackrest.org/configuration.html All globally available options, i.e. all except stanza options, can be used. Repository options should be set via repos instead. Type: open submodule of attribute set of (boolean or (unsigned integer, meaning >=0) or string or attribute set of string or list of string) Default: { } Example: { process-max = 2; } Declared by: <nixpkgs/nixos/modules/services/backup/pgbackrest.nix>

## services.pgbackrest.stanzas

An attribute set of stanzas as described in: https://pgbackrest.org/user-guide.html#quickstart/configure-stanza Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/backup/pgbackrest.nix>
