---
module: services.phpfpm.pools.<name>
option_count: 9
source: options.html
---

# services.phpfpm.pools.<name>

## services.phpfpm.pools.<name>.extraConfig

Extra lines that go into the pool configuration. See the documentation on php-fpm.conf for details on configuration directives. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/phpfpm/default.nix>

## services.phpfpm.pools.<name>.group

Group account under which this pool runs. Type: string Declared by: <nixpkgs/nixos/modules/services/web-servers/phpfpm/default.nix>

## services.phpfpm.pools.<name>.listen

The address on which to accept FastCGI requests. Type: string Default: "" Example: "/path/to/unix/socket" Declared by: <nixpkgs/nixos/modules/services/web-servers/phpfpm/default.nix>

## services.phpfpm.pools.<name>.phpEnv

Environment variables used for this PHP-FPM pool. Type: attribute set of string Default: { } Example: { HOSTNAME = "$HOSTNAME"; TMP = "/tmp"; TMPDIR = "/tmp"; TEMP = "/tmp"; } Declared by: <nixpkgs/nixos/modules/services/web-servers/phpfpm/default.nix>

## services.phpfpm.pools.<name>.phpOptions

“Options appended to the PHP configuration file php.ini used for this PHP-FPM pool.” Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/web-servers/phpfpm/default.nix>

## services.phpfpm.pools.<name>.phpPackage

The PHP package to use for running this PHP-FPM pool. Type: package Default: config.services.phpfpm.phpPackage Declared by: <nixpkgs/nixos/modules/services/web-servers/phpfpm/default.nix>

## services.phpfpm.pools.<name>.settings

PHP-FPM pool directives. Refer to the “List of pool directives” section of https://www.php.net/manual/en/install.fpm.configuration.php for details. Note that settings names must be enclosed in quotes (e.g. "pm.max_children" instead of pm.max_children). Type: attribute set of (string or signed integer or boolean) Default: { } Example: { "pm" = "dynamic"; "pm.max_children" = 75; "pm.start_servers" = 10; "pm.min_spare_servers" = 5; "pm.max_spare_servers" = 20; "pm.max_requests" = 500; } Declared by: <nixpkgs/nixos/modules/services/web-servers/phpfpm/default.nix>

## services.phpfpm.pools.<name>.socket

Path to the unix socket file on which to accept FastCGI requests. Note This option is read-only and managed by NixOS. Type: string (read only) Example: "/run/phpfpm/<name>.sock" Declared by: <nixpkgs/nixos/modules/services/web-servers/phpfpm/default.nix>

## services.phpfpm.pools.<name>.user

User account under which this pool runs. Type: string Declared by: <nixpkgs/nixos/modules/services/web-servers/phpfpm/default.nix>
