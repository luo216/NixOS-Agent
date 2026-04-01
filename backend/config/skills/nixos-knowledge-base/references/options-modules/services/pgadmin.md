---
module: services.pgadmin
option_count: 8
source: options.html
---

# services.pgadmin

## services.pgadmin.enable

Whether to enable PostgreSQL Admin 4. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/admin/pgadmin.nix>

## services.pgadmin.package

The pgadmin4 package to use. Type: package Default: pkgs.pgadmin4 Declared by: <nixpkgs/nixos/modules/services/admin/pgadmin.nix>

## services.pgadmin.initialEmail

Initial email for the pgAdmin account Type: string Declared by: <nixpkgs/nixos/modules/services/admin/pgadmin.nix>

## services.pgadmin.initialPasswordFile

Initial password file for the pgAdmin account. Minimum length by default is 6. Please see services.pgadmin.minimumPasswordLength. NOTE: Should be string not a store path, to prevent the password from being world readable Type: absolute path Declared by: <nixpkgs/nixos/modules/services/admin/pgadmin.nix>

## services.pgadmin.minimumPasswordLength

Minimum length of the password Type: signed integer Default: 6 Declared by: <nixpkgs/nixos/modules/services/admin/pgadmin.nix>

## services.pgadmin.openFirewall

Whether to enable firewall passthrough for pgadmin4. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/admin/pgadmin.nix>

## services.pgadmin.port

Port for pgadmin4 to run on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5050 Declared by: <nixpkgs/nixos/modules/services/admin/pgadmin.nix>

## services.pgadmin.settings

Settings for pgadmin4. Documentation Type: attribute set of ((attribute set of ((list of (signed integer or boolean or string)) or attribute set of (signed integer or boolean or string) or signed integer or boolean or string)) or list of ((list of (signed integer or boolean or string)) or attribute set of (signed integer or boolean or string) or signed integer or boolean or string) or (list of (signed integer or boolean or string)) or attribute set of (signed integer or boolean or string) or signed integer or boolean or string) Default: { } Declared by: <nixpkgs/nixos/modules/services/admin/pgadmin.nix>
